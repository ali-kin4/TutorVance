import { useState, useEffect } from 'react';
import Icon from '../ui/Icon';

const navConfig = {
    student: [ { id: 'student_overview', icon: 'fa-home', label: 'Dashboard' }, { id: 'student_tools', icon: 'fa-tools', label: 'My Tools' } ],
    tutor: [ { id: 'tutor_overview', icon: 'fa-tachometer-alt', label: 'Dashboard' }, { id: 'tutor_tools', icon: 'fa-toolbox', label: 'Tutor Toolkit' } ],
    admin: [ { id: 'admin_overview', icon: 'fa-shield-alt', label: 'Platform Stats' }, { id: 'admin_tools', icon: 'fa-cogs', label: 'Admin Controls' } ]
};

const GenericView = ({ title }) => (
    <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-600">Content for this section is under construction.</p>
            <p className="text-gray-400 mt-4">Check back soon for exciting new features!</p>
        </div>
    </div>
);

const Dashboard = ({ user, onLogout, onSwitchRole, onOpenModal, children }) => {
    const [activeView, setActiveView] = useState(`${user.role}_overview`);
    const navItems = navConfig[user.role];

    useEffect(() => {
        setActiveView(`${user.role}_overview`);
    }, [user.role]);

    const renderContent = () => {
        switch (activeView) {
            case 'student_overview': return children?.studentOverview || <GenericView title="Student Dashboard" />;
            case 'student_tools': return children?.studentTools || <GenericView title="Student Tools" />;
            case 'tutor_tools': return children?.tutorTools || <GenericView title="Tutor Tools" />;
            case 'tutor_overview': return <GenericView title="Tutor Dashboard" />;
            case 'admin_overview': return <GenericView title="Platform Statistics" />;
            case 'admin_tools': return <GenericView title="Admin Controls" />;
            default: return <GenericView title="Dashboard" />;
        }
    };
    
    return (
        <section className="py-12 min-h-screen fade-in">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/4">
                        <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-28">
                            <div className="flex items-center space-x-4 mb-8">
                                <img src={user.avatar} className="rounded-full w-16 h-16 border-4 border-indigo-200" alt={user.name} />
                                <div>
                                    <h3 className="text-xl font-bold">Welcome, {user.name}!</h3>
                                    <p className="text-sm font-semibold text-indigo-500 capitalize">{user.role}</p>
                                </div>
                            </div>
                            <nav className="space-y-2">
                                {navItems.map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => setActiveView(item.id)}
                                        className={`dashboard-nav-item w-full text-left px-4 py-3 rounded-lg flex items-center space-x-4 font-semibold text-gray-700 transition-all duration-200 ${activeView === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'hover:bg-indigo-50'}`}
                                    >
                                        <Icon name={item.icon} className="w-6 text-center" />
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>
                            <hr className="my-6 border-gray-200" />
                             <div className="p-2 text-center">
                                <p className="text-xs text-gray-400 mb-2">Advertisement</p>
                                <div className="bg-gray-100 rounded-lg p-3">
                                    <img src="https://placehold.co/200x200/eab308/333333?text=Your+Ad+Here" className="w-full rounded-md" alt="Advertisement placeholder" />
                                    <p className="text-sm font-semibold mt-2">Premium Study Notes</p>
                                    <a href="#" className="text-xs text-indigo-500 hover:underline">Get Access Now!</a>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                                 <p className="text-sm font-bold mb-2 text-gray-600">Demo Controls</p>
                                 <div className="flex space-x-2">
                                     <button onClick={() => onSwitchRole('student')} className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">Student</button>
                                     <button onClick={() => onSwitchRole('tutor')} className="text-xs bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-600">Tutor</button>
                                     <button onClick={() => onSwitchRole('admin')} className="text-xs bg-gray-700 text-white px-2 py-1 rounded-md hover:bg-gray-800">Admin</button>
                                 </div>
                            </div>
                            <button onClick={onLogout} className="w-full text-left flex items-center space-x-3 mt-4 text-gray-600 hover:text-red-500 font-semibold p-3 rounded-lg hover:bg-red-50 transition-colors">
                                <Icon name="fa-sign-out-alt" className="w-6 text-center" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </aside>
                    <main className="w-full md:w-3/4">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

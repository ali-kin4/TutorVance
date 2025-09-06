const learningPathData = [
    { name: 'Introduction', completed: true },
    { name: 'Derivatives', completed: true },
    { name: 'Integrals', completed: true },
    { name: 'Sequences', active: true },
    { name: 'Series' },
    { name: 'Multivariable' }
];

const StudentOverview = () => (
    <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">Student Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg stat-card"><h4 className="text-gray-500 font-semibold">Upcoming Sessions</h4><p className="text-4xl font-bold mt-2">3</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg stat-card"><h4 className="text-gray-500 font-semibold">Courses in Progress</h4><p className="text-4xl font-bold mt-2">2</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg stat-card"><h4 className="text-gray-500 font-semibold">Achievements</h4><p className="text-4xl font-bold mt-2">12</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Calculus II Learning Path</h3>
            <div className="flex items-center justify-between overflow-x-auto py-4">
                {learningPathData.map((node, i) => (
                    <div key={i} className="path-container flex items-center">
                        <div className={`path-node w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-center p-2 border-4 bg-white ${node.completed ? 'completed' : ''} ${node.active ? 'active' : 'border-gray-300'}`}>
                            <span className="font-semibold">{node.name}</span>
                        </div>
                        {i < learningPathData.length - 1 && <div className={`path-line w-16 md:w-24 flex-grow ${node.completed ? 'completed' : ''}`}></div>}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default StudentOverview;

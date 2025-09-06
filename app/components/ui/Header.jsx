import Icon from './Icon';

const Header = ({ onLoginClick, onSignupClick, onDashboardClick, isLoggedIn }) => (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 transition-all duration-300" role="banner">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center" role="navigation" aria-label="Main navigation">
            <a href="#" className="flex items-center space-x-2" aria-label="Tutorvance Home">
                <Icon name="fa-brain" className="text-3xl text-indigo-600" aria-hidden="true" />
                <span className="text-2xl font-bold text-gray-800 tracking-wide">Tutorvance</span>
            </a>
            <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-600">
                <a href="#features" className="hover:text-indigo-600 transition-colors" aria-label="View features section">Features</a>
                <a href="#tutors" className="hover:text-indigo-600 transition-colors" aria-label="View tutors section">Tutors</a>
                <a href="#pricing" className="hover:text-indigo-600 transition-colors" aria-label="View pricing section">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <button 
                        onClick={onDashboardClick} 
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2.5 rounded-lg font-bold cta-button shadow-lg shadow-green-500/30 hover:from-green-500 hover:to-blue-600"
                        aria-label="Go to dashboard"
                    >
                        My Dashboard
                    </button>
                ) : (
                    <>
                        <button 
                            onClick={onLoginClick} 
                            className="font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
                            aria-label="Open login modal"
                        >
                            Log In
                        </button>
                        <button 
                            onClick={onSignupClick} 
                            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-bold cta-button shadow-lg shadow-indigo-500/30 hover:bg-indigo-700"
                            aria-label="Open signup modal"
                        >
                            Get Started
                        </button>
                    </>
                )}
            </div>
        </nav>
    </header>
);

export default Header;

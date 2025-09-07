import Icon from './Icon';

const Footer = () => (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center space-x-2 mb-4">
                        <Icon name="fa-brain" className="text-3xl text-indigo-600 dark:text-indigo-400" />
                        <span className="text-2xl font-bold tracking-wide">Tutorvance</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">The ultimate ecosystem for learning, connecting students and tutors seamlessly.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Features</a></li>
                        <li><a href="#tutors" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Find a Tutor</a></li>
                        <li><a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Sign Up</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-2xl"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-2xl"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <hr className="my-8 border-gray-200 dark:border-gray-700" />
            <div className="text-center text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} Tutorvance. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;

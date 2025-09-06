import Icon from '../ui/Icon';

const FeaturesSection = () => (
    <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Succeed</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tutorvance is more than just a platform; it's a complete learning environment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                    <Icon name="fa-user-friends" className="text-4xl text-indigo-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Expert Tutors</h3>
                    <p className="text-gray-600">Connect with verified experts in any subject, ready to provide personalized guidance.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                    <Icon name="fa-robot" className="text-4xl text-purple-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">AI-Powered Tools</h3>
                    <p className="text-gray-600">Utilize our smart AI assistant, quiz generators, and concept explainers to enhance your learning.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                    <Icon name="fa-chart-line" className="text-4xl text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Progress Tracking</h3>
                    <p className="text-gray-600">Follow personalized learning paths and track your progress with insightful analytics.</p>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturesSection;

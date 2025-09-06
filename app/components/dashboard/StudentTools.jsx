import Icon from '../ui/Icon';

const StudentTools = ({ onOpenModal }) => (
    <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">Student Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg tool-card cursor-pointer" onClick={() => onOpenModal('focus-mode')}><Icon name="fa-bullseye" className="text-3xl text-indigo-500 mb-4" /><h3 className="text-xl font-bold">Focus Mode</h3><p className="text-gray-600">Distraction-free deep study sessions.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg tool-card cursor-pointer" onClick={() => onOpenModal('ai-chat')}><Icon name="fa-lightbulb" className="text-3xl text-yellow-500 mb-4" /><h3 className="text-xl font-bold">AI Concept Explainer</h3><p className="text-gray-600">Simple explanations for complex topics.</p></div>
        </div>
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
            <div>
                <p className="text-sm font-semibold text-gray-500">SPONSORED</p>
                <h4 className="text-xl font-bold">Get Ahead with Chegg Study®</h4>
                <p className="text-gray-600">Expert Q&A, textbook solutions, and more.</p>
            </div>
            <a href="#" className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-bold cta-button whitespace-nowrap">Try for Free</a>
        </div>
    </div>
);

export default StudentTools;

import Icon from '../ui/Icon';

const TutorTools = ({ onOpenModal }) => (
     <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">Tutor Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg tool-card cursor-pointer" onClick={() => onOpenModal('quiz-generator')}><Icon name="fa-magic-wand-sparkles" className="text-3xl text-purple-500 mb-4" /><h3 className="text-xl font-bold">AI Quiz Generator</h3><p className="text-gray-600">Instantly create student assessments.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg tool-card"><Icon name="fa-chart-pie" className="text-3xl text-green-500 mb-4" /><h3 className="text-xl font-bold">Analytics Studio</h3><p className="text-gray-600">Deep dive into student performance.</p></div>
        </div>
    </div>
);

export default TutorTools;

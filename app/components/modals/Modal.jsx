import { useState, useEffect } from 'react';
import AIChatModal from './AIChatModal';
import FocusModeModal from './FocusModeModal';
import QuizGeneratorModal from './QuizGeneratorModal';

const LoginModal = ({ onLogin }) => (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
        <p className="text-gray-600 mb-6">Log in to continue your journey.</p>
        <input className="w-full p-3 mb-4 border-2 rounded-lg" type="email" placeholder="Email" />
        <input className="w-full p-3 mb-6 border-2 rounded-lg" type="password" placeholder="Password" />
        <button onClick={onLogin} className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold cta-button">Log In</button>
    </div>
);

const SignupModal = ({ onLogin }) => (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full text-center">
        <h2 className="text-3xl font-bold mb-2">Join Tutorvance</h2>
        <p className="text-gray-600 mb-6">Start your learning adventure today.</p>
        <input className="w-full p-3 mb-4 border-2 rounded-lg" type="text" placeholder="Full Name" />
        <input className="w-full p-3 mb-4 border-2 rounded-lg" type="email" placeholder="Email" />
        <input className="w-full p-3 mb-6 border-2 rounded-lg" type="password" placeholder="Password" />
        <button onClick={onLogin} className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold cta-button">Create Account</button>
    </div>
);

const Modal = ({ type, onClose, onLogin }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
          document.body.style.overflow = 'auto';
          document.removeEventListener('keydown', handleEscape);
      };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const renderContent = () => {
        switch (type) {
            case 'login': return <LoginModal onLogin={onLogin} />;
            case 'signup': return <SignupModal onLogin={onLogin} />;
            case 'ai-chat': return <AIChatModal />;
            case 'focus-mode': return <FocusModeModal onClose={handleClose}/>;
            case 'quiz-generator': return <QuizGeneratorModal />;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div 
                className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
                onClick={handleClose}
                aria-hidden="true"
            ></div>
            <div className={`relative z-10 w-full max-w-md p-4 transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Modal;

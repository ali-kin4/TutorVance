import { useState, useEffect } from 'react';
import Icon from '../ui/Icon';

const FocusModeModal = ({ onClose }) => {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(t => t - 1);
            }, 1000);
        } else if (time === 0) {
            // Optional: Add a sound or notification when time is up
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const progress = (25 * 60 - time) / (25 * 60) * 100;

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full text-white p-8 flex flex-col items-center justify-center text-center max-w-lg h-[80vh]">
            <h2 className="text-4xl font-bold mb-4">Focus Mode</h2><p className="text-gray-400 mb-8">Time to study. All distractions are hidden.</p>
            <div className="text-7xl font-bold mb-8">{formatTime()}</div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-8">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex space-x-4">
                <button onClick={() => setIsActive(!isActive)} className="bg-white/10 px-4 py-2 rounded-lg w-32">
                    <Icon name={isActive ? 'fa-pause' : 'fa-play'} className="mr-2" />{isActive ? 'Pause' : 'Resume'}
                </button>
                <button className="bg-red-500/80 px-4 py-2 rounded-lg w-32" onClick={onClose}>
                    <Icon name="fa-stop" className="mr-2" />End Session
                </button>
            </div>
        </div>
    );
};

export default FocusModeModal;

const GlobalStyles = () => (
    <style>{`
        html { scroll-behavior: smooth; }
        body { font-family: 'Manrope', sans-serif; background-color: #f0f2f5; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #a5b4fc; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes backgroundPan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .fade-in { animation: fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .scale-in { animation: scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .hero-gradient {
            background: linear-gradient(-45deg, #6366f1, #8b5cf6, #ec4899, #3b82f6);
            background-size: 400% 400%;
            animation: backgroundPan 15s ease infinite;
        }
        .cta-button, .tutor-card, .dashboard-nav-item, header, .tool-card {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .tutor-card:hover, .tool-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }
        .stat-card { border-left: 4px solid #6366f1; transition: all 0.2s ease-in-out; }
        .stat-card:hover { transform: scale(1.05); background-color: #ffffff; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -2px rgba(0,0,0,0.05); }
        input:focus, select:focus, textarea:focus { box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4); outline: none; }
        .path-node { transition: all 0.3s ease; }
        .path-node.completed { background-color: #4f46e5; color: white; border-color: #4f46e5; }
        .path-node.active { border-color: #fb923c; box-shadow: 0 0 15px rgba(251, 146, 60, 0.5); }
        .path-line { height: 2px; background-color: #cbd5e1; }
        .path-line.completed { background-color: #4f46e5; }
        .message-bubble { word-wrap: break-word; }
        
        .testimonial-slider .slider-track {
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
    `}</style>
);

export default GlobalStyles;

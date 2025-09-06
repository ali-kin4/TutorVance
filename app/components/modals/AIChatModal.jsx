import { useState, useEffect, useRef } from 'react';
import Icon from '../ui/Icon';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

const AIChatModal = () => {
    const [messages, setMessages] = useState([{ text: "Hello! I'm your AI assistant. Ask me anything about your studies.", sender: "ai" }]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        // Check if API key is configured
        if (!API_KEY) {
            setMessages(prev => [...prev, { 
                text: "AI Assistant is not configured. Please add your Gemini API key to the environment variables to use this feature.", 
                sender: "ai" 
            }]);
            setIsLoading(false);
            return;
        }

        try {
            const payload = { contents: [{ parts: [{ text: `You are a helpful learning assistant. Be concise. User asks: ${input}` }] }] };
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
            setMessages(prev => [...prev, { text: aiText, sender: "ai" }]);
        } catch (error) {
            console.error("AI Chat Error:", error);
            setMessages(prev => [...prev, { 
                text: "I'm having trouble connecting right now. Please check your internet connection and try again.", 
                sender: "ai" 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl w-full flex flex-col h-[70vh]">
            <div className="p-4 border-b text-center bg-gray-50 rounded-t-2xl"><h3 className="font-bold text-lg">Gemini AI Assistant</h3></div>
            <div className="flex-grow p-4 overflow-y-auto bg-gray-100 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`message-bubble p-3 rounded-lg max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800'}`}>
                           {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="p-3 rounded-lg bg-white text-gray-800">
                           <Icon name="fa-spinner fa-spin" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSend} className="p-4 border-t flex items-center space-x-2">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-3 border-2 rounded-lg" 
                    placeholder="Ask me anything..." 
                    disabled={isLoading}
                />
                <button type="submit" className="bg-indigo-600 text-white p-3 rounded-lg font-bold cta-button" disabled={isLoading}>
                    <Icon name="fa-paper-plane"/>
                </button>
            </form>
        </div>
    );
};

export default AIChatModal;

import { useState } from 'react';
import Icon from '../ui/Icon';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

const QuizGeneratorModal = () => {
    const [topic, setTopic] = useState('');
    const [quiz, setQuiz] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setIsLoading(true);
        setQuiz(null);
        setError('');

        // Check if API key is configured
        if (!API_KEY) {
            setError("Quiz Generator is not configured. Please add your Gemini API key to the environment variables to use this feature.");
            setIsLoading(false);
            return;
        }

        const prompt = `Create a multiple-choice quiz with 5 questions about the following topic: "${topic}". For each question, provide 4 options and indicate the correct answer.`;
        
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        quiz: {
                            type: "ARRAY",
                            items: {
                                type: "OBJECT",
                                properties: {
                                    question: { type: "STRING" },
                                    options: { type: "ARRAY", items: { type: "STRING" } },
                                    correctAnswer: { type: "STRING" }
                                }
                            }
                        }
                    }
                }
            }
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error("Failed to generate quiz.");

            const result = await response.json();
            const jsonText = result.candidates[0].content.parts[0].text;
            const parsedJson = JSON.parse(jsonText);
            setQuiz(parsedJson.quiz || []);
        } catch (err) {
            console.error(err);
            setError("Sorry, something went wrong while generating the quiz. Please check your internet connection and try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">AI Quiz Generator</h2>
            {!quiz && (
                 <form onSubmit={handleGenerate}>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Enter a topic or paste text to generate a quiz instantly.</p>
                    <textarea 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full p-3 mb-4 border-2 rounded-lg h-40 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white" 
                        placeholder="e.g., 'The basics of cellular respiration' or paste a block of text..."
                        disabled={isLoading}
                    ></textarea>
                    <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg font-bold cta-button" disabled={isLoading}>
                        {isLoading ? <><Icon name="fa-spinner fa-spin"/> Generating...</> : "Generate Quiz"}
                    </button>
                    {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                </form>
            )}
            {quiz && (
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quiz on: <span className="text-purple-600 dark:text-purple-400">{topic}</span></h3>
                    <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-4">
                        {quiz.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <p className="font-bold mb-2 text-gray-900 dark:text-white">{index + 1}. {item.question}</p>
                                <ul className="space-y-1 text-gray-800 dark:text-gray-200">
                                    {item.options.map((opt, i) => (
                                        <li key={i} className={`p-2 rounded ${opt === item.correctAnswer ? 'text-green-700 dark:text-green-400 font-semibold' : ''}`}>
                                            {opt} {opt === item.correctAnswer && <Icon name="fa-check" className="ml-2"/>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                     <button onClick={() => setQuiz(null)} className="w-full mt-6 bg-gray-600 text-white p-3 rounded-lg font-bold cta-button">
                        Create Another Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizGeneratorModal;

import { useState, useEffect, useRef } from 'react';
import Icon from '../ui/Icon';

const TestimonialsSection = ({ testimonialsData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((prevIndex) =>
                prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            ),
            7000 // Change slide every 7 seconds
        );
        return () => {
            resetTimeout();
        };
    }, [currentIndex, testimonialsData.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }
    
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Students Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real stories from learners who transformed their futures with us.</p>
                </div>
                <div 
                    className="testimonial-slider max-w-3xl mx-auto relative overflow-hidden"
                    onMouseEnter={() => resetTimeout()}
                >
                    <div className="slider-track flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full p-4">
                                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-200" />
                                    <p className="text-gray-600 italic text-lg mb-6">"{testimonial.quote}"</p>
                                    <h4 className="font-bold text-xl">{testimonial.name}</h4>
                                    <p className="text-indigo-500 font-semibold">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="text-center mt-8">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`inline-block h-3 w-3 rounded-full mx-2 cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

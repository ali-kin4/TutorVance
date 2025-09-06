import React, { memo } from 'react';
import Icon from '../ui/Icon';

const TutorCard = memo(({ tutor, index }) => {
    const isSponsored = tutor.sponsored;
    const priceDisplay = typeof tutor.price === 'number' ? `$${tutor.price}` : tutor.price;

    return (
        <article className="fade-in" style={{ animationDelay: `${index * 100}ms` }} role="article" aria-labelledby={`tutor-${tutor.id}-name`}>
            <div className={`tutor-card bg-white rounded-2xl overflow-hidden flex flex-col relative h-full ${isSponsored ? 'border-2 border-amber-400 shadow-amber-200/50' : 'shadow-lg'}`}>
                {isSponsored && (
                    <div className="absolute top-0 right-4 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-b-lg z-10" role="banner" aria-label="Sponsored content">
                        SPONSORED
                    </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                    <div className="text-center mb-4">
                        <img 
                            className={`w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 ${isSponsored ? 'border-amber-200' : 'border-gray-200'}`} 
                            src={tutor.avatar} 
                            alt={`Profile picture of ${tutor.name}`}
                            loading="lazy"
                        />
                        <h3 id={`tutor-${tutor.id}-name`} className="text-xl font-bold">
                            {tutor.name} 
                            {tutor.verified && (
                                <Icon 
                                    name="fa-check-circle" 
                                    className="text-blue-500 text-sm ml-1" 
                                    title="Verified Tutor"
                                    aria-label="Verified Tutor"
                                />
                            )}
                        </h3>
                        <p className="text-indigo-600 font-semibold" aria-label={`Subject: ${tutor.subject}`}>
                            {tutor.subject}
                        </p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4 mt-auto">
                        <div className="flex items-center space-x-1" aria-label={`Rating: ${tutor.rating} stars, ${tutor.lessons} lessons completed`}>
                            <Icon name="fa-star" className="text-yellow-400" aria-hidden="true" />
                            <span className="font-bold">{tutor.rating}</span>
                            <span>({tutor.lessons}+ lessons)</span>
                        </div>
                        <p className="text-xl font-bold text-gray-800" aria-label={`Price: ${priceDisplay}${typeof tutor.price === 'number' ? ' per hour' : ''}`}>
                            {priceDisplay}
                            {typeof tutor.price === 'number' && (
                                <span className="text-sm font-normal text-gray-500">/hr</span>
                            )}
                        </p>
                    </div>
                </div>
                <div className="p-4 bg-gray-50">
                    <button 
                        className={`w-full ${isSponsored ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white py-2.5 rounded-lg font-semibold cta-button`}
                        aria-label={`${isSponsored ? 'Learn more about' : 'View profile of'} ${tutor.name}, ${tutor.subject} tutor`}
                    >
                        {isSponsored ? 'Learn More' : 'View Profile'}
                    </button>
                </div>
            </div>
        </article>
    );
});

TutorCard.displayName = 'TutorCard';

export default TutorCard;

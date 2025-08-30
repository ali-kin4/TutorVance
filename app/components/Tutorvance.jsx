"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

// --- Mock Data ---
// Expanded and more realistic tutor data
const tutorsData = [
    { id: 1, name: 'Dr. Evelyn Reed', subject: 'Quantum Physics', price: 125, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop', lessons: 250 },
    { id: 2, name: 'John Carter', subject: 'AP Calculus BC', price: 65, rating: 4.8, verified: true, avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop', lessons: 450 },
    { id: 3, name: 'Maria Garcia', subject: 'Creative Writing & Poetry', price: 50, rating: 4.7, verified: true, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', lessons: 120 },
    { id: 4, name: 'Chen Wei', subject: 'Python for Data Science', price: 95, rating: 5.0, verified: true, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop', lessons: 600 },
    { id: 5, name: 'Dr. Samuel Jones', subject: 'MCAT Prep & Organic Chemistry', price: 150, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop', lessons: 800 },
    { id: 6, name: 'Aisha Khan', subject: 'Digital Marketing & SEO', price: 70, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&auto=format&fit=crop', lessons: 300 },
    { id: 7, name: 'Ben Carter', subject: 'Public Speaking & Communication', price: 60, rating: 5.0, verified: true, avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=200&auto=format&fit=crop', lessons: 150 },
    { id: 8, name: 'Chloe Lim', subject: 'UI/UX Design (Figma & Adobe XD)', price: 85, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop', lessons: 220 },
    { id: 9, name: 'David Chen', subject: 'Financial Modeling (Excel)', price: 110, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop', lessons: 400 },
    { id: 10, name: 'Emily Rodriguez', subject: 'Conversational Spanish', price: 40, rating: 5.0, verified: true, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop', lessons: 200 },
    { id: 11, name: 'Frank Miller', subject: 'US History (AP & College)', price: 55, rating: 4.8, verified: true, avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=200&auto=format&fit=crop', lessons: 350 },
    { id: 12, name: 'Grace Lee', subject: 'SAT & ACT English Prep', price: 75, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', lessons: 500 },
    { id: 13, name: 'Henry Wilson', subject: 'Introduction to Philosophy', price: 50, rating: 4.9, verified: false, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', lessons: 90 },
    { id: 14, name: 'Isabella Rossi', subject: 'Beginner\'s Italian', price: 45, rating: 5.0, verified: true, avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop', lessons: 180 },
    { id: 15, name: 'Jake Sullivan', subject: 'Guitar for Beginners', price: 35, rating: 5.0, verified: false, avatar: 'https://images.unsplash.com/photo-1549417229-aa67d5869543?q=80&w=200&auto=format&fit=crop', lessons: 110 },
    { id: 16, name: 'Dr. Kenji Tanaka', subject: 'Japanese Language (JLPT N5-N3)', price: 65, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', lessons: 400 },
    { id: 17, name: 'Dr. Laura Evans', subject: 'Biology & Anatomy', price: 70, rating: 4.8, verified: true, avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop', lessons: 300 },
    { id: 18, name: 'Michael Brown', subject: 'LSAT Analytical Reasoning', price: 130, rating: 5.0, verified: true, avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&auto=format&fit=crop', lessons: 600 },
    { id: 19, name: 'Noah Patel', subject: 'React & Frontend Development', price: 90, rating: 4.9, verified: true, avatar: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=200&auto=format&fit=crop', lessons: 350 },
    { id: 20, name: 'Olivia Kim', subject: 'Digital Art with Procreate', price: 55, rating: 5.0, verified: false, avatar: 'https://images.unsplash.com/photo-1596641320831-5a12f5793779?q=80&w=200&auto=format&fit=crop', lessons: 150 },
    { id: 21, name: 'Pro Tutoring Inc.', subject: 'Corporate Training', price: 'Custom', rating: 5.0, verified: true, avatar: 'https://placehold.co/100x100/f59e0b/ffffff?text=Ad', lessons: 999, sponsored: true },
    { id: 22, name: 'Study Corp.', subject: 'Test Prep Solutions', price: 'View', rating: 5.0, verified: true, avatar: 'https://placehold.co/100x100/10b981/ffffff?text=Ad', lessons: 999, sponsored: true },
];

const testimonialsData = [
    {
        quote: "Tutorvance completely changed how I approach my studies. My tutor, John, didn't just help me pass calculus; he taught me how to think critically about it. The AI tools are a lifesaver for late-night study sessions!",
        name: "Sarah Johnson",
        role: "University Student",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "As a parent, finding a trustworthy and effective tutoring platform was crucial. The progress tracking and verified tutors gave me peace of mind. My son's confidence in chemistry has skyrocketed.",
        name: "David Chen",
        role: "Parent",
        avatar: "https://images.unsplash.com/photo-1522529599102-4b3244c75057?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "I've tried other platforms, but the ecosystem here is unparalleled. I can generate quizzes on the fly for my students and use the analytics to pinpoint exactly where they're struggling. It's a game-changer for my workflow.",
        name: "Aisha Khan",
        role: "Tutor",
        avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=200&auto=format&fit=crop"
    }
];

const learningPathData = [ { name: 'Introduction', completed: true }, { name: 'Derivatives', completed: true }, { name: 'Integrals', completed: true }, { name: 'Sequences', active: true }, { name: 'Series' }, { name: 'Multivariable' } ];

const navConfig = {
    student: [ { id: 'student_overview', icon: 'fa-home', label: 'Dashboard' }, { id: 'student_tools', icon: 'fa-tools', label: 'My Tools' } ],
    tutor: [ { id: 'tutor_overview', icon: 'fa-tachometer-alt', label: 'Dashboard' }, { id: 'tutor_tools', icon: 'fa-toolbox', label: 'Tutor Toolkit' } ],
    admin: [ { id: 'admin_overview', icon: 'fa-shield-alt', label: 'Platform Stats' }, { id: 'admin_tools', icon: 'fa-cogs', label: 'Admin Controls' } ]
};

const users = {
    student: { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', role: 'student' },
    tutor: { name: 'Dr. Reed', avatar: tutorsData[0].avatar, role: 'tutor' },
    admin: { name: 'Admin', avatar: 'https://placehold.co/100x100/4338ca/ffffff?text=AD', role: 'admin' },
};

// --- API Configuration ---
const API_KEY = ""; // Keep this empty. It will be replaced by the environment.
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

// --- Reusable Components ---
const Icon = ({ name, className = '' }) => <i className={`fas ${name} ${className}`}></i>;

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

// --- Page & Section Components ---
const Header = ({ onLoginClick, onSignupClick, onDashboardClick, isLoggedIn }) => (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2">
                <Icon name="fa-brain" className="text-3xl text-indigo-600" />
                <span className="text-2xl font-bold text-gray-800 tracking-wide">Tutorvance</span>
            </a>
            <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-600">
                <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
                <a href="#tutors" className="hover:text-indigo-600 transition-colors">Tutors</a>
                <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <button onClick={onDashboardClick} className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2.5 rounded-lg font-bold cta-button shadow-lg shadow-green-500/30 hover:from-green-500 hover:to-blue-600">My Dashboard</button>
                ) : (
                    <>
                        <button onClick={onLoginClick} className="font-semibold text-gray-600 hover:text-indigo-600 transition-colors">Log In</button>
                        <button onClick={onSignupClick} className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-bold cta-button shadow-lg shadow-indigo-500/30 hover:bg-indigo-700">Get Started</button>
                    </>
                )}
            </div>
        </nav>
    </header>
);

const HeroSection = ({ searchQuery, onSearchChange, onSearchSubmit }) => (
    <section className="hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 fade-in" style={{ animationDelay: '0.2s' }}>An Entire Learning Ecosystem.</h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.4s' }}>Beyond tutoring. Smart tools, AI assistance, and a community dedicated to your growth.</p>
            <form onSubmit={onSearchSubmit} className="fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="relative w-full max-w-2xl mx-auto">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={onSearchChange}
                        placeholder="Search for anything... Math, Physics, Coding..." 
                        className="w-full py-4 pl-6 pr-32 rounded-full text-gray-800 text-lg border-2 border-transparent focus:outline-none focus:border-indigo-400 shadow-2xl" 
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition cta-button">
                        <Icon name="fa-search" className="mr-2"/> Search
                    </button>
                </div>
            </form>
        </div>
    </section>
);

const AdBanner = () => (
    <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <img src="https://placehold.co/150x80/34d399/ffffff?text=BrandLogo" alt="Brand Logo Ad" className="rounded-lg h-16"/>
                <div className="text-center md:text-left">
                    <p className="text-sm font-semibold text-gray-500">ADVERTISEMENT</p>
                    <h3 className="text-2xl font-bold">Master Python in 30 Days</h3>
                    <p className="text-gray-600">Join our immersive bootcamp and land your dream job. Limited spots available!</p>
                </div>
                <a href="#" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold cta-button whitespace-nowrap">Enroll Now</a>
            </div>
        </div>
    </section>
);

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

const TutorCard = ({ tutor, index }) => {
    const isSponsored = tutor.sponsored;
    const priceDisplay = typeof tutor.price === 'number' ? `$${tutor.price}` : tutor.price;

    return (
        <div className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className={`tutor-card bg-white rounded-2xl overflow-hidden flex flex-col relative h-full ${isSponsored ? 'border-2 border-amber-400 shadow-amber-200/50' : 'shadow-lg'}`}>
                {isSponsored && <div className="absolute top-0 right-4 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-b-lg z-10">SPONSORED</div>}
                <div className="p-6 flex-grow flex flex-col">
                    <div className="text-center mb-4">
                        <img className={`w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 ${isSponsored ? 'border-amber-200' : 'border-gray-200'}`} src={tutor.avatar} alt={tutor.name} />
                        <h3 className="text-xl font-bold">{tutor.name} {tutor.verified && <Icon name="fa-check-circle" className="text-blue-500 text-sm ml-1" title="Verified Tutor" />}</h3>
                        <p className="text-indigo-600 font-semibold">{tutor.subject}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4 mt-auto">
                        <div className="flex items-center space-x-1"><Icon name="fa-star" className="text-yellow-400" /><span className="font-bold">{tutor.rating}</span><span>({tutor.lessons}+ lessons)</span></div>
                        <p className="text-xl font-bold text-gray-800">{priceDisplay}{typeof tutor.price === 'number' && <span className="text-sm font-normal text-gray-500">/hr</span>}</p>
                    </div>
                </div>
                <div className="p-4 bg-gray-50">
                    <button className={`w-full ${isSponsored ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white py-2.5 rounded-lg font-semibold cta-button`}>
                        {isSponsored ? 'Learn More' : 'View Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const TutorsSection = ({ tutors }) => (
    <section id="tutors" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Mentor</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our verified experts are ready to guide you. Filter by subject, price, and rating.</p>
            </div>
            {tutors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tutors.map((tutor, i) => <TutorCard key={tutor.id} tutor={tutor} index={i} />)}
                </div>
            ) : (
                <div className="text-center py-16">
                    <Icon name="fa-frown" className="text-5xl text-gray-400 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700">No Tutors Found</h3>
                    <p className="text-gray-500">Try adjusting your search terms.</p>
                </div>
            )}
        </div>
    </section>
);

const PricingSection = () => (
    <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Plans for Everyone</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose a plan that fits your learning goals and budget. No hidden fees, ever.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Basic Plan */}
                <div className="border border-gray-200 rounded-2xl p-8 flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-2">Basic</h3>
                    <p className="text-gray-500 mb-6">For casual learners</p>
                    <p className="text-5xl font-extrabold mb-6">$29<span className="text-lg font-medium text-gray-500">/mo</span></p>
                    <ul className="space-y-4 text-gray-600 mb-8 flex-grow">
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> 5 Tutoring Hours</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Basic AI Tools</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Community Access</li>
                    </ul>
                    <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Choose Plan</button>
                </div>

                {/* Pro Plan (Most Popular) */}
                <div className="border-2 border-indigo-600 rounded-2xl p-8 flex flex-col text-center shadow-2xl shadow-indigo-200 relative">
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">MOST POPULAR</div>
                    <h3 className="text-2xl font-bold mb-2 text-indigo-600">Pro</h3>
                    <p className="text-gray-500 mb-6">For dedicated students</p>
                    <p className="text-5xl font-extrabold mb-6">$59<span className="text-lg font-medium text-gray-500">/mo</span></p>
                    <ul className="space-y-4 text-gray-600 mb-8 flex-grow">
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> 15 Tutoring Hours</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Full AI Tool Suite</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Progress Analytics</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Priority Support</li>
                    </ul>
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold cta-button hover:bg-indigo-700">Choose Plan</button>
                </div>

                {/* Enterprise Plan */}
                <div className="border border-gray-200 rounded-2xl p-8 flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                    <p className="text-gray-500 mb-6">For institutions</p>
                    <p className="text-4xl font-extrabold mb-6">Custom</p>
                    <ul className="space-y-4 text-gray-600 mb-8 flex-grow">
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Unlimited Hours</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Advanced Admin Tools</li>
                        <li><Icon name="fa-check" className="text-green-500 mr-2"/> Dedicated Account Manager</li>
                    </ul>
                    <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Contact Us</button>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => {
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
    }, [currentIndex]);

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


// --- Dashboard Components ---
const StudentOverview = () => (
    <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">Student Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg stat-card"><h4 className="text-gray-500 font-semibold">Upcoming Sessions</h4><p className="text-4xl font-bold mt-2">3</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg stat-card"><h4 className="text-gray-500 font-semibold">Courses in Progress</h4><p className="text-4xl font-bold mt-2">2</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg stat-card"><h4 className="text-gray-500 font-semibold">Achievements</h4><p className="text-4xl font-bold mt-2">12</p></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Calculus II Learning Path</h3>
            <div className="flex items-center justify-between overflow-x-auto py-4">
                {learningPathData.map((node, i) => (
                    <div key={i} className="path-container flex items-center">
                        <div className={`path-node w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-center p-2 border-4 bg-white ${node.completed ? 'completed' : ''} ${node.active ? 'active' : 'border-gray-300'}`}>
                            <span className="font-semibold">{node.name}</span>
                        </div>
                        {i < learningPathData.length - 1 && <div className={`path-line w-16 md:w-24 flex-grow ${node.completed ? 'completed' : ''}`}></div>}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

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

const TutorTools = ({ onOpenModal }) => (
     <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">Tutor Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg tool-card cursor-pointer" onClick={() => onOpenModal('quiz-generator')}><Icon name="fa-magic-wand-sparkles" className="text-3xl text-purple-500 mb-4" /><h3 className="text-xl font-bold">AI Quiz Generator</h3><p className="text-gray-600">Instantly create student assessments.</p></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg tool-card"><Icon name="fa-chart-pie" className="text-3xl text-green-500 mb-4" /><h3 className="text-xl font-bold">Analytics Studio</h3><p className="text-gray-600">Deep dive into student performance.</p></div>
        </div>
    </div>
);

const GenericView = ({ title }) => (
    <div className="fade-in">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-600">Content for this section is under construction.</p>
            <p className="text-gray-400 mt-4">Check back soon for exciting new features!</p>
        </div>
    </div>
);

const Dashboard = ({ user, onLogout, onSwitchRole, onOpenModal }) => {
    const [activeView, setActiveView] = useState(`${user.role}_overview`);
    const navItems = navConfig[user.role];

    useEffect(() => {
        setActiveView(`${user.role}_overview`);
    }, [user.role]);

    const renderContent = () => {
        switch (activeView) {
            case 'student_overview': return <StudentOverview />;
            case 'student_tools': return <StudentTools onOpenModal={onOpenModal} />;
            case 'tutor_tools': return <TutorTools onOpenModal={onOpenModal} />;
            case 'tutor_overview': return <GenericView title="Tutor Dashboard" />;
            case 'admin_overview': return <GenericView title="Platform Statistics" />;
            case 'admin_tools': return <GenericView title="Admin Controls" />;
            default: return <GenericView title="Dashboard" />;
        }
    };
    
    return (
        <section className="py-12 min-h-screen fade-in">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/4">
                        <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-28">
                            <div className="flex items-center space-x-4 mb-8">
                                <img src={user.avatar} className="rounded-full w-16 h-16 border-4 border-indigo-200" alt={user.name} />
                                <div>
                                    <h3 className="text-xl font-bold">Welcome, {user.name}!</h3>
                                    <p className="text-sm font-semibold text-indigo-500 capitalize">{user.role}</p>
                                </div>
                            </div>
                            <nav className="space-y-2">
                                {navItems.map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => setActiveView(item.id)}
                                        className={`dashboard-nav-item w-full text-left px-4 py-3 rounded-lg flex items-center space-x-4 font-semibold text-gray-700 transition-all duration-200 ${activeView === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'hover:bg-indigo-50'}`}
                                    >
                                        <Icon name={item.icon} className="w-6 text-center" />
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>
                            <hr className="my-6 border-gray-200" />
                             <div className="p-2 text-center">
                                <p className="text-xs text-gray-400 mb-2">Advertisement</p>
                                <div className="bg-gray-100 rounded-lg p-3">
                                    <img src="https://placehold.co/200x200/eab308/333333?text=Your+Ad+Here" className="w-full rounded-md" alt="Advertisement placeholder" />
                                    <p className="text-sm font-semibold mt-2">Premium Study Notes</p>
                                    <a href="#" className="text-xs text-indigo-500 hover:underline">Get Access Now!</a>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                                 <p className="text-sm font-bold mb-2 text-gray-600">Demo Controls</p>
                                 <div className="flex space-x-2">
                                     <button onClick={() => onSwitchRole('student')} className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">Student</button>
                                     <button onClick={() => onSwitchRole('tutor')} className="text-xs bg-purple-500 text-white px-2 py-1 rounded-md hover:bg-purple-600">Tutor</button>
                                     <button onClick={() => onSwitchRole('admin')} className="text-xs bg-gray-700 text-white px-2 py-1 rounded-md hover:bg-gray-800">Admin</button>
                                 </div>
                            </div>
                            <button onClick={onLogout} className="w-full text-left flex items-center space-x-3 mt-4 text-gray-600 hover:text-red-500 font-semibold p-3 rounded-lg hover:bg-red-50 transition-colors">
                                <Icon name="fa-sign-out-alt" className="w-6 text-center" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </aside>
                    <main className="w-full md:w-3/4">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </section>
    );
};

// --- Footer Component ---
const Footer = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center space-x-2 mb-4">
                        <Icon name="fa-brain" className="text-3xl text-indigo-400" />
                        <span className="text-2xl font-bold tracking-wide">Tutorvance</span>
                    </div>
                    <p className="text-gray-400">The ultimate ecosystem for learning, connecting students and tutors seamlessly.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                        <li><a href="#tutors" className="text-gray-400 hover:text-white transition-colors">Find a Tutor</a></li>
                        <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sign Up</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <hr className="my-8 border-gray-700" />
            <div className="text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Tutorvance. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


// --- Functional Modal Components ---
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
            setMessages(prev => [...prev, { text: "An error occurred. Please try again.", sender: "ai" }]);
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
            setError("Sorry, something went wrong while generating the quiz. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-4">AI Quiz Generator</h2>
            {!quiz && (
                 <form onSubmit={handleGenerate}>
                    <p className="text-gray-600 mb-6">Enter a topic or paste text to generate a quiz instantly.</p>
                    <textarea 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full p-3 mb-4 border-2 rounded-lg h-40" 
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
                    <h3 className="text-2xl font-bold mb-4">Quiz on: <span className="text-purple-600">{topic}</span></h3>
                    <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-4">
                        {quiz.map((item, index) => (
                            <div key={index} className="border-b pb-4">
                                <p className="font-bold mb-2">{index + 1}. {item.question}</p>
                                <ul className="space-y-1">
                                    {item.options.map((opt, i) => (
                                        <li key={i} className={`p-2 rounded ${opt === item.correctAnswer ? 'text-green-700 font-semibold' : ''}`}>
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

const Modal = ({ type, onClose, onLogin }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
      return () => {
          document.body.style.overflow = 'auto';
      };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const renderContent = () => {
        switch (type) {
            case 'login': return (
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full text-center">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                    <p className="text-gray-600 mb-6">Log in to continue your journey.</p>
                    <input className="w-full p-3 mb-4 border-2 rounded-lg" type="email" placeholder="Email" />
                    <input className="w-full p-3 mb-6 border-2 rounded-lg" type="password" placeholder="Password" />
                    <button onClick={onLogin} className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold cta-button">Log In</button>
                </div>
            );
            case 'signup': return (
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full text-center">
                    <h2 className="text-3xl font-bold mb-2">Join Tutorvance</h2>
                    <p className="text-gray-600 mb-6">Start your learning adventure today.</p>
                    <input className="w-full p-3 mb-4 border-2 rounded-lg" type="text" placeholder="Full Name" />
                    <input className="w-full p-3 mb-4 border-2 rounded-lg" type="email" placeholder="Email" />
                    <input className="w-full p-3 mb-6 border-2 rounded-lg" type="password" placeholder="Password" />
                    <button onClick={onLogin} className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold cta-button">Create Account</button>
                </div>
            );
            case 'ai-chat': return <AIChatModal />;
            case 'focus-mode': return <FocusModeModal onClose={handleClose}/>;
            case 'quiz-generator': return <QuizGeneratorModal />;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}></div>
            <div className={`relative z-10 w-full max-w-md p-4 transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                {renderContent()}
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
    const [page, setPage] = useState('home'); // 'home' or 'dashboard'
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(users.student);
    const [activeModal, setActiveModal] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayedTutors, setDisplayedTutors] = useState(tutorsData);

    const handleLogin = useCallback(() => {
        setIsLoggedIn(true);
        setPage('dashboard');
        setActiveModal(null);
    }, []);

    const handleLogout = useCallback(() => {
        setIsLoggedIn(false);
        setPage('home');
        setCurrentUser(users.student);
    }, []);

    const handleSwitchRole = useCallback((role) => {
        setCurrentUser(users[role]);
    }, []);
    
    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            setDisplayedTutors(tutorsData);
        } else {
            const lowercasedQuery = searchQuery.toLowerCase();
            const filtered = tutorsData.filter(tutor => 
                tutor.name.toLowerCase().includes(lowercasedQuery) ||
                tutor.subject.toLowerCase().includes(lowercasedQuery)
            );
            setDisplayedTutors(filtered);
        }
    }, [searchQuery]);


    const openModal = useCallback((type) => setActiveModal(type), []);
    const closeModal = useCallback(() => setActiveModal(null), []);

    return (
        <>
            <GlobalStyles />
            <div className="antialiased text-gray-800 flex flex-col min-h-screen">
                {page !== 'dashboard' && <Header onLoginClick={() => openModal('login')} onSignupClick={() => openModal('signup')} onDashboardClick={() => setPage('dashboard')} isLoggedIn={isLoggedIn}/>}
                
                <main className="flex-grow">
                    {page === 'home' ? (
                        <>
                            <HeroSection 
                                searchQuery={searchQuery}
                                onSearchChange={(e) => setSearchQuery(e.target.value)}
                                onSearchSubmit={handleSearchSubmit}
                            />
                            <AdBanner />
                            <FeaturesSection />
                            <TutorsSection tutors={displayedTutors}/>
                            <PricingSection />
                            <TestimonialsSection />
                        </>
                    ) : (
                        <Dashboard user={currentUser} onLogout={handleLogout} onSwitchRole={handleSwitchRole} onOpenModal={openModal}/>
                    )}
                </main>

                <Footer />

                <div className="fixed bottom-8 right-8 z-50">
                    <button onClick={() => openModal('ai-chat')} className="bg-indigo-600 text-white rounded-full h-20 w-20 flex items-center justify-center shadow-2xl cta-button transform hover:scale-110" style={{ boxShadow: '0 10px 20px rgba(99, 102, 241, 0.4)' }}>
                        <Icon name="fa-robot" className="text-3xl" />
                    </button>
                </div>

                {activeModal && <Modal type={activeModal} onClose={closeModal} onLogin={handleLogin} />}
            </div>
        </>
    );
}

// This part is important for rendering the app in a browser environment.
const container = document.getElementById('root');
if (container) {
    // Use the legacy render method to avoid potential conflicts in some execution environments.
    // ReactDOM.render(<App />, container);
}

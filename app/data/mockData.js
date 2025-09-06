// Mock data for the application
export const tutorsData = [
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

export const testimonialsData = [
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

export const learningPathData = [
    { name: 'Introduction', completed: true },
    { name: 'Derivatives', completed: true },
    { name: 'Integrals', completed: true },
    { name: 'Sequences', active: true },
    { name: 'Series' },
    { name: 'Multivariable' }
];

export const users = {
    student: { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', role: 'student' },
    tutor: { name: 'Dr. Reed', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop', role: 'tutor' },
    admin: { name: 'Admin', avatar: 'https://placehold.co/100x100/4338ca/ffffff?text=AD', role: 'admin' },
};

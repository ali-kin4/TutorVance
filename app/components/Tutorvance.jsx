"use client";
import React, { useState, useCallback, useMemo, lazy, Suspense } from "react";

// Import components
import GlobalStyles from './styles/GlobalStyles';
import Header from './ui/Header';
import Footer from './ui/Footer';
import HeroSection from './sections/HeroSection';
import AdBanner from './sections/AdBanner';
import FeaturesSection from './sections/FeaturesSection';
import TutorsSection from './tutors/TutorsSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import Modal from './modals/Modal';
import Icon from './ui/Icon';

// Lazy load dashboard components for better performance
const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const StudentOverview = lazy(() => import('./dashboard/StudentOverview'));
const StudentTools = lazy(() => import('./dashboard/StudentTools'));
const TutorTools = lazy(() => import('./dashboard/TutorTools'));

// Import data
import { tutorsData, testimonialsData, users } from '../data/mockData';

// --- Main App Component ---
export default function App() {
    const [page, setPage] = useState('home'); // 'home' or 'dashboard'
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(users.student);
    const [activeModal, setActiveModal] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayedTutors, setDisplayedTutors] = useState(tutorsData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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
        setIsLoading(true);
        setError(null);
        
        try {
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
        } catch (err) {
            setError('Search failed. Please try again.');
            console.error('Search error:', err);
        } finally {
            setIsLoading(false);
        }
    }, [searchQuery]);

    const openModal = useCallback((type) => setActiveModal(type), []);
    const closeModal = useCallback(() => setActiveModal(null), []);

    const dashboardChildren = useMemo(() => ({
        studentOverview: <StudentOverview />,
        studentTools: <StudentTools onOpenModal={openModal} />,
        tutorTools: <TutorTools onOpenModal={openModal} />
    }), [openModal]);

    return (
        <>
            <GlobalStyles />
            <div className="antialiased text-gray-800 flex flex-col min-h-screen">
                {page !== 'dashboard' && <Header onLoginClick={() => openModal('login')} onSignupClick={() => openModal('signup')} onDashboardClick={() => setPage('dashboard')} isLoggedIn={isLoggedIn}/>}
                
                <main className="flex-grow">
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-4 mt-4" role="alert">
                            <div className="flex items-center">
                                <Icon name="fa-exclamation-triangle" className="mr-2" />
                                <span>{error}</span>
                                <button 
                                    onClick={() => setError(null)} 
                                    className="ml-auto text-red-700 hover:text-red-900"
                                    aria-label="Dismiss error"
                                >
                                    <Icon name="fa-times" />
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {page === 'home' ? (
                        <>
                            <HeroSection 
                                searchQuery={searchQuery}
                                onSearchChange={(e) => setSearchQuery(e.target.value)}
                                onSearchSubmit={handleSearchSubmit}
                                isLoading={isLoading}
                            />
                            <AdBanner />
                            <FeaturesSection />
                            <TutorsSection tutors={displayedTutors} isLoading={isLoading}/>
                            <PricingSection />
                            <TestimonialsSection testimonialsData={testimonialsData} />
                        </>
                    ) : (
                        <Suspense fallback={
                            <div className="flex items-center justify-center min-h-screen">
                                <div className="text-center">
                                    <Icon name="fa-spinner fa-spin" className="text-4xl text-indigo-500 mb-4" />
                                    <p className="text-gray-600">Loading dashboard...</p>
                                </div>
                            </div>
                        }>
                            <Dashboard 
                                user={currentUser} 
                                onLogout={handleLogout} 
                                onSwitchRole={handleSwitchRole} 
                                onOpenModal={openModal}
                                children={dashboardChildren}
                            />
                        </Suspense>
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
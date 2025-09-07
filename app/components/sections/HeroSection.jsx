import Icon from '../ui/Icon';

const HeroSection = ({ searchQuery, onSearchChange, onSearchSubmit, isLoading = false }) => (
    <section className="hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 fade-in" style={{ animationDelay: '0.2s' }}>An Entire Learning Ecosystem.</h1>
            <p className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto fade-in px-4" style={{ animationDelay: '0.4s' }}>Beyond tutoring. Smart tools, AI assistance, and a community dedicated to your growth.</p>
            <form onSubmit={onSearchSubmit} className="fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="relative w-full max-w-2xl mx-auto">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={onSearchChange}
                        placeholder="Search for anything... Math, Physics, Coding..." 
                        className="w-full py-3 sm:py-4 pl-4 sm:pl-6 pr-24 sm:pr-32 rounded-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 text-base sm:text-lg border-2 border-transparent focus:outline-none focus:border-indigo-400 shadow-2xl" 
                    />
                    <button 
                        type="submit" 
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-indigo-700 transition cta-button disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        disabled={isLoading}
                        aria-label={isLoading ? "Searching..." : "Search for tutors"}
                    >
                        {isLoading ? (
                            <Icon name="fa-spinner fa-spin" className="mr-2" />
                        ) : (
                            <Icon name="fa-search" className="mr-2" />
                        )}
                        {isLoading ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </form>
        </div>
    </section>
);

export default HeroSection;

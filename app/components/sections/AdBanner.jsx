import Icon from '../ui/Icon';

const AdBanner = () => (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <img src="https://placehold.co/150x80/34d399/ffffff?text=BrandLogo" alt="Brand Logo Ad" className="rounded-lg h-16"/>
                <div className="text-center md:text-left">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">ADVERTISEMENT</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Master Python in 30 Days</h3>
                    <p className="text-gray-600 dark:text-gray-300">Join our immersive bootcamp and land your dream job. Limited spots available!</p>
                </div>
                <a href="#" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold cta-button whitespace-nowrap">Enroll Now</a>
            </div>
        </div>
    </section>
);

export default AdBanner;

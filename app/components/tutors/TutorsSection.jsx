import Icon from '../ui/Icon';
import TutorCard from './TutorCard';

const TutorsSection = ({ tutors, isLoading = false }) => (
    <section id="tutors" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Mentor</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our verified experts are ready to guide you. Filter by subject, price, and rating.</p>
            </div>
            {isLoading ? (
                <div className="text-center py-16">
                    <Icon name="fa-spinner fa-spin" className="text-5xl text-indigo-500 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700">Searching for tutors...</h3>
                    <p className="text-gray-500">Please wait while we find the best matches for you.</p>
                </div>
            ) : tutors.length > 0 ? (
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

export default TutorsSection;

import Icon from '../ui/Icon';

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

export default PricingSection;

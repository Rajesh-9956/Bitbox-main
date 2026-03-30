import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

function ContactForm({ mode }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section className={`py-20 relative z-10 ${mode === 'dark' ? 'bg-[#05050A] text-white' : 'bg-indigo-50/30 text-gray-900 border-t border-gray-200'} overflow-hidden`} id="contact">
            {/* Parallax Background Glow for Dark Mode */}
            {mode === 'dark' && <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none"></div>}
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="text-center mb-12 animate-slide-up">
                    <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 inline-block px-5 py-2.5 rounded-full ${mode === 'dark' ? 'text-fuchsia-400 bg-fuchsia-900/30 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.2)]' : 'text-indigo-600 bg-indigo-50 border border-indigo-100'}`}>Get In Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-6">We'd love to <span className="text-gradient">hear from you</span></h3>
                    <p className={`max-w-2xl mx-auto text-lg font-medium ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className={`p-8 md:p-12 rounded-[2.5rem] animate-fade-in sm:mx-4 ${mode === 'dark' ? 'card-3d bg-[#151525]' : 'bg-white shadow-2xl border border-gray-100'}`}>
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 animate-slide-up">
                                <FiCheckCircle className="w-10 h-10" />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                            <p className={`${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Thanks for reaching out. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                                <div className="space-y-3">
                                    <label htmlFor="name" className={`text-sm font-bold tracking-wide uppercase ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>First Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required
                                        className={`w-full px-5 py-4 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-indigo-500 focus:ring-indigo-500/20 text-white placeholder-gray-600 focus:shadow-neon' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className={`text-sm font-bold tracking-wide uppercase ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required
                                        className={`w-full px-5 py-4 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-indigo-500 focus:ring-indigo-500/20 text-white placeholder-gray-600 focus:shadow-neon' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3 pb-2">
                                <label htmlFor="subject" className={`text-sm font-bold tracking-wide uppercase ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    required
                                    className={`w-full px-5 py-4 rounded-xl border-2 focus:ring-4 transition-all outline-none font-medium ${mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-fuchsia-500 focus:ring-fuchsia-500/20 text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`}
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="space-y-3 pb-4">
                                <label htmlFor="message" className={`text-sm font-bold tracking-wide uppercase ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5"
                                    required
                                    className={`w-full px-5 py-4 rounded-xl border-2 focus:ring-4 transition-all outline-none resize-none font-medium ${mode === 'dark' ? 'bg-[#0B0B13] border-gray-800 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-gray-600 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-gray-50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-100 text-gray-900'}`}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-extrabold text-lg transition-all disabled:opacity-70 ${mode === 'dark' ? 'bg-indigo-600 text-white btn-3d' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:-translate-y-1'}`}
                            >
                                {isSubmitting ? 'Sending Transmission...' : 'Launch Message'}
                                {!isSubmitting && <FiSend className={`w-6 h-6 ${mode === 'dark' ? 'text-cyan-400' : ''}`} />}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

ContactForm.propTypes = {
    mode: PropTypes.string.isRequired
};

export default ContactForm;

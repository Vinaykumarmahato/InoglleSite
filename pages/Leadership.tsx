import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import { Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Leadership = () => {
    const leaders = [
        {
            name: "Vinaykumar Mahato",
            role: "Founder & CEO",
            bio: "Visionary leader with a passion for building scalable IT ecosystems and driving digital transformation for global enterprises.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            linkedin: "https://linkedin.com/in/vinaykumarmahato",
            twitter: "https://twitter.com/vinaykumar"
        },
        {
            name: "Anjali Sharma",
            role: "CTO",
            bio: "Expert in cloud architecture and distributed systems, leading our engineering teams to build robust and secure software solutions.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "David Chen",
            role: "Head of AI & Automation",
            bio: "Pioneering the future of business efficiency through intelligent automation and cutting-edge machine learning models.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Sarah Jenkins",
            role: "VP of Product",
            bio: "Dedicated to creating exceptional user experiences and aligning product strategy with the evolving needs of our global clients.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            linkedin: "#",
            twitter: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[50vh] flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden border-b border-slate-900">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto space-y-6" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mt-[58px]">
                            Our Team
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            Meet the Visionaries <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Behind Inoglle.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            A global team of experts committed to redefining the digital landscape through innovation and engineering excellence.
                        </p>
                    </div>
                </section>

                {/* --- Leaders Grid --- */}
                <section className="py-24 bg-[#020617]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {leaders.map((leader, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>

                                        {/* Social Overlay */}
                                        <div className="absolute bottom-4 left-4 flex gap-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                            <a href={leader.linkedin} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-lg">
                                                <Linkedin size={18} />
                                            </a>
                                            <a href={leader.twitter} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors shadow-lg border border-slate-700">
                                                <Twitter size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{leader.name}</h3>
                                            <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider">{leader.role}</p>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                                            {leader.bio}
                                        </p>
                                    </div>

                                    {/* Decorative Accent */}
                                    <div className="absolute top-0 right-0 w-2 h-0 bg-blue-500 group-hover:h-full transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Join Us CTA --- */}
                <section className="py-32 bg-slate-900/30 border-t border-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-aos="zoom-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Want to lead the next revolution?</h2>
                        <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
                            We're always looking for ambitious innovators to join our leadership and help shape the future of tech.
                        </p>
                        <a href="/careers" className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-blue-50 hover:text-blue-600 transition-all shadow-xl hover:-translate-y-1">
                            Explore Careers <ArrowRight size={20} />
                        </a>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Leadership;

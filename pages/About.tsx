import React, { useEffect } from 'react';
import {
    Lightbulb,
    Handshake,
    Rocket,
    Coffee,
    Heart,
    BookOpen,
    Users,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About Inoglle | Our Mission & Technology Vision";
    }, []);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto space-y-8" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mt-[58px]">
                            About Inoglle
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Economy.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            We are a team of dreamers, designers, and developers dedicated to building the digital infrastructure that powers global innovation.
                        </p>
                    </div>
                </section>

                {/* --- Stats Grid --- */}
                <section className="py-20 bg-slate-900/50 border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "500+", label: "Projects Delivered" },
                            { value: "50+", label: "Tech Experts" },
                            { value: "15+", label: "Countries Served" },
                            { value: "99%", label: "Client Retention" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group" data-aos="zoom-in" data-aos-delay={i * 100}>
                                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                                <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- Content Sections --- */}
                <div className="max-w-7xl mx-auto px-6 space-y-32 py-32">

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8" data-aos="fade-right">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-white tracking-tight">Our Mission</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    To empower businesses worldwide by engineering intelligent, future-ready digital ecosystems that drive sustainable growth and innovation.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-white tracking-tight">Our Vision</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    To be the global benchmark for excellence in software engineering, automation, and cloud services, shaping the digital architecture of the next economy.
                                </p>
                            </div>
                        </div>
                        <div className="relative group" data-aos="fade-left">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-2xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team Collaboration"
                                className="relative rounded-2xl shadow-2xl border border-slate-800 group-hover:border-blue-500/50 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="space-y-16">
                        <div className="text-center" data-aos="fade-up">
                            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide every line of code we write and every partnership we build.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Lightbulb, title: "Relentless Innovation", desc: "We don't just follow trends; we set them through constant experimentation." },
                                { icon: Handshake, title: "Extreme Ownership", desc: "We treat every project as our own, taking full responsibility for the results." },
                                { icon: Rocket, title: "Scalable Thinking", desc: "We build for tomorrow, ensuring every solution can grow with your business." }
                            ].map((value, i) => (
                                <div key={i} className="p-8 bg-[#0f172a] rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group" data-aos="fade-up" data-aos-delay={i * 200}>
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <value.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Culture Section */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 md:order-1" data-aos="zoom-in">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" className="rounded-xl shadow-lg border border-slate-800" alt="Culture 1" />
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" className="rounded-xl shadow-lg border border-slate-800 mt-8" alt="Culture 2" />
                            </div>
                        </div>
                        <div className="space-y-8 order-1 md:order-2" data-aos="fade-left">
                            <h2 className="text-4xl font-bold text-white">Culture at Inoglle</h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                We've built a remote-first, high-performance culture that values output over hours. Our team is a diverse group of engineers, designers, and strategists united by a passion for solving hard problems.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Coffee, label: "Flexible Work" },
                                    { icon: Heart, label: "Health Focus" },
                                    { icon: BookOpen, label: "Learning Stipend" },
                                    { icon: Users, label: "Annual Retreats" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white font-medium group cursor-default">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <item.icon size={16} />
                                        </div>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link to="/careers" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group">
                                    See Open Roles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default About;
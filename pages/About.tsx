/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Bell, ArrowRight, Lightbulb, Handshake, Rocket, BookOpen, Home, Coffee, Users, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';


// --- SVG Assets for Background Effects (from Home page) ---
const HeroBackground = () => (
    <div className="absolute inset-0 -z-20 overflow-hidden">
        <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{ stopColor: 'rgba(12, 18, 44, 0.9)' }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(5, 8, 16, 0.9)' }} />
                </radialGradient>
                <radialGradient id="grad2" cx="10%" cy="20%" r="40%" fx="10%" fy="20%">
                    <stop offset="0%" style={{ stopColor: 'rgba(0, 162, 255, 0.1)' }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(0, 162, 255, 0)' }} />
                </radialGradient>
                <radialGradient id="grad3" cx="90%" cy="80%" r="50%" fx="90%" fy="80%">
                    <stop offset="0%" style={{ stopColor: 'rgba(138, 43, 226, 0.15)' }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(138, 43, 226, 0)' }} />
                </radialGradient>
            </defs>
            <rect width="1440" height="800" fill="url(#grad1)" />
            <rect width="1440" height="800" fill="url(#grad2)" />
            <rect width="1440" height="800" fill="url(#grad3)" />
        </svg>
    </div>
);

const AnimatedNeuralLines = () => (
    <div className="absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <style>{`.neural-path{stroke-dasharray: 200; stroke-dashoffset: 200; animation: dash 15s linear infinite alternate;} #path1{animation-delay: -2s;} #path2{animation-delay: -5s;} #path3{animation-delay: -8s;} #path4{animation-delay: -12s;}`}</style>
            <path id="path1" className="neural-path" d="M0 20 Q 25 5, 50 30 T 100 50" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
            <path id="path2" className="neural-path" d="M0 80 Q 30 90, 60 50 T 100 20" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
            <path id="path3" className="neural-path" d="M20 0 Q 30 50, 50 50 T 80 100" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
            <path id="path4" className="neural-path" d="M100 80 Q 70 70, 50 50 T 0 30" stroke="url(#line-grad)" strokeWidth="0.5" fill="none" />
            <defs>
                <linearGradient id="line-grad" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="var(--accent-blue)" />
                    <stop offset="100%" stopColor="var(--accent-purple)" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);


// --- Main Page Component ---
const About = () => {
    const [showBanner, setShowBanner] = useState(true);

    const values = [
        { icon: <Lightbulb />, title: "Innovation", description: "Fostering a culture where new ideas are nurtured to create groundbreaking solutions." },
        { icon: <BookOpen />, title: "Continuous Learning", description: "Providing free resources and internships to empower our team and the community." },
        { icon: <Rocket />, title: "Growth Mindset", description: "We believe failure is a stepping stone to success, encouraging persistence and learning." },
        { icon: <Handshake />, title: "Partnership", description: "Investing in long-term relationships dedicated to the growth of our clients and team." },
    ];

    const benefits = [
        { icon: <Home />, title: "Remote-First Culture" },
        { icon: <Coffee />, title: "Flexible Working Hours" },
        { icon: <Users />, title: "Collaborative Environment" },
        { icon: <Heart />, title: "Health & Wellness" }
    ];

    // Inlined CSS for the new theme (from Home page)
    const GlobalStyles = () => (
        <style>{`
            :root {
                --bg-dark-primary: #050810; --bg-dark-secondary: #0a0f1c; --accent-blue: #00a2ff; --accent-purple: #8a2be2; --accent-glow: #00a2ff4d; --text-primary: #e0e0e0; --text-secondary: #a0a0b0; --border-color: rgba(255, 255, 255, 0.1); --glass-bg: rgba(16, 22, 42, 0.5); --font-family-sans: 'Inter', sans-serif;
            }
            body { background-color: var(--bg-dark-primary); color: var(--text-primary); font-family: var(--font-family-sans); line-height: 1.6; }
            @keyframes gradient-pan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
            @keyframes subtle-glow { 0%, 100% { box-shadow: 0 0 20px -5px var(--accent-glow); } 50% { box-shadow: 0 0 25px 0px var(--accent-glow); } }
            @keyframes dash { to { stroke-dashoffset: 0; } }
            .glass-card { background: var(--glass-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--border-color); border-radius: 1rem; transition: transform 0.3s ease, box-shadow 0.3s ease; }
            .glass-card:hover { transform: translateY(-6px); box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4); }
            .animation-subtle-glow { animation: subtle-glow 5s ease-in-out infinite; }
            .glass-card-neon { position: relative; background: var(--glass-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-radius: 0.75rem; padding: 1.5rem; transition: transform 0.3s ease, box-shadow 0.3s ease; border: 2px solid transparent; background-clip: padding-box; }
            .glass-card-neon::before { content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; margin: -2px; border-radius: inherit; background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple)); }
            .glass-card-neon:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 0 25px -5px var(--accent-glow); }
            .pill-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 2rem; font-weight: 700; border-radius: 9999px; color: white; background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple)); background-size: 200% 200%; box-shadow: 0 4px 15px 0 rgba(138, 43, 226, 0.4); transition: all 0.3s ease; }
            .pill-btn:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 8px 25px 0 rgba(0, 162, 255, 0.5); animation: gradient-pan 4s linear infinite; }
            :focus-visible { outline: 3px solid var(--accent-blue); outline-offset: 3px; border-radius: 4px; }
            @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }
        `}</style>
    );

    return (
        <div className="min-h-screen bg-bg-dark-primary text-text-primary">
            <GlobalStyles />
            
            {showBanner && (
                <div className="w-full bg-[#17439b] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-8 py-2 sm:py-2 text-base font-medium shadow-lg z-50 min-h-[48px] sm:min-h-[40px]">
                    <div className="flex items-center gap-2 mb-1 sm:mb-0">
                        <Bell size={20} className="flex-shrink-0" />
                        <span className="text-xs sm:text-base font-semibold leading-tight sm:leading-normal">Need a vendor switch? <span className="block sm:inline">Accelerate your AI research with a neutral data partner.</span></span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
                        <a href="/VendorSwitchInfo" className="underline font-semibold text-xs sm:text-base whitespace-nowrap flex items-center gap-1 hover:text-blue-200 transition">
                            Learn More
                            <span className="hidden sm:inline"><ArrowRight size={16} /></span>
                        </a>
                        <button onClick={() => setShowBanner(false)} className="text-white text-xl font-bold hover:text-blue-200 ml-2 sm:ml-0">&#10005;</button>
                    </div>
                </div>
            )}

            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* --- Hero Section --- */}
                <section className="relative flex flex-col items-center text-center p-8 md:p-16 mb-24 overflow-hidden">
                    <HeroBackground />
                    <AnimatedNeuralLines />
                    <div className="glass-card p-8 md:p-12 animation-subtle-glow">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-200">
                            Nurturing Innovation,<br />Cultivating Skills
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-3xl text-text-secondary">
                            We are a forward-thinking IT solutions provider dedicated to fostering growth and shaping the future of technology, one solution at a time.
                        </p>
                    </div>
                </section>
                {/* --- Our Mission Section --- */}
                <section className="grid lg:grid-cols-5 gap-8 items-center mb-24">
                    <div className="lg:col-span-3 glass-card-neon p-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                        <div className="text-text-secondary space-y-4">
                            <p>At Inoglle, we're dedicated to bridging the gap between business goals and technological possibilities. We offer a diverse range of services, from cutting-edge software development to comprehensive IT consulting.</p>
                            <p>Join us on this journey as we shape the future of IT. With Inoglle, you're investing in a partnership dedicated to your growth and success.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                        <div className="glass-card p-6 text-center">
                            <p className="text-4xl font-bold text-accent-blue">2023</p>
                            <p className="text-sm font-semibold text-text-secondary mt-1">Founded</p>
                        </div>
                        <div className="glass-card p-6 text-center">
                            <p className="text-4xl font-bold text-accent-blue">11-50</p>
                            <p className="text-sm font-semibold text-text-secondary mt-1">Employees</p>
                        </div>
                        <div className="glass-card p-6 text-center col-span-2">
                            <p className="text-xl font-bold text-accent-blue">Bengaluru, Karnataka</p>
                            <p className="text-sm font-semibold text-text-secondary mt-1">Headquarters</p>
                        </div>
                    </div>
                </section>
                {/* --- Our Values Section --- */}
                <section className="my-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(value => (
                            <div key={value.title} className="glass-card p-8 text-center">
                                <div className="inline-block bg-accent-blue/10 p-4 rounded-full mb-4">
                                    {React.cloneElement(value.icon, { className: 'w-8 h-8 text-accent-blue' })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-text-secondary text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* --- Our Culture Section --- */}
                <section className="my-24 grid lg:grid-cols-2 gap-12 items-center bg-bg-dark-secondary p-8 rounded-2xl border border-border-color">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Culture & Benefits</h2>
                        <p className="text-text-secondary mb-8">At Inoglle, we embrace a remote-first culture. We believe in empowering our team to maintain a healthy work-life balance while delivering exceptional results from anywhere.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map(benefit => (
                                <div key={benefit.title} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-lg">
                                    {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-accent-blue flex-shrink-0" })}
                                    <span className="font-semibold text-text-primary">{benefit.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" alt="Team collaborating" className="rounded-lg shadow-md w-full h-full object-cover"/>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" alt="Company culture" className="rounded-lg shadow-md w-full h-full object-cover mt-8"/>
                    </div>
                </section>
                {/* --- CTA Section --- */}
                <section className="my-20 py-16 px-6 relative bg-bg-dark-secondary rounded-2xl shadow-2xl text-center text-white overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-[400px] bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full filter blur-3xl opacity-20 -z-10"></div>
                    <h2 className="text-3xl md:text-5xl font-bold">Join Our Journey</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-text-secondary">We are always looking for passionate talent to join our team. If you're ready to shape the future of IT, we'd love to hear from you.</p>
                    <div className="mt-8">
                        <a href="/InoglleCareers" className="pill-btn text-lg">
                            View Open Roles
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
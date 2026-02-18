import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    TrendingUp,
    ShieldCheck,
    Zap,
    Globe,
    ArrowRight,
    CheckCircle2,
    Layers,
    Cpu,
    Database
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FintechScale = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section with Dynamic Motion --- */}
                <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden px-6">
                    {/* Background Visuals */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mt-12 animate-fade-in-up">
                            <ShieldCheck size={14} /> NeoBank / FinTech Case Study
                        </div>

                        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1]" data-aos="fade-up">
                            The Neobank <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 underline decoration-blue-500/20 underline-offset-8">Scale Operation.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
                            Engineering a high-frequency trading infrastructure to support <span className="text-white font-medium">5 Million users</span> with mission-critical <span className="text-white font-medium">99.99% reliability</span>.
                        </p>

                        <div className="pt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="px-6 py-3 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center gap-3">
                                <Zap className="text-amber-400" size={20} />
                                <span className="text-sm font-semibold text-slate-300">Fast Transaction Processing</span>
                            </div>
                            <div className="px-6 py-3 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center gap-3">
                                <Globe className="text-blue-400" size={20} />
                                <span className="text-sm font-semibold text-slate-300">Multi-Region Cloud</span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Read Case</span>
                        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
                    </div>
                </section>

                {/* --- Impact Dashboard --- */}
                <section className="py-24 bg-[#060a18] border-y border-slate-900 relative z-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { val: "99.99%", label: "Platform Uptime", desc: "Zero major incidents over 12 months", icon: ShieldCheck, color: "blue" },
                                { val: "0.4s", label: "Latency Reduced", desc: "Average transaction completion time", icon: Zap, color: "amber" },
                                { val: "$2.4M", label: "Cost Optimized", desc: "Calculated annual cloud infrastructure savings", icon: TrendingUp, color: "emerald" },
                            ].map((stat, i) => (
                                <div key={i} className="relative group p-8 rounded-3xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/10 flex items-center justify-center text-${stat.color}-400 mb-6`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="text-5xl font-extrabold text-white mb-2">{stat.val}</div>
                                    <div className="text-lg font-bold text-slate-200 mb-1">{stat.label}</div>
                                    <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Deep Dive Content --- */}
                <section className="py-32">
                    <div className="max-w-5xl mx-auto px-6 space-y-40">

                        {/* The Problem */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8" data-aos="fade-right">
                                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Part 01 / The Challenge</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight italic">
                                    "When Scaling Becomes <br />
                                    A Reliability Crisis."
                                </h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    Our client's legacy monolithic architecture was struggling to handle over 10,000 requests per second. During peak traffic, the database would reach critical locks, causing transaction timeouts that lasted up to 15 seconds—an unacceptable delay for a modern financial platform.
                                </p>
                                <div className="space-y-4">
                                    {["Concurrent user spikes hitting 1M+", "Data consistency issues in ledgering", "Monolithic deployment bottlenecks"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group" data-aos="fade-left">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative aspect-square bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex items-center justify-center">
                                    {/* Visual representation of chaos/bottlenecks */}
                                    <div className="relative w-48 h-48 border-[12px] border-slate-800 rounded-full flex items-center justify-center">
                                        <div className="absolute inset-0 border-[12px] border-red-500/50 rounded-full border-t-transparent animate-spin"></div>
                                        <Layers className="text-red-500 w-16 h-16" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Solution */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="relative order-2 md:order-1" data-aos="fade-right">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>
                                <div className="relative aspect-video bg-slate-900/50 rounded-3xl border border-slate-800/50 overflow-hidden shadow-2xl p-4">
                                    <img
                                        src="/images/Architecture Diagram Placeholder.png"
                                        alt="Microservices Architecture Diagram"
                                        className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="space-y-8 order-1 md:order-2" data-aos="fade-left">
                                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest">Part 02 / The Strategy</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                    Event-Driven <br /> Architecture.
                                </h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    We migrated the system to a distributed microservices ecosystem using Go and Apache Kafka. By decoupling transaction processing from user notifications and auditing, we enabled the platform to scale horizontal instantly.
                                </p>
                                <div className="space-y-6 pt-4">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><Database size={20} /></div>
                                        <div>
                                            <div className="text-white font-bold">Postgres to CockroachDB</div>
                                            <p className="text-slate-400 text-sm">Ensuring ACID compliance with global distributed consistency.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0"><CheckCircle2 size={20} /></div>
                                        <div>
                                            <div className="text-white font-bold">Zero-Downtime Deployment</div>
                                            <p className="text-slate-400 text-sm">Canary releases allowed us to test features live on 1% of users before full rollout.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- The Result Gallery --- */}
                <section className="py-32 bg-slate-900/20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="mb-20" data-aos="fade-up">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Outcome Delivered.</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">From architectural fragility to a world-class banking standard.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group relative h-96 rounded-[2.5rem] overflow-hidden border border-slate-800" data-aos="zoom-in" data-aos-delay="100">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Dashboard" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 text-left">
                                    <div className="text-5xl font-extrabold text-white mb-2">5.2M+</div>
                                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Managed Users</p>
                                </div>
                            </div>
                            <div className="grid grid-rows-2 gap-8">
                                <div className="bg-slate-900/50 backdrop-blur-md rounded-[2rem] border border-slate-800 p-10 flex flex-col justify-center text-left" data-aos="fade-left" data-aos-delay="200">
                                    <div className="text-blue-500 font-bold mb-4">"Inoglle redefined what we thought was possible in terms of engineering speed. Our platform is now bulletproof."</div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                                        <div>
                                            <div className="text-white font-bold">Marcus Thorne</div>
                                            <p className="text-slate-500 text-sm">CTO, NeoFinance Group</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-10 flex items-center justify-between group cursor-pointer" data-aos="fade-left" data-aos-delay="300">
                                    <div className="text-white">
                                        <h4 className="text-2xl font-bold mb-2">Start your success story.</h4>
                                        <p className="text-blue-100/70">Let's build your next-gen infrastructure.</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-600 transition-all">
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default FintechScale;

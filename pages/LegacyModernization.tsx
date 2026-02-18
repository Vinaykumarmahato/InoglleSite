import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    GitBranch,
    RefreshCw,
    Database,
    Server,
    Layout,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Layers,
    Code,
    Box,
    Globe,
    Archive,
    Zap,
    ShieldCheck,
    TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LegacyModernization = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Purple/Amber theme for Transformation) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <RefreshCw size={16} /> Legacy Modernization Services
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Transform the Past. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500">Power the Future.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            We revitalize aging software systems, turning technical debt into competitive advantage.
                            Modernize your monoliths, migrate to the cloud, and unlock agility without business disruption.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Assess Your Systems <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                See Transformations
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- The Modernization Challenge (Problem/Solution) --- */}
                <section className="py-24 bg-slate-950/50 border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                {/* Before/After Visual */}
                                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
                                    <div className="bg-slate-950 rounded-xl p-8 overflow-hidden relative">
                                        <div className="absolute top-4 right-4 text-xs font-mono text-slate-500">Legacy_System_v1.0</div>
                                        <div className="space-y-3 opacity-30 blur-[1px]">
                                            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                                            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                                            <div className="h-4 bg-slate-700 rounded w-5/6"></div>
                                            <div className="h-32 bg-slate-800 rounded border border-slate-700 p-4 font-mono text-xs text-red-400">
                                                Error: Connection Timeout<br />
                                                at Database_Driver_Old.js:402<br />
                                                Dependency Deprecated Warning
                                            </div>
                                        </div>

                                        {/* Transformation Arrow */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-full border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                                                <ArrowRight className="text-purple-400 w-8 h-8 animate-pulse" />
                                            </div>
                                        </div>

                                        {/* After Layer */}
                                        <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-green-500/30 rounded-lg p-4 shadow-2xl transform translate-y-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-bold text-white">Modern Architecture v2.0</span>
                                                <span className="text-xs text-green-400 flex items-center gap-1"><CheckCircle2 size={12} /> Active</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Microservices</span>
                                                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Cloud-Native</span>
                                                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-1 rounded">Scalable</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Breathing New Life into <span className="text-purple-500">Critical Systems</span>.</h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Legacy systems hold your core business logic, but they stifle innovation. We extract that value and replatform it into modern, scalable architectures.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Eliminate Technical Debt & Security Risks",
                                        "Reduce Maintenance Costs by up to 40%",
                                        "Improve System Performance & Scalability",
                                        "Enable Integrations with AI & Modern APIs"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <div className="bg-purple-500/20 p-1 rounded-full"><CheckCircle2 size={16} className="text-purple-400" /></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Modernization Strategies --- */}
                <section className="py-24 bg-slate-950 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Modernization Approach</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                We employ proven "6R" strategies tailored to your specific architectural needs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Box className="text-amber-400" size={40} />,
                                    title: "Replatforming",
                                    desc: "Moving applications to the cloud with minimal code changes to leverage managed services (RDS, Elastic Beanstalk)."
                                },
                                {
                                    icon: <Layers className="text-purple-400" size={40} />,
                                    title: "Refactoring",
                                    desc: "Re-architecturing monolithic codebases into microservices or serverless functions for true cloud-native agility."
                                },
                                {
                                    icon: <Globe className="text-blue-400" size={40} />,
                                    title: "Rehosting",
                                    desc: "Rapid 'Lift and Shift' migration to cloud infrastructure to immediately reduce data center footprint."
                                },
                                {
                                    icon: <Code className="text-emerald-400" size={40} />,
                                    title: "Code Remediation",
                                    desc: "Upgrading outdated languages (e.g., Java 8 to 17, .NET Framework to Core) and libraries for security and performance."
                                },
                                {
                                    icon: <Layout className="text-rose-400" size={40} />,
                                    title: "UX Refresh",
                                    desc: "Decoupling the frontend to implement modern UI frameworks (React, Angular) without rewriting the backend logic."
                                },
                                {
                                    icon: <Database className="text-cyan-400" size={40} />,
                                    title: "Data Migration",
                                    desc: "Moving from legacy on-prem databases to scalable, managed cloud databases (SQL/NoSQL) with zero data loss."
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/40 p-10 rounded-2xl border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900/60 transition-all group">
                                    <div className="mb-6 bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Process/Steps --- */}
                <section className="py-24 bg-[#080c1e] border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">The Transformation Roadmap</h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Assessment", text: "Deep dive analysis of current code, data, and infrastructure dependencies.", icon: <Archive size={24} /> },
                                { step: "02", title: "Strategy", text: "Defining the target architecture and selecting the optimal 'R' approach.", icon: <TrendingUp size={24} /> },
                                { step: "03", title: "Execution", text: "Iterative migration and modernization in parallel with business operations.", icon: <Zap size={24} /> },
                                { step: "04", title: "Optimization", text: "Fine-tuning performance, cost, and security in the new environment.", icon: <ShieldCheck size={24} /> }
                            ].map((phase, idx) => (
                                <div key={idx} className="relative p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors">
                                    <div className="text-5xl font-bold text-slate-800 absolute right-4 top-4 select-none opacity-50">{phase.step}</div>
                                    <div className="mb-4 text-purple-400">{phase.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{phase.title}</h3>
                                    <p className="text-slate-400 text-sm relative z-10">{phase.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Stop Maintaining, Start Innovating.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Legacy systems are costly and risky. Let's build a roadmap to modernize your technology stack today.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-purple-50 hover:scale-105 transition-all flex items-center gap-2">
                                Schedule a Legacy Assessment <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default LegacyModernization;

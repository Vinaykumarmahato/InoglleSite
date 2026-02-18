import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    Server,
    Database,
    Globe,
    Cpu,
    Code,
    Layers,
    ArrowRight,
    CheckCircle2,
    Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsSaaS = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    {/* Background Effects */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider animate-fade-in-up shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                                <Code size={14} /> Custom Software Case Study
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                            Building the Backbone of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Global Supply Chains.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            How we architected a multi-tenant SaaS platform that processes $2B+ in annual logistics transactions for a Fortune 500 client.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">35%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Operational Efficiency</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Real-time</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Global Tracking</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">50TB+</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Data Processed / Mo</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Zero</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Vendor Lock-in</div>
                        </div>
                    </div>
                </section>

                {/* --- The Narrative --- */}
                <section className="py-32 bg-[#020617] relative">
                    <div className="max-w-6xl mx-auto px-6 space-y-32">

                        {/* Challenge Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-block text-indigo-500 font-mono text-sm mb-4">01. THE PROBLEM</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Fragmented Systems, <br />Stalled Growth.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    The client was relying on a patchwork of 12 different legacy ERP systems acquired through mergers. Data silos meant that tracking a container from Shanghai to Rotterdam required manual emails and spreadsheets.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "No single source of truth for inventory.",
                                        "Slow capabilities to onboard new vendors.",
                                        "High maintenance costs for aging on-premise servers."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-[20px]"><CheckCircle2 size={20} className="text-red-400" /></div>
                                            <p className="text-slate-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual: Fragmented/Broken Connection */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
                                    <div className="grid grid-cols-2 gap-4 opacity-50">
                                        <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-600">Legacy ERP A</div>
                                        <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-600">Legacy ERP B</div>
                                        <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-600">Spreadsheets</div>
                                        <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-600">Manual Entry</div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-full font-mono text-sm font-bold backdrop-blur-md">
                                            DATA SILOS DETECTED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>
                                {/* Visual: Unified Dashboard */}
                                <div className="relative bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-2xl">
                                    <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-slate-800">
                                        {/* Fake Dashboard UI */}
                                        <div className="h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="text-white font-bold text-lg">Global Fleet View</div>
                                                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">System Healthy</div>
                                            </div>
                                            <div className="h-32 bg-indigo-500/10 rounded-lg border border-indigo-500/20 mb-4 flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] opacity-10 bg-cover bg-center"></div>
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping absolute top-1/2 left-1/4"></div>
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping absolute top-1/3 left-1/2"></div>
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping absolute bottom-1/3 right-1/4"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-2 bg-slate-800 rounded w-3/4"></div>
                                                <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-block text-indigo-500 font-mono text-sm mb-4">02. THE SOLUTION</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">A Unified, Cloud-Native <br />SaaS Platform.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    We engineered a bespoke microservices architecture. Instead of patching old systems, we built a new central nervous system for their operations.
                                </p>

                                <div className="space-y-6">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                            <Layers size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Modular Architecture</h4>
                                            <p className="text-slate-400 text-sm">Decoupled modules for Inventory, Logistics, and Billing allowing independent scaling.</p>
                                        </div>
                                    </div>

                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all">
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Real-time Visibility</h4>
                                            <p className="text-slate-400 text-sm">WebSocket integration providing sub-second updates on shipment locations globally.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- Tech Stack Grid --- */}
                <section className="py-24 bg-[#0B1120] border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-bold text-white mb-4">Under the Hood</h3>
                            <p className="text-slate-400">Built with battle-tested technologies for enterprise scale.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "React + Vite", cat: "Frontend", icon: <Code size={20} /> },
                                { name: "Node.js (NestJS)", cat: "Backend", icon: <Server size={20} /> },
                                { name: "PostgreSQL", cat: "Database", icon: <Database size={20} /> },
                                { name: "Redis", cat: "Caching", icon: <Cpu size={20} /> },
                                { name: "AWS ECS", cat: "Infrastructure", icon: <Box size={20} /> },
                                { name: "Docker", cat: "Containerization", icon: <Layers size={20} /> },
                                { name: "GraphQL", cat: "API Layer", icon: <Globe size={20} /> },
                                { name: "Terraform", cat: "IaC", icon: <Code size={20} /> },
                            ].map((tech, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all group">
                                    <div className="text-slate-500 mb-3 group-hover:text-indigo-400 transition-colors">{tech.icon}</div>
                                    <div className="font-bold text-white text-lg">{tech.name}</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">{tech.cat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Need custom software that scales?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Stop wrestling with off-the-shelf limitations. Let's build exactly what your business needs.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all hover:-translate-y-1">
                            Book a Technical Strategy Session <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default LogisticsSaaS;

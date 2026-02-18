import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    Building2,
    Database,
    Server,
    Terminal,
    RefreshCw,
    ArrowRight,
    Monitor,
    CheckCircle2,
    HardDrive
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LegacyModernizationCase = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    <div className="absolute inset-0 z-0">
                        {/* Retro-Futurism Grid */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider animate-fade-in-up shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                <Building2 size={14} /> Legacy Modernization Case Study
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                            Unlocking Value from <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Decades of Data.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            How we helped a century-old Manufacturing Giant transition from Mainframes to Microservices without a single day of downtime.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">4x</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Faster Processing</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">100%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Data Integrity</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">$1.2M</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Saved Annually</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">API</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">First Approach</div>
                        </div>
                    </div>
                </section>

                {/* --- The Narrative --- */}
                <section className="py-32 bg-[#020617] relative">
                    <div className="max-w-6xl mx-auto px-6 space-y-32">

                        {/* Challenge Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-block text-orange-500 font-mono text-sm mb-4">01. THE RISK</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Trapped in <br />COBOL.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    The client's core inventory system ran on a 30-year-old mainframe. The developers who wrote the original code had retired. Any attempt to add new features risked breaking the entire supply chain.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Inability to integrate with modern 3rd party APIs.",
                                        "Exorbitant licensing fees for legacy hardware.",
                                        "Zero documentation for millions of lines of code."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-[20px]"><Monitor size={20} className="text-amber-400" /></div>
                                            <p className="text-slate-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual: Old Terminal Green Screen */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full"></div>
                                <div className="relative bg-black border-4 border-gray-700/50 p-6 rounded-xl shadow-2xl font-mono text-green-500 text-sm overflow-hidden h-80">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
                                    <div className="opacity-70 leading-relaxed">
                                        &gt; LOAD "INVENTORY.DAT",8,1<br />
                                        &gt; SEARCHING FOR RECORDS...<br />
                                        &gt; ERROR: SYNTAX ERROR IN LINE 4021<br />
                                        &gt; RETRYING CONNECTION... TIMEOUT<br />
                                        ************************************<br />
                                        * &nbsp;&nbsp;&nbsp; SYSTEM CRITICAL FAILURE &nbsp;&nbsp;&nbsp; *<br />
                                        ************************************<br />
                                        &gt; _
                                    </div>
                                    <div className="absolute bottom-4 right-4 text-xs bg-green-900/20 px-2 py-1 border border-green-500/30">
                                        STATUS: UNRESPONSIVE
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full"></div>
                                {/* Visual: Modern Rest API Visual */}
                                <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl">
                                    <div className="bg-[#1e293b] rounded-lg overflow-hidden border border-slate-700">
                                        <div className="flex border-b border-slate-700">
                                            <div className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-bold border-r border-slate-700">GET</div>
                                            <div className="px-4 py-2 text-slate-400 text-xs font-mono flex items-center">/api/v1/inventory/sku-2024</div>
                                        </div>
                                        <div className="p-4 font-mono text-xs text-blue-300">
                                            <span className="text-purple-400">{"{"}</span><br />
                                            &nbsp;&nbsp;"status": <span className="text-green-400">"success"</span>,<br />
                                            &nbsp;&nbsp;"data": <span className="text-purple-400">{"{"}</span><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;"item": "Industrial Pump X1",<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;"stock": 4500,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;"location": "Warehouse A"<br />
                                            &nbsp;&nbsp;<span className="text-purple-400">{"}"}</span>,<br />
                                            &nbsp;&nbsp;"latency": "12ms"<br />
                                            <span className="text-purple-400">{"}"}</span>
                                        </div>
                                    </div>
                                    {/* Connected Nodes */}
                                    <div className="absolute -right-4 top-1/2 flex flex-col gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">📱</div>
                                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">💻</div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-block text-orange-500 font-mono text-sm mb-4">02. THE STRATEGY</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">API-First <br />Re-Architecting.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    We didn't just wrap the old system. We used the Strangler Pattern to gradually replace mainframe functions with Go-based microservices, exposing everything via a clean GraphQL API.
                                </p>

                                <div className="space-y-6">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                            <RefreshCw size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Incremental Migration</h4>
                                            <p className="text-slate-400 text-sm">Modules were migrated one by one (e.g., Billing, then Shipping) to minimize risk.</p>
                                        </div>
                                    </div>

                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                            <Database size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Data Liberation</h4>
                                            <p className="text-slate-400 text-sm">Moved data from flat files to a scalable PostgreSQL cluster for real analytics.</p>
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
                            <h3 className="text-3xl font-bold text-white mb-4">The Modern Stack</h3>
                            <p className="text-slate-400">Bridging the gap between legacy and future.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "GoLang", cat: "Microservices", icon: <Terminal size={20} /> },
                                { name: "GraphQL", cat: "API Gateway", icon: <Server size={20} /> },
                                { name: "PostgreSQL", cat: "Database", icon: <Database size={20} /> },
                                { name: "Docker", cat: "Containerization", icon: <HardDrive size={20} /> },
                                { name: "Kafka", cat: "Event Streaming", icon: <RefreshCw size={20} /> },
                                { name: "React", cat: "Modern UI", icon: <Monitor size={20} /> },
                            ].map((tech, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-orange-500/50 hover:bg-slate-800/80 transition-all group">
                                    <div className="text-slate-500 mb-3 group-hover:text-orange-400 transition-colors">{tech.icon}</div>
                                    <div className="font-bold text-white text-lg">{tech.name}</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">{tech.cat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-orange-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">System Feeling Old?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Don't let legacy code hold your business hostage. Modernize safely with us.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 shadow-xl shadow-orange-600/20 hover:shadow-orange-600/40 transition-all hover:-translate-y-1">
                            Plan Your Migration <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default LegacyModernizationCase;

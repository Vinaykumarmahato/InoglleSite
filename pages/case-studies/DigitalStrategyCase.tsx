import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    Compass,
    Map,
    Flag,
    Target,
    Users,
    Rocket,
    ArrowRight,
    TrendingUp,
    LineChart,
    Lightbulb,
    BrainCircuit
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalStrategyCase = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    <div className="absolute inset-0 z-0">
                        {/* Strategy Grid */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/40 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-wider animate-fade-in-up shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                                <Compass size={14} /> Digital Strategy Case Study
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                            From Brick & Mortar to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Omichannel Leader.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            A comprehensive 3-year Digital Transformation roadmap that increased online revenue by 200% for a traditional Retail chain.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">200%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Online Revenue</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">3X</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Customer LTV</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">12mo</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">ROI Achieved</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">New</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Business Model</div>
                        </div>
                    </div>
                </section>

                {/* --- The Narrative --- */}
                <section className="py-32 bg-[#020617] relative">
                    <div className="max-w-6xl mx-auto px-6 space-y-32">

                        {/* Challenge Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-block text-teal-500 font-mono text-sm mb-4">01. THE STAGNATION</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Digital <br />Irrelevance.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    While competitors were capturing the e-commerce market, this retailer relied solely on foot traffic. Their existing "website" was a static brochure with no shopping capability, and their inventory systems were completely offline.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Declining same-store sales year over year.",
                                        "No customer data collection or loyalty program.",
                                        "Brand perception as 'outdated' among younger demographics."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-[20px]"><TrendingUp size={20} className="text-red-400 rotate-180" /></div>
                                            <p className="text-slate-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual: Empty Store / Graph Down */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex items-center justify-center">
                                    <div className="text-center opacity-50 grayscale">
                                        <div className="text-6xl mb-4 text-slate-700">📉</div>
                                        <div className="text-2xl font-bold text-slate-500">sales_2023.xls</div>
                                        <div className="text-red-500 font-mono text-sm mt-2">-15% YoY Growth</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full"></div>
                                {/* Visual: Roadmap Timeline */}
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                                    <div className="space-y-6 relative pl-8 border-l-2 border-slate-800">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-slate-900"></div>
                                            <div className="text-xs text-teal-400 font-bold mb-1">PHASE 1 (Month 1-3)</div>
                                            <h4 className="text-white font-bold">Quick Wins</h4>
                                            <p className="text-slate-500 text-sm">Launch Shopify MVP store.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-teal-500/50 border-4 border-slate-900"></div>
                                            <div className="text-xs text-teal-400 font-bold mb-1">PHASE 2 (Month 4-9)</div>
                                            <h4 className="text-white font-bold">Integration</h4>
                                            <p className="text-slate-500 text-sm">Connect POS to Online Inventory.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-teal-500/20 border-4 border-slate-900"></div>
                                            <div className="text-xs text-teal-400 font-bold mb-1">PHASE 3 (Month 10+)</div>
                                            <h4 className="text-white font-bold">Personalization</h4>
                                            <p className="text-slate-500 text-sm">AI-driven loyalty app launch.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-block text-teal-500 font-mono text-sm mb-4">02. THE ROADMAP</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Phased <br />Transformation.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    We didn't just build technology; we redefined their business model. We created a "Phygital" experience connecting their physical stores with a new digital ecosystem.
                                </p>

                                <div className="space-y-6">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">North Star Metrics</h4>
                                            <p className="text-slate-400 text-sm">Shifted focus from 'Store Footfall' to 'Customer Lifetime Value' (CLTV).</p>
                                        </div>
                                    </div>

                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <Users size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Change Management</h4>
                                            <p className="text-slate-400 text-sm">Trained 500+ store staff to use new digital tools for "Endless Aisle" selling.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- Tools Grid --- */}
                <section className="py-24 bg-[#0B1120] border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-bold text-white mb-4">Strategic Frameworks</h3>
                            <p className="text-slate-400">Proven methodologies for success.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "Design Thinking", cat: "User Research", icon: <Lightbulb size={20} /> },
                                { name: "Agile Scrum", cat: "Delivery", icon: <Rocket size={20} /> },
                                { name: "SWOT Analysis", cat: "Market Fit", icon: <Map size={20} /> },
                                { name: "OKRs", cat: "Goal Setting", icon: <Flag size={20} /> },
                                { name: "Miro", cat: "Collab Tool", icon: <BrainCircuit size={20} /> },
                                { name: "Jira", cat: "Project Mgmt", icon: <Target size={20} /> },
                            ].map((tech, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-teal-500/50 hover:bg-slate-800/80 transition-all group">
                                    <div className="text-slate-500 mb-3 group-hover:text-teal-400 transition-colors">{tech.icon}</div>
                                    <div className="font-bold text-white text-lg">{tech.name}</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">{tech.cat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-teal-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Define Your Future.</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Technology is useless without a plan. Let's build your roadmap to market leadership.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-500 shadow-xl shadow-teal-600/20 hover:shadow-teal-600/40 transition-all hover:-translate-y-1">
                            Book a Strategy Workshop <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default DigitalStrategyCase;

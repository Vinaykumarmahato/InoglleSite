import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Compass,
    Map,
    Target,
    TrendingUp,
    Users,
    Lightbulb,
    BarChart,
    ArrowRight,
    Globe,
    PieChart,
    CheckCircle,
    Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalStrategy = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Teal/Emerald theme for Strategy & Growth) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                    {/* Subtle Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <Compass size={16} /> Strategic Consulting
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Navigation for the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Digital Age.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            We define clear, actionable roadmaps that align technology investments with business goals.
                            Move from ad-hoc adoption to strategic transformation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Start Your Roadmap <ArrowRight size={20} />
                            </Link>
                            <Link to="/about" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                Our Methodology
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- The Strategic Framework --- */}
                <section className="py-24 bg-slate-950 relative border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Strategy with Operational Precision</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                We don't just deliver slide decks. We provide blueprints for execution.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Pillar 1 */}
                            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Target size={120} />
                                </div>
                                <div className="bg-teal-500/10 w-16 h-16 rounded-xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Map size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Vision & Roadmap</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Defining the "North Star" for your digital journey. We map out 1-3 year technology horizons aligned with market trends and competitive analysis.
                                </p>
                                <ul className="space-y-2">
                                    {["Gap Analysis", "Market Benchmarking", "Investment Planning"].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                            <CheckCircle size={14} className="text-teal-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pillar 2 */}
                            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Lightbulb size={120} />
                                </div>
                                <div className="bg-emerald-500/10 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                                    <Briefcase size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Operating Model</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Designing the organizational structure to support digital speed. We help shift from project-based delivery to product-centric teams.
                                </p>
                                <ul className="space-y-2">
                                    {["Agile Transformation", "Team Topologies", "Governance Frameworks"].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                            <CheckCircle size={14} className="text-emerald-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pillar 3 */}
                            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <TrendingUp size={120} />
                                </div>
                                <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                                    <BarChart size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Tech Effectiveness</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Ensuring your technology stack delivers ROI. We assess architecture, buy-vs-build decisions, and vendor ecosystems.
                                </p>
                                <ul className="space-y-2">
                                    {["Architecture Review", "Vendor Selection", "Cost Optimization"].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                            <CheckCircle size={14} className="text-cyan-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Strategic Imperatives --- */}
                <section className="py-24 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Are you asking the <br />
                                    <span className="text-teal-400">Right Questions?</span>
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        { question: "Is our tech stack hindering or helping innovation?", text: "Legacy debt often consumes 70% of IT budgets." },
                                        { question: "How do we monetize our data assets?", text: "Data is the new oil, but only if refined into insights." },
                                        { question: "Are we secured against modern threats?", text: "Security cannot be an afterthought in digital design." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="mt-1">
                                                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">?</div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1">{item.question}</h4>
                                                <p className="text-slate-400">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-teal-500/10 blur-[80px] rounded-full"></div>

                                {/* Interactive Graph Visual */}
                                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-white font-bold">Digital Maturity Index</h3>
                                        <div className="flex gap-2 text-xs">
                                            <span className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 bg-slate-600 rounded-full"></div> Industry Avg</span>
                                            <span className="flex items-center gap-1 text-teal-400"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Your Goal</span>
                                        </div>
                                    </div>

                                    {/* Graphic / Chart Simulation */}
                                    <div className="space-y-6">
                                        {["Customer Experience", "Operational Agility", "Data Capability", "Innovation Culture"].map((label, i) => (
                                            <div key={label}>
                                                <div className="flex justify-between text-sm text-slate-300 mb-2">
                                                    <span>{label}</span>
                                                </div>
                                                <div className="h-2 bg-slate-800 rounded-full relative">
                                                    {/* Industry Avg Marker */}
                                                    <div className="absolute top-0 bottom-0 bg-slate-600 w-1 rounded-full" style={{ left: `${30 + i * 10}%` }}></div>
                                                    {/* Goal Bar */}
                                                    <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" style={{ width: `${60 + i * 8}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 p-4 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center gap-3">
                                        <TrendingUp className="text-teal-400" />
                                        <p className="text-sm text-teal-200">
                                            <span className="font-bold">Insight:</span> Companies with high digital maturity are 23% more profitable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-teal-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Chart Your Course.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Turn uncertainty into clarity. Let's build a strategy that works.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-teal-50 hover:scale-105 transition-all flex items-center gap-2">
                                Start a Strategy Session <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default DigitalStrategy;

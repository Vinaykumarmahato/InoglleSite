import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    BarChart2,
    PieChart,
    Database,
    TrendingUp,
    Activity,
    Binary,
    BrainCircuit,
    ArrowRight,
    Layers,
    Search,
    LineChart,
    Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalytics = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Indigo/Blue for Intelligence) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <BarChart2 size={16} /> Advanced Data Analytics
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            From Raw Data to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Decisive Action.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            Unlock the hidden value in your data. We build scalable data pipelines, intuitive dashboards, and predictive models that empower you to make smarter, faster decisions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Unlock Your Insights <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                View Data Stories
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Key Capabilities Grid --- */}
                <section className="py-24 bg-slate-950 relative border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Intelligence Engine</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Our comprehensive data services cover the entire lifecycle, from ingestion to advanced AI modeling.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Data Engineering",
                                    desc: "Building robust ETL/ELT pipelines and data lakes (Snowflake, Databricks) to centralize your information.",
                                    icon: <Database className="text-blue-400" size={32} />
                                },
                                {
                                    title: "Business Intelligence",
                                    desc: "Interactive dashboards (Power BI, Tableau) that visualize KPIs and operational metrics in real-time.",
                                    icon: <PieChart className="text-indigo-400" size={32} />
                                },
                                {
                                    title: "Predictive Analytics",
                                    desc: "Using statistical algorithms and machine learning to forecast trends and customer behaviors.",
                                    icon: <TrendingUp className="text-purple-400" size={32} />
                                },
                                {
                                    title: "Big Data Processing",
                                    desc: "Handling petabyte-scale datasets with distributed computing frameworks like Spark and Hadoop.",
                                    icon: <Layers className="text-cyan-400" size={32} />
                                },
                                {
                                    title: "Data Governance",
                                    desc: "Ensuring data quality, lineage, and security compliance across your entire organization.",
                                    icon: <Activity className="text-emerald-400" size={32} />
                                },
                                {
                                    title: "AI & ML Integration",
                                    desc: "Embedding custom AI models into your applications for automated decision-making.",
                                    icon: <BrainCircuit className="text-rose-400" size={32} />
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/40 transition-all group hover:-translate-y-1">
                                    <div className="mb-6 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Data Visualization Feature Section --- */}
                <section className="py-24 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                                    Eliminate the <br />
                                    <span className="text-indigo-400">Guesswork.</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Stop relying on gut feelings. Our analytics solutions provide the hard evidence you need to pivot strategies, optimize operations, and uncover new revenue streams.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Real-Time Visibility", text: "Monitor your business pulse as it happens, not days later." },
                                        { title: "Customer 360", text: "Unify data for a single, comprehensive view of every customer." },
                                        { title: "Operational Efficiency", text: "Identify bottlenecks and optimize resource allocation instantly." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="mt-1">
                                                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                                    <Binary size={20} />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full"></div>

                                {/* Interactive Analytics Dashboard Visual */}
                                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                                        <div className="font-bold text-white flex items-center gap-2"><LineChart className="text-indigo-400" /> Revenue Analytics</div>
                                        <div className="flex gap-2">
                                            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">Last 30 Days</span>
                                        </div>
                                    </div>

                                    {/* Chart Area Simulation */}
                                    <div className="flex items-end gap-2 h-40 mb-6">
                                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                            <div key={i} className="flex-1 h-full bg-indigo-500/20 rounded-t hover:bg-indigo-500 transition-colors relative group/bar">
                                                <div
                                                    className="absolute bottom-0 w-full bg-indigo-500 rounded-t transition-all duration-500"
                                                    style={{ height: `${h}%` }}
                                                ></div>
                                                {/* Tooltip */}
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
                                                    ${h}k Revenue
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stat Cards Row */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                            <div className="text-slate-500 text-xs mb-1">Total Sales</div>
                                            <div className="text-xl font-bold text-white">$2.4M</div>
                                            <div className="text-green-400 text-xs flex items-center gap-1 mt-1"><TrendingUp size={10} /> +12%</div>
                                        </div>
                                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                            <div className="text-slate-500 text-xs mb-1">Active Users</div>
                                            <div className="text-xl font-bold text-white">45.2k</div>
                                            <div className="text-green-400 text-xs flex items-center gap-1 mt-1"><TrendingUp size={10} /> +5%</div>
                                        </div>
                                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                            <div className="text-slate-500 text-xs mb-1">Conv. Rate</div>
                                            <div className="text-xl font-bold text-white">3.8%</div>
                                            <div className="text-red-400 text-xs flex items-center gap-1 mt-1"><TrendingUp size={10} className="rotate-180" /> -0.2%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Process Section --- */}
                <section className="py-24 bg-slate-950 border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-16">The Data Value Chain</h2>
                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[100px] left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 transform -translate-y-1/2 z-0"></div>

                            <div className="grid md:grid-cols-4 gap-8 relative z-10">
                                {[
                                    { title: "Ingest", desc: "Collecting data from all your silos.", icon: <Layers size={24} /> },
                                    { title: "Process", desc: "Cleaning and structuring for analysis.", icon: <Database size={24} /> },
                                    { title: "Analyze", desc: "Applying advanced algorithms.", icon: <Search size={24} /> },
                                    { title: "Act", desc: "Deploying insights to drive value.", icon: <Lightbulb size={24} /> }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-950 shadow-xl flex items-center justify-center text-indigo-400 mb-6 relative">
                                            <div className="absolute inset-0 rounded-full border border-indigo-500/30"></div>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-slate-400 text-sm max-w-[200px]">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Data is Your Strongest Asset.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Are you using it? Let's turn your raw numbers into a competitive advantage.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-indigo-50 hover:scale-105 transition-all flex items-center gap-2">
                                Start Your Data Transformation <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default DataAnalytics;

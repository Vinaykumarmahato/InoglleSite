import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    BarChart2,
    PieChart,
    TrendingUp,
    Database,
    BarChart,
    ArrowRight,
    BrainCircuit,
    Lightbulb,
    Target,
    Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalyticsCase = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    <div className="absolute inset-0 z-0">
                        {/* Data Flow Particles */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider animate-fade-in-up shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                <BarChart2 size={14} /> Data Analytics & AI Case Study
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                            Predicting Churn with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">92% Accuracy.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            How we helped a Telecom giant retain 50,000+ customers annually by building a real-time Churn Prediction Engine using Python & Spark.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">92%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Model Accuracy</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">50k+</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Customers Saved</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">$15M</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Revenue Retained</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">3s</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Inference Time</div>
                        </div>
                    </div>
                </section>

                {/* --- The Narrative --- */}
                <section className="py-32 bg-[#020617] relative">
                    <div className="max-w-6xl mx-auto px-6 space-y-32">

                        {/* Challenge Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-block text-purple-500 font-mono text-sm mb-4">01. THE LEAKY BUCKET</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Blind Customer <br />Exodus.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    The client was losing thousands of high-value subscribers every month to competitors. Their marketing team was blindly sending discount offers to everyone, wasting millions, instead of targeting those actually at risk.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Reactive retention (calling customers after they cancel).",
                                        "Data dispersed across CRM, Billing, and Support logs.",
                                        "No visibility into 'Why' a customer was leaving."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-[20px]"><TrendingUp size={20} className="text-pink-400 rotate-180" /></div>
                                            <p className="text-slate-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual: Chaotic Scatter Plot */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex items-center justify-center">
                                    {/* Scatter Plot Simulation */}
                                    <div className="relative w-full h-64 border-l border-b border-slate-700">
                                        {Array.from({ length: 50 }).map((_, i) => (
                                            <div key={i}
                                                className="absolute w-2 h-2 rounded-full bg-slate-600 opacity-50"
                                                style={{
                                                    left: `${Math.random() * 95}%`,
                                                    bottom: `${Math.random() * 95}%`
                                                }}
                                            ></div>
                                        ))}
                                        <div className="absolute bottom-2 right-2 text-xs text-slate-500">Usage (GB)</div>
                                        <div className="absolute top-2 left-2 text-xs text-slate-500 rotate-90 origin-top-left -ml-4">Bill Amount ($)</div>
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-slate-500 font-bold text-2xl rotate-[-15deg] opacity-20">NO PATTERN FOUND</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
                                {/* Visual: Clean Organized Cluster/Insights */}
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                                    <div className="flex gap-4 mb-6">
                                        <div className="flex-1 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
                                            <div className="text-red-400 font-bold mb-1">High Risk</div>
                                            <div className="text-2xl text-white font-bold">12%</div>
                                            <div className="text-[10px] text-red-300">Action: Call Now</div>
                                        </div>
                                        <div className="flex-1 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl text-center">
                                            <div className="text-yellow-400 font-bold mb-1">Med Risk</div>
                                            <div className="text-2xl text-white font-bold">35%</div>
                                            <div className="text-[10px] text-yellow-300">Action: Email Offer</div>
                                        </div>
                                        <div className="flex-1 bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-center">
                                            <div className="text-green-400 font-bold mb-1">Safe</div>
                                            <div className="text-2xl text-white font-bold">53%</div>
                                            <div className="text-[10px] text-green-300">Action: Ignore</div>
                                        </div>
                                    </div>
                                    {/* Feature Importance Bar */}
                                    <div className="space-y-3">
                                        <div className="text-xs text-slate-400 font-bold mb-1">TOP CHURN FACTORS</div>
                                        <div>
                                            <div className="flex justify-between text-xs text-purple-300 mb-1"><span>Dropped Calls &gt; 5%</span><span>88% Impact</span></div>
                                            <div className="h-2 bg-slate-800 rounded-full"><div className="h-full bg-purple-500 rounded-full w-[88%]"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs text-purple-300 mb-1"><span>Bill Increase &gt; $10</span><span>65% Impact</span></div>
                                            <div className="h-2 bg-slate-800 rounded-full"><div className="h-full bg-purple-500 rounded-full w-[65%]"></div></div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs text-purple-300 mb-1"><span>Support Ticket Unresolved</span><span>42% Impact</span></div>
                                            <div className="h-2 bg-slate-800 rounded-full"><div className="h-full bg-purple-500 rounded-full w-[42%]"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-block text-purple-500 font-mono text-sm mb-4">02. THE INTELLIGENCE</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Machine Learning <br />Pipeline.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    We aggregated 5 years of historical data into a Data Lake. Using XGBoost and Random Forest algorithms, we trained predictive models to identify "Churn Signals" weeks before a customer actually cancels.
                                </p>

                                <div className="space-y-6">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                                            <BrainCircuit size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Automated Retraining</h4>
                                            <p className="text-slate-400 text-sm">Models automatically re-learn from new data every week to maintain high accuracy.</p>
                                        </div>
                                    </div>

                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Actionable Dashboards</h4>
                                            <p className="text-slate-400 text-sm">Marketing teams get a daily list of 'At-Risk' customers with recommended best offers.</p>
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
                            <h3 className="text-3xl font-bold text-white mb-4">The AI Stack</h3>
                            <p className="text-slate-400">Processing Big Data at scale.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "Apache Spark", cat: "Data Processing", icon: <Database size={20} /> },
                                { name: "Python", cat: "ML Modeling", icon: <Code size={20} /> },
                                { name: "Tableau", cat: "Visualization", icon: <PieChart size={20} /> },
                                { name: "Snowflake", cat: "Data Warehouse", icon: <Database size={20} /> },
                                { name: "Airflow", cat: "Orchestration", icon: <BarChart size={20} /> }, // Used BarChart as icon replacement for ScatterPlot
                                { name: "TensorFlow", cat: "Deep Learning", icon: <BrainCircuit size={20} /> },
                            ].map((tech, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-purple-500/50 hover:bg-slate-800/80 transition-all group">
                                    <div className="text-slate-500 mb-3 group-hover:text-purple-400 transition-colors">{tech.icon}</div>
                                    <div className="font-bold text-white text-lg">{tech.name}</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">{tech.cat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Stop Guessing. Start Knowing.</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Transform your raw data into your most valuable business asset.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-500 shadow-xl shadow-purple-600/20 hover:shadow-purple-600/40 transition-all hover:-translate-y-1">
                            Calculate Your ROI <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};



export default DataAnalyticsCase;

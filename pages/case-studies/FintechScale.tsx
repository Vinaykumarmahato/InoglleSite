import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import CaseStudyLayout from './CaseStudyLayout';

const CaseStudyOne = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    <div className="absolute inset-0 z-0">
                        <img src="/placeholder-hero.jpg" alt="Fintech App UI" className="w-full h-full object-cover opacity-20 blur-sm" />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-950 to-slate-950"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 animate-fade-in-up">
                            Banking & Finance Case Study
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none animate-fade-in-up delay-100">
                            Scaling a Neobank to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">5 Million Users.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            How we re-engineered legacy infrastructure into a cloud-native powerhouse capable of handling 10,000 transactions per second.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-bold text-white mb-1">99.99%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">System Uptime</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-white mb-1">10k+</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">TPS Capablity</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-white mb-1">-40%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Infra Costs</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-white mb-1">6mo</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Time to Deploy</div>
                        </div>
                    </div>
                </section>

                {/* --- The Content --- */}
                <section className="py-32 bg-[#020617]">
                    <div className="max-w-5xl mx-auto px-6 space-y-32">

                        {/* Challenge */}
                        <div className="grid md:grid-cols-2 gap-16 items-center group">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-red-500/10 blur-[80px] rounded-full group-hover:bg-red-500/20 transition-all duration-700"></div>
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
                                    <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> Pain Points</h3>
                                    <ul className="space-y-4 text-slate-300 list-disc pl-5 marker:text-red-500">
                                        <li>Frequent downtime during peak transaction hours (payday/holidays).</li>
                                        <li>Monolithic architecture prevented rapid feature deployment.</li>
                                        <li>Rising AWS costs due to inefficient resource allocation.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-8xl font-bold text-slate-800/50 absolute -z-10 -ml-8 -mt-16 select-none">01</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">The Growth Bottleneck.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    Our client, a rapidly growing European neobank, hit a ceiling. Their initial monolithic NodeJS backend, designed for an MVP, began crumbling under the weight of 500k concurrent users.
                                    <br /><br />
                                    Every new feature release risked bringing down the entire system, and database locks were causing transaction timeouts, directly impacting user trust.
                                </p>
                            </div>
                        </div>

                        {/* Solution */}
                        <div className="grid md:grid-cols-2 gap-16 items-center group">
                            <div>
                                <div className="text-8xl font-bold text-slate-800/50 absolute -z-10 -ml-8 -mt-16 select-none">02</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Microservices Transformation.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                    We orchestrated a "strangler fig" migration strategy, gradually peeling off services from the monolith while keeping the system live.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">A</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Event-Driven Architecture</h4>
                                            <p className="text-slate-400 text-sm">Implemented Kafka for asynchronous processing of non-critical tasks (notifications, analytics).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 w-8 h-8 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm">B</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Database Sharding</h4>
                                            <p className="text-slate-400 text-sm">Migrated core ledger from single Postgres instance to sharded CockroachDB clusters.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl overflow-hidden">
                                    {/* Abstract Architecture Diagram */}
                                    <div className="flex justify-center items-center h-64 border-2 border-dashed border-slate-800 rounded-lg bg-slate-950">
                                        <div className="text-slate-600 font-mono text-sm">[ Architecture Diagram Placeholder ]</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- Tech Stack --- */}
                <section className="py-24 border-t border-slate-900 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-12">Technologies Deployed</h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {["Kubernetes", "GoLang", "Kafka", "Redis", "CockroachDB", "Prometheus", "AWS Lambda"].map((tech, i) => (
                                <div key={i} className="px-8 py-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-bold text-lg hover:border-blue-500 hover:text-white hover:bg-slate-800 transition-all cursor-default">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default CaseStudyOne;

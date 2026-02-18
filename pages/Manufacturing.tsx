import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Factory,
    Settings,
    Truck,
    Box,
    Cpu,
    Activity,
    ArrowRight,
    Wifi,
    Zap,
    RotateCw,
    BarChart,
    Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-orange-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Orange/Amber/Slate for Industrial) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <Factory size={16} /> Industry 4.0 Solutions
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            The Connected <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Factory Floor.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            Unlock unprecedented efficiency with IoT, AI-driven predictive maintenance, and real-time supply chain visibility.
                            From the assembly line to the boardroom.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Digitize Your Plant <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                IoT Success Stories
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Solutions Grid --- */}
                <section className="py-24 bg-slate-950 relative border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Smart Manufacturing</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Bridging operational technology (OT) with information technology (IT).
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Industrial IoT (IIoT)",
                                    desc: "Connecting machines, sensors, and devices to capture real-time production data.",
                                    icon: <Wifi className="text-orange-400" size={32} />
                                },
                                {
                                    title: "Digital Twins",
                                    desc: "Creating virtual replicas of physical assets to simulate performance and optimize workflows.",
                                    icon: <Layers className="text-amber-400" size={32} />
                                },
                                {
                                    title: "Predictive Maintenance",
                                    desc: "Using AI to predict equipment failures before they happen, reducing downtime.",
                                    icon: <Activity className="text-red-400" size={32} />
                                },
                                {
                                    title: "Supply Chain Visibility",
                                    desc: "End-to-end tracking of raw materials and finished goods across the globe.",
                                    icon: <Truck className="text-blue-400" size={32} />
                                },
                                {
                                    title: "Quality Assurance",
                                    desc: "Automated visual inspection systems using computer vision to detect defects.",
                                    icon: <Settings className="text-emerald-400" size={32} />
                                },
                                {
                                    title: "Inventory Management",
                                    desc: "Smart warehousing solutions with RFID and automated picking optimization.",
                                    icon: <Box className="text-purple-400" size={32} />
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-orange-500/40 transition-all group">
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

                {/* --- Predictive Maintenance Feature --- */}
                <section className="py-24 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Zero Unplanned <br />
                                    <span className="text-orange-500">Downtime.</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Stop reacting to breakdowns. Our predictive maintenance models analyze vibration, temperature, and acoustic data to schedule repairs exactly when needed.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-orange-500/10 p-2 rounded-lg text-orange-400"><Cpu size={24} /></div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">Sensor Integration</h4>
                                            <p className="text-slate-400">Compatible with Siemens, Rockwell, and legacy PLCs.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-amber-500/10 p-2 rounded-lg text-amber-400"><RotateCw size={24} /></div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">Lifecycle Extension</h4>
                                            <p className="text-slate-400">Maximize the ROI of expensive industrial assets.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-600/10 blur-[100px] rounded-full"></div>

                                {/* Dashboard Visual: Machine Status */}
                                <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl overflow-hidden font-mono">
                                    <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                                        <div className="text-orange-400 font-bold flex items-center gap-2"><Zap size={18} /> MACHINE_ID: PRESS_04</div>
                                        <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">RUNNING</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-slate-950 p-4 rounded text-center">
                                            <div className="text-xs text-slate-500">Vibration (mm/s)</div>
                                            <div className="text-2xl font-bold text-white">4.2</div>
                                            <div className="h-1 bg-slate-800 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 w-[60%]"></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950 p-4 rounded text-center border border-red-500/30 bg-red-500/5">
                                            <div className="text-xs text-red-300">Temperature (°C)</div>
                                            <div className="text-2xl font-bold text-white">82.1</div>
                                            <div className="h-1 bg-slate-800 mt-2 rounded-full overflow-hidden">
                                                {/* Warning state */}
                                                <div className="h-full bg-red-500 w-[95%] animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                                        <div className="flex items-start gap-3">
                                            <Activity className="text-yellow-400 mt-1" size={20} />
                                            <div>
                                                <div className="text-white font-bold text-sm">Predictive Alert</div>
                                                <p className="text-xs text-slate-400 mt-1">
                                                    Thermal threshold exceeded in Bearing Assembly B.
                                                    <br /><span className="text-orange-400">Recommended Action: Schedule maintenance within 48h.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-orange-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Optimize Your Operations.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            From raw material to finished product, we engineer efficiency at every step.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-orange-50 hover:scale-105 transition-all flex items-center gap-2">
                                Start Discovery Phase <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Manufacturing;

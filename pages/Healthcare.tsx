import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Heart,
    Activity,
    Stethoscope,
    FileCheck,
    Shield,
    Users,
    ArrowRight,
    Tablet,
    Video,
    Database,
    Thermometer,
    Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Healthcare = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-teal-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Teal/Cyan/White for Health & Tech) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <Heart size={16} /> Healthcare & Life Sciences
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Technology that <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Saves Lives.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            Transforming patient care through interoperability, AI diagnostics, and seamless digital health experiences.
                            Secure, compliant, and human-centered.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Innovate Healthcare <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                Digital Health Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Solutions Grid --- */}
                <section className="py-24 bg-slate-950 relative border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Patient-Centric Solutions</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Bridging the gap between caregivers and patients with focused technology.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Telemedicine Platforms",
                                    desc: "HIPAA-compliant video consultation apps bringing care to remote patients.",
                                    icon: <Video className="text-teal-400" size={32} />
                                },
                                {
                                    title: "EHR Interoperability",
                                    desc: "Seamlessly exchanging data between Epic, Cerner, and custom apps via FHIR/HL7 standards.",
                                    icon: <Database className="text-cyan-400" size={32} />
                                },
                                {
                                    title: "RPM (Remote Monitoring)",
                                    desc: "IoT integration with wearables to track vitals and alert providers instantly.",
                                    icon: <Activity className="text-emerald-400" size={32} />
                                },
                                {
                                    title: "AI Diagnostics",
                                    desc: "Machine learning models assisting radiologists and pathologists in early detection.",
                                    icon: <Microscope className="text-indigo-400" size={32} />
                                },
                                {
                                    title: "Patient Portals",
                                    desc: "User-friendly apps for appointment scheduling, lab results, and prescription refills.",
                                    icon: <Tablet className="text-sky-400" size={32} />
                                },
                                {
                                    title: "Clinical Trial Management",
                                    desc: "Digitizing consent, recruitment, and data capture for faster drug development.",
                                    icon: <FileCheck className="text-rose-400" size={32} />
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-teal-500/40 transition-all group">
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

                {/* --- Compliance Feature --- */}
                <section className="py-24 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Compliance is <br />
                                    <span className="text-teal-500">Non-Negotiable.</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    We understand the sensitive nature of PHI (Protected Health Information). Our engineering practices are built around strict regulatory adherence from day one.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { title: "HIPAA", desc: "US Privacy & Security" },
                                        { title: "GDPR", desc: "EU Data Protection" },
                                        { title: "HL7 / FHIR", desc: "Data Standards" },
                                        { title: "FDA SaMD", desc: "Software as Medical Device" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 bg-slate-900 rounded-lg border border-slate-800/50 flex flex-col items-start gap-2">
                                            <Shield size={24} className="text-teal-400" />
                                            <span className="text-white font-bold">{item.title}</span>
                                            <span className="text-xs text-slate-500">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <div className="absolute inset-0 bg-teal-600/10 blur-[100px] rounded-full"></div>

                                {/* Card Visual: Doctor/Patient View */}
                                <div className="relative w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="bg-teal-600 p-6 text-white flex justify-between items-center">
                                        <div>
                                            <div className="text-xs opacity-80 uppercase tracking-widest font-semibold">Patient Profile</div>
                                            <div className="text-2xl font-bold">Sarah Jenkins</div>
                                        </div>
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">SJ</div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="flex gap-4 border-b border-gray-100 pb-4">
                                            <div className="flex-1">
                                                <div className="text-xs text-slate-500 uppercase font-bold">Heart Rate</div>
                                                <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                                    72 <span className="text-sm font-normal text-slate-500">bpm</span>
                                                    <Activity size={16} className="text-green-500" />
                                                </div>
                                            </div>
                                            <div className="flex-1 border-l border-gray-100 pl-4">
                                                <div className="text-xs text-slate-500 uppercase font-bold">Temperature</div>
                                                <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                                    98.6 <span className="text-sm font-normal text-slate-500">°F</span>
                                                    <Thermometer size={16} className="text-orange-500" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-slate-500 uppercase font-bold mb-3">Upcoming Appointments</div>
                                            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                <div className="bg-teal-100 text-teal-700 p-3 rounded-lg font-bold text-center leading-tight w-14">
                                                    <div className="text-xs">OCT</div>
                                                    <div className="text-lg">24</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-800">Dr. Emily Chen</div>
                                                    <div className="text-xs text-slate-500">Cardiology • 10:00 AM</div>
                                                </div>
                                                <div className="ml-auto">
                                                    <Video size={20} className="text-teal-500 cursor-pointer hover:scale-110 transition-transform" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                                                View Full Medical History
                                            </button>
                                        </div>
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Better Tech = Better Care.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Let's build compliant, life-changing healthcare solutions together.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-teal-50 hover:scale-105 transition-all flex items-center gap-2">
                                Partner with Us <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default Healthcare;

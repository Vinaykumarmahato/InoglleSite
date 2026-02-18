import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Shield,
    Lock,
    FileCheck,
    Globe,
    AlertTriangle,
    Eye,
    Server,
    CheckCircle2,
    ArrowRight,
    Fingerprint,
    Siren,
    Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityCompliance = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-rose-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Red/Rose for Security) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <Shield size={16} /> Enterprise Security & Compliance
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Uncompromising <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">Protection.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            Navigate the complex landscape of regulatory compliance and cyber threats.
                            We implement rigorous ISO 27001, GDPR, and SOC 2 frameworks to safeguard your reputation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-full transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Secure Your Infrastructure <ArrowRight size={20} />
                            </Link>
                            <Link to="/about" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                Our Certifications
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Compliance Frameworks Grid --- */}
                <section className="py-24 bg-slate-950 relative border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Global Compliance Standards</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                We transform compliance from a checkbox exercise into a strategic advantage.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "ISO 27001", desc: "Information Security Management Systems (ISMS) implementation.", icon: <Shield className="text-rose-400" size={32} /> },
                                { title: "GDPR & CCPA", desc: "Data protection and privacy mandates for global operations.", icon: <Globe className="text-blue-400" size={32} /> },
                                { title: "SOC 2 Type II", desc: "Service Organization Control for SaaS and cloud providers.", icon: <FileCheck className="text-emerald-400" size={32} /> },
                                { title: "HIPAA", desc: "Health Insurance Portability and Accountability compliance.", icon: <Activity className="text-sky-400" size={32} /> }
                            ].map((std, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-rose-500/40 transition-all group">
                                    <div className="mb-6 bg-slate-950 w-16 h-16 rounded-lg flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                                        {std.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{std.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{std.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Threat Landscape / Services --- */}
                <section className="py-24 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full"></div>

                                {/* Interactive Threat Monitor Visual */}
                                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl overflow-hidden">
                                    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                            <span className="text-sm font-mono text-red-400">THREAT_MONITOR_ACTIVE</span>
                                        </div>
                                        <Fingerprint size={20} className="text-slate-500" />
                                    </div>

                                    <div className="space-y-4 font-mono text-xs">
                                        <div className="flex justify-between items-center p-3 bg-red-500/10 border border-red-500/20 rounded">
                                            <span className="text-red-300">⚠️ SQL Injection Attempt Detected</span>
                                            <span className="text-slate-500">10:42:01 AM</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                                            <span className="text-green-400">✔ Firewall Blocked IP 192.168.x.x</span>
                                            <span className="text-slate-500">10:42:02 AM</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 bg-slate-800 rounded">
                                            <span className="text-blue-400">ℹ️ Automated Audit Logged</span>
                                            <span className="text-slate-500">10:42:05 AM</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-2 gap-4">
                                        <div className="bg-slate-950 p-4 rounded-lg text-center border border-slate-800">
                                            <div className="text-2xl font-bold text-white">0</div>
                                            <div className="text-[10px] text-slate-500 uppercase">Data Breaches</div>
                                        </div>
                                        <div className="bg-slate-950 p-4 rounded-lg text-center border border-slate-800">
                                            <div className="text-2xl font-bold text-white">100%</div>
                                            <div className="text-[10px] text-slate-500 uppercase">Compliance Score</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Proactive Security <br />
                                    <span className="text-rose-500">Beyond the Checklist.</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Compliance is just the baseline. We build resilient security postures that anticipate threats before they manifest.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Penetration Testing", text: "Ethical hacking to identify vulnerabilities in your web, mobile, and cloud apps." },
                                        { title: "Cloud Security Posture", text: "Continuous monitoring of AWS/Azure environments for misconfigurations." },
                                        { title: "Virtual CISO", text: "Strategic security leadership on-demand for growing enterprises." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="mt-1">
                                                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                                    <ShieldCheck size={20} />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">{item.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-rose-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Don't Wait for a Breach.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Get a comprehensive security risk assessment today and secure your future.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-rose-50 hover:scale-105 transition-all flex items-center gap-2">
                                Schedule Security Consultation <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

// Start of lucide-react imports necessary for the component to function
import {
    Activity, // Added for HIPAA icon
    ShieldCheck // Added for the list items
} from 'lucide-react';

export default SecurityCompliance;

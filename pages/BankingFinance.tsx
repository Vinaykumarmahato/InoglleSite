import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Landmark,
    ShieldCheck,
    TrendingUp,
    CreditCard,
    Wallet,
    Globe,
    ArrowRight,
    Lock,
    Smartphone,
    PieChart,
    Banknote,
    Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const BankingFinance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Banking & Finance IT Solutions | Inoglle";
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
            {/* --- Global Background Effects --- */}
            {/* Deep Blue Gradient Base */}
            <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-[#0f172a] to-blue-950 -z-20"></div>

            {/* Subtle Grid Pattern for "Tech/Structure" feel */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10 pointer-events-none"></div>

            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Enhanced Background Glows */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <Landmark size={16} /> Banking & Financial Services
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100 drop-shadow-xl">
                            New-Age Banking. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white drop-shadow-sm">Built on Trust.</span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200 font-light">
                            We help financial institutions navigate the fintech revolution.
                            From secure core banking systems to frictionless mobile wallets, we engineer the future of money.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center gap-2 border border-blue-400/20">
                                Modernize Your Stack <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/40 hover:bg-slate-800/60 text-white font-semibold rounded-full border border-slate-600 hover:border-slate-400 transition-all backdrop-blur-md flex items-center gap-2">
                                View Fintech Projects
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Solutions Grid --- */}
                <section className="py-24 relative border-y border-slate-800/50 bg-slate-900/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Fintech Solutions</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Secure, compliant, and user-centric technologies for the digital economy.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Digital Wallets & Payments",
                                    desc: "Seamless P2P, B2B, and merchant payment solutions with NFC and QR capabilities.",
                                    icon: <Wallet className="text-cyan-300" size={32} />
                                },
                                {
                                    title: "Core Banking Modernization",
                                    desc: "Migrating legacy mainframes to cloud-native microservices for agility and cost reduction.",
                                    icon: <Building2 className="text-blue-300" size={32} />
                                },
                                {
                                    title: "Algorithmic Trading",
                                    desc: "Low-latency trading platforms with real-time analytics and AI-driven execution.",
                                    icon: <PieChart className="text-emerald-300" size={32} />
                                },
                                {
                                    title: "Fraud Detection",
                                    desc: "AI-powered anomaly detection systems that stop fraudulent transactions in milliseconds.",
                                    icon: <ShieldCheck className="text-rose-300" size={32} />
                                },
                                {
                                    title: "Wealth Management",
                                    desc: "Robo-advisory platforms giving personalized investment insights to millions.",
                                    icon: <TrendingUp className="text-amber-300" size={32} />
                                },
                                {
                                    title: "Blockchain & DeFi",
                                    desc: "Smart contracts and decentralized finance protocols for the next generation of assets.",
                                    icon: <Globe className="text-indigo-300" size={32} />
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 p-8 rounded-2xl hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group backdrop-blur-sm">
                                    <div className="mb-6 bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform shadow-inner text-white">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Feature Spotlight: Security --- */}
                <section className="py-24 bg-gradient-to-b from-[#060a18] to-[#0B1120]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Bank-Grade <br />
                                    <span className="text-blue-400">Security Standards</span>
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    Trust is your currency. We implement rigorous security protocols to ensure every transaction, identity, and data packet is impenetrable.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "PCI-DSS Level 1 Compliance",
                                        "End-to-End Encryption (AES-256)",
                                        "Biometric Authentication Integration",
                                        "Real-time AML (Anti-Money Laundering) Checks"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                            <Lock size={20} className="text-blue-400" />
                                            <span className="text-slate-200 font-semibold">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>

                                {/* Mobile App Visual */}
                                <div className="relative mx-auto w-[300px] h-[600px] bg-slate-900 border-8 border-slate-800 rounded-[3rem] shadow-2xl shadow-blue-900/40 overflow-hidden flex flex-col">
                                    {/* Status Bar */}
                                    <div className="h-6 bg-slate-900 flex justify-between px-6 items-center text-[10px] text-slate-400">
                                        <span>9:41</span>
                                        <div className="flex gap-1">
                                            <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                                            <div className="w-3 h-3 bg-white rounded-full text-white">⚡</div>
                                        </div>
                                    </div>

                                    {/* App Content */}
                                    <div className="flex-1 p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/50">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold border border-slate-700">JD</div>
                                            <div className="p-2 bg-slate-800 rounded-full border border-slate-700"><Lock size={16} className="text-emerald-400" /></div>
                                        </div>

                                        <div className="text-slate-400 text-sm mb-1">Total Balance</div>
                                        <div className="text-4xl font-bold text-white mb-8">$24,500.00</div>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="bg-blue-600 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg shadow-blue-900/50 hover:bg-blue-500 cursor-pointer transition-colors">
                                                <TrendingUp className="text-white" />
                                                <span className="text-white text-sm font-bold">Invest</span>
                                            </div>
                                            <div className="bg-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border border-slate-700 hover:bg-slate-700 cursor-pointer transition-colors">
                                                <CreditCard className="text-slate-400" />
                                                <span className="text-slate-300 text-sm">Cards</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Recent Activity</div>
                                            {[
                                                { name: "Starbucks", date: "Today, 9:20 AM", amt: "-$4.50" },
                                                { name: "Salary Deposit", date: "Yesterday", amt: "+$3,200.00", green: true },
                                                { name: "Netflix", date: "Jun 24", amt: "-$15.99" }
                                            ].map((tx, idx) => (
                                                <div key={idx} className="flex justify-between items-center p-3 bg-slate-800/40 rounded-xl border border-white/5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-700">
                                                            {tx.name[0]}
                                                        </div>
                                                        <div>
                                                            <div className="text-white text-sm font-semibold">{tx.name}</div>
                                                            <div className="text-slate-500 text-xs">{tx.date}</div>
                                                        </div>
                                                    </div>
                                                    <div className={`text-sm font-bold ${tx.green ? 'text-emerald-400' : 'text-white'}`}>
                                                        {tx.amt}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Trusted By --- */}
                <section className="py-20 border-t border-slate-900 bg-[#0B1120]">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by Financial Leaders</p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for Bank Logos */}
                            <div className="text-2xl font-bold flex items-center gap-2 text-slate-300"><Landmark size={28} /> CITI BANK</div>
                            <div className="text-2xl font-bold flex items-center gap-2 text-slate-300"><Globe size={28} /> HSBC</div>
                            <div className="text-2xl font-bold flex items-center gap-2 text-slate-300"><ShieldCheck size={28} /> CHASE</div>
                            <div className="text-2xl font-bold flex items-center gap-2 text-slate-300"><Building2 size={28} /> BARCLAYS</div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Secure Your Future.</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Partner with a team that understands the critical nature of financial technology.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all flex items-center gap-2">
                                Consult a Fintech Expert <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default BankingFinance;

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import { Activity, Zap, Clock, Shield, BarChart, Server } from 'lucide-react';
import AOS from 'aos';

const SLAAgreement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SLA Agreement | Inoglle Technologies";
        AOS.init({ duration: 1000, once: true });
    }, []);

    const metrics = [
        {
            icon: Activity,
            title: "Uptime Commitment",
            value: "99.9%",
            desc: "Guaranteed monthly uptime for all enterprise-grade applications and cloud infrastructure hosted by Inoglle."
        },
        {
            icon: Clock,
            title: "Response Time",
            value: "< 4 Hours",
            desc: "Maximum response time for critical (P1) issues through our 24/7 dedicated enterprise support channels."
        },
        {
            icon: BarChart,
            title: "Performance Targets",
            value: "95th Percentile",
            desc: "Optimized latency and execution targets to ensure consistent application performance under varying loads."
        },
        {
            icon: Server,
            title: "Maintenance Windows",
            value: "Planned Only",
            desc: "Scheduled maintenance communicated at least 48 hours in advance to minimize business disruption."
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-900 bg-slate-950">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8" data-aos="fade-down">
                            <Zap size={14} /> Service Reliability
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" data-aos="fade-up">
                            SLA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Agreements.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-delay="100">
                            Our Service Level Agreements (SLA) define our commitment to high availability, performance, and dedicated engineering support.
                        </p>
                    </div>
                </section>

                {/* Metrics Grid */}
                <section className="py-24 bg-[#020617]">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {metrics.map((item, idx) => (
                                <div key={idx} className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/40 transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{item.title}</h3>
                                    <div className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{item.value}</div>
                                    <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Detailed Clauses */}
                        <div className="mt-32 max-w-4xl mx-auto space-y-16">
                            <div className="space-y-6" data-aos="fade-up">
                                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <Shield className="text-blue-500" /> Security & Vulnerability SLA
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed font-light">
                                    Inoglle committed to addressing security vulnerabilities based on their severity level. Critical vulnerabilities (CVSS 9.0+) are prioritized for immediate patching within 24-48 hours of detection and verification.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                    <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                                        <div className="font-bold text-red-500 mb-1">Critical</div>
                                        <div className="text-sm text-slate-400">24h Response</div>
                                    </div>
                                    <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl">
                                        <div className="font-bold text-orange-500 mb-1">High</div>
                                        <div className="text-sm text-slate-400">72h Response</div>
                                    </div>
                                    <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                                        <div className="font-bold text-blue-500 mb-1">Medium</div>
                                        <div className="text-sm text-slate-400">7 Day Response</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-slate-900 border border-slate-800 rounded-3xl text-center" data-aos="fade-up">
                                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Customization</h3>
                                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                                    Strategic partners and large-scale enterprises may request customized SLA terms tailored to specific operational requirements and compliance standards.
                                </p>
                                <a href="mailto:enterprise@inoglle.com" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                                    Contact Enterprise Support
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default SLAAgreement;

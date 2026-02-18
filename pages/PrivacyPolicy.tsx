import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import { Shield, Lock, Eye, FileText, Scale, Globe } from 'lucide-react';
import AOS from 'aos';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Privacy Policy | Inoglle Technologies";
        AOS.init({ duration: 1000, once: true });
    }, []);

    const sections = [
        {
            icon: Eye,
            title: "Information We Collect",
            content: "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, company name, and any other information you choose to provide."
        },
        {
            icon: Lock,
            title: "How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect Inoglle and our users. We may also use the information to send you updates about our services and promotional communications."
        },
        {
            icon: Shield,
            title: "Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols to safeguard your data."
        },
        {
            icon: Globe,
            title: "International Transfers",
            content: "Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction."
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-900">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8" data-aos="fade-down">
                            <Shield size={14} /> Legal Documentation
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" data-aos="fade-up">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Policy.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-delay="100">
                            At Inoglle, your privacy is our priority. This policy outlines how we collect, use, and protect your personal information in our digital ecosystem.
                        </p>
                        <p className="text-sm text-slate-500 mt-8" data-aos="fade-in" data-aos-delay="200">Last Updated: February 18, 2026</p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 bg-[#020617]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid gap-16">
                            {sections.map((section, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-8 items-start" data-aos="fade-up">
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                                        <section.icon size={32} />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                                        <p className="text-slate-400 text-lg leading-relaxed font-light">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div className="p-10 bg-slate-900/50 rounded-3xl border border-slate-800 backdrop-blur-sm" data-aos="fade-up">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Scale className="text-blue-500" /> Information Rights
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Depending on your location, you may have certain rights regarding your personal information, including:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> The right to access your data</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> The right to rectify errors</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> The right to erasure (forgetting)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> The right to data portability</li>
                                </ul>
                            </div>

                            <div className="text-center space-y-6 pt-12" data-aos="fade-up">
                                <h3 className="text-2xl font-bold text-white">Contact Our Privacy Team</h3>
                                <p className="text-slate-400">If you have questions about this Privacy Policy, please contact us at:</p>
                                <a href="mailto:privacy@inoglle.com" className="inline-block text-blue-400 font-bold text-xl hover:text-blue-300 transition-colors">
                                    privacy@inoglle.com
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

export default PrivacyPolicy;

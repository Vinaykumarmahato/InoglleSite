import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import { FileText, CheckCircle, AlertCircle, Scale, BookOpen, ShieldCheck } from 'lucide-react';
import AOS from 'aos';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Terms of Service | Inoglle Technologies";
        AOS.init({ duration: 1000, once: true });
    }, []);

    const terms = [
        {
            icon: BookOpen,
            title: "Acceptance of Terms",
            content: "By accessing and using the services provided by Inoglle Technologies, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using our services and website."
        },
        {
            icon: CheckCircle,
            title: "Service Delivery",
            content: "Inoglle provides IT solutions, software development, and consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will make reasonable efforts to notify clients of significant changes."
        },
        {
            icon: ShieldCheck,
            title: "Intellectual Property",
            content: "All content, software code, designs, and materials provided by Inoglle remain the exclusive property of Inoglle Technologies unless otherwise specified in a signed agreement. Unauthorized reproduction or redistribution is strictly prohibited."
        },
        {
            icon: AlertCircle,
            title: "Liability & Warranty",
            content: "Our services are provided 'as is' without warranties of any kind. Inoglle shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our software or consulting services."
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-900 bg-slate-950/50">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute inset-0 bg-blue-600/10 blur-[150px] -translate-y-1/2"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8" data-aos="fade-down">
                            <FileText size={14} /> Service Terms
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" data-aos="fade-up">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Service.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-delay="100">
                            Please review the legal framework governing our professional relationship and the use of Inoglle's technology solutions.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 bg-[#020617]">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="grid gap-20">
                            {terms.map((term, idx) => (
                                <div key={idx} className="group relative" data-aos="fade-up">
                                    <div className="flex flex-col md:flex-row gap-10 items-start">
                                        <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-blue-500 shrink-0 border border-slate-800 shadow-xl group-hover:border-blue-500/40 transition-colors">
                                            <term.icon size={28} />
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{term.title}</h2>
                                            <p className="text-slate-400 text-lg leading-relaxed font-light border-l-2 border-slate-800 pl-6 group-hover:border-blue-500/30 transition-colors">
                                                {term.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-[2rem] border border-slate-800 relative overflow-hidden" data-aos="zoom-in">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl -mr-32 -mt-32"></div>
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Scale className="text-blue-500" /> Governing Law
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-lg font-light mb-8">
                                    These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                                </p>
                                <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl">
                                    <p className="text-sm text-blue-300 font-medium">
                                        For any clarification regarding these terms, please contact our legal department at <span className="underline">legal@inoglle.com</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default TermsOfService;

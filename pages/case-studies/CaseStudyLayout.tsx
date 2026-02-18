import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    ArrowRight,
    BarChart,
    CheckCircle2,
    Layout,
    Users,
    Zap,
    Globe,
    Shield,
    Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyLayoutProps {
    title: string;
    subtitle: string;
    client: string;
    industry: string;
    challenge: string;
    solution: {
        description: string;
        points: string[];
    };
    results: {
        value: string;
        label: string;
    }[];
    techStack: string[];
    image: string;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
    title,
    subtitle,
    client,
    industry,
    challenge,
    solution,
    results,
    techStack,
    image
}) => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={image} alt={title} className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                        <div className="flex flex-col md:flex-row gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-blue-400">
                            <span>{client}</span>
                            <span className="text-slate-600">•</span>
                            <span>{industry}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                    </div>
                </section>

                {/* --- Content Grid --- */}
                <section className="py-20 bg-slate-950/50 border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

                        {/* Left Column: Challenge & Solution */}
                        <div className="lg:col-span-2 space-y-16">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-red-500/10 text-red-500 flex items-center justify-center text-sm">01</span>
                                    The Challenge
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">
                                    {challenge}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm">02</span>
                                    The Solution
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line mb-8">
                                    {solution.description}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {solution.points.map((pt, i) => (
                                        <div key={i} className="flex gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800">
                                            <CheckCircle2 className="text-blue-400 flex-shrink-0" size={20} />
                                            <span className="text-slate-300 text-sm font-medium">{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Results & Tech Stack */}
                        <div className="space-y-12">
                            {/* Key Results Box */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 p-8 rounded-2xl shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BarChart size={20} className="text-blue-400" /> Key Results
                                </h3>
                                <div className="space-y-8">
                                    {results.map((res, i) => (
                                        <div key={i}>
                                            <div className="text-4xl font-bold text-white mb-1">{res.value}</div>
                                            <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">{res.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-semibold rounded-full border border-slate-800 hover:border-blue-500/50 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-24 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-blue-900/5"></div>
                    <div className="max-w-3xl mx-auto px-6 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready for similar results?</h2>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default CaseStudyLayout;

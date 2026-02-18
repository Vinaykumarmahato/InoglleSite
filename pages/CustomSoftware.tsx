import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Code2,
    Cpu,
    Database,
    Globe,
    Layers,
    Layout,
    Lock,
    Rocket,
    Server,
    ShieldCheck,
    Zap,
    ArrowRight,
    CheckCircle2,
    Terminal,
    Settings,
    Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <Code2 size={16} /> Custom Software Development
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Turning Complex Logic into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Seamless Digital Reality</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            We engineer tailored, high-performance software solutions that drive enterprise agility.
                            From legacy modernization to cloud-native applications, we build the core of your digital business.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Start Your Project <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Core Services Grid --- */}
                <section className="py-24 bg-slate-950 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Scale & Performance</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Our engineering philosophy centers on scalability, security, and maintainability.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Globe className="text-blue-400" size={40} />,
                                    title: "Web Applications",
                                    desc: "Responsive, PWA-ready web apps built with React, Next.js, and modern frameworks for superior UX."
                                },
                                {
                                    icon: <Server className="text-purple-400" size={40} />,
                                    title: "Enterprise Platforms",
                                    desc: "Robust internal tools, ERPs, and CRMs designed to streamline complex business workflows."
                                },
                                {
                                    icon: <Cloud className="text-sky-400" size={40} />,
                                    title: "SaaS Development",
                                    desc: "Multi-tenant architectures designed for massive scale, focused on security and recurring revenue."
                                },
                                {
                                    icon: <Database className="text-emerald-400" size={40} />,
                                    title: "Backend Engineering",
                                    desc: "High-concurrency APIs, microservices, and optimized database architectures (SQL/NoSQL)."
                                },
                                {
                                    icon: <ShieldCheck className="text-rose-400" size={40} />,
                                    title: "Security By Design",
                                    desc: "End-to-end encryption, OAuth/SSO integration, and compliance-ready architectures (GDPR/HIPAA)."
                                },
                                {
                                    icon: <Layout className="text-amber-400" size={40} />,
                                    title: "UI/UX Design",
                                    desc: "User-centric interfaces that marry form and function, ensuring adoption and engagement."
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/40 p-10 rounded-2xl border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all group">
                                    <div className="mb-6 bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Technology Landscape --- */}
                <section className="py-24 bg-[#060a18] border-y border-slate-900 overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powered by Modern Technologies</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                We leverage a bleeding-edge stack to build resilient, future-proof ecosystems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* 1. AI & Core */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400"><Cpu size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">AI & Intelligent Systems</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Generative AI", "Machine Learning (ML)", "NLP", "Computer Vision", "Deep Learning", "Edge AI", "RPA", "AI Agents", "AutoML"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 2. Cloud & Infra */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-sky-500/10 p-2 rounded-lg text-sky-400"><Cloud size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Cloud & Infrastructure</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["AWS / Azure / GCP", "Multi-Cloud", "Serverless", "Kubernetes", "Docker", "Terraform (IaC)", "Cloud Security", "Observability"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Cybersecurity */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-red-500/10 p-2 rounded-lg text-red-400"><ShieldCheck size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Cybersecurity & Privacy</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Zero Trust", "DevSecOps", "IAM", "Endpoint Security", "Threat Intel", "Privacy Engineering", "Data Encryption", "Secure API"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 4. Web & Software */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400"><Globe size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Web & Software Engineering</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Microservices", "API-First", "Headless Arch", "Event-Driven", "PWA", "Domain-Driven Design", "Monorepos", "GraphQL"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Mobile & Cross-Platform */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400"><Layout size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Mobile & Cross-Platform</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["React Native", "Flutter", "Mobile DevOps", "Super Apps", "Wearable Dev", "Foldable UX"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 6. Data & Analytics */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400"><Database size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Data & Analytics</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Big Data", "Data Engineering", "Data Lakes", "Real-Time Analytics", "Predictive Analytics", "Business Intelligence", "Data Mesh"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 7. Blockchain & Web3 */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-orange-500/10 p-2 rounded-lg text-orange-400"><Lock size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Blockchain & Web3</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Smart Contracts", "dApps", "Web3 Infra", "Digital Identity", "Tokenization", "Decentralized Storage"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 8. Enterprise Tech */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-pink-500/10 p-2 rounded-lg text-pink-400"><Layers size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Enterprise Ecosystem</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["ERP Systems", "CRM Platforms", "Enterprise Automation", "Digital Transformation", "ITSM", "BPM"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 9. Emerging & Future */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400"><Rocket size={24} /></div>
                                    <h3 className="text-xl font-bold text-white">Emerging & Next-Gen</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Quantum Computing", "Neuromorphic Computing", "Green IT", "Sustainable Computing", "Metaverse", "Spatial Computing", "Digital Twins"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Development Process --- */}
                <section className="py-24 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                                    Transparent, Agile, <br />
                                    <span className="text-blue-500">Results-Driven Process</span>
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Discovery & Strategy", text: "We define clear KPIs, user personas, and technical requirements before writing a single line of code." },
                                        { title: "System Architecture", text: "Designing scalable, fault-tolerant systems using modern patterns like Microservices or Serverless." },
                                        { title: "Agile Development", text: "Two-week sprints with regular demos, ensuring you're always aligned with the product progress." },
                                        { title: "QA & Deployment", text: "Automated testing pipelines and blue-green deployments for zero-downtime releases." }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{step.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                                    <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div className="ml-auto text-xs text-slate-500 font-mono">deployment_pipeline.sh</div>
                                    </div>
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="flex gap-2">
                                            <span className="text-blue-400">➜</span>
                                            <span className="text-slate-300">git clone repo-enterprise-v2</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-blue-400">➜</span>
                                            <span className="text-slate-300">npm install</span>
                                        </div>
                                        <div className="text-slate-500 italic"># Installing dependencies...</div>
                                        <div className="flex gap-2">
                                            <span className="text-green-400">✔</span>
                                            <span className="text-slate-300">Core modules loaded</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-green-400">✔</span>
                                            <span className="text-slate-300">Security scan passed</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-blue-400">➜</span>
                                            <span className="text-slate-300">npm run deploy:prod</span>
                                        </div>
                                        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded text-blue-300">
                                            🚀 Build Successful. Deployed to Global Edge Network (142ms)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Build the Future?</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Whether you need to modernize a legacy system or build a new platform from scratch, our team is ready to engineer your success.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-full shadow-2xl hover:bg-slate-100 hover:scale-105 transition-all flex items-center gap-2">
                                Get a Technical Consultation <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default CustomSoftware;

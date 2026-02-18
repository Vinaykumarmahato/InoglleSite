import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    Cloud,
    Server,
    RefreshCw,
    ShieldCheck,
    Activity,
    Code,
    ArrowRight,
    Zap,
    Box,
    GitBranch,
    Terminal,
    Container,
    Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudMigration = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    <div className="absolute inset-0 z-0">
                        {/* Tech Grid Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider animate-fade-in-up shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                <Cloud size={14} /> Cloud & DevOps Case Study
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                            From On-Prem Monolith to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Serverless Velocity.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            How we reduced infrastructure costs by 60% and slashed deployment times from 4 days to 15 minutes for a leading Media Streaming platform.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">60%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Cost Reduction</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">15m</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Deployment Time</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">99.99%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Availability (SLA)</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Auto</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Scaling</div>
                        </div>
                    </div>
                </section>

                {/* --- The Narrative --- */}
                <section className="py-32 bg-[#020617] relative">
                    <div className="max-w-6xl mx-auto px-6 space-y-32">

                        {/* Challenge Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-block text-cyan-500 font-mono text-sm mb-4">01. THE BOTTLENECK</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Crushed by <br />Success.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    As user traffic spiked during peak viewing hours, the client's physical servers couldn't handle the load. Over-provisioning for peaks meant paying for idle servers 80% of the time, bleeding budget.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Manual deployments prone to human error.",
                                        "Slow rollback capability (hours of downtime).",
                                        "Inability to scale dynamically based on demand."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-[20px]"><Zap size={20} className="text-yellow-400" /></div>
                                            <p className="text-slate-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual: Server Overload */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col gap-4">
                                    {/* Server Rack Illustration */}
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((server) => (
                                            <div key={server} className="h-16 bg-slate-950 border border-slate-700 rounded-lg flex items-center px-4 justify-between relative overflow-hidden">
                                                <div className="flex gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-75"></div>
                                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
                                                </div>
                                                <span className="font-mono text-red-400 text-xs">CPU: 99% | MEM: 98%</span>
                                                {/* Heat Bar */}
                                                <div className="absolute bottom-0 left-0 h-1 bg-red-500 w-full"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center font-mono text-xs text-red-400 bg-red-500/10 py-2 rounded border border-red-500/20 animate-pulse">
                                        ⚠️ CRITICAL ALERT: CAPACITY EXCEEDED
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>
                                {/* Visual: Azure/AWS Architecture Diagram */}
                                <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl">
                                    <div className="bg-[#0f172a] rounded-xl p-6 border border-slate-800 relative overflow-hidden">
                                        {/* Flow Diagram Simulation */}
                                        <div className="flex justify-between items-center mb-8 relative z-10">
                                            <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-center w-24">
                                                <div className="text-xs text-slate-400 mb-1">Users</div>
                                                <div className="text-white font-bold"><Activity size={16} className="inline" /></div>
                                            </div>
                                            <ArrowRight className="text-slate-600" />
                                            <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30 text-center w-32">
                                                <div className="text-xs text-blue-300 mb-1">Load Balancer</div>
                                                <div className="text-blue-400 font-bold text-xs">Traffic Rule</div>
                                            </div>
                                            <ArrowRight className="text-slate-600" />
                                            <div className="space-y-2">
                                                <div className="p-2 bg-cyan-900/20 rounded border border-cyan-500/30 flex items-center gap-2 w-32">
                                                    <Container size={14} className="text-cyan-400" /> <span className="text-[10px] text-cyan-200">Pod A (Replica)</span>
                                                </div>
                                                <div className="p-2 bg-cyan-900/20 rounded border border-cyan-500/30 flex items-center gap-2 w-32">
                                                    <Container size={14} className="text-cyan-400" /> <span className="text-[10px] text-cyan-200">Pod B (Replica)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-slate-950 rounded border border-slate-800 font-mono text-xs text-green-400">
                                            &gt; kubectl get pods <br />
                                            NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; READY &nbsp; STATUS <br />
                                            api-svc-x8j2 &nbsp;&nbsp;&nbsp; 1/1 &nbsp;&nbsp;&nbsp; Running <br />
                                            <span>Auto-scaling initiated... +5 replicas added.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-block text-cyan-500 font-mono text-sm mb-4">02. THE TRANSFORMATION</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Kubernetes & <br />CI/CD Automation.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    We migrated the workload to a Kubernetes cluster (AKS). We implemented GitOps workflows, meaning infrastructure is defined as code.
                                </p>

                                <div className="space-y-6">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                            <GitBranch size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Zero-Downtime Deployments</h4>
                                            <p className="text-slate-400 text-sm">Blue/Green deployment strategy ensures users never see an error page during updates.</p>
                                        </div>
                                    </div>

                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">DevSecOps Pipeline</h4>
                                            <p className="text-slate-400 text-sm">Automated security scanning in the pipeline catches vulnerabilities before production.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- Tech Stack Grid --- */}
                <section className="py-24 bg-[#0B1120] border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-bold text-white mb-4">The Cloud Naive Stack</h3>
                            <p className="text-slate-400">Robust, scalable, and automated.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "Azure AKS", cat: "Orchestration", icon: <Cloud size={20} /> },
                                { name: "Terraform", cat: "IaC Workflow", icon: <Code size={20} /> },
                                { name: "Jenkins", cat: "CI/CD Pipeline", icon: <RefreshCw size={20} /> },
                                { name: "Docker", cat: "Container Runtime", icon: <Container size={20} /> },
                                { name: "Prometheus", cat: "Monitoring", icon: <Activity size={20} /> },
                                { name: "Grafana", cat: "Visualization", icon: <Terminal size={20} /> },
                                { name: "Redis", cat: "Caching Layer", icon: <Database size={20} /> },
                                { name: "SonarQube", cat: "Code Quality", icon: <ShieldCheck size={20} /> },
                            ].map((tech, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group">
                                    <div className="text-slate-500 mb-3 group-hover:text-cyan-400 transition-colors">{tech.icon}</div>
                                    <div className="font-bold text-white text-lg">{tech.name}</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">{tech.cat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-cyan-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Scale Effortlessly?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Cut costs and boost performance with a modern cloud architecture.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 shadow-xl shadow-cyan-600/20 hover:shadow-cyan-600/40 transition-all hover:-translate-y-1">
                            Get Your Cloud Assessment <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default CloudMigration;

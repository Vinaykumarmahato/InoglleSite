import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    Cloud,
    Server,
    GitBranch,
    Shield,
    Zap,
    BarChart,
    ArrowRight,
    CheckCircle2,
    Terminal,
    Cpu,
    Database,
    Globe,
    Settings,
    Layers,
    Container,
    Activity,
    Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudDevOps = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <Cloud size={16} /> Cloud & DevOps Solutions
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Infinite Scale. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Unstoppable Velocity.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            We architect resilient cloud infrastructures and automated delivery pipelines that empower your teams to ship faster, securely, and reliably at enterprise scale.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Optimize Your Infrastructure <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                View Architecture Patterns
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Core Services Grid --- */}
                <section className="py-24 bg-slate-950 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Infrastructure Reimagined</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                From migration to optimization, we handle the complexity of the cloud so you can focus on innovation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <GitBranch className="text-cyan-400" size={40} />,
                                    title: "CI/CD Automation",
                                    desc: "Streamlined pipelines (GitHub Actions, GitLab CI, Jenkins) for zero-touch, error-free deployments."
                                },
                                {
                                    icon: <Cloud className="text-blue-400" size={40} />,
                                    title: "Cloud Migration",
                                    desc: "Seamless lift-and-shift or re-platforming strategies for AWS, Azure, and Google Cloud environments."
                                },
                                {
                                    icon: <Container className="text-indigo-400" size={40} />,
                                    title: "Kubernetes & Containers",
                                    desc: "Production-grade K8s orchestration, microservices management, and service mesh implementation."
                                },
                                {
                                    icon: <Layers className="text-violet-400" size={40} />,
                                    title: "Infrastructure as Code",
                                    desc: "Immutable infrastructure provisioned via Terraform, Ansible, and Pulumi for consistency and speed."
                                },
                                {
                                    icon: <Activity className="text-emerald-400" size={40} />,
                                    title: "Observability & SRE",
                                    desc: "Full-stack monitoring (Prometheus, Grafana, ELK) with proactive alerting and incident response."
                                },
                                {
                                    icon: <Shield className="text-rose-400" size={40} />,
                                    title: "DevSecOps",
                                    desc: "Embedding security into the pipeline with automated compliance scans, secrets management, and IAM."
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/40 p-10 rounded-2xl border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all group">
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
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Cloud Native Stack</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Best-in-class tools for a modern, fault-tolerant infrastructure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Cloud Providers */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Cloud className="text-cyan-400" size={24} />
                                    <h3 className="text-lg font-bold text-white">Platforms</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["AWS", "Azure", "Google Cloud", "DigitalOcean"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Orchestration */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Container className="text-blue-400" size={24} />
                                    <h3 className="text-lg font-bold text-white">Orchestration</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Kubernetes", "Docker Swarm", "Helm", "Istio"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* IaC */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Terminal className="text-violet-400" size={24} />
                                    <h3 className="text-lg font-bold text-white">IaC & Config</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Terraform", "Ansible", "Pulumi", "Chef", "Puppet"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* CI/CD & Observability */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Activity className="text-emerald-400" size={24} />
                                    <h3 className="text-lg font-bold text-white">Ops & Monitor</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Datadog", "ELK Stack"].map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/50">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Why Choose Us (Stats) --- */}
                <section className="py-24 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                                    Proven Impact on <br />
                                    <span className="text-cyan-500">Stability & Efficiency</span>
                                </h2>
                                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                    We don't just manage servers; we optimize your entire delivery lifecycle.
                                    Our clients experience faster deployments, reduced costs, and improved reliability.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-bold text-2xl shadow-lg">99%</div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Uptime Guarantee</h4>
                                            <p className="text-sm text-slate-500">High-availability architectures.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-bold text-2xl shadow-lg">60%</div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Cost Reduction</h4>
                                            <p className="text-sm text-slate-500">Through resource optimization.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 font-bold text-2xl shadow-lg">10x</div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Faster Deployments</h4>
                                            <p className="text-sm text-slate-500">With automated CI/CD pipelines.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Representation */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full"></div>
                                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
                                    <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
                                        <h3 className="text-white font-mono font-bold flex items-center gap-2"><Activity size={18} className="text-green-400" /> System Status</h3>
                                        <span className="text-xs text-green-400 px-2 py-1 bg-green-500/10 rounded border border-green-500/20">All Systems Operational</span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Metric 1 */}
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>CPU Usage</span>
                                                <span>42%</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-cyan-500 w-[42%]"></div>
                                            </div>
                                        </div>
                                        {/* Metric 2 */}
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Memory Allocation</span>
                                                <span>68%</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 w-[68%]"></div>
                                            </div>
                                        </div>
                                        {/* Metric 3 */}
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Network I/O</span>
                                                <span>1.2 GB/s</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-500 w-[85%]"></div>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-slate-700/50 grid grid-cols-3 gap-2 text-center">
                                            <div className="p-3 bg-slate-800/50 rounded-lg">
                                                <div className="text-lg font-bold text-white">24ms</div>
                                                <div className="text-[10px] text-slate-500">Latency</div>
                                            </div>
                                            <div className="p-3 bg-slate-800/50 rounded-lg">
                                                <div className="text-lg font-bold text-white">0</div>
                                                <div className="text-[10px] text-slate-500">Errors</div>
                                            </div>
                                            <div className="p-3 bg-slate-800/50 rounded-lg">
                                                <div className="text-lg font-bold text-white">100%</div>
                                                <div className="text-[10px] text-slate-500">Availability</div>
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
                    <div className="absolute inset-0 bg-cyan-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale?</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Get a comprehensive infrastructure audit and discover how we can reduce your cloud costs and improve deployment velocity.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-cyan-50 hover:scale-105 transition-all flex items-center gap-2">
                                Book Your Infrastructure Audit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default CloudDevOps;

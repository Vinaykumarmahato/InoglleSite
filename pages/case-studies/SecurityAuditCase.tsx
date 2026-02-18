import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/sections/Footer';
import {
    Shield,
    Lock,
    Search,
    Eye,
    FileCheck,
    AlertTriangle,
    ArrowRight,
    Server,
    Key
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityAuditCase = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-red-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10 px-6">
                    <div className="absolute inset-0 z-0">
                        {/* Cyber Security Matrix */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider animate-fade-in-up shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                <Lock size={14} /> Security & Compliance Case Study
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-in-up delay-100">
                            Securing 10M+ Patient <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Records for HIPAA.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                            How we helped a national healthcare provider achieve ISO 27001 certification and close 50+ critical vulnerabilities in 3 weeks.
                        </p>
                    </div>
                </section>

                {/* --- Key Metrics Overview --- */}
                <section className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-md relative z-20 -mt-20 max-w-6xl mx-auto rounded-xl shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 text-center">
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">0</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Breaches Post-Audit</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">100%</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Compliance Score</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">24/7</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Threat Monitoring</div>
                        </div>
                        <div className="p-4 group">
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">ISO</div>
                            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider">27001 Certified</div>
                        </div>
                    </div>
                </section>

                {/* --- The Narrative --- */}
                <section className="py-32 bg-[#020617] relative">
                    <div className="max-w-6xl mx-auto px-6 space-y-32">

                        {/* Challenge Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div>
                                <div className="inline-block text-red-500 font-mono text-sm mb-4">01. THE THREAT</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Shadow IT & <br />Data Leaks.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    A routine scan revealed unencrypted S3 buckets containing PII (Personally Identifiable Information). Additionally, doctors were using unauthorized messaging apps to share patient X-rays, a massive compliance violation.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Unpatched servers exposed to the public internet.",
                                        "Lack of Multi-Factor Authentication (MFA) for admins.",
                                        "No logging or audit trails for data access."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-[20px]"><AlertTriangle size={20} className="text-orange-400" /></div>
                                            <p className="text-slate-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual: Simulated Hacker Terminal scan */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
                                <div className="relative bg-black border border-slate-800 p-4 rounded-xl shadow-2xl font-mono text-xs">
                                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                                        <div className="text-red-500 font-bold">ROOT@ATTACK-BOX:~#</div>
                                        <div className="text-slate-500">nmap -sV -A target-hospital.com</div>
                                    </div>
                                    <div className="space-y-1 text-slate-400">
                                        <div>Starting Nmap 7.92...</div>
                                        <div><span className="text-green-400">Host is up (0.002s latency).</span></div>
                                        <div>PORT &nbsp;&nbsp;&nbsp; STATE &nbsp;&nbsp; <span className="text-red-500">SERVICE</span></div>
                                        <div>22/tcp &nbsp; <span className="text-red-400">open</span> &nbsp;&nbsp;&nbsp; ssh (OpenSSH 4.3 - VULNERABLE)</div>
                                        <div>80/tcp &nbsp; <span className="text-red-400">open</span> &nbsp;&nbsp;&nbsp; http (Apache 2.2)</div>
                                        <div>443/tcp  <span className="text-red-400">open</span> &nbsp;&nbsp;&nbsp; ssl/https</div>
                                        <div>3306/tcp <span className="text-red-400">open</span> &nbsp;&nbsp;&nbsp; mysql (No Auth Required!)</div>
                                        <br />
                                        <div className="text-red-500 blink animate-pulse">!! CRITICAL VULNERABILITY FOUND !!</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Section */}
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
                                {/* Visual: Shield / Secure Architecture */}
                                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-6 text-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                                        <Shield size={64} className="text-blue-400 relative z-10" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Perimeter Secured</h4>
                                        <div className="flex gap-2 justify-center text-xs">
                                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30">WAF Active</span>
                                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30">MFA Enforced</span>
                                        </div>
                                    </div>
                                    <div className="w-full h-1 bg-slate-800 rounded overflow-hidden">
                                        <div className="h-full bg-blue-500 w-full animate-pulse"></div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">0 Threats Detected in last 24h</div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-block text-red-500 font-mono text-sm mb-4">02. THE REMEDIATION</div>
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Zero Trust <br />Implementation.</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    We implemented a Zero Trust Architecture. "Never trust, always verify." Every request is authenticated, encrypted, and logged.
                                </p>

                                <div className="space-y-6">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-all">
                                            <Key size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Role-Based Access (RBAC)</h4>
                                            <p className="text-slate-400 text-sm">Doctors only see patient records. Billing sees only invoices. Principle of Least Privilege.</p>
                                        </div>
                                    </div>

                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                                        <div className="mt-1 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            <Search size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">Penetration Testing</h4>
                                            <p className="text-slate-400 text-sm">Conducted rigorous white-hat hacking to find and patch holes before bad actors could.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- Tools Grid --- */}
                <section className="py-24 bg-[#0B1120] border-t border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-bold text-white mb-4">Security Arsenal</h3>
                            <p className="text-slate-400">Enterprise-grade protection tools.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "CrowdStrike", cat: "Endpoint Protection", icon: <Shield size={20} /> },
                                { name: "Okta", cat: "Identity Management", icon: <Key size={20} /> },
                                { name: "Cloudflare", cat: "WAF & DDoS", icon: <Server size={20} /> },
                                { name: "Splunk", cat: "SIEM Logging", icon: <Search size={20} /> },
                                { name: "AWS Shield", cat: "Network Security", icon: <Lock size={20} /> },
                                { name: "HashiCorp Vault", cat: "Secrets Mgmt", icon: <Key size={20} /> },
                            ].map((tech, i) => (
                                <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-red-500/50 hover:bg-slate-800/80 transition-all group">
                                    <div className="text-slate-500 mb-3 group-hover:text-red-400 transition-colors">{tech.icon}</div>
                                    <div className="font-bold text-white text-lg">{tech.name}</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">{tech.cat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-red-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Is Your Data Exposed?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            A data breach costs millions. Prevention costs a fraction of that. Let's secure your perimeter today.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 text-white font-bold rounded-full hover:bg-red-500 shadow-xl shadow-red-600/20 hover:shadow-red-600/40 transition-all hover:-translate-y-1">
                            Book a Free Security Audit <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default SecurityAuditCase;

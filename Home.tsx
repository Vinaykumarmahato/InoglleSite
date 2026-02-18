/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import { Terminal, Shield, Cpu, Globe, ArrowRight, CheckCircle2, Server, Layout, Database, Code2, Rocket, Cloud, Settings, Layers, Zap, Users, Mail, MapPin, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './components/sections/Footer';

// --- Components ---

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Inoglle | Premier IT Solutions & Software Engineering";
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] transition-all duration-100 ease-out" style={{ width: `${scroll}%` }} />
  );
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference -ml-2 -mt-2 transition-transform duration-75 block" />
      <div ref={followerRef} className="fixed top-0 left-0 w-12 h-12 border border-blue-500/50 rounded-full pointer-events-none z-[9998] -ml-6 -mt-6 transition-transform duration-300 ease-out block" />
    </>
  );
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-50 pointer-events-none">
    <div className="absolute inset-0 bg-slate-950"></div>
    {// Gradient Mesh 
    }
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

    {// Grid Overlay
    }
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
    <div className="absolute inset-0 bg-grid-white opacity-[0.02]"></div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, color = "blue" }) => (
  <div className="card-premium group hover:bg-slate-900/80 p-8 flex flex-col h-full border border-slate-800 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-${color}-500/20`}>
      <Icon className={`text-${color}-400 w-6 h-6`} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-white relative z-10 group-hover:text-blue-200 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-loose relative z-10 flex-grow">{description}</p>
    <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center text-blue-400 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
      Learn More <ArrowRight size={12} className="ml-2" />
    </div>
  </div>
);

const WhyChooseCard = ({ title, desc }) => (
  <div className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300">
    <div className="h-1 w-12 bg-blue-500/50 mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center p-6 border-r border-slate-800 last:border-0 hover:bg-white/5 transition-colors duration-300 group">
    <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{value}</div>
    <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{label}</div>
  </div>
);

const Ticker = () => (
  <div className="w-full bg-blue-600/10 border-y border-blue-500/20 py-2 overflow-hidden flex items-center backdrop-blur-sm relative z-20">
    <div className="animate-infinite-scroll flex items-center gap-12 whitespace-nowrap text-sm font-semibold text-blue-300">
      <span className="flex items-center gap-2"><Rocket size={14} className="text-blue-400" /> UPCOMING: LacedIn Product Launch 🚀</span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span>Cloud Services Expansion in APAC Region</span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span>Automated Workflows for Enterprise</span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span>Now Hiring: Full Stack Developers & Cloud Engineers</span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span className="flex items-center gap-2"><Rocket size={14} className="text-blue-400" /> UPCOMING: LacedIn Product Launch 🚀</span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span>Cloud Services Expansion in APAC Region</span>
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
      <span>Automated Workflows for Enterprise</span>
    </div>
  </div>
)

// --- Ecosystem Data ---
const ecosystems = [
  { icon: Code2, title: "Software Development", description: "Custom-built, scalable applications for enterprise needs.", color: "blue" },
  { icon: Layers, title: "Automation Ecosystems", description: "Streamlining workflows with intelligent bot and CRM integrations.", color: "indigo" },
  { icon: Cloud, title: "Cloud Services Division", description: "Secure, managed infrastructure on AWS & Azure.", color: "sky" },
  { icon: Terminal, title: "IT Consulting", description: "Strategic technology roadmaps for digital transformation.", color: "purple" },
  { icon: Rocket, title: "LacedIn Platform", description: "Next-gen professional network launching soon.", color: "pink" },
  { icon: Users, title: "Learning & Internships", description: "Upskilling the next generation of tech leaders.", color: "green" },
];

// --- Main Page Component ---

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative cursor-none lg:cursor-auto px-1">
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />
      <Header />

      <main>
        {/* 1. Immersive Hero */}
        <section className="relative min-h-screen flex flex-col pt-32 overflow-hidden">
          <Ticker />

          <div className="flex-grow flex flex-col justify-center items-center text-center px-4 relative z-10 py-20">
            {/* Floating Elements (Visual Decoration) */}
            <div className="absolute top-1/4 left-[10%] w-20 h-20 border border-blue-500/30 rounded-lg animate-float hidden lg:block opacity-50 rotate-12 bg-blue-500/5 backdrop-blur-sm"></div>
            <div className="absolute bottom-1/4 right-[10%] w-16 h-16 border border-indigo-500/30 rounded-full animate-float hidden lg:block opacity-50 bg-indigo-500/5 backdrop-blur-sm" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-[15%] right-[20%] w-4 h-4 bg-purple-500 rounded-full animate-ping hidden lg:block opacity-30"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-fade-in-up hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Future-Ready IT Ecosystem
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-10 text-white leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl">
              <span className="block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Premier IT Solutions</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-pulse-slow block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Engineered for Growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-16 max-w-3xl mx-auto leading-loose font-light text-balance animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Building intelligent software, automation ecosystems, secure cloud infrastructure, and next-generation digital platforms for the global economy.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/ecosystem" className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-1 min-w-[200px] flex items-center justify-center overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link to="/products" className="group px-8 py-4 rounded-full text-slate-300 font-bold text-lg border border-slate-700 hover:border-white/50 hover:text-white bg-slate-900/40 backdrop-blur-md hover:bg-slate-800/80 transition-all duration-300 min-w-[200px] flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10">View Products</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-md relative z-20">
            <div className="container-xl grid grid-cols-2 md:grid-cols-4">
              <StatItem value="500+" label="Projects Delivered" />
              <StatItem value="99.9%" label="Uptime Guarantee" />
              <StatItem value="Global" label="Remote-First" />
              <StatItem value="24/7" label="Expert Support" />
            </div>
          </div>
        </section>

        {/* 2. Ecosystem Overview Grid */}
        <section className="section-spacing bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 relative z-10">
          <div className="container-xl mt-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Technology Ecosystem</h2>
              <p className="text-slate-400 text-lg">A unified suite of digital services designed to accelerate enterprise growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ecosystems.map((item, idx) => (
                <FeatureCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. LacedIn Product Spotlight */}
        <section className="section-spacing relative overflow-hidden group">
          {/* Background Special */}
          <div className="absolute inset-0 bg-slate-950 transition-colors duration-1000 group-hover:bg-[#0f0a1e]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 opacity-50"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          </div>

          <div className="container-xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 lg:pr-12">
              <div className="inline-block px-4 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
                Checking Launch Sequence...
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">LacedIn</span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-loose">
                The next-generation platform designed to empower digital professionals. Connect, collaborate, and grow in a decentralized talent economy.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {['Smart Matching', 'Verified Credentials', 'Global Networking', 'Freelance Marketplace'].map(feat => (
                  <div key={feat} className="flex items-center gap-3 text-slate-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                    {feat}
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-purple-500/30 backdrop-blur-sm hover:bg-slate-800/60 transition-colors cursor-pointer">
                <span className="text-purple-400 font-mono text-xl font-bold animate-pulse">COMING SOON</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest border-l border-slate-700 pl-4">Join the Waitlist</span>
              </div>
            </div>

            {/* Visual Mockup Placeholder */}
            <div className="flex-1 w-full relative">
              <div className="relative aspect-video bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                {/* Abstract UI Mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 h-8 bg-slate-800 rounded-lg flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="absolute top-16 left-4 right-4 bottom-4 bg-slate-800/50 rounded-lg border border-slate-700/50 p-6 flex items-center justify-center">
                  <Rocket size={64} className="text-purple-500/50 animate-bounce" />
                  <div className="absolute inset-0 bg-grid-white opacity-[0.05]"></div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-purple-500/30 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Early Access</p>
                  <p className="text-xs text-slate-400">Limited Spots Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AWS-Style Cloud Services */}
        <section className="section-spacing bg-slate-950 relative border-t border-slate-800">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
          <div className="container-xl relative z-10 mt-20">
            <div className="flex flex-col items-center text-center mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Enterprise Cloud Infrastructure</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Scalable, secure, and managed cloud solutions for high-performance workloads.</p>
              </div>
              <div className="flex gap-2 justify-center">
                {['AWS', 'Azure', 'GCP'].map(cloud => (
                  <span key={cloud} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-slate-400 cursor-default hover:text-white hover:border-blue-500/50 transition-colors">{cloud}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Managed Hosting", icon: Server, desc: "24/7 monitoring and maintenance." },
                { title: "Cloud Migration", icon: Cloud, desc: "Zero-downtime transition strategies." },
                { title: "DevOps & CI/CD", icon: Settings, desc: "Automated delivery pipelines." },
                { title: "Cyber Security", icon: Shield, desc: "Advanced threat protection." }
              ].map((service, i) => (
                <div key={i} className="p-6 bg-slate-900/40 border border-slate-800 hover:border-blue-500/40 rounded-xl transition-all group backdrop-blur-sm mb-6">
                  <service.icon className="w-10 h-10 text-slate-500 group-hover:text-blue-400 mb-4 transition-colors" />
                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-slate-400 mb-[5px]">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Automation Division */}
        <section className="section-spacing bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Intelligent Automation</h2>
                <p className="text-lg text-slate-400 mb-8">
                  Eliminate repetitive tasks and scale your operations with our custom automation bots and workflow integrations.
                </p>
                <ul className="space-y-4">
                  {[
                    "WhatsApp Business API Bots",
                    "Instagram DM Automation",
                    "Email Marketing Workflows",
                    "CRM Data Sync & Integration"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-800 hover:border-green-500/30 transition-all cursor-default">
                      <Zap className="text-green-500 w-5 h-5 flex-shrink-0" />
                      <span className="text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square animate-float hover:border-green-500/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 text-green-500 font-bold text-2xl">WA</div>
                  <div className="font-bold text-white">WhatsApp</div>
                  <div className="text-xs text-slate-500 mt-1">API Integration</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square animate-float hover:border-pink-500/30 transition-colors" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 text-pink-500 font-bold text-2xl">IG</div>
                  <div className="font-bold text-white">Instagram</div>
                  <div className="text-xs text-slate-500 mt-1">Chatbots</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square animate-float hover:border-blue-500/30 transition-colors" style={{ animationDelay: '0.5s' }}>
                  <Mail size={32} className="text-blue-400 mb-4" />
                  <div className="font-bold text-white">Email</div>
                  <div className="text-xs text-slate-500 mt-1">Drip Campaigns</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square h-full bg-gradient-to-br from-green-900/20 to-slate-900">
                  <div className="text-3xl font-bold text-white">10x</div>
                  <div className="text-xs text-green-400 mt-1 font-mono">EFFICIENCY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Inoglle - Feature Grid */}
        <section className="section-spacing bg-slate-950 border-t border-slate-800/50">
          <div className="container-xl mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Inoglle</h2>
              <p className="text-slate-400">Partner with a company built for the future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WhyChooseCard title="Innovation Driven" desc="We constantly experiment with emerging tech to give you a competitive edge." />
              <WhyChooseCard title="Growth Focused" desc="Every solution we build is designed to directly impact your bottom line." />
              <WhyChooseCard title="Customer Centric" desc="Your success is our north star. We are aiming for long-term partnerships." />
              <WhyChooseCard title="Cloud Ready" desc="Native cloud architectures ensuring scalability and security from day one." />
              <WhyChooseCard title="AI Powered Vision" desc="Integrating artificial intelligence to automate and optimize business logic." />
              <WhyChooseCard title="Remote First Company" desc="Accessing the best global talent to work on your mission-critical projects." />
            </div>
          </div>
        </section>

        {/* 7. Careers */}
        <section className="section-spacing bg-white/[0.02]">
          <div className="container-xl mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Build the Future with Inoglle</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Join a remote-first, innovation-driven team solving the world's most complex technical challenges.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { role: "Full Stack Developer", type: "Remote", exp: "2-4 Yrs" },
                { role: "Cloud Engineer (AWS)", type: "Remote", exp: "1-3 Yrs" },
                { role: "Automation Specialist", type: "Remote", exp: "Fresher/Intern" },
                { role: "Digital Marketing Intern", type: "Remote", exp: "Internship" }
              ].map((job, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group">
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">{job.role}</h4>
                    <div className="flex gap-4 mt-2 text-xs text-slate-500 font-mono">
                      <span className="flex items-center gap-1"><Globe size={10} /> {job.type}</span>
                      <span>{job.exp}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-20 mb-20">
              <a href="mailto:careers@inoglle.com" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 border border-slate-700/50 rounded-full hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group shadow-2xl mx-auto">
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors font-medium">Join the team:</span>
                <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">careers@inoglle.com</span>
                <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* 8. Bottom Branding & Contact */}
        <section className="section-spacing relative overflow-hidden">
          <div className="container-xl relative z-10">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl p-12 md:p-20 text-center shadow-2xl">

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px]"></div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  We don't just build software.
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-10 pb-2">
                  We build intelligent growth ecosystems.
                </h3>
                <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Ready to transform your business with future-proof technology? Let's engineer your success story together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="mailto:info@inoglle.com" className="btn-primary min-w-[200px] text-lg px-8 shadow-2xl shadow-blue-900/20 rounded-full">
                    <Mail className="inline mr-2 w-5 h-5" /> Start a Conversation
                  </a>
                  <div className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-700/50 bg-slate-800/50 text-slate-300 backdrop-blur-sm cursor-default hover:bg-slate-800 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>Global HQ: Bengaluru, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Action */}
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all animate-bounce">
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>

      </main>
      <Footer />
      <style>{`
        @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
             animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
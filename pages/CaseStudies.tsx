import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Database,
  Cpu,
  Globe,
  BarChart,
  Lock,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const categories = ["All", "Software", "Cloud", "Data & AI", "Strategy", "Security"];
  const [activeCategory, setActiveCategory] = useState("All");

  const caseStudies = [
    {
      id: "logistics-saas",
      title: "Global Logistics SaaS Platform",
      category: "Software",
      summary: "Building a unified logistics platform handling $2B+ in annual transactions.",
      stats: ["35% Efficiency Boost", "Real-time Tracking", "AWS Native"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/logistics-saas",
      icon: <Globe className="text-indigo-400" size={24} />,
      color: "indigo"
    },
    {
      id: "cloud-migration",
      title: "Streaming Platform Migration",
      category: "Cloud",
      summary: "Migrating a media giant to Serverless Kubernetes, cutting costs by 60%.",
      stats: ["60% Cost Reduction", "99.99% Uptime", "Zero-Downtime"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/cloud-migration",
      icon: <Server className="text-cyan-400" size={24} />,
      color: "cyan"
    },
    {
      id: "data-analytics",
      title: "AI Churn Prediction Engine",
      category: "Data & AI",
      summary: "Predicting customer churn with 92% accuracy using Python & Spark.",
      stats: ["92% Accuracy", "$15M Revenue Saved", "Real-time AI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/data-analytics",
      icon: <BarChart className="text-purple-400" size={24} />,
      color: "purple"
    },
    {
      id: "legacy-modernization",
      title: "Mainframe to Microservices",
      category: "Software",
      summary: "Transforming a manufacturing legacy system into a modern GoLang architecture.",
      stats: ["400% Faster", "API-First", "Modern UI"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/legacy-modernization",
      icon: <Cpu className="text-orange-400" size={24} />,
      color: "orange"
    },
    {
      id: "security-audit",
      title: "Healthcare Security Shield",
      category: "Security",
      summary: "Securing 10M+ patient records and achieving ISO 27001 compliance.",
      stats: ["100% Compliance", "Zero Breaches", "HIPAA Ready"],
      image: "https://images.unsplash.com/photo-1514412436-c54796b5a766?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/security-audit",
      icon: <ShieldCheck className="text-red-400" size={24} />,
      color: "red"
    },
    {
      id: "digital-strategy",
      title: "Retail Digital Transformation",
      category: "Strategy",
      summary: "A 3-year roadmap turning a brick-and-mortar chain into an omnichannel leader.",
      stats: ["200% Online Growth", "Omnichannel", "Agile Adoption"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/digital-strategy",
      icon: <TrendingUp className="text-teal-400" size={24} />,
      color: "teal"
    },
    {
      id: "fintech-scale",
      title: "NeoBank Scaling Architecture",
      category: "Cloud",
      summary: "Scaling a Fintech startup to support 5 Million concurrent users.",
      stats: ["5M+ Users", "<50ms Latency", "Global Scale"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      link: "/case-studies/fintech-scale",
      icon: <Zap className="text-blue-400" size={24} />,
      color: "blue"
    }
  ];

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      <Header />

      <main className="pt-32 pb-20">

        {/* Header Section */}
        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
              Our Work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Proven Results. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Real Impact.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore how we've helped global enterprises and startups transform their technology stack and drive business growth.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                            px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                            ${activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'}
                        `}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Link to={study.link} key={study.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 block h-full flex flex-col">

                {/* Image Cover */}
                <div className="h-48 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-${study.color}-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all`}></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-slate-700">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="p-3 bg-slate-950 rounded-xl inline-block mb-4 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                      {study.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-800">
                    <div className="grid grid-cols-2 gap-y-2 mb-6">
                      {study.stats.slice(0, 2).map((stat, i) => (
                        <div key={i} className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${study.color}-500`}></div>
                          {stat}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-400 text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;

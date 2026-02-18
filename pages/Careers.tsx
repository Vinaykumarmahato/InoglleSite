import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
  Briefcase,
  MapPin,
  ArrowRight,
  Search,
  BrainCircuit,
  Lightbulb,
  Handshake,
  Rocket,
  Clock,
  DollarSign,
  Code,
  Users
} from 'lucide-react';

const Careers = () => {
  const [filter, setFilter] = useState('All');

  const jobOpenings = [
    { title: "Senior Frontend Engineer", department: "Engineering", location: "Bengaluru, India", type: "Full-time", salary: "$40k - $70k" },
    { title: "Cloud Solutions Architect", department: "Engineering", location: "Remote", type: "Full-time", salary: "$60k - $90k" },
    { title: "Product Manager - AI Platforms", department: "Product", location: "Bengaluru, India", type: "Full-time", salary: "$50k - $80k" },
    { title: "UX/UI Designer", department: "Design", location: "Remote", type: "Contract", salary: "Competitive" },
    { title: "Technical Project Manager", department: "Product", location: "Bengaluru, India", type: "Full-time", salary: "$45k - $75k" },
    { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-time", salary: "$55k - $85k" }
  ];

  const filters = ['All', 'Engineering', 'Product', 'Design'];
  const filteredJobs = jobOpenings.filter(job => filter === 'All' || job.department === filter);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Header />

      <main>
        {/* --- Hero Section --- */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Network Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-slate-950 to-slate-950"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto space-y-8" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider animate-pulse mt-[58px]">
              We are Hiring
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Do the Best Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Of Your Career.</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Join a team of dreamers and doers who are building the digital infrastructure of tomorrow.
            </p>

            <div className="flex justify-center gap-4">
              <a href="#open-positions" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:shadow-blue-600/20 transition-all hover:-translate-y-1">
                View Open Roles
              </a>
            </div>
          </div>
        </section>

        {/* --- Perks Grid --- */}
        <section className="py-24 bg-slate-900/30 border-y border-slate-900" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Inoglle?</h2>
              <p className="text-slate-400">More than just a paycheck.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Rocket, title: "High Impact", desc: "Work on mission-critical systems for global enterprises." },
                { icon: Clock, title: "Flexible Hours", desc: "We value output over hours. Work when you're most productive." },
                { icon: DollarSign, title: "Competitive Pay", desc: "Top-tier salary packages with equity options." },
                { icon: Users, title: "Great Culture", desc: "Zero politics. Just smart people working on hard problems." },
              ].map((perk, i) => (
                <div key={i} className="p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors text-center" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <div className="w-12 h-12 mx-auto bg-slate-900 rounded-full flex items-center justify-center text-blue-400 mb-6 border border-slate-800">
                    <perk.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-slate-400 text-sm">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Job Board --- */}
        <section id="open-positions" className="py-32 bg-[#020617]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-aos="fade-right">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Open Positions</h2>
                <p className="text-slate-400">Come help us build the future.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all border ${filter === f
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, i) => (
                  <div
                    key={i}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-2">
                        <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-blue-500" /> {job.department}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-rose-500" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-amber-500" /> {job.type}</span>
                        <span className="flex items-center gap-1.5"><DollarSign size={14} className="text-green-500" /> {job.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">Apply Now</span>
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 border border-dashed border-slate-800 rounded-xl text-slate-500" data-aos="fade-in">
                  <Code size={48} className="mx-auto mb-4 opacity-20" />
                  No open positions found in this department. Check back later!
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Careers;

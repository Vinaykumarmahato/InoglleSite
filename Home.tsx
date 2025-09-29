/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import Header from './components/Header';
import { ChevronDown, ArrowRight, Code, FlaskConical, Landmark, TestTube, Bot, Settings, Plus, ArrowLeft, ArrowRight as ArrowRightIcon, Twitter, Linkedin, Instagram, Youtube, Bell, X } from 'lucide-react';

const StatCard = ({ value, label }) => (
  <div className="text-left">
    <p className="text-5xl font-bold">{value}</p>
    <p className="text-slate-400 mt-2">{label}</p>
  </div>
);

const VisionaryCard = ({ name, title, company }) => (
  <div className="bg-slate-800/50 rounded-lg p-4 flex flex-col">
    <div className="bg-slate-700 w-full aspect-square rounded-md mb-4"></div>
    <div className="flex-grow">
      <p className="font-bold">{name}</p>
      <p className="text-sm text-slate-400">{company} | {title}</p>
    </div>
    <button className="self-end mt-4 bg-slate-700 rounded-full p-2 hover:bg-slate-600">
      <Plus size={20} />
    </button>
  </div>
);

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  const dataSampleIcons = [
    { icon: Code, label: "Coding" },
    { icon: FlaskConical, label: "STEM" },
    { icon: Landmark, label: "BFSI, Medical, Legal" },
    { icon: TestTube, label: "Multimodality" },
    { icon: Bot, label: "Robotics" },
    { icon: Settings, label: "Custom" },
  ];

  const footerLinks = {
    "Train models": ["What is Turing AGI", "Evaluate models", "Generate data", "Improve models", "Datasets"],
    "Data samples": ["Coding", "STEM", "Multimodal", "Domain-Specific", "Robotics", "Custom"],
    "For talent": ["How to get hired", "Developer reviews", "Talent resources", "Tech interview questions"],
    "Resources": ["Research", "Case studies", "Use cases", "Enterprise Insights"],
    "Deploy AI": ["What is Turing Intelligence", "Develop AI Strategy", "Deploy AI Systems", "Deploy AI Talent"],
    "Company": ["About", "Careers", "Blog", "Press", "Contact Us"],
    "Connect": ["Contact us", "Help center"],
  };

  return (
    <div className="bg-[#060814] text-slate-200">
      {showBanner && (
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center text-sm relative">
            <Bell size={16} className="mr-3" />
            <p>
              Need a vendor switch? Accelerate your AI research with a neutral data partner.
            </p>
            <a href="#" className="font-bold underline ml-4 flex items-center gap-1">
              Learn More <ArrowRight size={14} />
            </a>
            <button onClick={() => setShowBanner(false)} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -top-1/2 opacity-30">
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-radial-gradient from-blue-500 to-transparent blur-3xl"></div>
            <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-radial-gradient from-yellow-500 to-transparent blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center bg-black/30 backdrop-blur-sm border border-slate-700 rounded-lg p-1 text-sm space-x-2 mb-8">
              <button className="px-3 py-1 rounded-md bg-slate-700">Train Models</button>
              <button className="px-3 py-1">Deploy AI</button>
              <button className="px-3 py-1">Hire Talent</button>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Accelerate ASI Research<br />Build Proprietary Intelligence
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
              Train, evaluate, fine-tune, and deploy models capable of raising the ceiling of human intelligence, only with Turing.
            </p>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg mb-16 hover:bg-slate-200">
              Get Started
            </button>
            <div className="flex items-center justify-center space-x-8 text-slate-400 grayscale opacity-70">
              <span>character.ai</span>
              <span className="font-bold text-white">NVIDIA</span>
              <span>augment code</span>
              <span className="font-bold text-xl text-white">Gemini</span>
              <span>ANTHROPIC</span>
              <span>snowflake</span>
            </div>
          </div>
        </section>

        {/* Turing Works Section */}
        <section className="text-center py-16">
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed">
            Turing works with frontier labs and enterprises to close the gap between model training and real-world deployment, turning <span className="text-blue-400">research progress into practical intelligence.</span>
          </p>
        </section>

        {/* Train Models Section */}
        <section className="py-16">
          <div className="text-left mb-12">
            <p className="text-sm font-semibold text-slate-400 mb-2">TRAIN MODELS</p>
            <h2 className="text-3xl sm:text-4xl font-bold max-w-2xl">
              Build and train advanced, explainable models with curated data, reproducible benchmarks, and evaluation tooling.
            </h2>
            <button className="mt-6 bg-white text-black font-semibold px-5 py-2 rounded-lg text-sm hover:bg-slate-200">
              Accelerate ASI Research
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div>
              <h3 className="font-bold mb-2">EVALUATE</h3>
              <p className="text-slate-400 mb-4">Benchmark gaps, set criteria, run diagnostics.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Run Benchmarks <ArrowRight size={16} /></a>
            </div>
            <div>
              <h3 className="font-bold mb-2">GENERATE</h3>
              <p className="text-slate-400 mb-4">Build and scale frontier data pipelines.</p>
              <div className="space-y-2">
                <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Buy Data Packs <ArrowRight size={16} /></a>
                <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Build Custom Data <ArrowRight size={16} /></a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">IMPROVE</h3>
              <p className="text-slate-400 mb-4">Accelerate iteration loops and fine-tune outputs.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Deploy Improvements <ArrowRight size={16} /></a>
            </div>
          </div>
          
          <button className="border border-slate-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800">
            EXPLORE PROPRIETARY DATA
          </button>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {dataSampleIcons.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center justify-center h-24">
                <Icon className="text-slate-400 mb-2" size={24} />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deploy AI Section */}
        <section className="py-24 text-center relative bg-concentric">
          <p className="text-sm font-semibold text-slate-400 mb-2">DEPLOY AI</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mx-auto mb-8">
            Turn frontier models into business results with reliable systems, tailored workflows, and fine-tuned intelligence.
          </h2>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 mb-16">
            Accelerate Your Enterprise
          </button>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="border border-slate-700 p-8 rounded-2xl bg-[#060814]">
              <div className="w-24 h-24 bg-slate-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Strategize</h3>
              <p className="text-slate-400 mb-4">Match AI capabilities to concrete business goals.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Define Strategy <ArrowRight size={16} /></a>
            </div>
            <div className="border border-slate-700 p-8 rounded-2xl bg-[#060814]">
              <div className="w-24 h-24 bg-slate-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Build</h3>
              <p className="text-slate-400 mb-4">Build production-ready systems and workflows powered by frontier models.</p>
              <a href="#" className="text-blue-400 flex items-center gap-2 hover:underline">Deploy Systems <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>
        
        {/* Partners Banner */}
        <div className="bg-blue-600 -mx-4 sm:-mx-6 lg:-mx-8 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center text-slate-300">
                    <span className="text-sm font-semibold text-white">PARTNERED WITH AI PIONEERS</span>
                    <div className="flex items-center gap-8 grayscale brightness-200">
                        <span>ANTHROPIC</span>
                        <span className="font-bold">NVIDIA</span>
                        <span className="font-bold">aws</span>
                        <span className="font-bold">Google Cloud</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Hire Talent Section */}
        <section className="py-24 text-left">
          <p className="text-sm font-semibold text-slate-400 mb-2">HIRE TALENT</p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mb-8">
            Accelerate enterprise workflows with the top 1–3% AI-native talent and teams across domains and industries.
          </h2>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 mb-16">
            Accelerate Your Enterprise
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <StatCard value="4M+" label="Vetted AI and engineering talent profiles." />
            <StatCard value="100+" label="Countries represented in our network." />
            <StatCard value="97%" label="Engagement success rate with matched talent." />
            <StatCard value="~4 days" label="Average time from scope to start date for talent." />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 text-center bg-dots">
          <p className="text-sm font-semibold text-slate-400 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
          <blockquote className="text-2xl sm:text-3xl max-w-4xl mx-auto leading-relaxed mb-8">
            “From significantly enhancing model evaluations through thorough cleanup efforts and intelligent error recovery, to swiftly generating crucial RL data that rectified model behaviors, we’ve achieved substantial improvements with Turing.”
          </blockquote>
          <p className="font-semibold">Research Head</p>
          <p className="text-sm text-slate-400 mb-8">Leading AI lab</p>
          <div className="flex items-center justify-center gap-4">
            <button className="p-2 border border-slate-600 rounded-full hover:bg-slate-800"><ArrowLeft size={16} /></button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
            </div>
            <button className="p-2 border border-slate-600 rounded-full hover:bg-slate-800"><ArrowRightIcon size={16} /></button>
          </div>
        </section>

        {/* Visionaries Section */}
        <section className="py-24">
          <h2 className="text-center text-sm font-semibold text-slate-400 mb-8">IN CONVERSATION WITH AI VISIONARIES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <VisionaryCard name="Sam Altman" company="OPENAI" title="CEO" />
            <VisionaryCard name="Jeff Dean" company="GOOGLE DEEPMIND" title="CHIEF SCIENTIST" />
            <VisionaryCard name="Adam D'Angelo" company="QUORA" title="CEO" />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16">
          <div className="bg-blue-600 rounded-2xl text-center p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Train models, deploy intelligence, and hire talent with Turing.</h2>
            <p className="max-w-2xl mx-auto text-blue-200 mb-8">Partner with Turing to accelerate frontier research, deploy proprietary intelligence, or hire AI-native talent.</p>
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-100">
              Get Started
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            <div className="lg:col-span-1">
              <h3 className="font-bold text-white text-lg">TURING</h3>
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map(link => <li key={link}><a href="#" className="hover:text-white">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-xs">AICPA SOC</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="#" className="hover:text-white">Sitemap</a>
                <a href="#" className="hover:text-white">Terms of service</a>
                <a href="#" className="hover:text-white">Privacy policy</a>
                <a href="#" className="hover:text-white">Cookie settings</a>
                <a href="#" className="hover:text-white">Do Not Sell or Share My Personal Info</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Twitter size={18} />
              <Linkedin size={18} />
              <Instagram size={18} />
              <Youtube size={18} />
            </div>
          </div>
          <div className="mt-6 text-center md:text-right text-xs text-slate-500">
            <p>1900 Embarcadero Road Palo Alto, CA, 94303  |  © 2025 Turing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
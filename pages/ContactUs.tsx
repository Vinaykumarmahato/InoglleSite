import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Inoglle | Start Your Digital Transformation";
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is the typical project timeline?", a: "Project timelines vary depending on the scope and complexity. A typical project can range from 3 to 9 months. We provide a detailed timeline after the initial discovery phase." },
    { q: "How do you handle project management?", a: "We use agile methodologies and dedicated project managers to ensure transparency, regular communication, and on-time delivery. You will have access to a project portal to track progress." },
    { q: "What are your pricing models?", a: "We offer flexible pricing models, including fixed-price for well-defined projects, time & materials for iterative work, and dedicated teams for ongoing development." },
    { q: "Do you offer support after the project is launched?", a: "Yes, we provide a range of post-launch support and maintenance packages to ensure your application remains secure, updated, and performs optimally." }
  ];

  const handleFaqToggle = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Header />

      <main>
        {/* --- Hero Section --- */}
        <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-slate-950"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mt-[58px]">
              <MessageSquare size={14} /> Get in Touch
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Extraordinary.</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you have a groundbreaking idea or a complex technical challenge, we're here to help you solve it.
            </p>
          </div>
        </section>

        {/* --- Contact Content --- */}
        <section className="py-20 bg-slate-950 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left Column: Info & Map */}
              <div className="space-y-12" data-aos="fade-right">
                <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Email Us</p>
                        <a href="mailto:hello@inoglle.com" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">hello@inoglle.com</a>
                        <p className="text-slate-500 text-sm mt-1">For general inquiries and sales.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Call Us</p>
                        <a href="tel:+918012345678" className="text-lg font-semibold text-white hover:text-green-400 transition-colors">+91 80 1234 5678</a>
                        <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am - 6pm IST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Visit Us</p>
                        <p className="text-lg font-semibold text-white">Bengaluru, India</p>
                        <p className="text-slate-500 text-sm mt-1">Plot 56, Electronic City Phase 1,<br />Hosur Road, Karnataka 560100</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1577086664693-894553052526?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Office Location Map"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg">
                      <MapPin size={16} /> View on Google Maps
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-[#0f172a] p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden" data-aos="fade-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                <h3 className="text-3xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-slate-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-300">Name</label>
                      <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-300">Email</label>
                      <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-300">Subject</label>
                    <select id="subject" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
                      <option>I have a project in mind</option>
                      <option>I'm looking for a job</option>
                      <option>Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-300">Message</label>
                    <textarea id="message" rows={5} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>

            </div>

            {/* --- FAQs --- */}
            <div className="mt-32 max-w-3xl mx-auto" data-aos="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-400">Common questions about working with us.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/30 transition-colors" data-aos="fade-up" data-aos-delay={index * 50}>
                    <button
                      onClick={() => handleFaqToggle(index)}
                      className="w-full flex justify-between items-center p-6 text-left font-semibold text-white focus:outline-none"
                    >
                      <span className="text-lg">{faq.q}</span>
                      <ChevronDown className={`text-slate-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-blue-400' : ''}`} />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default ContactUs;

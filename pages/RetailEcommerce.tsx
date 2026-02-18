import React from 'react';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import {
    ShoppingBag,
    Smartphone,
    Tag,
    Zap,
    Search,
    Heart,
    ArrowRight,
    Truck,
    Repeat,
    LayoutGrid,
    CreditCard,
    MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailEcommerce = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-pink-500/30 overflow-x-hidden">
            <Header />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                    {/* Background Gradients (Pink/Violet for Retail/Engagement) */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                    <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-8 animate-fade-in-up uppercase tracking-wider">
                            <ShoppingBag size={16} /> Retail & E-Commerce
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
                            Experiences that <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Inspire Loyalty.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                            We build seamless omnichannel commerce platforms that delight customers across every touchpoint.
                            From headless storefronts to AI-powered personalization.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
                            <Link to="/contact" className="px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-full transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/50 hover:-translate-y-1 flex items-center gap-2">
                                Boost Your Sales <ArrowRight size={20} />
                            </Link>
                            <Link to="/case-studies" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-full border border-slate-700 hover:border-slate-500 transition-all backdrop-blur-sm flex items-center gap-2">
                                Our Work in Retail
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- Solutions Grid --- */}
                <section className="py-24 bg-slate-950 relative border-y border-slate-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Omnichannel Commerce</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                Creating unified shopping journeys online, in-app, and in-store.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Headless Commerce",
                                    desc: "Decoupling the frontend (Next.js/React) from backend logic (Shopify Plus/Magento) for ultimate speed and flexibility.",
                                    icon: <LayoutGrid className="text-pink-400" size={32} />
                                },
                                {
                                    title: "Mobile Commerce Apps",
                                    desc: "Native iOS and Android apps with smooth checkout flows and push notifications.",
                                    icon: <Smartphone className="text-violet-400" size={32} />
                                },
                                {
                                    title: "Personalization Engines",
                                    desc: "Using ML to recommend products based on browsing history and purchase behavior.",
                                    icon: <Heart className="text-rose-400" size={32} />
                                },
                                {
                                    title: "Inventory Sync",
                                    desc: "Real-time stock visibility across all warehouses and physical store locations.",
                                    icon: <Tag className="text-orange-400" size={32} />
                                },
                                {
                                    title: "Conversational AI",
                                    desc: "Intelligent chatbots for 24/7 customer support and guided shopping.",
                                    icon: <MessageCircle className="text-blue-400" size={32} />
                                },
                                {
                                    title: "Subscription Models",
                                    desc: "Implementing recurring billing logic to turn one-time buyers into subscribers.",
                                    icon: <Repeat className="text-emerald-400" size={32} />
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-pink-500/40 transition-all group">
                                    <div className="mb-6 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform shadow-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Personalization Feature --- */}
                <section className="py-24 bg-[#060a18]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    Hyper-Personalized <br />
                                    <span className="text-pink-500">Shopping.</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    Generic storefronts don't convert. We build intelligent platforms that treat every visitor like a VIP, serving them the exact products they want to see.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Dynamic Merchandising", text: "Auto-reorder product grids based on trending items." },
                                        { title: "Smart Search", text: "Predictive search with typo tolerance and visual filtering." },
                                        { title: "Loyalty Integration", text: "Seamless points redemption at checkout." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="mt-1">
                                                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                                    <Zap size={20} />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">{item.title}</h4>
                                                <p className="text-slate-400 leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-pink-600/10 blur-[100px] rounded-full"></div>

                                {/* Product Card Visual */}
                                <div className="relative max-w-sm mx-auto bg-white rounded-3xl p-4 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
                                    {/* Image Area */}
                                    <div className="h-64 bg-slate-100 rounded-2xl mb-4 relative overflow-hidden group/img">
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                                        <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">New Arrival</div>
                                        <div className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md z-10 cursor-pointer text-pink-500">
                                            <Heart fill="currentColor" size={16} />
                                        </div>

                                        {/* Simulated Shoe/Item */}
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 opacity-20 text-6xl font-bold italic rotate-[-15deg]">
                                            SNEAKER
                                        </div>
                                    </div>

                                    <div className="px-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Urban Series</div>
                                                <h3 className="text-xl font-bold text-slate-900">Velocity Runner XT</h3>
                                            </div>
                                            <div className="flex items-center gap-1 text-orange-500 text-sm font-bold">
                                                ★ 4.9
                                            </div>
                                        </div>

                                        <p className="text-slate-500 text-sm mb-4">
                                            Ultra-lightweight mesh with responsive cushioning for city streets.
                                        </p>

                                        <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                                            <div className="text-2xl font-bold text-slate-900">$149.00</div>
                                            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 flex items-center gap-2">
                                                Add to Cart <ShoppingBag size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* AI Recommendation Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-pink-50 p-3 rounded-lg border border-pink-100 flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-500">
                                        <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">AI</div>
                                        <div className="text-xs text-pink-900">
                                            <span className="font-bold">Top Match:</span> Because you viewed Running Gear.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-pink-900/10 backdrop-blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale?</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Let's build a shopping experience your customers will love.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:bg-pink-50 hover:scale-105 transition-all flex items-center gap-2">
                                Start E-Commerce Project <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default RetailEcommerce;

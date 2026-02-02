import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { ListingPage } from './components/ListingPage';
import { AIChatWidget } from './components/AIChatWidget';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            {/* Value Proposition Detail Section */}
            <section className="py-24 border-b border-zinc-200 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-widest">Why BariBazar?</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-zinc-900">Built for the modern buyer.</h2>
                    
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900">AI-Driven Speed</h3>
                            <p className="text-zinc-600 text-base leading-relaxed">Get matched with properties 10x faster using our Gemini-powered recommendation engine.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900">Verified Ownership</h3>
                            <p className="text-zinc-600 text-base leading-relaxed">Every listing undergoes a rigorous 3-step verification process to prevent fraud.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300">
                            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                                 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900">Transparent Pricing</h3>
                            <p className="text-zinc-600 text-base leading-relaxed">No hidden fees. See price history and neighborhood trends directly on the listing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedSection />
            
            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden bg-white">
                 <div className="absolute inset-0 bg-blue-50" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 blur-[120px] rounded-full opacity-50" />
                 <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-5xl font-extrabold mb-6 text-zinc-900">Ready to move in?</h2>
                    <p className="text-zinc-600 text-xl mb-10 max-w-2xl mx-auto">Join thousands of people finding their dream home in Dhaka through BariBazar today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                         <button onClick={() => setCurrentPage('buy')} className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:scale-105">Start Searching</button>
                         <button onClick={() => setCurrentPage('rent')} className="bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all">List Your Property</button>
                    </div>
                 </div>
            </section>
          </>
        );
      case 'buy':
        return <ListingPage title="Buy Properties" filterType="Buy" />;
      case 'rent':
        return <ListingPage title="Rent Properties" filterType="Rent" />;
      case 'land':
        return <ListingPage title="Land for Sale" filterType="Land" />;
      case 'commercial':
        return <ListingPage title="Commercial Spaces" filterType="Commercial" />;
      case 'projects':
        return <ListingPage title="New Projects" filterType="Projects" />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <AIChatWidget />
    </div>
  );
};

export default App;
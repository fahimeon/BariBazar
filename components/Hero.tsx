import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden border-b border-zinc-200 bg-white">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-blue-100 rounded-full blur-[100px] animate-blob mix-blend-multiply opacity-70" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-multiply opacity-70" />

      <div className="container relative z-10 px-4 text-center mx-auto flex flex-col items-center">
        {/* Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm"
        >
          <Sparkles size={16} className="text-blue-500" />
          <span>New: AI-Powered Property Valuation</span>
          <ArrowRight size={16} className="ml-1 opacity-60" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl text-6xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl leading-[1.1] mb-6"
        >
          Find your space in <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Dhaka's Digital Future.
          </span>
        </motion.h1>

        {/* Detailed Value Prop */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-600 leading-relaxed font-light"
        >
          Buy, sell, and rent properties with the intelligence of AI. 
          Verified listings, instant legal checks, and smart price estimation 
          tailored for you.
        </motion.p>

        {/* CTA & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center w-full max-w-xl mx-auto"
        >
          <div className="relative w-full shadow-lg rounded-full group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
              <Search className="h-6 w-6 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full rounded-full border border-zinc-200 bg-white py-4 pl-14 pr-6 text-lg text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all"
              placeholder="Search '3 Bed flat in Gulshan'..."
            />
          </div>
          <Button size="lg" variant="primary" className="w-full sm:w-auto px-8 py-4 shadow-xl shadow-blue-200" icon={<ArrowRight size={20} />}>
            Explore
          </Button>
        </motion.div>

        {/* Stats / Trust */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-12 text-zinc-500 sm:gap-24"
        >
           <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-zinc-900">12k+</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mt-1">Properties</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-zinc-900">98%</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mt-1">Verified</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-zinc-900">24/7</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mt-1">AI Support</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
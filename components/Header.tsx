import React from 'react';
import { Search, Menu, User, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'land', label: 'Land' },
    { id: 'projects', label: 'New Projects' },
    { id: 'commercial', label: 'Commercial' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          {/* Modern Abstract House Logo */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform duration-300">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <span className="font-bold text-2xl tracking-tight hidden sm:block text-zinc-900">BariBazar</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`hover:text-blue-600 transition-colors ${
                currentPage === item.id ? 'text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Search area..." 
              className="h-11 w-72 rounded-full border border-zinc-200 bg-zinc-50 px-5 pl-11 text-base text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-zinc-400 transition-all shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          </div>

          <button className="text-zinc-600 hover:text-blue-600 p-2 hover:bg-zinc-100 rounded-full transition-all">
            <User size={24} />
          </button>
          <button className="text-zinc-600 hover:text-blue-600 relative p-2 hover:bg-zinc-100 rounded-full transition-all">
            <ShoppingBag size={24} />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
          </button>
          
          <button className="md:hidden text-zinc-600 hover:text-black p-2">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};
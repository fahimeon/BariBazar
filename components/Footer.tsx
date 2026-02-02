import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-zinc-200 bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-6">
               {/* Modern Abstract House Logo Small */}
               <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg shadow-md shadow-blue-200">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
              <span className="font-bold text-zinc-900 text-xl">BariBazar</span>
            </div>
            <p className="text-base text-zinc-500 leading-relaxed">
              The smartest way to find property in Bangladesh. AI-driven, transparent, and secure marketplace for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 text-base font-bold text-zinc-900 uppercase tracking-wide">Marketplace</h4>
            <ul className="space-y-4 text-base text-zinc-600">
              <li><button onClick={() => onNavigate('buy')} className="hover:text-blue-600 transition-colors text-left">Buy Property</button></li>
              <li><button onClick={() => onNavigate('rent')} className="hover:text-blue-600 transition-colors text-left">Rent Home</button></li>
              <li><button onClick={() => onNavigate('land')} className="hover:text-blue-600 transition-colors text-left">Land Sales</button></li>
              <li><button onClick={() => onNavigate('commercial')} className="hover:text-blue-600 transition-colors text-left">Commercial</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-base font-bold text-zinc-900 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-4 text-base text-zinc-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Property Valuation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Legal Guide</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Area Guides</a></li>
            </ul>
          </div>

          <div>
             <h4 className="mb-6 text-base font-bold text-zinc-900 uppercase tracking-wide">Contact</h4>
             <p className="text-base text-zinc-600 mb-3">28 Kazi Nazrul Islam Ave,<br/>Dhaka 1000</p>
             <p className="text-base text-zinc-600 mb-3 hover:text-blue-600 cursor-pointer">support@baribazar.bd</p>
             <p className="text-base font-semibold text-zinc-900">+880 1700-000000</p>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-100 pt-8 text-center text-sm text-zinc-500">
          © 2025 BariBazar Ltd. All rights reserved. Built with precision for Dhaka.
        </div>
      </div>
    </footer>
  );
};
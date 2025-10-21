import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import { navItems } from '../data/portfolioData';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Mina Allison</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

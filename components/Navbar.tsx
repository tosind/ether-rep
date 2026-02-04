
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Ecosystem', path: '/' },
    { name: 'Studios', path: '/studios' },
    { name: 'Residency', path: '/residency' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* New Official Logo */}
        <Link to="/" className="flex items-center group py-2">
          <img 
            src="https://storage.googleapis.com/generativeai-downloads/images/sxs/logo-ether-studios.png" 
            alt="Ether Studios" 
            className="h-16 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                isActive(link.path) ? 'text-brand-orange' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <Link
            to="/contact"
            className="bg-brand-gradient text-white text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full shadow-lg shadow-brand-pink/20 hover:shadow-brand-pink/40 hover:-translate-y-0.5 transition-all"
          >
            Book Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background-dark border-b border-white/5 py-8 px-6 space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-brand-gradient text-white text-xs font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl"
          >
            Book Session
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

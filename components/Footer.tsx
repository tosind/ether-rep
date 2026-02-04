
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-24 pb-12 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-10 group">
              <img 
                src="https://storage.googleapis.com/generativeai-downloads/images/sxs/logo-ether-studios.png" 
                alt="Ether Studios" 
                className="h-14 w-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </Link>
            <p className="text-slate-500 max-w-sm mb-10 leading-relaxed font-light text-base">
              The world's most conscious creative ecosystem. Uniting technology and art to foster global human connection through high-fidelity media production.
            </p>
            <div className="flex gap-4">
              {['public', 'camera', 'music_note', 'share'].map((icon) => (
                <a 
                  key={icon}
                  href="#" 
                  className="size-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-[11px] uppercase tracking-[0.3em] text-white/50">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><Link to="/studios" className="hover:text-brand-orange transition-colors">Studios</Link></li>
              <li><Link to="/residency" className="hover:text-brand-orange transition-colors">Residency Program</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-orange transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Booking</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-[11px] uppercase tracking-[0.3em] text-white/50">Connect</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-700 uppercase tracking-widest">Email</span>
                <span className="text-slate-300">hello@theether.creative</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-700 uppercase tracking-widest">HQ</span>
                <span className="text-slate-300">123 Visionary Way, Ottawa, ON</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 text-slate-700 text-[10px] uppercase tracking-[0.4em] font-black">
          <p>© 2024 Ether Studios. Built for the Visionary.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

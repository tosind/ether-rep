
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-110" 
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(9, 10, 17, 0.6) 0%, rgba(9, 10, 17, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgbjHgcc-2mBWZmqrsIOCYqRea3L8o0z6efgvkGZDbWny0JtV3UKklu3kgUFZH4yc9MgwZRbUXyPyVHlenUUsuiLDttNZ6RGbXk_5hJYPJk7NXembi2IDr7d6ydyfoyP4YuTaymU0xMHagsiA6rOlRUXDBDQmEwScLreqA4hA5nDEgV-D53xRpnlIeTQ1CfXDCsqIvEsMwljR0Nj89ZyR7DUO1M4irb_1AjfLoyFTS4jGIFWC93y0oWrWVeF_LvkbMSlYrfo0ETDs")' 
          }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Brand Mark in Hero */}
          <div className="mb-12 animate-in fade-in zoom-in duration-1000">
            <img 
              src="https://storage.googleapis.com/generativeai-downloads/images/sxs/logo-ether-studios.png" 
              alt="Ether Studios" 
              className="h-32 md:h-48 w-auto mx-auto drop-shadow-[0_20px_50px_rgba(255,77,0,0.3)]"
            />
          </div>
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-300">High-Performance Creative Hub</p>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tight mb-10 text-white">
            UNLEASH YOUR <span className="text-gradient">CREATIVE LEGACY</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Premium music, photography, and podcast environments built for the modern architect of culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto px-12 bg-brand-gradient text-white transition-all h-16 rounded-2xl flex items-center justify-center font-black text-sm tracking-widest uppercase shadow-2xl shadow-brand-pink/20 hover:scale-[1.05] active:scale-95">
              Start Your Project
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-12 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white h-16 rounded-2xl flex items-center justify-center font-black text-sm tracking-widest uppercase border border-white/10 transition-all">
              View Rates
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
          <span className="material-symbols-outlined text-4xl animate-bounce text-white">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-20 border-y border-white/5 bg-background-surface/30 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex gap-24 px-12 items-center">
            {['SONY MUSIC', 'VOGUE', 'WARNER BROS', 'UNIVERSAL', 'SPOTIFY', 'ADIDAS', 'REDBULL'].map((brand) => (
              <span key={brand} className="text-3xl font-black opacity-10 tracking-tighter text-white hover:opacity-50 transition-opacity cursor-default">{brand}</span>
            ))}
          </div>
          <div className="flex gap-24 px-12 items-center">
            {['SONY MUSIC', 'VOGUE', 'WARNER BROS', 'UNIVERSAL', 'SPOTIFY', 'ADIDAS', 'REDBULL'].map((brand) => (
              <span key={brand + '2'} className="text-3xl font-black opacity-10 tracking-tighter text-white hover:opacity-50 transition-opacity cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Pillars Section */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-orange font-black tracking-[0.4em] uppercase text-xs mb-6">Our Environments</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none">The Three Pillars.</h3>
          </div>
          <p className="text-slate-400 max-w-sm font-medium leading-relaxed text-lg">
            Curated spaces designed to vanish into the background, allowing your intuition to lead the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Audio Suite',
              desc: 'High-fidelity tracking and post-production for artists who refuse to compromise on sound.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjURi1w4ooCwr5bFCAO8MtsOfXIfQEWUm8pa-QLviIPdstajGZvn889tAMjD8AA6Eo_VLeZm7_b7FeSIgaR_BWgoYmWPpgFMoX4-Et0A9FJzgzEFaya7KFOjkYvsXtDCli3N4E9dJPCpQVB7QiPtflhTnjKIn0_1NdeJLondv4nq1ddP53f3QGwmgeXup-P1Ibi2jHXBP8zyEELHxPrF23wYVLUfQgPqBqXeL-IvRa51CU0IacMKMpia3yS0xyRZ2iZPnpiY5gR30'
            },
            {
              title: 'Visual Loft',
              desc: 'Versatile daylight studio with 14ft ceilings, infinity walls, and high-end lighting rigs.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu0g2gJmNqSOM84hrQD4uFN1fm9tCns65kyUvd37ap3ZNiUHzuvWtGWqCYHAp4Cq-oLs69heIiGnRPUADcCVwmtTlrxc2GBjFwl8c5JSVo9FcYl1k-dM1X4khoKxL3iseIotqVLghGwz_V7SIC0HlCGHS14xsL_EO6lO44Rj5YqamPFmD93KFRI6DA2v5RRXdIx2vn7A9ANI0YdoivBbDpXPH0cWbGiiGSLHi29rnjQsKV-jx-_Wvex5m6Xq_EJF-GKAml6pWSf0I'
            },
            {
              title: 'Broadcast Hub',
              desc: 'Turnkey podcast and live-streaming studio with multi-cam 4K capture as standard.',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2WTiwRm0pzkLshz6nnsjflr2YI_E0cUIhiN2crnOYJQYehQqcmfMHGKBxZlln4EULRW3audDGc3WyBwCmY-CWNviCr8IYcKLv9pagImdpI7gqoKHicKZ-sXliqHGn7NBn0hOjJnUuuDCe9SAaNj8TNH2h9Wlk1SvZHZw03bvrbaRBfAjzkFkvXPIIha5_idNGPUBg0KHyF2MO-niaYQatnvaBBoPOsQZxfbqs4v9Hn_8V7HEFwuosxjwFyo5UnDYkIGGLyoXRClA'
            }
          ].map((pillar) => (
            <div key={pillar.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border border-white/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: `url("${pillar.img}")` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8">
                   <h4 className="text-3xl font-black mb-2 text-white">{pillar.title}</h4>
                   <div className="h-1 w-0 bg-brand-gradient group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-slate-400 mb-8 font-medium leading-relaxed text-base px-2">{pillar.desc}</p>
              <Link to="/studios" className="inline-flex items-center gap-3 text-white font-black uppercase text-xs tracking-[0.3em] px-2 hover:gap-5 transition-all">
                Explore Facility <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Residency Callout */}
      <section className="py-48 bg-background-surface/40 relative overflow-hidden border-y border-white/5">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-brand-pink/10 blur-[150px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white">The Residency.</h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-16">
            Join an exclusive community of vetted high-performers. Our Residency program is designed for creators who demand a long-term home for their legacy projects.
          </p>
          <div className="flex justify-center">
            <Link to="/residency" className="bg-white text-black px-16 py-6 rounded-2xl font-black text-sm tracking-[0.3em] uppercase transition-all shadow-3xl hover:bg-brand-gradient hover:text-white hover:scale-105 active:scale-95">
              Secure Your Spot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

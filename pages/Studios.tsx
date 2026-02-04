
import React from 'react';
import { Link } from 'react-router-dom';

const StudioSection: React.FC<{
  id: string;
  category: string;
  title: string;
  desc: string;
  price: string;
  priceUnit: string;
  features: string[];
  img: string;
  badge: { icon: string; label: string; value: string };
  reverse?: boolean;
  color: 'orange' | 'purple' | 'blue';
}> = ({ category, title, desc, price, priceUnit, features, img, badge, reverse, color }) => {
  const colorMap = {
    orange: 'text-brand-orange',
    purple: 'text-brand-purple',
    blue: 'text-brand-blue'
  };

  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`relative group ${reverse ? 'lg:order-2' : ''}`}>
        <div className={`aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5`}>
          <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
        </div>
        <div className={`absolute -bottom-6 ${reverse ? '-left-6' : '-right-6'} hidden md:block`}>
          <div className="bg-background-surface/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl">
            <div className="flex items-center gap-4">
              <span className={`material-symbols-outlined ${colorMap[color]} text-3xl`}>{badge.icon}</span>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{badge.label}</p>
                <p className="text-lg font-bold text-white">{badge.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`space-y-8 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="space-y-4">
          <span className={`${colorMap[color]} font-bold tracking-[0.3em] text-xs uppercase`}>{category}</span>
          <h3 className="text-5xl font-black tracking-tight text-white">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-lg">{desc}</p>
        </div>
        <div className="relative p-1 rounded-3xl bg-brand-gradient">
          <div className="bg-background-surface p-8 rounded-[1.4rem] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase">Pricing</p>
                <p className="text-2xl font-black text-white">{price}<span className="text-sm font-medium text-gray-500">{priceUnit}</span></p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase">Staff</p>
                <p className={`text-2xl font-black ${colorMap[color]}`}>Expert Pro</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase">Availability</p>
                <p className="text-2xl font-black text-white">24/7</p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-brand-orange text-lg">check_circle</span> {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="w-full bg-brand-gradient hover:opacity-90 text-white py-4 px-8 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg">
              Book This Studio
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Studios: React.FC = () => {
  return (
    <main className="pt-32 pb-24">
      <header className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="size-2 rounded-full bg-brand-orange animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Next Gen Creative Hub</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-white">
          Three professional studios.<br/>
          <span className="text-gradient">One conscious ecosystem.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Experience industry-standard facilities optimized for modern workflows. From sonic excellence to visual storytelling, we provide the canvas for your vision.
        </p>
      </header>

      <div className="max-w-[1300px] mx-auto px-6 space-y-32">
        <StudioSection 
          id="music"
          category="01 / Audio Production"
          title="Music & Sound"
          desc="World-class analog gear meets the precision of digital recording. Designed for artists who demand sonic perfection."
          price="$85"
          priceUnit="/hr"
          color="purple"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAjURi1w4ooCwr5bFCAO8MtsOfXIfQEWUm8pa-QLviIPdstajGZvn889tAMjD8AA6Eo_VLeZm7_b7FeSIgaR_BWgoYmWPpgFMoX4-Et0A9FJzgzEFaya7KFOjkYvsXtDCli3N4E9dJPCpQVB7QiPtflhTnjKIn0_1NdeJLondv4nq1ddP53f3QGwmgeXup-P1Ibi2jHXBP8zyEELHxPrF23wYVLUfQgPqBqXeL-IvRa51CU0IacMKMpia3yS0xyRZ2iZPnpiY5gR30"
          badge={{ icon: 'surround_sound', label: 'Acoustic Rating', value: 'Class A+ Suite' }}
          features={['Recording', 'Mixing', 'Mastering', 'Dolby Atmos']}
        />

        <StudioSection 
          id="podcast"
          category="02 / Digital Media"
          title="Podcast & Talk"
          desc="A plug-and-play environment for creators. High-fidelity audio and cinematic multi-angle video as standard."
          price="$65"
          priceUnit="/hr"
          color="blue"
          reverse
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAiaFX5PFU7NuJygnFXtNK6dpaZg0717iTnOaH4j0QjL_JuYKMTNMT_g1qslbuxTxVBrOVKlaIpEFT8qy8OA76NjiBEvVlBA5dzNNbHdLdFqqag03cdokjjgoqAjI1pFxVtI6W8gx5khjwdm49iT827G8CWawJC4Chz6YTX2LSsCou_LUgwvhH6LJIf4oYQgHhQHCGE6Sq7OEtrb3hkoDyI95Ep8AVsxQnb1xuwI28ifhBFog6kKj6kXMq3j0v35Q5vBl62IFwuHS4"
          badge={{ icon: 'podcasts', label: 'Multi-Cam', value: '4K Live Ready' }}
          features={['Multi-track Audio', '3-Cam 4K Video', 'Live Stream Ready', 'Post-Production']}
        />

        <StudioSection 
          id="capture"
          category="03 / Visual Arts"
          title="Capture & Vision"
          desc="A minimalist canvas with industry-standard lighting and diverse backdrops. Ideal for editorial, fashion, and product shoots."
          price="$450"
          priceUnit="/day"
          color="orange"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDrJYKOVfv7vjV68g6ypA-tXw0oFsHgKKZ_T26qboAqV8hlIQIk4TFKDlH9nXjcaQ0QkQrIz_CliAYsLZteyhRq-3-njUto8WKXzdrywrVzy2lG9tQzMH0h838utLWkwA5pDS4bHaf1cK5tcDsu4Ln4Q3C3UYI4b0vzkBgHH_j4BS8xGpp-eHRPgt9p5aoNgR1JhyV-q-xdeZH39B3GjJomwUAUKzENk905profv99-Laa58dYOpwpRlh77F1M2mazqkM8bX6bh598"
          badge={{ icon: 'photo_camera', label: 'Natural Light', value: '1200 sq. ft.' }}
          features={['Editorial Set', 'Product Cyclorama', 'Styling Room', 'Tethered Stations']}
        />
      </div>
    </main>
  );
};

export default Studios;

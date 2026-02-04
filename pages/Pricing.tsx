
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Music' | 'Podcast' | 'Photo'>('Music');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">Pricing Transparency</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal max-w-2xl mt-4">
            Detailed pricing and service transparency for Ether Studios. We believe in clear expectations, honest pricing, and exceptional multi-spectrum deliverables.
          </p>
        </div>

        {/* Categories */}
        <div className="flex border-b border-white/10 gap-8 mb-12">
          {['Music', 'Podcast', 'Photo'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`flex items-center gap-2 pb-4 pt-2 border-b-[3px] transition-all font-bold uppercase tracking-widest text-sm ${
                activeCategory === cat ? 'border-brand-pink text-white' : 'border-transparent text-slate-500 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {cat === 'Music' ? 'music_note' : cat === 'Podcast' ? 'mic' : 'photo_camera'}
              </span>
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-background-surface shadow-2xl mb-24">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-gradient">
                <th className="px-8 py-6 text-white text-sm font-black uppercase tracking-wider">Service Tier</th>
                <th className="px-8 py-6 text-white text-sm font-black uppercase tracking-wider">Base Price</th>
                <th className="px-8 py-6 text-white text-sm font-black uppercase tracking-wider">Included Hours</th>
                <th className="px-8 py-6 text-white text-sm font-black uppercase tracking-wider">Key Deliverables</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: 'Standard Production', price: '$500', hours: '10 Hours', del: 'Stereo Mix, Project Files, 1 Revision' },
                { name: 'Premium Production', price: '$1,200', hours: '30 Hours', del: 'Full Stems, Mastering, MIDI Data, 3 Revisions', popular: true },
                { name: 'Artist Development', price: '$3,500', hours: '80 Hours', del: 'Full EP (4 songs), Brand Identity, Social Strategy' },
                { name: 'Enterprise Tier', price: 'Contact Us', hours: 'Unlimited', del: 'Full IP Ownership, Source Code, Dedicated Lead' },
              ].map((row) => (
                <tr key={row.name} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-8 text-white text-sm font-semibold">
                    <div className="flex items-center gap-3">
                      {row.name}
                      {row.popular && (
                        <span className="px-3 py-1 rounded-full bg-brand-gradient text-[10px] text-white font-black uppercase tracking-wider shadow-lg shadow-brand-pink/30">Most Popular</span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-8">
                    <div className={`flex min-w-[100px] items-center justify-center rounded-xl h-10 px-4 text-sm font-black ${row.popular ? 'bg-brand-gradient text-white' : 'bg-white/5 text-white border border-white/10'}`}>
                      {row.price}
                    </div>
                  </td>
                  <td className="px-8 py-8 text-slate-400 text-sm font-medium">{row.hours}</td>
                  <td className="px-8 py-8 text-slate-500 text-sm">{row.del}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Workflow Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 rounded-3xl border border-white/10 bg-background-surface flex flex-col gap-6 shadow-xl group hover:border-brand-blue/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-blue text-4xl">auto_fix_normal</span>
              <h3 className="text-white text-2xl font-bold">Simple Workflow</h3>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              Best for standard cleanups, basic color grading, and level normalization. Focuses on clarity and professional presence without complex visual effects.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-brand-blue text-lg">check_circle</span> Noise reduction & Leveling
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-brand-blue text-lg">check_circle</span> Standard Color Correction
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-brand-pink/20 bg-brand-pink/5 flex flex-col gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-gradient"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-pink text-4xl">psychology</span>
              <h3 className="text-white text-2xl font-bold">Complex Workflow</h3>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              Advanced post-production including cinematic soundscapes, frame-by-frame retouching, and custom motion graphics for elite results.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-brand-pink text-lg">check_circle</span> VFX & Motion Graphics
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <span className="material-symbols-outlined text-brand-pink text-lg">check_circle</span> Immersive Spatial Mixing
              </li>
            </ul>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mb-24">
          <h2 className="text-white text-3xl font-black mb-8 border-l-4 border-brand-blue pl-6">Add-on Menu (A La Carte)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Social Clips (5)', price: '$150', tag: 'TikTok/Reels' },
              { name: 'Express Delivery', price: '$200', tag: '24h Turnaround' },
              { name: 'Pro Retouching', price: '$75', tag: 'Per 5 Images' },
              { name: 'Motion FX', price: '$300', tag: 'Custom Intro' }
            ].map((item) => (
              <div key={item.name} className="p-6 rounded-2xl bg-background-surface border border-white/5 flex justify-between items-center group hover:border-brand-orange transition-all cursor-default">
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">{item.name}</span>
                  <span className="text-xs text-slate-500">{item.tag}</span>
                </div>
                <span className="text-brand-orange font-black">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-20 glass-card rounded-[3rem]">
          <h3 className="text-white text-4xl font-black mb-6">Ready to start your project?</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Custom quotes are available for unique project requirements. Let's build something extraordinary together.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-brand-gradient text-white px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-pink/20">
              Book Session
            </button>
            <button className="border-2 border-white/10 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/5 transition-all">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

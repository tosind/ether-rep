
import React from 'react';
import { Link } from 'react-router-dom';

const MembershipCard: React.FC<{
  tier: string;
  price: string;
  popular?: boolean;
  desc: string;
  features: string[];
  icon: string;
  color: string;
}> = ({ tier, price, popular, desc, features, icon, color }) => (
  <div className={`flex flex-col p-10 rounded-[2.5rem] bg-background-surface border ${popular ? 'border-transparent pricing-glow relative scale-105 z-10' : 'border-white/5'} transition-all hover:translate-y-[-8px] shadow-2xl`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-brand-gradient rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <div className={`size-12 rounded-2xl ${color} flex items-center justify-center mb-6`}>
        <span className="material-symbols-outlined text-white">{icon}</span>
      </div>
      <h4 className="text-2xl font-bold text-white mb-2">{tier}</h4>
      <p className="text-sm text-slate-500 mb-6">{desc}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black text-white">{price}</span>
        <span className="text-slate-500 text-sm font-bold">/MO</span>
      </div>
    </div>
    <div className="flex-1 space-y-5 mb-10 border-t border-white/5 pt-8">
      {features.map(f => (
        <div key={f} className="flex items-start gap-4">
          <span className="material-symbols-outlined text-brand-orange text-xl">check</span>
          <span className="text-sm text-slate-300">{f}</span>
        </div>
      ))}
    </div>
    <button className={`w-full py-4 rounded-2xl font-extrabold transition-all shadow-xl ${popular ? 'bg-brand-gradient text-white' : 'border border-white/10 text-white hover:bg-white/5'}`}>
      {popular ? 'Start Growth' : `Select ${tier}`}
    </button>
  </div>
);

const Residency: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[11px] font-bold tracking-widest uppercase text-brand-orange bg-brand-orange/5 border border-brand-orange/20 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                Creative Residency 2024
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 text-white">
                Produce at the <br/><span className="text-gradient">Speed of Thought.</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
                The Ether is a high-fidelity workspace and production hub for the next generation of creative architects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <Link to="/contact" className="px-8 py-5 bg-white text-black text-base font-extrabold rounded-2xl hover:bg-brand-gradient hover:text-white transition-all duration-300 shadow-2xl">
                  Apply for Residency
                </Link>
                <button className="px-8 py-5 border border-white/10 glass-card text-white text-base font-extrabold rounded-2xl hover:bg-white/5 transition-all">
                  Book a Private Tour
                </button>
              </div>
            </div>
            <div className="flex-1 w-full lg:max-w-[600px]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-brand-gradient rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-3xl overflow-hidden glass-card">
                  <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKwiyIalKN5B2BSd1xki6RsuhFOhJZ3K0qM9cMTuRGrkayxtdPPI6kqS0WYNz_eqOGIv3HRySU0RchCbBm_HVqQ_SolBDimDfGM9WLS70kCcriF_WFL5xQqxg6NOFoLgjtjkiNJb_zqfSD6vuFUsvPU5E643JnSiMk8E9MH_S7qIEvxa6BCKJLiLDgFAcx4hyGK_xF3OHJ9G8Tei4FMmAfHmA7N4frTXycNDBKKAXfB793ULsNYBVAaTZKSJqMc8tHlpmkDDd6iqU')" }}></div>
                  <div className="p-8 border-t border-white/10 bg-card-dark/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="size-10 rounded-full bg-brand-gradient p-[2px]">
                        <div className="w-full h-full rounded-full bg-background-surface flex items-center justify-center overflow-hidden">
                          <span className="material-symbols-outlined text-brand-orange text-sm">verified</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Featured Studio: Alpha</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">4K Ready • Dolby Atmos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-32" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-brand-orange mb-6">Membership</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Investment in your <span className="text-gradient">Craft.</span></h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-12">
            <MembershipCard 
              tier="Starter"
              price="$600"
              desc="Essential access for independent minds."
              icon="rocket_launch"
              color="bg-slate-800"
              features={['10 Hours Studio Credit', 'Unlimited Hub Access', 'Basic Networking Access']}
            />
            <MembershipCard 
              tier="Growth"
              price="$1,120"
              popular
              desc="The sweet spot for pro content creators."
              icon="trending_up"
              color="bg-brand-orange"
              features={['20 Hours Studio Credit', '20% Off Extra Gear Hire', 'Priority Hub Booking', 'Quarterly Portfolio Review']}
            />
            <MembershipCard 
              tier="Accelerator"
              price="$1,595"
              desc="Full scale for agencies and teams."
              icon="diamond"
              color="bg-brand-purple"
              features={['30 Hours Studio Credit', '30% Off Extra Gear Hire', '1 Monthly Event Booking', 'VIP Private Locker & Storage']}
            />
          </div>
        </div>
      </section>

      {/* Vetted Section */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-brand-purple mb-6">Who belongs?</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8">Vetted for Excellence.</h3>
              <p className="text-lg text-slate-400 mb-12">We maintain a selective community to ensure every residency creates value for the ecosystem.</p>
              <div className="space-y-10">
                {[
                  { title: 'Digital Creators', desc: 'Designers, editors, and filmmakers with 3+ years of professional output.', icon: 'palette' },
                  { title: 'Brands & Agencies', desc: 'Innovative teams looking for a permanent studio hub and creative culture.', icon: 'work' },
                  { title: 'Community Leaders', desc: 'Event organizers and mentors dedicated to pushing the industry forward.', icon: 'group_work' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="size-14 shrink-0 rounded-2xl bg-brand-gradient p-[1px]">
                      <div className="w-full h-full rounded-2xl bg-background-surface flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-gradient opacity-15 blur-[80px] rounded-full"></div>
              <div className="glass-card rounded-[3rem] p-12 text-center relative z-10">
                <h4 className="text-2xl font-bold text-white mb-6">Current Application Status</h4>
                <div className="p-8 bg-black/40 rounded-3xl mb-8">
                  <div className="flex justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Capacity Utilization</span>
                    <span className="text-[10px] font-bold text-white bg-brand-gradient px-2 py-0.5 rounded">85% FULL</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-gradient w-[85%]"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-8">Next intake starts June 1st. Early applications get priority placement.</p>
                <Link to="/contact" className="w-full inline-block py-5 bg-brand-gradient rounded-2xl text-white font-extrabold shadow-2xl hover:scale-[1.02] transition-transform">
                  Apply for Q3 Intake
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residency;

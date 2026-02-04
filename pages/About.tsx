
import React from 'react';

const ValueCard: React.FC<{ icon: string; title: string; desc: string; color: string }> = ({ icon, title, desc, color }) => (
  <div className={`group p-10 rounded-3xl bg-background-surface border border-white/5 hover:border-${color}/20 transition-all duration-500 hover:-translate-y-2`}>
    <div className={`size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8`}>
      <span className={`material-symbols-outlined text-4xl text-gradient`}>{icon}</span>
    </div>
    <h3 className="text-2xl font-display font-bold text-white mb-4">{title}</h3>
    <p className="text-white/50 leading-relaxed font-light text-lg">{desc}</p>
  </div>
);

const LeaderCard: React.FC<{ name: string; role: string; tag: string; color: string }> = ({ name, role, tag, color }) => (
  <div className={`relative group p-10 rounded-2xl bg-background-dark border border-white/5 transition-all hover:bg-background-surface hover:border-${color}/30`}>
    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-white">north_east</span>
    </div>
    <span className={`inline-block px-3 py-1 rounded-full bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6`}>{tag}</span>
    <h4 className="text-2xl font-display font-bold text-white">{name}</h4>
    <p className="text-white/40 mt-2 text-sm font-medium">{role}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-7xl px-6 py-48 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
          <span className="size-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FF4D1C]"></span>
          Our Collective Mission
        </div>
        <h1 className="text-white font-display font-extrabold text-5xl md:text-7xl lg:text-8xl max-w-[1100px] leading-[1.1] tracking-tighter">
          The Ether exists to unite <span className="text-gradient">conscious voices</span>, narratives, and images.
        </h1>
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-brand-orange via-brand-purple to-transparent"></div>
        </div>
      </section>

      <section className="py-32 bg-background-surface/30 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-white font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight">An Evolution of Narrative.</h2>
              <div className="mt-8 w-24 h-1.5 bg-brand-gradient rounded-full"></div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed">
                  The Ether was born from a desire to bridge the gap between artistic expression and conscious narrative. Our journey began with a simple observation: the world is full of powerful stories that often go unheard because they lack a unified platform.
                </p>
                <p className="text-white/50 text-lg font-light leading-relaxed">
                  We set out to create a space that prioritizes intention over noise, and community over competition. In an era of rapid consumption, we choose depth. We curate experiences that challenge the status quo and celebrate the authenticity of human connection through media.
                </p>
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img alt="Abstract digital art" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbkofuBlYmfyMehfFdW4n44UTrPI5KUKbDGKBd1geasY8Nf2eyqzjHVD8Y5yeQvIbELyP7zRpkKFBo6_GmsE5EtOxFf1RZViyyc-BUGRHEo7IUz-tJT_X2qhJ_j2lGrw3QCaI5h8Z6ulJGMrBj-g9fGGK5DiyZn4X-teH_Kp-CZZP4Jv83uQ4vWYmFg35QnmV4-A0aTulW8_KD02YzW2EZtyVEJaKJncHmilBEEKzdteMncS05AilSPCHW4XIgUPnAuE1vjOgjhLQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-white font-display text-4xl md:text-5xl font-bold tracking-tight">Core Values</h2>
            <p className="text-white/50 mt-4 text-lg font-light">The foundational pillars of our creative philosophy and community ethics.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="size-3 rounded-full bg-brand-orange shadow-[0_0_10px_#FF4D1C]"></div>
            <div className="size-3 rounded-full bg-brand-blue shadow-[0_0_10px_#0047FF]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard icon="visibility" title="Conscious" color="brand-orange" desc="We operate with full awareness of the impact our narratives have on the collective psyche. Every choice is a seed planted for the future." />
          <ValueCard icon="architecture" title="Intentional" color="brand-purple" desc="Nothing is accidental. From the curve of a letter to the weight of a silence, we design with purpose and clarity." />
          <ValueCard icon="diversity_2" title="Community Driven" color="brand-blue" desc="The Ether is a collective. We thrive on the synergy of diverse voices coming together to create something greater than the sum of its parts." />
        </div>
      </section>

      <section className="bg-background-surface/50 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-white font-display text-4xl md:text-5xl font-bold tracking-tight">Leadership</h2>
            <p className="text-white/50 mt-4 text-lg font-light">The architects and visionaries behind the Ether Studios ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LeaderCard name="Nwar Doree" role="Creative Direction & Vision" tag="Co-Owner" color="brand-orange" />
            <LeaderCard name="Saifi" role="Operations & Strategy" tag="Co-Owner" color="brand-purple" />
            <LeaderCard name="Tanisha Moloughney" role="Growth & Outreach" tag="Marketing & Sales" color="brand-blue" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

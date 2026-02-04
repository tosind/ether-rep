
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

const Contact: React.FC = () => {
  useEffect(() => {
    // Cal.com initialization logic
    (function (C: any, A, L) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (window.Cal) {
      window.Cal("init", "the-ether-studios-calendar", { origin: "https://app.cal.com" });

      window.Cal.ns["the-ether-studios-calendar"]("inline", {
        elementOrSelector: "#my-cal-inline-the-ether-studios-calendar",
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
        calLink: "tanisha-moloughney-2gugtk/the-ether-studios-calendar",
      });

      window.Cal.ns["the-ether-studios-calendar"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto w-full px-6 py-32">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-gradient font-bold tracking-widest text-xs uppercase">Contact & Booking</span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white">
              Connect with the <span className="text-gradient">Ecosystem.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Whether you're looking for a quick session quote or ready to book your spot in the residency, our systems are ready for you.
            </p>
          </div>

          {/* Section 1: Inquiry Form */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-orange">mail</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Quick Inquiry</h2>
            </div>
            <div className="glass-card rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl">
              <iframe 
                className="airtable-embed w-full" 
                src="https://airtable.com/embed/appBZM4NOgsv8YpNH/pagY9teDOtAl2SGV8/form" 
                frameBorder="0" 
                height="533" 
                style={{ background: 'transparent', border: 'none' }}
                title="Airtable Contact Form"
              ></iframe>
            </div>
          </div>

          {/* Section 2: Direct Booking */}
          <div className="flex flex-col gap-8 mt-12">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-brand-pink/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-pink">event_available</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Direct Booking</h2>
            </div>
            <div className="glass-card rounded-[2.5rem] p-4 min-h-[600px] border-white/5 shadow-2xl relative">
               <div 
                 style={{ width: "100%", height: "600px", overflow: "scroll" }} 
                 id="my-cal-inline-the-ether-studios-calendar"
               ></div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[400px] flex flex-col gap-8">
          <div className="flex flex-col bg-background-surface border border-white/5 rounded-[2.5rem] p-10 h-fit sticky top-28 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Flagship Location</span>
            </div>
            
            <img 
              src="https://storage.googleapis.com/generativeai-downloads/images/sxs/logo-ether-studios.png" 
              alt="Ether Studios" 
              className="h-12 w-auto mb-8 self-start"
            />
            
            <h2 className="text-2xl font-black text-white mb-2">The Ether Studios</h2>
            <p className="text-slate-400 text-sm italic leading-relaxed mb-10">
              123 Visionary Way, Suite 400<br/>Ottawa, ON K1A 0B1, Canada
            </p>

            <div className="w-full aspect-square overflow-hidden rounded-3xl mb-10 relative group border border-white/10">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQRrJM7VWCK-bvADwXgMGJQj-X1VMsCrcTUCTr4pDe5pJHsEQRfOm0OnNIMgfWKa4EJm9HjPQh3pvFtxVXHbxDAMLfFq_VcWzPU65IOH3YxUtaWhRYAOaCCQNCJr6pp7nOKPLBwwJ733wsevhXbIwh_Lerth-BSmMd_VKjwg6Dq8I-lk7IvEDZ9YjjyD0L-8ZIMAPo5PqCdSIPJyN_JgQozcCeed4UaoqQlDdqD8L4RTqhEVJMHdZGgzeiibB2TApZSC4bxd3KSS4" 
                alt="Studio Location" 
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-gradient p-4 rounded-full shadow-2xl scale-125">
                  <span className="material-symbols-outlined text-white fill-1">location_on</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="size-11 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange border border-white/5">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Office Hours</p>
                  <p className="text-sm font-semibold text-white">Mon - Fri: 09:00 - 18:00</p>
                  <p className="text-[10px] text-slate-600 mt-1 uppercase">Studio: 24/7 Access</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-11 rounded-2xl bg-white/5 flex items-center justify-center text-brand-pink border border-white/5">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Direct Line</p>
                  <p className="text-sm font-semibold text-white">hello@theether.creative</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Contact;

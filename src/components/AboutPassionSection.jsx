import React from "react";

export default function AboutPassionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-32 font-sans">
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-[#F36F21]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">
        <div className="border-t border-[#F36F21]/20 pt-16 md:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#F36F21]/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(243,111,33,0.08)]">
              <span className="inline-block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
                Our Mission
              </span>

              <h3 className="text-[#F36F21] text-2xl md:text-3xl font-black leading-relaxed">
                Helping London homeowners, landlords and businesses stay
                protected through reliable and professional pest control.
              </h3>

              <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

              <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                Every property faces different challenges, which is why our
                approach begins with careful inspection, honest advice and
                practical treatment recommendations. We focus on delivering
                effective pest control solutions while maintaining the highest
                standards of professionalism and customer care.
              </p>

              <p className="mt-8 text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                From rodents and bed bugs to cockroaches, ants, fleas, moths
                and wasps, our goal is simple — provide dependable solutions
                that restore comfort, safety and confidence to every property
                we visit.
              </p>
            </div>
          </div>

          {/* Right Statement */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-black leading-[1.08] tracking-tight">
              <span className="text-[#F36F21]">
                Driven by a passion
              </span>

              <br />

              <span className="text-[#111111]">
                for cleaner,
              </span>

              <br />

              <span className="text-[#F36F21]">
                safer &
              </span>

              <br />

              <span className="text-[#111111]">
                pest-free spaces.
              </span>
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-[3px] bg-[#F36F21]" />
              <span className="text-[#5F5F5F] text-sm font-bold uppercase tracking-[0.25em]">
                PrimeShield Services Limited
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
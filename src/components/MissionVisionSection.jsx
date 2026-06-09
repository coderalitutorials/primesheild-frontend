import React from "react";

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden min-h-[720px] font-sans bg-[#111111]">
      <img
        src="/images/mission-vision-pest-control.webp"
        alt="PrimeShield Services Limited pest control specialist supporting London property protection"
        className="absolute inset-0 w-full h-full object-cover object-left"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[#111111]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/25 via-[#111111]/86 to-[#111111]/96" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <div className="max-w-4xl ml-auto">
          <h2 className="text-[#F36F21] text-5xl sm:text-6xl lg:text-[74px] font-black leading-tight tracking-tight">
            Mission & Vision
          </h2>

          <div className="w-full h-[2px] bg-[#F36F21]/70 my-10 md:my-14" />

          <div className="space-y-10">
            <div>
              <h3 className="text-[#F36F21] text-2xl md:text-3xl font-black leading-snug">
                Our mission is to protect London homes and businesses with
                reliable, safe and professional pest control.
              </h3>

              <p className="mt-4 text-white/78 text-sm md:text-base leading-relaxed max-w-3xl">
                PrimeShield Services Limited is committed to providing clear
                inspections, practical treatment plans and dependable support for
                customers dealing with rodents, bed bugs, cockroaches, ants,
                fleas, moths, wasps and other pest issues.
              </p>
            </div>

            <div>
              <h3 className="text-[#F36F21] text-2xl md:text-3xl font-black leading-snug">
                Our vision is to become a trusted name for pest protection
                across London.
              </h3>

              <p className="mt-4 text-white/78 text-sm md:text-base leading-relaxed max-w-3xl">
                We aim to build long-term trust through honest advice,
                responsive service and careful property protection. Our goal is
                to help homeowners, landlords and commercial clients maintain
                cleaner, safer and pest-free spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
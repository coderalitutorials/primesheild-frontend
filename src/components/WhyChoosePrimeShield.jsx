import React from "react";
import { Check } from "lucide-react";

export default function WhyChoosePrimeShield() {
  const points = [
    "Safe and targeted pest treatments",
    "Clear inspection before any service",
    "Support for homes and businesses",
  ];

  return (
    <section className="relative overflow-hidden bg-[#5d5555] min-h-[620px] font-sans">
      <img
        src="/images/why-choose-pest-control.webp"
        alt="PrimeShield Services Limited pest control expert supporting a London property"
        className="absolute inset-0 w-full h-full object-cover object-left"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[#111111]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/15 via-[#111111]/85 to-[#111111]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <div className="max-w-3xl ml-auto">
          <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
            What Sets Us Apart
          </span>

          <h2 className="text-[#F36F21] text-4xl sm:text-5xl lg:text-[60px] font-black leading-[1.12] tracking-tight">
            We’re here to protect your property with reliable pest control every
            step of the way.
          </h2>

          <div className="w-full h-[2px] bg-[#F36F21]/70 my-14" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {points.map((point, index) => (
              <div key={index}>
                <Check className="w-7 h-7 text-[#F36F21] mb-4" strokeWidth={3} />
                <p className="text-[#F36F21] text-base font-black leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
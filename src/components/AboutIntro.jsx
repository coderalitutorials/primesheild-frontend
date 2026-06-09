import React from "react";
import { Link } from "react-router-dom";

export default function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F36F21]/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#3B3B3B]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="max-w-5xl animate-[fadeUp_0.7s_ease-out_both]">
          <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
            About Us
          </span>

          <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight">
            Welcome to PrimeShield Services Limited, where reliable pest control
            meets professional London protection...
          </h2>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-[#3B3B3B]/20 pt-10">
          <div className="lg:col-span-6 animate-[fadeLeft_0.75s_ease-out_both]">
            <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
              <img
                src="/images/about-pest-control.webp"
                alt="PrimeShield Services Limited pest control technician inspecting a London property"
                className="w-full h-[420px] md:h-[520px] object-contain object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6 animate-[fadeRight_0.75s_ease-out_both]">
            <h3 className="text-[#111111] text-xl md:text-2xl font-black leading-snug max-w-lg">
              We understand that every pest problem is different, and our team is
              here to provide safe, effective and discreet treatment support.
            </h3>

            <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

            <p className="text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
              PrimeShield Services Limited helps homeowners, landlords and local
              businesses across London deal with unwanted pests quickly and
              professionally. From rodents and bed bugs to cockroaches, ants,
              fleas, moths and wasp nests, we focus on clear inspection,
              targeted treatment and practical prevention advice.
            </p>

            <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
              Based at 12 Old Bond Street, London, England, W1S 4PW, our service
              approach is built around reliability, careful property protection
              and responsive customer support for residential and commercial
              pest control needs.
            </p>

            <div className="mt-9">
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
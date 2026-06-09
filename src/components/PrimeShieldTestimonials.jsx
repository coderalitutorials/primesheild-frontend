import React from "react";

export default function PrimeShieldTestimonials() {
  const reviews = [
    {
      quote:
        "PrimeShield dealt with a rodent issue in our property quickly and professionally. The inspection was clear, the advice was practical, and the treatment gave us real peace of mind.",
      name: "Sarah L.",
      service: "Rodent Control",
    },
    {
      quote:
        "We had bed bugs in one room and were really stressed. The team explained everything properly, treated the affected areas and helped us understand what to do after the visit.",
      name: "James R.",
      service: "Bed Bug Treatment",
    },
    {
      quote:
        "Very reliable pest control service for our London office. They arrived on time, checked the problem areas and gave us a simple prevention plan going forward.",
      name: "Amelia T.",
      service: "Commercial Pest Control",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#F36F21]/10 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[#111111]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="text-[#F36F21] text-[90px] md:text-[130px] font-black leading-none">
              ”
            </div>

            <h2 className="-mt-6 text-[#F36F21] text-2xl sm:text-3xl lg:text-[38px] font-black leading-snug max-w-3xl">
              “PrimeShield Services Limited helped us deal with a stressful pest
              issue quickly, safely and with clear communication from start to
              finish.”
            </h2>

            <div className="mt-10">
              <h4 className="text-[#111111] font-black text-base">
                Emily P.
              </h4>
              <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.25em]">
                London Homeowner
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
              <img
                src="/images/testimonial-client.webp"
                alt="PrimeShield Services Limited happy customer after pest control service in London"
                className="w-full h-[420px] md:h-[520px] object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="py-10 md:py-12 md:px-8 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15"
            >
              <div className="text-[#F36F21] text-5xl font-black leading-none mb-7">
                ”
              </div>

              <p className="text-[#333333] text-sm leading-relaxed">
                “{review.quote}”
              </p>

              <div className="mt-8">
                <h4 className="text-[#111111] font-black text-base">
                  {review.name}
                </h4>
                <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.22em]">
                  {review.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
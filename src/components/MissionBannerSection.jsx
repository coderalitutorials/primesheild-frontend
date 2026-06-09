import React from "react";

export default function MissionBannerSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[450px] md:h-[520px]">
        <img
          src="/images/pest-banner.webp"
          alt="PrimeShield Services Limited pest control inspection in London"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#111111]/65" />

        {/* Orange Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#F36F21]/10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            {/* Small Orange Line */}
            <div className="w-16 h-[3px] bg-[#F36F21] mx-auto mb-8"></div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight">
              Protecting Homes & Businesses
              <br />
              Across London With Trusted
              <br />
              Pest Control Solutions
            </h2>

            <p className="mt-8 text-white/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              PrimeShield Services Limited delivers professional pest control,
              prevention and proofing services designed to keep residential and
              commercial properties safe, compliant and pest-free throughout
              London.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <section className="relative h-[520px] md:h-[640px] lg:h-[720px] overflow-hidden bg-[#7a6363] font-sans">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Services Limited pest control services for London homes and businesses"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-full flex items-center">
//         <div className="max-w-4xl">
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-6">
//             <span className="w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Pest Control
//           </span>

//           <h1 className="text-white text-5xl sm:text-6xl lg:text-[88px] font-black leading-[1.02] tracking-tight">
//             Services
//           </h1>

//           <div className="w-24 h-[3px] bg-[#F36F21] mt-8 mb-8" />

//           <p className="text-white/82 text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for London homes, landlords and
//             businesses. From rodents and bed bugs to wasps, cockroaches, ants
//             and fleas, our team helps protect your property with reliable
//             treatment and prevention support.
//           </p>

//           <div className="mt-9 flex flex-wrap gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors"
//             >
//               Contact Us
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors"
//             >
//               About Company
//             </Link>
//           </div>

//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-sm font-bold">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-sm font-bold">
//                 London Based Pest Support
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export default function ServicesHeroSection() {
  return (
    // h-full ki jagah mobile par min-h aur automatic spacing handle karne ke liye padding add ki hai
    <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
      <img
        src="/images/services-primeshield-banner.webp"
        alt="PrimeShield Services Limited pest control services for London homes and businesses"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#111111]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

      {/* Decorative Bars */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
        <div className="max-w-4xl w-full">
          
          {/* Subtitle */}
          <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
            <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
            PrimeShield Pest Control
          </span>

          {/* Main Heading - Responsive sizing saaf overlap khatam karega */}
          <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
            Services
          </h1>

          {/* Divider Line */}
          <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

          {/* Description */}
          <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
            Professional pest control services for London homes, landlords and
            businesses. From rodents and bed bugs to wasps, cockroaches, ants
            and fleas, our team helps protect your property with reliable
            treatment and prevention support.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/about-us"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
            >
              About Company
            </Link>
          </div>

          {/* Info Badges - Grid automatic rows control karega */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
            <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                Safe & Targeted Treatments
              </span>
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                London Based Pest Support
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
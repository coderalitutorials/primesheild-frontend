






// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Sparkles,
//   Crosshair,
//   ArrowRight,
//   CornerDownRight,
// } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Exclusion Protocol",
//       details:
//         "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around floorboards.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Rapid Neutralization",
//       details:
//         "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, eco-certified solutions.",
//     },
//     {
//       id: "03",
//       title: "Thermal Bed Bug Elimination",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Biosecurity Heat",
//       details:
//         "Premium chemical-free thermal heat solutions engineered to penetrate deep mattress fibers and luxury textiles, ensuring complete elimination in a single visit.",
//     },
//   ];

//   return (
//     <section className="bg-[#020b14] py-24 sm:py-32 text-white relative overflow-hidden z-30 border-b border-white/[0.04] group/section">
//       <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[180px] bg-[#4FA3A5]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover/section:opacity-60 transition-opacity duration-300" />
//       <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[160px] bg-[#76C7C0]/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover/section:opacity-40 transition-opacity duration-300" />

//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
//             <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-bold">
//               System Capabilities
//             </span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]">
//             Enterprise Pest Suppression <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//               & Asset Protection
//             </span>
//           </h2>

//           <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
//             Deploying algorithmic remediation matrices and structural
//             fortification systems across the Sidcup regional infrastructure.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.08] shadow-xl relative">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 className="bg-[#020b14] p-8 sm:p-10 relative flex flex-col justify-between min-h-[460px] group cursor-pointer transition-transform duration-200 overflow-hidden hover:-translate-y-1 animate-[fadeUp_0.7s_ease-out_both]"
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#4FA3A5]/20 via-[#76C7C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>

//                 <div className="absolute inset-0 z-10 pointer-events-none">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-300 brightness-95 group-hover:scale-[1.03] object-center origin-center"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/55 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-300" />
//                 </div>

//                 <div className="absolute top-4 right-4 text-white/40 group-hover:text-[#76C7C0] transition-colors duration-200 font-mono text-xs select-none z-30">
//                   +{service.id}
//                 </div>

//                 <div className="space-y-6 relative z-20">
//                   <div className="flex items-center justify-between">
//                     <div className="w-12 h-12 rounded-2xl bg-[#020b14]/90 border border-white/10 flex items-center justify-center group-hover:border-[#4FA3A5] group-hover:bg-[#4FA3A5]/20 transition-colors duration-200 shadow-lg">
//                       <Icon
//                         className="w-5 h-5 text-slate-200 group-hover:text-[#76C7C0] transition-colors duration-200"
//                         strokeWidth={1.5}
//                       />
//                     </div>

//                     <span className="text-[9px] font-mono tracking-widest text-white bg-[#020b14]/90 border border-white/15 px-2.5 py-1 rounded-md uppercase group-hover:border-[#76C7C0] transition-colors duration-200">
//                       {service.tag}
//                     </span>
//                   </div>

//                   <div className="space-y-3">
//                     <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#76C7C0] transition-colors duration-200 [text-shadow:0_3px_12px_rgba(0,0,0,0.95)]">
//                       {service.title}
//                     </h3>

//                     <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal transition-colors duration-200 group-hover:text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">
//                       {service.details}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="pt-12 relative z-20 flex items-center justify-between border-t border-white/[0.15] group-hover:border-[#4FA3A5]/40 transition-colors duration-200">
//                   <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white uppercase [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]">
//                     <CornerDownRight className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                     <span>Deploy Tech Unit</span>
//                   </div>

//                   <div className="w-8 h-8 rounded-xl bg-[#020b14]/90 border border-white/15 flex items-center justify-center transition-transform duration-200 group-hover:border-[#76C7C0] group-hover:bg-[#4FA3A5]/40 group-hover:translate-x-1 shadow-lg">
//                     <ArrowRight
//                       className="w-3.5 h-3.5 text-white"
//                       strokeWidth={2.5}
//                     />
//                   </div>
//                 </div>

//                 <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#76C7C0]/0 to-transparent group-hover:via-[#76C7C0] transition-colors duration-300 z-30" />
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 hover:border-[#4FA3A5]/40 text-white font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl transition-transform duration-200 group shadow-lg cursor-pointer hover:-translate-y-0.5 active:scale-[0.98]"
//           >
//             <span>VIEW ALL OPERATIONAL MODES</span>
//             <span className="text-xs text-[#76C7C0] group-hover:translate-x-1 transition-transform duration-200">
//               ➔
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();

//   const servicesData = [
//     {
//       id: "01",
//       title: "Rodent Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Professional rat and mice control for London homes and businesses, including inspection, safe treatment and entry-point advice.",
//     },
//     {
//       id: "02",
//       title: "Bed Bug Treatment",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Targeted bed bug inspections and treatment plans for bedrooms, furniture and affected areas to help restore a clean, comfortable space.",
//     },
//     {
//       id: "03",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Fast and careful wasp nest control for residential and commercial properties, handled with the right protective methods.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-4xl mb-14 md:mb-18 animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             Our Services
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] tracking-tight">
//             Expert pest control services built to protect London properties.
//           </h2>

//           <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//             PrimeShield Services Limited provides reliable pest inspections,
//             treatments and prevention advice for homeowners, landlords and
//             businesses across London.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 className="group relative px-0 md:px-6 lg:px-8 py-10 md:py-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15 animate-[fadeUp_0.7s_ease-out_both]"
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 <div className="flex items-center justify-between mb-7">
//                   <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors duration-300">
//                     <Icon size={22} strokeWidth={2.2} />
//                   </div>

//                   <span className="text-[#F36F21] text-xs font-black tracking-[0.22em]">
//                     {service.id}
//                   </span>
//                 </div>

//                 <h3 className="text-[#111111] text-2xl font-black leading-tight mb-5 group-hover:text-[#F36F21] transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-[#5F5F5F] text-sm leading-relaxed mb-7 min-h-[96px]">
//                   {service.details}
//                 </p>

//                 <button
//                   onClick={() => navigate("/contact-us")}
//                   className="inline-flex items-center gap-2 text-[#111111] hover:text-[#F36F21] text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 mb-8 cursor-pointer"
//                 >
//                   Contact Us
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition-transform duration-300"
//                   />
//                 </button>

//                 <div className="relative overflow-hidden rounded-br-[130px] rounded-tl-2xl shadow-xl">
//                   <img
//                     src={service.image}
//                     alt={`PrimeShield Services Limited ${service.title} service in London`}
//                     className="w-full h-[310px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                     decoding="async"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                     <span className="bg-white text-[#111111] px-3 py-2 text-[10px] font-black uppercase tracking-widest">
//                       London Service
//                     </span>
//                     <span className="bg-[#F36F21] text-white w-10 h-10 flex items-center justify-center">
//                       <ArrowRight size={18} />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: Home,
//               title: "Residential Properties",
//               text: "Safe treatments for homes, flats and rented properties.",
//             },
//             {
//               icon: Building2,
//               title: "Commercial Premises",
//               text: "Support for offices, shops, restaurants and businesses.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Professional Approach",
//               text: "Clear inspection, treatment planning and prevention advice.",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-[#111111]/10 p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-11 h-11 bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0">
//                   <Icon size={21} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#111111] font-black text-base">
//                     {item.title}
//                   </h4>
//                   <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-14">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors cursor-pointer"
//           >
//             View All Services
//             <ArrowRight size={17} />
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }














import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  Bug,
  Rat,
  ArrowRight,
  Home,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function PrimeShieldServices() {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: "01",
      title: "Rodent Control",
      image: "/images/rodents.webp",
      icon: Rat,
      details:
        "Professional rat and mice control for London homes and businesses, including inspection, safe treatment and entry-point advice.",
    },
    {
      id: "02",
      title: "Bed Bug Treatment",
      image: "/images/bedbugs.webp",
      icon: Bug,
      details:
        "Targeted bed bug inspections and treatment plans for bedrooms, furniture and affected areas to help restore a clean, comfortable space.",
    },
    {
      id: "03",
      title: "Wasp Nest Removal",
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      details:
        "Fast and careful wasp nest control for residential and commercial properties, handled with the right protective methods.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#111111]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="max-w-4xl mb-14 md:mb-18 animate-[fadeUp_0.7s_ease-out_both]">
          <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
            Our Services
          </span>

          <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] tracking-tight">
            Expert pest control services built to protect London properties.
          </h2>

          <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
            PrimeShield Services Limited provides reliable pest inspections,
            treatments and prevention advice for homeowners, landlords and
            businesses across London.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => navigate("/contact-us")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/contact-us");
                  }
                }}
                className="group relative px-0 md:px-6 lg:px-8 py-10 md:py-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15 animate-[fadeUp_0.7s_ease-out_both] cursor-pointer"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-7">
                  <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors duration-300">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <span className="text-[#F36F21] text-xs font-black tracking-[0.22em]">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-[#111111] text-2xl font-black leading-tight mb-5 group-hover:text-[#F36F21] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[#5F5F5F] text-sm leading-relaxed mb-7 min-h-[96px]">
                  {service.details}
                </p>

                <div className="inline-flex items-center gap-2 text-[#111111] group-hover:text-[#F36F21] text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 mb-8">
                  Contact Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                <div className="relative overflow-hidden rounded-br-[130px] rounded-tl-2xl shadow-xl">
                  <img
                    src={service.image}
                    alt={`PrimeShield Services Limited ${service.title} service in London`}
                    className="w-full h-[310px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    {/* <span className="bg-white text-[#111111] px-3 py-2 text-[10px] font-black uppercase tracking-widest">
                      London Service
                    </span> */}
                    {/* <span className="bg-[#F36F21] text-white w-10 h-10 flex items-center justify-center">
                      <ArrowRight size={18} />
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Home,
              title: "Residential Properties",
              text: "Safe treatments for homes, flats and rented properties.",
            },
            {
              icon: Building2,
              title: "Commercial Premises",
              text: "Support for offices, shops, restaurants and businesses.",
            },
            {
              icon: BadgeCheck,
              title: "Professional Approach",
              text: "Clear inspection, treatment planning and prevention advice.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-[#111111]/10 p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-11 h-11 bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0">
                  <Icon size={21} />
                </div>
                <div>
                  <h4 className="text-[#111111] font-black text-base">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors cursor-pointer"
          >
            View All Services
            <ArrowRight size={17} />
          </button>
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
      `}</style>
    </section>
  );
}



// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowUpRight,
//   Binary,
//   Layers,
//   Terminal,
//   Compass,
//   Radio,
// } from "lucide-react";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE",
//       spec: "SUBTERRANEAN FLUSHING",
//       code: "ANT-SYS-01",
//       details:
//         "High-performance deployment targeting deep structural micro-colonies. We dismantle hidden underground biological structures using specialized subterranean baiting arrays to clear pathways and enforce total blockades.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL",
//       spec: "THERMAL EXTINCTION PROTOCOL",
//       code: "BUG-EXT-02",
//       details:
//         "Comprehensive hyper-thermal and chemical flushing designed for immediate egg and mature larva termination. Complete restoration protocol for commercial hospitality structures and residential living zones.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "MTH-RES-03",
//       details:
//         "Specialist structural micro-spraying targeting fiber-destructive larvae. Advanced ultra-low volume residual applications seal fabric integrity and safeguard premium textile assets from decay.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       threat: "MODERATE",
//       spec: "PERIMETER EXTRACTION",
//       code: "BTL-PER-04",
//       details:
//         "Targeted extraction operations focused on perimeter lines and dense storage arrays. Neutralizes nesting zones hiding inside high-value structural installations without altering substrate properties.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL",
//       spec: "GEL SYNTHESIS VECTORS",
//       code: "COCK-GEL-05",
//       details:
//         "Enterprise-grade gel synthesis matrices combined with high-velocity flushing vectors. Eradicates deeply rooted infesting structures inside high-heat commercial culinary and industrial sectors.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL",
//       spec: "MULTI-STAGE BARRIER MESH",
//       code: "MCE-BAR-06",
//       details:
//         "Multi-stage digital tracking, tactical trapping, and entry-point concrete reinforcements. Eradicates sub-floor vector highways and blocks ongoing return migrations completely.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "BIOLOGICAL BREAKING MIST",
//       code: "FLE-MST-07",
//       details:
//         "High-saturation structural misting fields developed to terminate complex insect generation cycles. Breaks deep flooring pupae sequences to clean high-traffic domestic environments.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-PRESSURE ELEVATION SHIELD",
//       code: "WSP-ELV-08",
//       details:
//         "High-altitude neutralizing deployment utilizing high-pressure localized containment vectors. Provides instant structural safety clearance for critical residential elevations and perimeter points.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       threat: "ECOLOGICAL ECO",
//       spec: "LIVE CAPTURE RELOCATION",
//       code: "BEE-LIV-09",
//       details:
//         "Eco-sensitive live extraction and secure relocation protocols. Designed to safely clear high-threat nesting areas while preserving critical regional botanical pollinators.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "HIGH-TENSILE CEILING TRAPS",
//       code: "SQR-TRP-10",
//       details:
//         "Structural ceiling trapping systems coupled with high-tensile custom mesh blockades. Halts raw wire gnawing behaviors and protects delicate thermal insulation barriers.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL",
//       spec: "CHEMICAL DECONTAMINATION",
//       code: "HYG-DEC-11",
//       details:
//         "Premium multi-point chemical decontamination fields combined with absolute structural gap bridging. Seals building envelopes to ensure long-term resistance against returning biological invaders.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL",
//       spec: "SENSORY DEFENSE MATRICES",
//       code: "BRD-SNS-12",
//       details:
//         "Architectural wire tensions, custom heavy nets, and state-of-the-art sensory defense lines. Defends building profiles, solar arrays, and high facades from nesting damage and unhygienic accumulation.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#02070e] text-slate-300 min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#4FA3A5]/40 selection:text-white">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4FA3A5]/20 to-transparent" />

//       <section className="relative pt-44 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-white/[0.04]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="lg:col-span-7 bg-white/[0.01] border border-white/[0.05] p-8 sm:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#76C7C0]/5 rounded-full blur-3xl" />

//             <div className="space-y-6 relative z-10">
//               <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#76C7C0] uppercase bg-black/40 px-3 py-1 rounded-md border border-white/[0.04]">
//                 <Binary className="w-3 h-3" />
//                 <span>ENVIRONMENT DESTRUCTION SHELL // INITIALIZING</span>
//               </div>

//               <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
//                 OPERATIONAL <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-slate-200">
//                   INTELLIGENCE
//                 </span>
//               </h1>

//               <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
//                 Overriding deep biological nesting clusters through programmatic
//                 physical barriers. Select a functional asset configuration layer
//                 below to launch dynamic counter operations instantly.
//               </p>
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-6 text-[10px] font-mono text-slate-500 relative z-10">
//               <div>HOST: REGIONAL_CORE</div>
//               <div>PROTOCOLS: ACTIVE</div>
//             </div>
//           </div>

//           <div className="lg:col-span-5 bg-black/60 border border-white/[0.06] p-6 rounded-3xl font-mono text-[11px] text-[#4FA3A5] flex flex-col justify-between relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-b from-[#76C7C0]/5 to-transparent pointer-events-none" />

//             <div className="space-y-2 text-slate-400 relative z-10">
//               <div className="flex items-center justify-between text-slate-600 border-b border-white/[0.05] pb-2 mb-3">
//                 <div className="flex items-center gap-1.5">
//                   <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//                   <span>MATRIX_LIVE_FEED</span>
//                 </div>
//                 <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-90" />
//               </div>

//               <p className="text-[#76C7C0]">
//                 <span className="text-slate-600">&gt;</span> SYSTEM_STATUS_OK
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> TARGETING VECTOR
//                 DEPLOYED [LONDON_GRID]
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> BIO_FILTRATION
//                 CODES: SECURE
//               </p>
//               <p>
//                 <span className="text-slate-600">&gt;</span> INTERCEPTORS:
//                 STAGED_READY
//               </p>
//             </div>

//             <div className="mt-6 border-t border-white/[0.05] pt-4 flex justify-between items-center text-slate-500 relative z-10">
//               <span>ENGAGE CONFIG LAYER</span>
//               <Compass className="w-4 h-4 text-[#76C7C0]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <nav className="bg-[#02070e]/95 border-b border-white/[0.04] sticky top-0 z-50 py-4">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase">
//             <Radio className="w-3.5 h-3.5 text-[#4FA3A5]" />
//             <span>FILTER GRID MODULES</span>
//           </div>

//           <div className="flex flex-wrap gap-1 bg-white/[0.02] border border-white/[0.06] p-1 rounded-xl">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-colors duration-200 rounded-lg ${
//                     isActive
//                       ? "bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-black font-black"
//                       : "text-slate-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           {filteredServices.map((service, index) => {
//             const isWide = index % 4 === 0;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group relative bg-gradient-to-b from-[#051121] to-[#020912] border border-white/[0.05] rounded-2xl overflow-hidden cursor-pointer p-6 sm:p-8 flex flex-col justify-between hover:border-[#76C7C0]/40 hover:shadow-xl hover:shadow-[#4FA3A5]/5 transition-transform duration-200 select-none hover:-translate-y-1 animate-[fadeUp_0.7s_ease-out_both] ${
//                   isWide ? "lg:col-span-3" : "lg:col-span-1"
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:via-[#4FA3A5]/50 transition-colors duration-200" />

//                 <div className="space-y-4 h-full flex flex-col justify-between">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="font-mono text-[9px] text-[#76C7C0] tracking-widest bg-[#4FA3A5]/5 px-2 py-0.5 rounded border border-[#4FA3A5]/10">
//                       {service.code}
//                     </div>

//                     <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
//                       <span className="w-1 h-1 rounded-full bg-orange-500 opacity-90" />
//                       <span>{service.threat}</span>
//                     </div>
//                   </div>

//                   <div className="flex-grow">
//                     {isWide ? (
//                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
//                         <div className="lg:col-span-7 space-y-3.5">
//                           <h3 className="text-3xl sm:text-4xl font-black text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-200">
//                             {service.title}
//                           </h3>

//                           <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal group-hover:text-white transition-colors duration-200">
//                             {service.details}
//                           </p>
//                         </div>

//                         <div className="lg:col-span-5 h-[200px] sm:h-[240px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full object-cover opacity-45 group-hover:opacity-80 group-hover:scale-[1.03] transition-transform duration-300"
//                             loading="lazy"
//                             decoding="async"
//                             onError={(e) => {
//                               e.currentTarget.style.display = "none";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-[#020912]/80 via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="space-y-4">
//                         <div className="space-y-2">
//                           <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#4FA3A5] transition-colors duration-200">
//                             {service.title}
//                           </h3>

//                           <p className="text-slate-400 text-xs leading-relaxed font-normal line-clamp-4 group-hover:text-slate-300 transition-colors duration-200">
//                             {service.details}
//                           </p>
//                         </div>

//                         <div className="h-[140px] w-full relative rounded-xl overflow-hidden bg-black/40 border border-white/[0.04] mt-2">
//                           <img
//                             src={service.image}
//                             alt={service.title}
//                             className="w-full h-full object-cover opacity-35 group-hover:opacity-70 group-hover:scale-[1.03] transition-transform duration-300"
//                             loading="lazy"
//                             decoding="async"
//                             onError={(e) => {
//                               e.currentTarget.style.display = "none";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-[#020912] via-transparent to-transparent pointer-events-none" />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] font-mono text-slate-500 w-full">
//                   <div className="flex items-center gap-1">
//                     <Layers className="w-3 h-3 text-slate-600" />
//                     <span className="truncate max-w-[180px] uppercase tracking-wider">
//                       {service.spec}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-1 text-[#76C7C0] font-bold tracking-tight">
//                     <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                       DEPLOY
//                     </span>
//                     <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {filteredServices.length === 0 && (
//           <div className="text-center py-24 border border-white/[0.05] bg-black/40 rounded-3xl max-w-xl mx-auto shadow-xl animate-[fadeUp_0.7s_ease-out_both]">
//             <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-3" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
//               Zero active vectors mapped inside this environment quadrant.
//             </p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default Services;









// import React from 'react'
// import ServicesHeroSection from '../components/ServicesHeroSection'

// const Services = () => {
//   return (
//     <>
//     <ServicesHeroSection/>
//     </>
//   )
// }

// export default Services











// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   Grid3X3,
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: "01",
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       icon: Bug,
//       details:
//         "Targeted ant control for kitchens, worktops, floor edges and entry points. We inspect the activity, treat the source and help reduce the chance of ants returning.",
//     },
//     {
//       id: "02",
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Professional bed bug treatment for mattresses, bed frames, furniture and affected rooms. Our approach focuses on inspection, treatment and practical aftercare advice.",
//     },
//     {
//       id: "03",
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       details:
//         "Specialist treatment for carpet moths affecting carpets, rugs, wardrobes and soft furnishings. We help protect fabrics and reduce ongoing moth activity.",
//     },
//     {
//       id: "04",
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       icon: Bug,
//       details:
//         "Effective carpet beetle treatment for affected rooms, storage areas and fabric zones. We identify hotspots and apply targeted control methods.",
//     },
//     {
//       id: "05",
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       details:
//         "Cockroach control for homes, kitchens, restaurants and commercial spaces. We inspect harbourage areas and use targeted treatment to reduce infestation risks.",
//     },
//     {
//       id: "06",
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Rodent control for rats and mice in homes, lofts, kitchens and business premises. We focus on inspection, safe treatment and entry-point prevention advice.",
//     },
//     {
//       id: "07",
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       icon: Bug,
//       details:
//         "Flea treatment for affected rooms, carpets and high-traffic areas. We target the infestation cycle and provide clear guidance after treatment.",
//     },
//     {
//       id: "08",
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Fast wasp nest control for gardens, rooflines, sheds and property exteriors. Our team handles active nests with suitable protective methods.",
//     },
//     {
//       id: "09",
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       icon: Bug,
//       details:
//         "Careful bumble bee support where nests cause access or safety concerns. We always aim for responsible handling and suitable advice.",
//     },
//     {
//       id: "10",
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       details:
//         "Squirrel control for lofts, roof spaces and property voids. We help identify access points and provide practical treatment and proofing advice.",
//     },
//     {
//       id: "11",
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       icon: Home,
//       details:
//         "Hygiene cleaning and proofing support for pest-affected areas. We help reduce contamination risks and support long-term property protection.",
//     },
//     {
//       id: "12",
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       icon: Bird,
//       details:
//         "Bird control and prevention services for roofs, ledges, commercial buildings and exposed areas using practical proofing solutions.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${location.state.scrollToService}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
//       {/* Intro */}
//       {/* <section className="relative py-20 md:py-28 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//         <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//         <div className="absolute -bottom-32 left-0 w-96 h-96 rounded-full bg-[#111111]/8 blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//             Our Pest Control Services
//           </span>

//           <h1 className="text-[#111111] text-4xl sm:text-5xl lg:text-[70px] font-black leading-[1.08] tracking-tight max-w-6xl">
//             Professional pest control solutions for London homes and businesses.
//           </h1>

//           <p className="mt-7 text-[#5F5F5F] text-base md:text-lg leading-relaxed max-w-3xl">
//             PrimeShield Services Limited provides targeted treatments for common
//             pest issues including rodents, bed bugs, cockroaches, ants, wasps,
//             fleas, moths, birds and more.
//           </p>
//         </div>
//       </section> */}

//     <ServicesHeroSection/>

//       {/* Category Filter */}
//       <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-[0.22em]">
//             <Grid3X3 className="w-4 h-4 text-[#F36F21]" />
//             Filter Services
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const active = selectedCategory === cat;

//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
//                     active
//                       ? "bg-[#F36F21] text-white"
//                       : "bg-[#F7F3EF] text-[#111111] hover:bg-[#111111] hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Service Cards */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20">
//           {filteredServices.map((service, index) => {
//             const Icon = service.icon;
//             const reverse = index % 2 !== 0;

//             return (
//               <article
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer border-t border-[#111111]/15 pt-12 animate-[fadeUp_0.7s_ease-out_both] ${
//                   reverse ? "lg:[&>*:first-child]:order-2" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.04}s` }}
//               >
//                 {/* Image */}
//                 <div className="lg:col-span-6">
//                   <div
//                     className={`relative overflow-hidden shadow-2xl ${
//                       reverse
//                         ? "rounded-tl-[180px] md:rounded-tl-[260px]"
//                         : "rounded-tr-[180px] md:rounded-tr-[260px]"
//                     }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={`PrimeShield Services Limited ${service.title} in London`}
//                       className="w-full h-[360px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                       decoding="async"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

//                     <div className="absolute top-5 left-5 bg-[#F36F21] text-white px-4 py-3 text-xs font-black uppercase tracking-[0.2em]">
//                       {service.cat}
//                     </div>

//                     <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
//                       <span className="bg-white text-[#111111] px-4 py-3 text-xs font-black uppercase tracking-[0.18em]">
//                         London Service
//                       </span>

//                       <span className="w-12 h-12 bg-[#F36F21] text-white flex items-center justify-center group-hover:bg-[#D95A13] transition-colors">
//                         <ArrowRight size={20} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="lg:col-span-6">
//                   <div className="max-w-xl">
//                     <div className="flex items-center gap-4 mb-7">
//                       <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors">
//                         <Icon size={24} strokeWidth={2.2} />
//                       </div>

//                       <span className="text-[#F36F21] text-sm font-black tracking-[0.3em]">
//                         {service.id}
//                       </span>
//                     </div>

//                     <h2 className="text-[#111111] text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.12] tracking-tight group-hover:text-[#F36F21] transition-colors">
//                       {service.title}
//                     </h2>

//                     <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//                     <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                       {service.details}
//                     </p>

//                     <div className="mt-9 inline-flex items-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] group-hover:bg-[#D95A13] transition-colors">
//                       Contact Us
//                       <ArrowRight size={17} />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

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
//       <AboutCallbackSection/>
//     </main>
    
//   );
// };

// export default Services;




import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  ArrowRight,
  Bug,
  Rat,
  Bird,
  Sparkles,
  Home,
  Grid3X3,
} from "lucide-react";
import AboutCallbackSection from "../components/AboutCallbackSection";
import ServicesHeroSection from "../components/ServicesHeroSection";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

  const servicesData = [
    {
      id: "01",
      cat: "Insects",
      title: "Ants Control",
      image: "/images/ants.webp",
      icon: Bug,
      details:
        "Targeted ant control for kitchens, worktops, floor edges and entry points. We inspect the activity, treat the source and help reduce the chance of ants returning.",
    },
    {
      id: "02",
      cat: "Insects",
      title: "Bed Bugs Control",
      image: "/images/bedbugs.webp",
      icon: Bug,
      details:
        "Professional bed bug treatment for mattresses, bed frames, furniture and affected rooms. Our approach focuses on inspection, treatment and practical aftercare advice.",
    },
    {
      id: "03",
      cat: "Insects",
      title: "Carpet Moth Control Treatment",
      image: "/images/moths.webp",
      icon: Sparkles,
      details:
        "Specialist treatment for carpet moths affecting carpets, rugs, wardrobes and soft furnishings. We help protect fabrics and reduce ongoing moth activity.",
    },
    {
      id: "04",
      cat: "Insects",
      title: "Carpet Beetle Treatment",
      image: "/images/beetle.webp",
      icon: Bug,
      details:
        "Effective carpet beetle treatment for affected rooms, storage areas and fabric zones. We identify hotspots and apply targeted control methods.",
    },
    {
      id: "05",
      cat: "Insects",
      title: "Cockroach Control Service",
      image: "/images/cockroach.webp",
      icon: Bug,
      details:
        "Cockroach control for homes, kitchens, restaurants and commercial spaces. We inspect harbourage areas and use targeted treatment to reduce infestation risks.",
    },
    {
      id: "06",
      cat: "Rodents & Wildlife",
      title: "Rats & Mice Control",
      image: "/images/rodents.webp",
      icon: Rat,
      details:
        "Rodent control for rats and mice in homes, lofts, kitchens and business premises. We focus on inspection, safe treatment and entry-point prevention advice.",
    },
    {
      id: "07",
      cat: "Insects",
      title: "Flea Control",
      image: "/images/flea.webp",
      icon: Bug,
      details:
        "Flea treatment for affected rooms, carpets and high-traffic areas. We target the infestation cycle and provide clear guidance after treatment.",
    },
    {
      id: "08",
      cat: "Insects",
      title: "Wasps Nest Control",
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      details:
        "Fast wasp nest control for gardens, rooflines, sheds and property exteriors. Our team handles active nests with suitable protective methods.",
    },
    {
      id: "09",
      cat: "Insects",
      title: "Bumble Bee Control",
      image: "/images/bee.webp",
      icon: Bug,
      details:
        "Careful bumble bee support where nests cause access or safety concerns. We always aim for responsible handling and suitable advice.",
    },
    {
      id: "10",
      cat: "Rodents & Wildlife",
      title: "Squirrel Control",
      image: "/images/squirrel.webp",
      icon: Rat,
      details:
        "Squirrel control for lofts, roof spaces and property voids. We help identify access points and provide practical treatment and proofing advice.",
    },
    {
      id: "11",
      cat: "Birds & Prevention",
      title: "Hygiene & Proofing Services",
      image: "/images/hygene.webp",
      icon: Home,
      details:
        "Hygiene cleaning and proofing support for pest-affected areas. We help reduce contamination risks and support long-term property protection.",
    },
    {
      id: "12",
      cat: "Birds & Prevention",
      title: "Birds Control Services",
      image: "/images/birds.webp",
      icon: Bird,
      details:
        "Bird control and prevention services for roofs, ledges, commercial buildings and exposed areas using practical proofing solutions.",
    },
  ];

  useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const timer = setTimeout(() => {
          const element = document.querySelector(
            `[data-title="${location.state.scrollToService}"]`
          );

          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.cat === selectedCategory);

  return (
    <main className="bg-[#F7F3EF] min-h-screen font-sans overflow-x-hidden">
      <ServicesHeroSection />

      <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-y border-[#111111]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#111111] text-xs font-black uppercase tracking-[0.22em]">
            <Grid3X3 className="w-4 h-4 text-[#F36F21]" />
            Filter Services
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? "bg-[#F36F21] text-white"
                      : "bg-[#F7F3EF] text-[#111111] hover:bg-[#111111] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 space-y-20">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 !== 0;

            return (
              <article
                key={service.id}
                data-title={service.title}
                onClick={() => navigate("/contact-us")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/contact-us");
                  }
                }}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center cursor-pointer border-t border-[#111111]/15 pt-12 animate-[fadeUp_0.7s_ease-out_both] ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <div className="lg:col-span-6">
                  <div
                    className={`relative overflow-hidden shadow-2xl ${
                      reverse
                        ? "rounded-tl-[180px] md:rounded-tl-[260px]"
                        : "rounded-tr-[180px] md:rounded-tr-[260px]"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={`PrimeShield Services Limited ${service.title} in London`}
                      className="w-full h-[360px] md:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

                    {/* Bottom layout elements without the top-left orange tag */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <span className="bg-white text-[#111111] px-4 py-3 text-xs font-black uppercase tracking-[0.18em]">
                        {service.cat}
                      </span>

                      <span className="w-12 h-12 bg-[#F36F21] text-white flex items-center justify-center group-hover:bg-[#D95A13] transition-colors">
                        <ArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-7">
                      <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors">
                        <Icon size={24} strokeWidth={2.2} />
                      </div>

                      <span className="text-[#F36F21] text-sm font-black tracking-[0.3em]">
                        {service.id}
                      </span>
                    </div>

                    <h2 className="text-[#111111] text-3xl sm:text-4xl lg:text-[48px] font-black leading-[1.12] tracking-tight group-hover:text-[#F36F21] transition-colors">
                      {service.title}
                    </h2>

                    <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

                    <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                      {service.details}
                    </p>

                    <div className="mt-9 inline-flex items-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] group-hover:bg-[#D95A13] transition-colors">
                      Contact Us
                      <ArrowRight size={17} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

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

      <AboutCallbackSection />
    </main>
  );
};

export default Services;
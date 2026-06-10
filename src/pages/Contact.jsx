

// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   Terminal,
//   HelpCircle,
//   ChevronDown,
//   Send,
//   User,
//   FileText,
//   Lock,
//   Globe,
// } from "lucide-react";

// const colors = {
//   bgDarkBlock: "#041221",
//   accentYellow: "#76C7C0",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Control",
//     "Carpet Moth Control Treatment",
//     "Carpet Beetle Treatment",
//     "Cockroach Control Service",
//     "Rats & Mice Control",
//     "Flea Control",
//     "Wasps Nest Control",
//     "Bumble Bee Control",
//     "Squirrel Control",
//     "Hygiene and Proofing Services",
//     "Birds Control Services",
//     "Pigeons Control Services",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can you treat a pest problem in Sidcup?",
//       answer:
//         "We offer immediate local dispatch times across Sidcup and surrounding premium UK territories. For emergency threats, our specialists aim to deploy within hours.",
//     },
//     {
//       question: "Are your pest control treatments safe for pets and children?",
//       answer:
//         "Yes, family safety is our prime constraint. We utilize highly targeted biological eradication systems and guide you safely through containment timelines.",
//     },
//     {
//       question: "Do you offer proofing to stop rodents from returning?",
//       answer:
//         "Absolutely. We locate hidden nested hotspots, block incoming structural pathways with heavy meshes, and establish premium permanent seal safeguards.",
//     },
//     {
//       question: "Will I need more than one visit?",
//       answer:
//         "Outbreak dynamics vary. While simple treatments conclude instantly, complex rodent structures or bed bugs require a systematic 2 to 3 stage clearance procedure.",
//     },
//     {
//       question: "Do you provide commercial pest control?",
//       answer:
//         "Yes, PesSave operates discreet premium coverage accounts for retail outlets, corporate high-rises, and major commercial kitchen setups across London.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request securely...", {
//       style: {
//         background: colors.bgDarkBlock,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.accentYellow}33`,
//       },
//     });

//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);

//       toast.success(
//         res.data.message || "Pest service request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.bgDarkBlock,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.accentYellow}88`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#020b14] text-slate-200 min-h-screen font-sans antialiased selection:bg-[#4FA3A5]/30 selection:text-white overflow-x-hidden w-full relative">
//       <Toaster position="top-right" reverseOrder={false} />

//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
//       <div className="absolute top-20 left-10 w-[360px] h-[360px] bg-[#4FA3A5]/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-40 right-10 w-[420px] h-[420px] bg-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden border-b border-white/[0.06]">
//         <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
//           <img
//             src="/images/contact-hero.webp"
//             alt="Sidcup Command Center Grid"
//             className="w-full h-full object-cover object-center"
//             loading="eager"
//             decoding="async"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/55 to-transparent" />
//         </div>

//         <div className="relative z-10 max-w-3xl space-y-4 text-left bg-black/40 p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-xl animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] px-3 py-1.5 rounded-md">
//             <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//             <span className="text-slate-400 text-[10px] font-mono tracking-widest uppercase">
//               PesSave Dispatch Portal // Secure Line
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             Connect With <br />
//             <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-200 bg-clip-text text-transparent">
//               Our Fleet Operators
//             </span>
//           </h1>

//           <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
//             Facing an active infiltration path inside your property architecture?
//             Transmit your location metrics directly to our premium Sidcup
//             deployment office.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <div className="grid lg:grid-cols-12 gap-8 items-stretch">
//           <div className="lg:col-span-5 flex flex-col justify-between gap-6 animate-[fadeUp_0.7s_ease-out_both]">
//             <div className="bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.08] rounded-3xl p-8 text-left relative overflow-hidden group flex-1 flex flex-col justify-between min-h-[320px]">
//               <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
//                 <img
//                   src="/images/sidebanner.webp"
//                   alt="PesSave High-Velocity Eradication Asset"
//                   className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-300"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/50 to-transparent z-0" />

//               <div className="relative z-10 space-y-3">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded border border-[#76C7C0]/20">
//                   Sidcup HQ Network
//                 </span>

//                 <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight pt-2">
//                   Premium Eradication Frameworks
//                 </h3>
//               </div>

//               <div className="relative z-10 space-y-4 pt-8 border-t border-white/[0.06]">
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   We secure structural parameters using low-toxicity biological
//                   insulation layers and high-tensile custom mesh barriers across
//                   residential and corporate boundaries.
//                 </p>

//                 <div className="bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl flex items-center justify-between font-mono">
//                   <div className="text-left">
//                     <span className="text-[9px] text-slate-500 uppercase tracking-widest block">
//                       // Instant Helpline
//                     </span>
//                     <span className="text-sm font-bold text-white tracking-tight">
//                       07405 613595
//                     </span>
//                   </div>
//                   <PhoneCall className="w-4 h-4 text-[#4FA3A5]" />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3">
//               {[
//                 {
//                   label: "Local Premium Hub",
//                   val: "Sidcup, London, UK",
//                   icon: <MapPin className="w-4 h-4 text-[#76C7C0]" />,
//                 },
//                 {
//                   label: "Corporate Support",
//                   val: "info@pessave.co.uk",
//                   icon: <Mail className="w-4 h-4 text-[#4FA3A5]" />,
//                   link: "mailto:info@pessave.co.uk",
//                 },
//                 {
//                   label: "Direct Emergency Line",
//                   val: "07405 613595",
//                   icon: <PhoneCall className="w-4 h-4 text-[#76C7C0]" />,
//                   link: "tel:07405613595",
//                 },
//               ].map((node, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 hover:border-[#4FA3A5]/30 transition-colors duration-200 text-left"
//                 >
//                   <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
//                     {node.icon}
//                   </div>

//                   <div>
//                     <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">
//                       {node.label}
//                     </p>

//                     {node.link ? (
//                       <a
//                         href={node.link}
//                         className="text-xs sm:text-sm font-bold text-slate-200 hover:text-[#76C7C0] transition-colors font-mono"
//                       >
//                         {node.val}
//                       </a>
//                     ) : (
//                       <p className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
//                         {node.val}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-7 w-full bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 sm:p-10 flex flex-col justify-center text-left relative animate-[fadeUp_0.7s_ease-out_0.1s_both]">
//             <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#76C7C0]/40 to-transparent" />

//             <div className="mb-8">
//               <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
//                 Request Target Inspection
//               </h2>
//               <p className="text-slate-400 text-xs sm:text-sm mt-1">
//                 Fill out our structural validation framework below to calculate
//                 direct deployment quotes.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 w-full">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 {[
//                   {
//                     label: "Your Full Name",
//                     name: "name",
//                     type: "text",
//                     placeholder: "e.g. John Doe",
//                     icon: <User className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                   {
//                     label: "Email Address",
//                     name: "email",
//                     type: "email",
//                     placeholder: "e.g. john@example.com",
//                     icon: <Mail className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                   {
//                     label: "Phone Number",
//                     name: "phone",
//                     type: "tel",
//                     placeholder: "e.g. +44 7405 613595",
//                     icon: <PhoneCall className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                   {
//                     label: "Postcode Location",
//                     name: "postcode",
//                     type: "text",
//                     placeholder: "e.g. DA14",
//                     icon: <MapPin className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                 ].map((field) => (
//                   <div key={field.name} className="space-y-1.5 w-full">
//                     <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                       {field.icon}
//                       <span>{field.label}</span>
//                       <span className="text-[#4FA3A5]">*</span>
//                     </label>

//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       required
//                       className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-1.5 w-full">
//                 <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                   <FileText className="w-3.5 h-3.5 text-slate-500" />
//                   <span>Required Pest Target</span>
//                   <span className="text-[#4FA3A5]">*</span>
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl pl-4 pr-12 py-3 outline-none transition-colors duration-200 text-slate-100 appearance-none cursor-pointer text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
//                   >
//                     <option value="" className="bg-[#020b14] text-slate-500">
//                       Select target infection route...
//                     </option>

//                     {services.map((srv, idx) => (
//                       <option
//                         key={idx}
//                         value={srv}
//                         className="bg-[#020b14] text-slate-300"
//                       >
//                         {srv}
//                       </option>
//                     ))}
//                   </select>

//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-1.5 w-full">
//                 <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                   <Terminal className="w-3.5 h-3.5 text-slate-500" />
//                   <span>Situation Description</span>
//                   <span className="text-[#4FA3A5]">*</span>
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Provide parameters about structural damage indicators or vector sights..."
//                   required
//                   className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium resize-none focus:ring-4 focus:ring-[#76C7C0]/5"
//                 />
//               </div>

//               <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
//                   <Lock className="w-3 h-3 text-[#4FA3A5]" />
//                   <span>End-To-End TLS Encrypted Validation</span>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-3.5 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-slate-950 hover:brightness-110 rounded-xl font-bold text-xs uppercase tracking-widest transition-transform duration-200 shadow-lg shadow-[#4FA3A5]/10 disabled:opacity-40 inline-flex items-center justify-center gap-2 active:scale-[0.98]"
//                 >
//                   {loading ? (
//                     "Processing Request..."
//                   ) : (
//                     <>
//                       <span>Book Immediate Clearance</span>
//                       <Send className="w-3.5 h-3.5" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       <section className="bg-black/20 py-16 border-t border-b border-white/[0.04] w-full relative">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-center">
//           <div className="lg:col-span-4 text-left space-y-4 animate-[fadeUp_0.7s_ease-out_both]">
//             <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl shadow-xl space-y-4">
//               <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center">
//                 <Globe className="w-5 h-5 text-[#76C7C0]" />
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[9px] font-mono bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 text-[#4FA3A5] px-2 py-0.5 rounded font-bold tracking-wider uppercase">
//                     Verified UK Vector Hub
//                   </span>
//                   <span className="text-xs text-[#76C7C0]">★★★★★</span>
//                 </div>

//                 <h4 className="text-base font-black text-white uppercase tracking-tight">
//                   PesSave Corporate Node
//                 </h4>

//                 <p className="text-xs text-slate-400 leading-relaxed font-normal">
//                   Access direct local reviews and geo-mapped rapid intervention
//                   networks across Sidcup and the larger Greater London framework.
//                 </p>

//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Sidcup%2C%20London%2C%20UK"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs font-mono text-[#76C7C0] hover:underline inline-flex items-center gap-1 pt-2"
//                 >
//                   Explore Mapping Grid →
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden border border-white/[0.08] h-[340px] relative shadow-xl bg-black/40 animate-[fadeUp_0.7s_ease-out_0.1s_both]">
//             <iframe
//               title="Sidcup London UK Grid Map"
//               src="https://www.google.com/maps?q=Sidcup,%20London,%20UK&output=embed"
//               width="100%"
//               height="100%"
//               style={{
//                 border: 0,
//                 filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
//               }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="py-24 relative w-full">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center max-w-xl mx-auto mb-14 space-y-1 animate-[fadeUp_0.7s_ease-out_both]">
//             <span className="text-xs text-[#4FA3A5] font-mono font-bold uppercase tracking-[0.2em]">
//               // FAQ Knowledge Framework
//             </span>

//             <h2 className="text-3xl font-black uppercase tracking-tight text-white">
//               Frequently Answered Frameworks
//             </h2>
//           </div>

//           <div className="space-y-3.5">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`border transition-colors duration-200 rounded-2xl overflow-hidden animate-[fadeUp_0.7s_ease-out_both] ${
//                     isOpen
//                       ? "bg-white/[0.02] border-[#76C7C0]/30 shadow-xl"
//                       : "bg-white/[0.01] border-white/[0.05] hover:border-white/[0.12]"
//                   }`}
//                   style={{ animationDelay: `${idx * 0.05}s` }}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none group"
//                   >
//                     <span className="font-bold text-sm sm:text-base text-slate-200 tracking-tight transition-colors duration-200 group-hover:text-white flex items-center gap-2.5">
//                       <HelpCircle className="w-4 h-4 text-[#4FA3A5] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-slate-500 font-mono transition-transform duration-200 text-lg ${
//                         isOpen ? "rotate-180 text-[#76C7C0]" : ""
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-5 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3 font-normal">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;




















import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  PhoneCall,
  MapPin,
  ChevronDown,
  Send,
  User,
  FileText,
  Lock,
  HelpCircle,
  Building2,
} from "lucide-react";

const colors = {
  dark: "#111111",
  orange: "#F36F21",
  orangeDark: "#D95A13",
  cream: "#F7F3EF",
  grey: "#5F5F5F",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    "Ants Control",
    "Bed Bugs Control",
    "Carpet Moth Control Treatment",
    "Carpet Beetle Treatment",
    "Cockroach Control Service",
    "Rats & Mice Control",
    "Flea Control",
    "Wasps Nest Control",
    "Bumble Bee Control",
    "Squirrel Control",
    "Hygiene and Proofing Services",
    "Birds Control Services",
    "Pigeons Control Services",
  ];

  const faqs = [
    {
      question: "Do you cover pest control across London?",
      answer:
        "Yes, PrimeShield Services Limited provides professional pest control support for homes, landlords and businesses across London.",
    },
    {
      question: "Are your treatments suitable for homes and businesses?",
      answer:
        "Yes, we support residential and commercial properties with inspection, targeted treatment and prevention advice.",
    },
    {
      question: "Can you help with rats, mice and bed bugs?",
      answer:
        "Yes, we deal with common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, moths, wasps and more.",
    },
    {
      question: "Do you provide prevention advice?",
      answer:
        "Yes, after inspection and treatment we provide practical guidance to help reduce the risk of future pest activity.",
    },
  ];

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading("Sending your request securely...", {
      style: {
        background: colors.dark,
        color: "#FFFFFF",
        borderRadius: "12px",
        border: `1px solid ${colors.orange}55`,
      },
    });

    try {
      const res = await axios.post("https://primesheild-backend.vercel.app/api/contact", formData);

      toast.success(
        res.data.message || "Pest service request submitted successfully!",
        {
          id: loaderToast,
          duration: 4000,
          icon: "🛡️",
          style: {
            background: colors.dark,
            color: "#FFFFFF",
            border: `1px solid ${colors.orange}`,
            borderRadius: "12px",
          },
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again.",
        {
          id: loaderToast,
          duration: 4000,
          style: {
            background: "#7f1d1d",
            color: "#FFFFFF",
            borderRadius: "12px",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#F7F3EF] text-[#111111] min-h-screen font-sans overflow-x-hidden">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero */}
      <section className="relative h-[360px] md:h-[430px] lg:h-[500px] overflow-hidden">
        <img
          src="/images/contact-hero1.webp"
          alt="PrimeShield Services Limited contact page for pest control services in London"
          // className="absolute inset-0 w-full h-full object-cover object-center"
          className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_10%]"
          loading="eager"
          decoding="async"
        />

        <div className="absolute inset-0 bg-[#111111]/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/45 to-[#111111]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-full flex items-center">
          <div>
            <span className="inline-flex items-center gap-3 text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
              <span className="w-10 h-[2px] bg-[#F36F21]" />
              Contact PrimeShield
            </span>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-[78px] font-black leading-none tracking-tight">
              Contact
            </h1>

            <div className="w-20 h-[3px] bg-[#F36F21] mt-8" />
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-28 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
        <div className="absolute -bottom-28 left-0 w-96 h-96 rounded-full bg-[#111111]/8 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#111111]/15">
            {/* <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
              <Building2 className="w-5 h-5 text-[#F36F21] mb-5" />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
                Company Reg No 
              </p>
              <h3 className="mt-2 text-[#111111] font-black">17263881</h3>
            </div> */}

            <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
              <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
                Address
              </p>
              <h3 className="mt-2 text-[#111111] font-black leading-relaxed">
                12 Old Bond Street, London, England, W1S 4PW
              </h3>
            </div>

            <div className="py-8 md:px-8">
              <PhoneCall className="w-5 h-5 text-[#F36F21] mb-5" />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
                Service Area
              </p>
              <h3 className="mt-2 text-[#111111] font-black">London, UK</h3>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
                Get In Touch
              </span>

              <h2 className="text-[#111111] text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight">
                Request pest control support for your property.
              </h2>

              <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

              <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                Tell us about your pest issue and our team will review your
                details. We support London homes, landlords and businesses with
                clear inspection, treatment and prevention advice.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white border-t-[6px] border-[#F36F21] p-7 sm:p-10 shadow-[0_25px_70px_rgba(17,17,17,0.08)]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      label: "Your Full Name",
                      name: "name",
                      type: "text",
                      placeholder: "e.g. John Doe",
                      icon: <User className="w-4 h-4" />,
                    },
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      placeholder: "e.g. john@example.com",
                      icon: <Mail className="w-4 h-4" />,
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "Best phone number",
                      icon: <PhoneCall className="w-4 h-4" />,
                    },
                    {
                      label: "Postcode Location",
                      name: "postcode",
                      type: "text",
                      placeholder: "e.g. W1S 4PW",
                      icon: <MapPin className="w-4 h-4" />,
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
                        <span className="text-[#F36F21]">{field.icon}</span>
                        {field.label}
                        <span className="text-[#F36F21]">*</span>
                      </label>

                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
                    <FileText className="w-4 h-4 text-[#F36F21]" />
                    Required Pest Service
                    <span className="text-[#F36F21]">*</span>
                  </label>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-[#D7D7D7] px-5 py-4 pr-12 text-sm text-[#111111] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select pest service...</option>
                      {services.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F36F21] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
                    <FileText className="w-4 h-4 text-[#F36F21]" />
                    Message
                    <span className="text-[#F36F21]">*</span>
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the pest issue..."
                    required
                    className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#5F5F5F]">
                    <Lock className="w-4 h-4 text-[#F36F21]" />
                    <span>Your details are submitted securely.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? (
                      "Processing Request..."
                    ) : (
                      <>
                        Send Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Only */}
      <section className="bg-white py-16 md:py-20 border-y border-[#111111]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-8">
            <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-4">
              Find Us
            </span>
            <h2 className="text-[#111111] text-3xl md:text-5xl font-black">
             12 Old Bond Street, London, England, W1S 4PW
            </h2>
          </div>

          <div className="w-full h-[380px] md:h-[460px] overflow-hidden shadow-2xl border-t-[6px] border-[#F36F21]">
            <iframe
              title="PrimeShield Services Limited 12 Old Bond Street London Map"
              // src="https://www.google.com/maps?q=12%20Old%20Bond%20Street%2C%20London%2C%20England%2C%20W1S%204PW&output=embed"
              src="https://www.google.com/maps?q=12%20Old%20Bond%20Street%2C%20London%2C%20England%2C%20W1S%204PW%2C%20UK&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F3EF] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.3em]">
              FAQ
            </span>

            <h2 className="mt-4 text-[#111111] text-3xl md:text-5xl font-black">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className={`bg-white border transition-colors ${
                    isOpen ? "border-[#F36F21]" : "border-[#111111]/10"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="font-black text-[#111111] flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#F36F21] shrink-0" />
                      {faq.question}
                    </span>

                    <span
                      className={`text-[#F36F21] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-[#5F5F5F] text-sm leading-relaxed border-t border-[#111111]/10 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
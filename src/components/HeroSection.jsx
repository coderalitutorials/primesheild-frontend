

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 18 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.45, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="relative min-h-screen bg-[#010a12] text-white overflow-hidden font-sans flex items-center pt-24 md:pt-28">
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute -top-[20%] -left-[10%] w-[420px] h-[420px] rounded-full bg-[#4FA3A5]/10 blur-3xl pointer-events-none" />
//         <div className="absolute top-[40%] right-[-10%] w-[360px] h-[360px] rounded-full bg-[#76C7C0]/5 blur-3xl pointer-events-none" />

//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/mobile-herohome.webp"
//             alt="Pesrid Services Sidcup London"
//             className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
//             loading="eager"
//             decoding="async"
//             fetchPriority="high"
//           />
//         </picture>

//         <div className="absolute inset-0 bg-gradient-to-b from-[#010a12]/80 via-[#010a12]/95 to-[#010a12]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 py-12 lg:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.08 }}
//             className="lg:col-span-7 space-y-6 md:space-y-7 text-left"
//           >
//             <motion.div
//               variants={fadeInUp}
//               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#4FA3A5]/10 to-[#76C7C0]/10 border border-[#4FA3A5]/20"
//             >
//               <span className="w-2 h-2 rounded-full bg-[#76C7C0]" />
//               <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#76C7C0]">
//                 24/7 Rapid Response Unit
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white uppercase"
//             >
//               Advanced <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//                 Pest Isolation
//               </span>{" "}
//               <br />
//               & Control
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed"
//             >
//               Shielding residential estates and commercial assets across Sidcup
//               and the greater London area. Deploying scientific, certified
//               extraction methods to ensure your environment remains completely
//               sterile.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
//             >
//               <Link
//                 to="/contact-us"
//                 className="relative overflow-hidden bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#010a12] font-extrabold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-transform duration-200 active:scale-95 shadow-lg shadow-[#4FA3A5]/20 group"
//               >
//                 <span className="relative z-10 inline-flex items-center gap-2">
//                   Enquire Now
//                   <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold">
//                     ➔
//                   </span>
//                 </span>
//               </Link>

//               <div className="flex flex-col">
//                 <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
//                   Emergency Line
//                 </span>
//                 <a
//                   href="tel:07440112498"
//                   className="text-xl md:text-2xl font-black text-white hover:text-[#76C7C0] transition-colors tracking-tight mt-0.5"
//                 >
//                   07440 112498
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
//             className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto"
//           >
//             <div className="relative p-6 md:p-8 rounded-3xl bg-[#031E39]/70 border border-white/10 shadow-xl overflow-hidden hover:border-[#4FA3A5]/30 transition-colors duration-300">
//               <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#76C7C0]/10 to-transparent rounded-bl-full pointer-events-none" />

//               <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-5 border-b border-white/5 pb-3">
//                 Local Sidcup Coverage
//               </h3>

//               <ul className="space-y-4">
//                 {[
//                   {
//                     title: "Response Window",
//                     desc: "Under 2 hours local deployment",
//                   },
//                   {
//                     title: "Compliance",
//                     desc: "BPCA guidelines & fully insured",
//                   },
//                   {
//                     title: "Treatments",
//                     desc: "100% Eco-sensitive & pet safe alternatives",
//                   },
//                   {
//                     title: "Clearance Rate",
//                     desc: "Guaranteed eradication assurance",
//                   },
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3.5">
//                     <span className="mt-1 h-2 w-2 rounded-full bg-[#76C7C0] shrink-0" />
//                     <div>
//                       <h4 className="text-xs uppercase tracking-wider font-bold text-[#4FA3A5]">
//                         {item.title}
//                       </h4>
//                       <p className="text-xs md:text-sm text-slate-300 mt-0.5 font-medium">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase font-bold text-slate-400">
//                 <span>London Borough of Bexley</span>
//                 <span className="text-[#76C7C0]">Verified ✔</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }














// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   dark: "#070707",
//   orange: "#F58220",
//   orangeDark: "#C95F12",
//   grey: "#555555",
//   light: "#F7F7F7",
// };

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 22 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: "easeOut" },
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", formData),
//       {
//         loading: "Sending your callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request sent! Our pest control team will contact you shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Request failed. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "14px",
//           padding: "12px 18px",
//         },
//         success: {
//           style: {
//             background: "#070707",
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white font-sans">
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#070707",
//             color: "#FFFFFF",
//             border: "1px solid rgba(245,130,32,0.35)",
//             borderRadius: "14px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: "#070707",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.orange}`,
//             },
//           },
//         }}
//       />

//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/mobile-herohome.webp"
//             alt="PrimeShield Services Limited pest control London"
//             className="h-full w-full object-cover object-center"
//             loading="eager"
//             decoding="async"
//             fetchPriority="high"
//           />
//         </picture>

//         <div className="absolute inset-0 bg-[#070707]/55" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#F58220]/45 via-[#070707]/55 to-[#070707]/35" />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/40 via-transparent to-[#070707]/75" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-16 md:pb-24">
//         {/* Top Content */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           transition={{ staggerChildren: 0.08 }}
//           className="max-w-6xl"
//         >
//           <motion.div
//             variants={fadeInUp}
//             className="mb-8 h-[2px] w-full bg-white/60"
//           />

//           <motion.h1
//             variants={fadeInUp}
//             className="text-4xl sm:text-6xl lg:text-[82px] font-black leading-[1.08] tracking-tight max-w-6xl"
//           >
//             Protect Your London Property —
//             <br />
//             From Pests Before They Spread
//           </motion.h1>
//         </motion.div>

//         {/* Bottom Content + Form */}
//         <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
//           {/* Left Text */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             transition={{ staggerChildren: 0.08, delayChildren: 0.12 }}
//             className="lg:col-span-5 text-left"
//           >
//             <motion.div
//               variants={fadeInUp}
//               className="w-20 h-[3px] bg-[#F58220] mb-8"
//             />

//             <motion.h2
//               variants={fadeInUp}
//               className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight max-w-md"
//             >
//               Request a free pest control callback from our London team.
//             </motion.h2>

//             <motion.p
//               variants={fadeInUp}
//               className="mt-6 text-white/85 text-sm sm:text-base leading-relaxed max-w-md"
//             >
//               PrimeShield Services Limited provides professional pest control
//               support for homes, landlords and businesses across London. Send
//               your details and our team will contact you to discuss the safest
//               treatment option for your property.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center bg-[#F58220] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-[#C95F12] transition-colors"
//               >
//                 View Services
//               </Link>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center border border-white/60 text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#070707] transition-colors"
//               >
//                 Contact Us
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Form Box */}
//           <motion.div
//             initial={{ opacity: 0, x: 28 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
//             className="lg:col-span-7 w-full"
//           >
//             <div className="bg-white text-[#070707] p-6 sm:p-10 lg:p-12 shadow-2xl">
//               <div className="mb-8">
//                 <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
//                   Free Consultation
//                 </h3>
//                 <p className="mt-2 text-sm text-[#555555] leading-relaxed">
//                   Fill in your details and we will call you back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6 text-left">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Full Name *"
//                     required
//                     className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#070707] placeholder:text-[#8A8A8A] outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]/30 transition"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="Postcode *"
//                     required
//                     className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#070707] placeholder:text-[#8A8A8A] outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]/30 transition"
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone Number *"
//                     required
//                     className={`w-full border bg-white px-5 py-4 text-base text-[#070707] placeholder:text-[#8A8A8A] outline-none focus:ring-1 transition ${
//                       phoneError
//                         ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
//                         : "border-[#D7D7D7] focus:border-[#F58220] focus:ring-[#F58220]/30"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold -mt-2 flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center justify-center bg-[#F58220] text-white px-9 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.22em] hover:bg-[#C95F12] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                 >
//                   {loading ? "Sending..." : "Send"}
//                 </button>
//               </form>

//               <div className="mt-8 pt-6 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
//                 <div>
//                   <p className="font-black text-[#F58220] uppercase text-xs tracking-widest">
//                     Company
//                   </p>
//                   <p className="mt-1 text-[#555555]">
//                     PrimeShield Services Limited
//                   </p>
//                 </div>

//                 <div>
//                   <p className="font-black text-[#F58220] uppercase text-xs tracking-widest">
//                     Status
//                   </p>
//                   <p className="mt-1 text-[#555555]">Active</p>
//                 </div>

//                 <div>
//                   <p className="font-black text-[#F58220] uppercase text-xs tracking-widest">
//                     Location
//                   </p>
//                   <p className="mt-1 text-[#555555]">London, UK</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const brandColors = {
  dark: "#111111",
  orange: "#F36F21",
  orangeDark: "#D95A13",
  charcoal: "#3B3B3B",
  grey: "#5F5F5F",
  light: "#F7F7F7",
};

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post("http://localhost:5000/api/callback", formData),
      {
        loading: "Sending your callback request...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Callback request sent! Our pest control team will contact you shortly. 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Request failed. Please try again.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "14px",
          padding: "12px 18px",
        },
        success: {
          style: {
            background: "#111111",
            color: "#FFFFFF",
            border: `1px solid ${brandColors.orange}`,
          },
        },
        error: {
          style: {
            background: "#4c0519",
            color: "#fecdd3",
            border: "1px solid #f43f5e",
          },
        },
      }
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111111] text-white font-sans">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: "110px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,
          style: {
            background: "#111111",
            color: "#FFFFFF",
            border: "1px solid rgba(243,111,33,0.38)",
            borderRadius: "14px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
          loading: {
            style: {
              background: "#111111",
              color: "#FFFFFF",
              border: `1px solid ${brandColors.orange}`,
            },
          },
        }}
      />

      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
          <img
            src="/images/herohome.webp"
            alt="PrimeShield Services Limited pest control London"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <div className="absolute inset-0 bg-[#111111]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F36F21]/48 via-[#111111]/58 to-[#3B3B3B]/42" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/42 via-transparent to-[#111111]/78" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-16 md:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="max-w-6xl"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 h-[2px] w-full bg-white/60"
          />

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-[82px] font-black leading-[1.08] tracking-tight max-w-6xl"
          >
            Protect Your London Property —
            <br />
            From Pests Before They Spread
          </motion.h1>
        </motion.div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.12 }}
            className="lg:col-span-5 text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="w-20 h-[3px] bg-[#F36F21] mb-8"
            />

            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight max-w-md"
            >
              Request a  pest control callback to our London team.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-white/85 text-sm sm:text-base leading-relaxed max-w-md"
            >
              PrimeShield Services Limited provides professional pest control
              support for homes, landlords and businesses across London. Send
              your details and our team will contact you to discuss the safest
              treatment option for your property.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-[#F36F21] text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-[#D95A13] transition-colors"
              >
                View Services
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center border border-white/60 text-white px-7 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#111111] transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-white text-[#111111] p-6 sm:p-10 lg:p-12 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Book Consultation
                </h3>
                <p className="mt-2 text-sm text-[#5F5F5F] leading-relaxed">
                  Fill in your details and we will call you back shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="Postcode *"
                    required
                    className="w-full border border-[#D7D7D7] bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/30 transition"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className={`w-full border bg-white px-5 py-4 text-base text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:ring-1 transition ${
                      phoneError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                        : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/30"
                    }`}
                  />
                </div>

                {phoneError && (
                  <p className="text-red-600 text-xs font-semibold -mt-2 flex items-center gap-1.5">
                    <span>⚠️</span> {phoneError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center bg-[#F36F21] text-white px-9 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
                    Company
                  </p>
                  <p className="mt-1 text-[#5F5F5F]">
                    PrimeShield Services Limited
                  </p>
                </div>

                <div>
                  <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
                    Status
                  </p>
                  <p className="mt-1 text-[#5F5F5F]">Active</p>
                </div>

                <div>
                  <p className="font-black text-[#F36F21] uppercase text-xs tracking-widest">
                    Location
                  </p>
                  <p className="mt-1 text-[#5F5F5F]">London, UK</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
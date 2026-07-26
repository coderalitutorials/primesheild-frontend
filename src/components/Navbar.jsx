



// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 10;

//           setIsScrolled((prev) => {
//             if (prev === shouldBeScrolled) return prev;
//             return shouldBeScrolled;
//           });

//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 ${
//       isActive
//         ? "text-[#76C7C0]"
//         : "text-slate-200 hover:text-[#4FA3A5]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] font-black shadow-lg shadow-[#4FA3A5]/20"
//         : "text-slate-300 hover:bg-white/5 hover:text-white"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
//         isScrolled
//           ? "bg-[#020b14]/90 border-b border-white/5 shadow-lg"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           <Link
//             to="/"
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/pesrid.png.png"
//               alt="Pesrid Services Sidcup Logo"
//               className="h-16 md:h-22 lg:h-24 w-auto object-contain block"
//               loading="eager"
//               decoding="async"
//             />
//           </Link>

//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             <div className="flex items-center gap-6 lg:gap-9">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#76C7C0]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2.5 text-slate-300 font-bold text-xs lg:text-sm uppercase tracking-widest pl-6 lg:pl-8 border-l border-white/10 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#4FA3A5] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span className="whitespace-nowrap tracking-[0.1em]">
//                 Sidcup, London
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-white/10 border border-white/5 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#76C7C0]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-[#020b14]/95 border-t border-white/5 shadow-xl overflow-hidden absolute top-full left-0 w-full">
//           <div className="px-6 py-6 flex flex-col gap-2">
//             <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//               Services
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//               About Us
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//               Contact Us
//             </NavLink>

//             <div className="border-t border-white/5 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-400 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#4FA3A5]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>Sidcup, London, UK</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }















// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 10;

//           setIsScrolled((prev) => {
//             if (prev === shouldBeScrolled) return prev;
//             return shouldBeScrolled;
//           });

//           ticking = false;
//         });

//         ticking = true;
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 ${
//       isActive
//         ? "text-[#F36F21]"
//         : "text-white hover:text-[#F36F21]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
//       isActive
//         ? "bg-[#F36F21] text-white font-black shadow-lg shadow-[#F36F21]/25"
//         : "text-slate-200 hover:bg-white/5 hover:text-[#F36F21]"
//     }`;

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
//         isScrolled
//           ? "bg-[#111111]/92 border-b border-[#F36F21]/20 shadow-lg"
//           : "bg-transparent border-b border-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
//           <Link
//             to="/"
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
//             onClick={() => setOpen(false)}
//           >
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Services Limited Logo"
//               className="h-16 md:h-22 lg:h-24 w-auto object-contain block"
//               loading="eager"
//               decoding="async"
//             />
//           </Link>

//           <div className="hidden md:flex items-center gap-8 lg:gap-12">
//             <div className="flex items-center gap-6 lg:gap-9">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>

//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && (
//                       <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </div>

//             <div className="flex items-center gap-2.5 text-slate-200 font-bold text-xs lg:text-sm uppercase tracking-widest pl-6 lg:pl-8 border-l border-white/15 h-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21] shrink-0"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span className="whitespace-nowrap tracking-[0.1em]">
//                 12 Old Bond Street London England W1S4PW
//               </span>
//             </div>
//           </div>

//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-[#F36F21]/15 border border-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-xl font-bold text-[#F36F21]">✕</span>
//             ) : (
//               <span className="text-2xl font-light">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-[#111111]/96 border-t border-[#F36F21]/20 shadow-xl overflow-hidden absolute top-full left-0 w-full">
//           <div className="px-6 py-6 flex flex-col gap-2">
//             <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>
//               Home
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>
//               Services
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>
//               About Us
//             </NavLink>

//             <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>
//               Contact Us
//             </NavLink>

//             <div className="border-t border-white/10 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-300 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-4 h-4 text-[#F36F21]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>London, UK</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
















import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 10;

          setIsScrolled((prev) => {
            if (prev === shouldBeScrolled) return prev;
            return shouldBeScrolled;
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `text-[15px] lg:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative py-1 ${
      isActive
        ? "text-[#F36F21]"
        : "text-white hover:text-[#F36F21]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl px-5 py-3.5 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
      isActive
        ? "bg-[#F36F21] text-white font-black shadow-lg shadow-[#F36F21]/25"
        : "text-slate-200 hover:bg-white/5 hover:text-[#F36F21]"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-24 md:h-28 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#111111]/92 border-b border-[#F36F21]/20 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to="/"
            className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0 py-2"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/primelogo.webp"
              alt="PrimeShield Services Limited Logo"
              className="h-16 md:h-22 lg:h-24 w-auto object-contain block"
              loading="eager"
              decoding="async"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-6 lg:gap-9">
              <NavLink to="/" className={navClass}>
                {({ isActive }) => (
                  <>
                    Home
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/services" className={navClass}>
                {({ isActive }) => (
                  <>
                    Services
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/about-us" className={navClass}>
                {({ isActive }) => (
                  <>
                    About 
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
                    )}
                  </>
                )}
              </NavLink>

              <NavLink to="/contact-us" className={navClass}>
                {({ isActive }) => (
                  <>
                    Contact 
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F36F21]" />
                    )}
                  </>
                )}
              </NavLink>
            </div>

            <div className="flex items-center gap-6 pl-6 lg:pl-8 border-l border-white/15">
              <div className="flex items-center gap-2.5 text-slate-200 font-bold text-xs lg:text-sm uppercase tracking-widest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#F36F21] shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <span className="whitespace-nowrap tracking-[0.1em]">
                  12 Old Bond Street London England W1S 4PW
                </span>
              </div>

              <a
                href="tel:+447438124888"
                className="flex items-center gap-2 text-slate-200 hover:text-[#F36F21] transition-colors font-bold text-xs lg:text-sm uppercase tracking-widest whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#F36F21] shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 0 0 1.5-1.5v-1.372a1.5 1.5 0 0 0-1.09-1.44l-4.423-1.106a1.5 1.5 0 0 0-1.465.39l-.97.97a12.035 12.035 0 0 1-5.744-5.744l.97-.97a1.5 1.5 0 0 0 .39-1.465L7.562 4.09A1.5 1.5 0 0 0 6.122 3H4.75a1.5 1.5 0 0 0-1.5 1.5v2.25Z"
                  />
                </svg>

                <span>07438 124888</span>
              </a>
            </div>
          </div>


                    <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-transform active:scale-90 bg-white/5 hover:bg-[#F36F21]/15 border border-white/10 shrink-0"
            aria-label="Toggle menu"
          >
            {open ? (
              <span className="text-xl font-bold text-[#F36F21]">✕</span>
            ) : (
              <span className="text-2xl font-light">☰</span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111]/96 border-t border-[#F36F21]/20 shadow-xl overflow-hidden absolute top-full left-0 w-full">
          <div className="px-6 py-6 flex flex-col gap-2">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={mobileNavClass}
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to="/services"
              className={mobileNavClass}
            >
              Services
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to="/about-us"
              className={mobileNavClass}
            >
              About 
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              to="/contact-us"
              className={mobileNavClass}
            >
              Contact 
            </NavLink>

            <div className="border-t border-white/10 mt-3 pt-4 flex items-center gap-2.5 text-xs text-slate-300 font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#F36F21]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span>London, UK</span>
            </div>

            <a
              href="tel:+447438124888"
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-[#F36F21] font-medium uppercase tracking-widest px-5 py-3.5 bg-white/5 rounded-xl transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-[#F36F21]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 0 0 1.5-1.5v-1.372a1.5 1.5 0 0 0-1.09-1.44l-4.423-1.106a1.5 1.5 0 0 0-1.465.39l-.97.97a12.035 12.035 0 0 1-5.744-5.744l.97-.97a1.5 1.5 0 0 0 .39-1.465L7.562 4.09A1.5 1.5 0 0 0 6.122 3H4.75a1.5 1.5 0 0 0-1.5 1.5v2.25Z"
                />
              </svg>

              <span>07438 124888</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
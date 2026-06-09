import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { PhoneCall, MapPin, ShieldCheck } from "lucide-react";

const brandColors = {
  dark: "#111111",
  orange: "#F36F21",
  orangeDark: "#D95A13",
  grey: "#5F5F5F",
  light: "#F7F3EF",
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

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
      axios.post("https://primesheild-backend.vercel.app/api/callback", formData),
      {
        loading: "Securing connection grid...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Callback request queued! A technician will call shortly. 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Transmission failed. Try again.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "16px",
          padding: "12px 20px",
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
    <section className="relative overflow-hidden min-h-[720px] bg-[#111111] font-sans">
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
            border: "1px solid rgba(243,111,33,0.35)",
            borderRadius: "16px",
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

      <img
        src="/images/callback-pest-control-bg.webp"
        alt="PrimeShield Services Limited pest control callback consultation for London properties"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[#111111]/62" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/55 to-[#F36F21]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-left">
            <div className="w-16 h-[3px] bg-[#F36F21] mb-8" />

            <h2 className="text-white text-4xl sm:text-5xl lg:text-[66px] font-black leading-[1.08] tracking-tight">
              Need pest control support in London?
            </h2>

            <p className="mt-7 text-white/82 text-base md:text-lg leading-relaxed max-w-xl">
              Send your details and PrimeShield Services Limited will contact you
              to discuss the issue, your postcode and the right treatment option
              for your property.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                {
                  icon: PhoneCall,
                  title: "Quick Callback",
                },
                {
                  icon: MapPin,
                  title: "London Service",
                },
                {
                  icon: ShieldCheck,
                  title: "Safe Treatment",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/15 backdrop-blur-sm p-4"
                  >
                    <Icon className="w-5 h-5 text-[#F36F21] mb-3" />
                    <p className="text-white text-sm font-black">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
            <div className="bg-white p-7 sm:p-10 lg:p-12 shadow-2xl border-t-[6px] border-[#F36F21]">
              <div className="mb-8">
                <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.28em]">
                  Free Consultation
                </span>
                <h3 className="mt-3 text-[#111111] text-2xl sm:text-3xl font-black tracking-tight">
                  Request a Callback
                </h3>
                <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
                  Fill in your details and our team will call you back shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
                    Full Name <span className="text-[#F36F21]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
                    Postcode <span className="text-[#F36F21]">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="e.g. W1S 4PW"
                    required
                    className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
                    Phone Number <span className="text-[#F36F21]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Best phone number"
                    required
                    className={`w-full bg-white border px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:ring-1 transition-colors duration-200 ${
                      phoneError
                        ? "border-red-500 focus:ring-red-500/25"
                        : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/25"
                    }`}
                  />
                </div>

                {phoneError && (
                  <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">
                    <span>⚠️</span> {phoneError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F36F21] text-white py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#D95A13]"
                >
                  {loading ? "TRANSMITTING DATA..." : "SEND"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





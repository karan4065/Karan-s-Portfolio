import React, { useState } from "react";
import { Send, MapPin, Mail, Grid2X2Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let e = {};
    if (!formData.name) e.name = "Name required";
    if (!formData.email) e.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.subject) e.subject = "Subject required";
    if (!formData.message) e.message = "Message required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validateForm()) return;

    const form = new FormData();
    form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703");
    Object.entries(formData).forEach(([k, v]) => form.append(k, v));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      setStatus(res.ok ? "Transmission successful 🚀" : "Failed to send");
      if (res.ok)
        setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("Network error");
    }
  };

  return (
    <main data-section="contact" className="relative min-h-screen bg-[#020617] text-white overflow-hidden">

      <GridBackground/>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT INFO */}
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Control Panel
          </h2>
          <p className="text-slate-400 text-lg">
            Establish communication from orbit.  
            Let’s build intelligent systems together.
          </p>

          <div className="space-y-4">
            <InfoCard
              icon={<Mail />}
              title="Email"
              value="karanjadhav4065@gmail.com"
            />
            <InfoCard
              icon={<MapPin />}
              title="Location"
              value="Nagpur, Maharashtra"
            />
          </div>
        </div>

        {/* FORM */}
        <div className="relative backdrop-blur-xl bg-[#020617]/80 border border-cyan-500/20 rounded-2xl p-8 shadow-[0_0_60px_rgba(56,189,248,0.15)] animate-slideUp">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              error={errors.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              error={errors.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Input
              placeholder="Subject"
              value={formData.subject}
              error={errors.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              error={errors.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:shadow-[0_0_30px_#38bdf8] transition-all"
            >
              <Send size={18} /> Send Signal
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-cyan-400">{status}</p>
          )}
        </div>
      </section>
    </main>
  );
}

/* 🔹 Components */

const Input = ({ placeholder, value, onChange, error, type = "text" }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-lg bg-black/40 border
        ${error ? "border-red-500" : "border-cyan-500/30"}
        focus:border-cyan-400 focus:shadow-[0_0_15px_#38bdf8]
        outline-none transition`}
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const Textarea = ({ placeholder, value, onChange, error }) => (
  <div>
    <textarea
      rows="4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-lg bg-black/40 border
        ${error ? "border-red-500" : "border-cyan-500/30"}
        focus:border-cyan-400 focus:shadow-[0_0_15px_#38bdf8]
        outline-none resize-none transition`}
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const InfoCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 bg-black/40 border border-cyan-500/20 rounded-lg p-4 hover:scale-[1.02] transition">
    <div className="text-cyan-400">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-slate-400 text-sm">{value}</p>
    </div>
  </div>
);

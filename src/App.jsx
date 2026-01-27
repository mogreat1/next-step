import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

/* === Minimal UI components (Vite-compatible) === */
const Card = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className = "", variant, ...props }) => {
  const base =
    "inline-flex items-center justify-center font-medium transition focus:outline-none";
  const styles =
    variant === "outline"
      ? "border border-black/20 bg-transparent"
      : "bg-[#D4AF37] text-black";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function NextStepLightLanding() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    await fetch("https://n8n-production-bdf7.up.railway.app/webhook-test/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F6F3] text-[#1A1A1A] font-sans scroll-smooth">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="tracking-widest text-sm text-black/50 mb-6">CAREER TRANSFORMATION</p>
            <h1 className="font-serif text-6xl leading-tight mb-8">
              Your Story.<br />Your Confidence.<br />Your Future.
            </h1>
            <p className="text-black/70 max-w-lg mb-10">
              We empower professionals to unlock their full potential through expert CV review, intensive interview training,
              and personalized career consulting.
            </p>
            <div className="flex gap-6">
              <Button className="rounded-full px-8">Start Your Journey</Button>
              <Button variant="outline" className="rounded-full px-8">Learn More</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden md:flex justify-center">
            <img
              src="/hero-career-growth.png"
              alt="Career growth illustration"
              className="max-w-[420px] w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="tracking-widest text-sm text-black/50 mb-4">CONTACT</p>
            <h2 className="font-serif text-5xl mb-6">Let’s talk about your next step</h2>
            <p className="text-black/70 max-w-md">Share your goals. We’ll help you define the smartest next move.</p>
          </div>
          <Card className="bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl">
            <CardContent className="p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="name" required placeholder="Name" className="w-full bg-white/70 p-3 rounded border border-black/10" />
                  <input name="phone" required placeholder="Phone" className="w-full bg-white/70 p-3 rounded border border-black/10" />
                  <input name="email" required type="email" placeholder="Email" className="w-full bg-white/70 p-3 rounded border border-black/10" />
                  <textarea name="message" required placeholder="How can I help you?" className="w-full bg-white/70 p-3 rounded border border-black/10 h-32" />
                  <Button className="w-full rounded-full">Send Message</Button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                  <CheckCircle className="mx-auto text-[#D4AF37]" size={64} />
                  <p className="mt-6 font-serif text-2xl">Thank you.</p>
                  <p className="text-black/60">Your message has been sent.</p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}

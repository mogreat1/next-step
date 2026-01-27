import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function NextStepManusLanding() {
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
    <div className="bg-[#0A0A0A] text-white font-sans scroll-smooth">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-xl">NEXT STEP</span>
          <div className="hidden md:flex gap-10 text-sm text-white/80">
            <a href="#services">Services</a>
            <a href="#values">Our Values</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <Button className="bg-[#D4AF37] text-black rounded-full px-6">Get Started</Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="tracking-widest text-sm text-white/50 mb-6">CAREER TRANSFORMATION</p>
            <h1 className="font-serif text-6xl leading-tight mb-8">
              Your Story.<br />Your Confidence.<br />Your Future.
            </h1>
            <p className="text-white/70 max-w-lg mb-10">
              We empower professionals to unlock their full potential through expert CV review, intensive interview training, and personalized career consulting.
            </p>
            <div className="flex gap-6">
              <Button className="bg-[#D4AF37] text-black rounded-full px-8">Start Your Journey</Button>
              <Button variant="outline" className="rounded-full border-white/20 px-8">Learn More</Button>
            </div>
          </motion.div>

          {/* ART PANEL */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden md:block">
            <div className="h-[420px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10" />
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-3 text-center">
          <div><p className="text-3xl font-serif">500+</p><p className="text-white/60">Professionals Helped</p></div>
          <div><p className="text-3xl font-serif">95%</p><p className="text-white/60">Success Rate</p></div>
          <div><p className="text-3xl font-serif">8+</p><p className="text-white/60">Years Experience</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
        <p className="tracking-widest text-sm text-white/50 mb-4">WHAT WE OFFER</p>
        <h2 className="font-serif text-4xl mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {["CV Review", "Interview Training", "Career Consulting"].map((s) => (
            <Card key={s} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl">
              <CardContent className="p-10">
                <h3 className="font-serif text-2xl mb-4">{s}</h3>
                <p className="text-white/70">High-impact personalized support tailored to your goals.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-32 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="tracking-widest text-sm text-white/50 mb-4">OUR FOUNDATION</p>
          <h2 className="font-serif text-4xl mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {["Authenticity", "Support", "Growth"].map((v) => (
              <Card key={v} className="bg-black/40 border border-white/10 rounded-3xl">
                <CardContent className="p-10">
                  <h3 className="font-serif text-xl mb-2">{v}</h3>
                  <p className="text-white/60">Integrity-driven, human-first consulting.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="tracking-widest text-sm text-white/50 mb-4">CONTACT</p>
            <h2 className="font-serif text-5xl mb-6">Let’s talk about your next step</h2>
            <p className="text-white/70 max-w-md">Share your goals. We’ll help you define the smartest next move.</p>
          </div>
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
            <CardContent className="p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="name" required placeholder="Name" className="w-full bg-black/40 p-3 rounded" />
                  <input name="phone" required placeholder="Phone" className="w-full bg-black/40 p-3 rounded" />
                  <input name="email" required type="email" placeholder="Email" className="w-full bg-black/40 p-3 rounded" />
                  <textarea name="message" required placeholder="How can I help you?" className="w-full bg-black/40 p-3 rounded h-32" />
                  <Button className="w-full bg-[#D4AF37] text-black rounded-full">Send Message</Button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                  <CheckCircle className="mx-auto text-[#D4AF37]" size={64} />
                  <p className="mt-6 font-serif text-2xl">Thank you.</p>
                  <p className="text-white/70">Your message has been sent.</p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-white/10 text-center text-white/60">
        <p className="font-serif text-lg text-white">NEXT STEP</p>
        <p>Career Consulting · CV Review · Interview Training</p>
        <p className="mt-6">© 2026 NEXT STEP. All rights reserved.</p>
      </footer>

    </div>
  );
}

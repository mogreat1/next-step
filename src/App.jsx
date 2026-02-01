import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

/* === Minimal UI components === */
const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur border border-black/10 rounded-3xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-10 ${className}`}>{children}</div>
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

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    await fetch("https://n8n-production-bdf7.up.railway.app/webhook-test/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F6F3] text-[#1A1A1A] font-sans scroll-smooth">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-xl">NEXT STEP</span>
          <div className="hidden md:flex gap-10 text-sm text-black/70">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#values">Our Values</a>
            <a href="#contact">Contact</a>
          </div>
          <Button className="rounded-full px-6">Get Started</Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <p className="tracking-widest text-sm text-black/50 mb-6">CAREER TRANSFORMATION</p>
            <h1 className="font-serif text-6xl leading-tight mb-8">
              Your Story.<br />Your Confidence.<br />Your Future.
            </h1>
            <p className="text-black/70 max-w-lg mb-10">
              We empower professionals to unlock their full potential through expert CV review,
              interview training, and personalized career consulting.
            </p>
            <div className="flex gap-6">
              <Button className="rounded-full px-8">Start Your Journey</Button>
              <Button variant="outline" className="rounded-full px-8">Learn More</Button>
            </div>
          </motion.div>

          <img
            src="/hero-career-growth.png"
            alt="Career growth"
            className="max-w-[420px] w-full object-contain hidden md:block"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            ["Resume Review", "Professional resume analysis and ATS optimization."],
            ["Interview Preparation", "Mock interviews and confidence building."],
            ["Career Strategy", "Personalized career roadmap."],
            ["Professional Growth", "Skill assessment and development."],
            ["Job Search Support", "Strategic job search guidance."],
            ["Personal Branding", "LinkedIn and personal brand optimization."],
          ].map(([title, desc]) => (
            <Card key={title}>
              <CardContent>
                <h3 className="font-serif text-2xl mb-4">{title}</h3>
                <p className="text-black/60">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT / PROCESS */}
      <section id="about" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="tracking-widest text-sm text-black/50 mb-4">OUR APPROACH</p>
          <h2 className="font-serif text-5xl mb-6">Your Path to Career Success</h2>
          <p className="text-black/60">
            We guide you through every step of your career journey with proven strategies
            and personalized support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-2xl mb-8">Our Process</h3>
            <div className="space-y-4">
              {[
                "Discovery Call – understanding your goals and challenges.",
                "Assessment – in-depth review of skills and experience.",
                "Strategy Development – tailored career action plan.",
                "Implementation – resumes, interviews, job search.",
                "Success & Follow-up – support until you land the role.",
              ].map((step, i) => (
                <div key={i} className="bg-white/80 border border-black/10 rounded-2xl p-5">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardContent>
              <h3 className="font-serif text-2xl mb-6">What You Get</h3>
              <ul className="space-y-3 text-black/70">
                <li>• Personalized 1-on-1 coaching</li>
                <li>• Industry-specific guidance</li>
                <li>• Resume & LinkedIn optimization</li>
                <li>• Mock interview practice</li>
                <li>• Salary negotiation strategies</li>
              </ul>
              <div className="flex gap-10 mt-10">
                <div>
                  <p className="text-3xl font-serif text-[#D4AF37]">95%</p>
                  <p className="text-sm text-black/60">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#D4AF37]">2 weeks</p>
                  <p className="text-sm text-black/60">Avg. Time to Results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-5xl text-center mb-20">Your Career Success Team</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {["Kateryna – Career Coach", "Irma – Career Strategist"].map((name) => (
            <Card key={name} className="text-center">
              <CardContent>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-black/5" />
                <h3 className="font-serif text-2xl">{name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="py-32 bg-black/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {["Authenticity", "Support", "Growth"].map((v) => (
            <Card key={v}>
              <CardContent>
                <h3 className="font-serif text-xl mb-2">{v}</h3>
                <p className="text-black/60">
                  Genuine, human-centered consulting focused on long-term impact.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-5xl mb-6">Let’s talk about your next step</h2>
            <p className="text-black/70">
              Share your goals. We’ll help you define the smartest next move.
            </p>
          </div>
          <Card>
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="name" required placeholder="Name" className="w-full p-3 border rounded" />
                  <input name="phone" required placeholder="Phone" className="w-full p-3 border rounded" />
                  <input name="email" required type="email" placeholder="Email" className="w-full p-3 border rounded" />
                  <textarea name="message" required placeholder="How can I help you?" className="w-full p-3 border rounded h-32" />
                  <Button className="w-full rounded-full">Send Message</Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="mx-auto text-[#D4AF37]" size={64} />
                  <p className="mt-6 font-serif text-2xl">Thank you.</p>
                  <p className="text-black/60">Your message has been sent.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white/80 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div>
            <p className="font-serif text-lg text-white mb-2">NEXT STEP</p>
            <p className="text-white/60 max-w-sm">
              Career Consulting: CV review, interview preparation, and career strategy.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-4">Our Services</p>
            <ul className="space-y-2 text-white/60">
              <li>Resume Review</li>
              <li>Interview Preparation</li>
              <li>Career Strategy</li>
              <li>Job Search Support</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-medium mb-4">Quick Links</p>
            <ul className="space-y-2 text-white/60">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026 NEXT STEP. All rights reserved. · Privacy Policy · Terms of Service
        </div>
      </footer>

    </div>
  );
}

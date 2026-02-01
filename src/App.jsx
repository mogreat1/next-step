import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

/* ===== UI PRIMITIVES ===== */
const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur border border-black/10 rounded-3xl ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-12 ${className}`}>{children}</div>
);

const Button = ({ children, className = "", variant = "solid", ...props }) => {
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

    await fetch("https://n8n-production-bdf7.up.railway.app/webhook/create", {
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

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <span className="font-serif text-2xl">NEXT STEP</span>

          <div className="hidden md:flex gap-14 text-base text-black/80 font-medium">
            <a href="#services" className="hover:underline underline-offset-8">Services</a>
            <a href="#about" className="hover:underline underline-offset-8">About</a>
            <a href="#team" className="hover:underline underline-offset-8">Team</a>
            <a href="#values" className="hover:underline underline-offset-8">Our Values</a>
            <a href="#contact" className="hover:underline underline-offset-8">Contact</a>
          </div>

          <a href="#contact">
            <Button className="rounded-full px-8 py-2.5 hover:shadow-lg">
              Start Your Next Step
            </Button>
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center px-6 pt-40 pb-32 bg-gradient-to-b from-[#F7F6F3] to-[#F2EFEA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-xs text-black/40 mb-8">
              Career Transformation
            </p>
            <h1 className="font-serif text-7xl leading-[1.05] mb-10">
              Your Story.<br />
              Your Confidence.<br />
              <span className="text-[#D4AF37]">Your Future.</span>
            </h1>
            <p className="text-black/70 max-w-lg mb-12 text-lg">
              We empower professionals to unlock their full potential through expert CV review,
              interview training, and personalized career consulting.
            </p>
            <div className="flex gap-6">
              <a href="#contact">
                <Button className="rounded-full px-10 py-3">Start Your Next Step</Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="rounded-full px-10 py-3">Learn More</Button>
              </a>
            </div>
          </motion.div>

          <img
            src="/hero-career-growth.png"
            alt="Career growth"
            className="max-w-[440px] w-full object-contain hidden md:block"
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-40 max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-widest text-xs text-black/40 mb-6">What We Offer</p>
        <h2 className="font-serif text-5xl mb-20">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-16">
          {[
            ["Resume Review", "Professional resume analysis and ATS optimization."],
            ["Interview Preparation", "Mock interviews and confidence building."],
            ["Career Strategy", "Personalized career roadmap."],
            ["Professional Growth", "Skills assessment and development plans."],
            ["Job Search Support", "Strategic job search guidance and applications."],
            ["Personal Branding", "LinkedIn optimization and brand positioning."],
          ].map(([title, desc]) => (
            <Card key={title}>
              <CardContent>
                <h3 className="font-serif text-2xl mb-4">{title}</h3>
                <p className="text-black/60 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== ABOUT / APPROACH ===== */}
      <section id="about" className="py-40 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="uppercase tracking-widest text-xs text-black/40 mb-6">Our Approach</p>
            <h2 className="font-serif text-6xl mb-8">Your Path to Career Success</h2>
            <p className="text-black/60 text-lg">
              We guide you through every step of your career journey with proven strategies
              and deeply personalized support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="font-serif text-2xl mb-10">Our Process</h3>
              <div className="space-y-5">
                {[
                  "Discovery Call – understand your goals and challenges",
                  "Assessment – skills, experience, and market positioning",
                  "Strategy Development – clear, actionable career plan",
                  "Implementation – CV, interviews, job search support",
                  "Success & Follow-up – ongoing guidance until placement",
                ].map((step) => (
                  <div key={step} className="bg-white/80 border border-black/10 rounded-2xl p-6">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardContent>
                <h3 className="font-serif text-2xl mb-8">What You Get</h3>
                <ul className="space-y-4 text-black/70 text-lg">
                  <li>• Personalized 1-on-1 coaching</li>
                  <li>• Industry-specific expertise</li>
                  <li>• Resume & LinkedIn optimization</li>
                  <li>• Interview preparation & feedback</li>
                  <li>• Salary negotiation strategies</li>
                </ul>
                <div className="flex gap-12 mt-12">
                  <div>
                    <p className="text-4xl font-serif text-[#D4AF37]">95%</p>
                    <p className="text-sm text-black/60">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif text-[#D4AF37]">2 weeks</p>
                    <p className="text-sm text-black/60">Avg. Time to Results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="py-40 max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-5xl text-center mb-24">
          Your Career Success Team
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              name: "Kateryna",
              role: "Career Coach",
              desc: "Helping professionals gain clarity, confidence, and direction in their careers.",
            },
            {
              name: "Irma",
              role: "Career Strategist",
              desc: "Specialist in career transitions and long-term professional strategy.",
            },
          ].map((p) => (
            <Card key={p.name} className="text-center">
              <CardContent>
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-black/5" />
                <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
                <p className="text-[#D4AF37] mb-4">{p.role}</p>
                <p className="text-black/60">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section id="values" className="py-40 bg-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs text-black/40 mb-6">Our Foundation</p>
          <h2 className="font-serif text-5xl mb-20">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              ["Authenticity", "Genuine, human-centered consulting built on trust."],
              ["Support", "Structured guidance with empathy and understanding."],
              ["Growth", "Long-term career development with integrity."],
            ].map(([title, desc]) => (
              <Card key={title}>
                <CardContent>
                  <h3 className="font-serif text-2xl mb-4">{title}</h3>
                  <p className="text-black/60 text-lg">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-48 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24">
          <div>
            <p className="uppercase tracking-widest text-xs text-black/40 mb-6">Contact</p>
            <h2 className="font-serif text-6xl mb-8">Let’s talk about your next step</h2>
            <p className="text-black/70 text-lg">
              Share your goals. We’ll help you define the smartest next move.
            </p>
          </div>

          <Card>
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input name="name" required placeholder="Name" className="w-full p-4 border rounded-lg" />
                  <input name="phone" required placeholder="Phone" className="w-full p-4 border rounded-lg" />
                  <input name="email" required type="email" placeholder="Email" className="w-full p-4 border rounded-lg" />
                  <textarea name="message" required placeholder="How can I help you?" className="w-full p-4 border rounded-lg h-36" />
                  <Button className="w-full rounded-full py-3">Send Message</Button>
                </form>
              ) : (
                <div className="text-center">
                  <CheckCircle className="mx-auto text-[#D4AF37]" size={64} />
                  <p className="mt-8 font-serif text-2xl">Thank you.</p>
                  <p className="text-black/60">Your message has been sent.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#111111] text-white/80 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div>
            <p className="font-serif text-lg text-white mb-2">NEXT STEP</p>
            <p className="text-white/60 max-w-sm">
              Career Consulting: CV review, interview preparation, and strategic career planning.
            </p>
          </div>

          <div>
            <p className="text-white font-medium mb-6">Our Services</p>
            <ul className="space-y-3 text-white/60">
              <li>Resume Review</li>
              <li>Interview Preparation</li>
              <li>Career Strategy</li>
              <li>Job Search Support</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-medium mb-6">Quick Links</p>
            <ul className="space-y-3 text-white/60">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#values">Our Values</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026 NEXT STEP. All rights reserved. · Privacy Policy · Terms of Service
        </div>
      </footer>

    </div>
  );
}

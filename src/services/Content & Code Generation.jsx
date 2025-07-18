import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import contentVideo from "../assets/content.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const features = [
  {
    title: "AI-Powered Writing",
    desc: "Generate blog posts, marketing copy, and professional articles in seconds with advanced natural language AI.",
  },
  {
    title: "Multi-Language Support",
    desc: "Create content in 25+ global languages, helping you expand your reach internationally.",
  },
  {
    title: "Tone Customization",
    desc: "Adjust the tone of your content to suit your brand: friendly, formal, witty, persuasive, and more.",
  },
  {
    title: "SEO Optimization",
    desc: "Automatically integrate keywords and structure your content for better Google rankings.",
  },
  {
    title: "Plagiarism-Free Output",
    desc: "Original content generated every time—no copy-pasting, just fresh ideas tailored to your input.",
  },
  {
    title: "Real-Time Suggestions",
    desc: "Improve your existing content with smart AI suggestions, from grammar fixes to clarity improvements.",
  },
];

const benefits = [
  { title: "Save Time", desc: "Save hours of manual writing with instant AI content." },
  { title: "Boost Engagement", desc: "Boost engagement with personalized tone and optimized structure." },
  { title: "Global Reach", desc: "Expand your audience with multilingual support." },
  { title: "SEO Friendly", desc: "Rank higher on search engines with built-in SEO suggestions." },
  { title: "Original Content", desc: "Maintain originality and avoid duplicate content issues." },
  { title: "Productivity", desc: "Enhance productivity and focus on your business growth." },
];

const howItWorks = [
  { step: "Step 1", title: "Choose Content Type", desc: "Select blog, ad copy, email, or other content type to start." },
  { step: "Step 2", title: "Input Details", desc: "Enter keywords, target audience, tone, and other preferences." },
  { step: "Step 3", title: "Generate & Refine", desc: "Get high-quality, ready-to-use content in seconds, with real-time suggestions." },
];

const plans = [
  {
    name: "Starter",
    price: "₹799/mo",
    desc: "Perfect for individuals and freelancers",
    features: [
      "50 AI-generated articles",
      "Basic SEO support",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₹2,499/mo",
    desc: "Great for marketers and teams",
    features: [
      "500 AI-generated articles",
      "Advanced tone & SEO tools",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    price: "₹6,999/mo",
    desc: "Best for agencies and large teams",
    features: [
      "Unlimited content generation",
      "Dedicated success manager",
      "Custom integration support",
    ],
  },
];

// Add global styles for benefit-glow and wave animation if not present
if (typeof document !== 'undefined' && !document.getElementById('benefit-glow-style')) {
  const style = document.createElement('style');
  style.id = 'benefit-glow-style';
  style.innerHTML = `
    @keyframes wave {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .benefit-glow {
      box-shadow: 0 4px 24px 0 #e3d27155, 0 1.5px 8px 0 #0002;
      transition: box-shadow 0.4s, transform 0.4s;
    }
  `;
  document.head.appendChild(style);
}

const benefitsSection = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const benefitsStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
const benefitCardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const TypingText = ({ text, speed = 50 }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
};

const ContentGenerator = () => {
  const [howItHovered, setHowItHovered] = useState(null);
  return (
    <main className="bg-[#0c0d0c] text-white">
      {/* Hero Section */}
      <section className="relative text-white py-32 min-h-screen text-center shadow-2xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={contentVideo}
        />
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent">
            Content & Code Generation
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-xl md:text-2xl text-gray-200 mb-8">
            Instantly generate high-quality content and code with advanced AI. Save time, boost productivity, and scale your creative output.
          </motion.p>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-[#374151] to-[#6B7280] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:from-[#4B5563] hover:to-[#9CA3AF] transition-all duration-300"
            onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="text-white py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-12">Key Features</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group w-64 bg-white p-9 space-y-3 relative overflow-hidden mx-auto rounded-2xl flex flex-col items-start transition-all duration-300 cursor-pointer shadow-lg"
                style={{ willChange: 'transform, box-shadow' }}
                whileHover={{ scale: 1.04 }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(227, 210, 113, 0.35), 0 0 32px #e3d27155';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div
                  className="absolute -right-4 -top-4 flex items-center justify-center z-10"
                  style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: '#3B82F6',
                    borderRadius: '50%',
                  }}
                >
                  <span className="text-white text-xl font-bold select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-black mt-4">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#0c0d0c] text-white py-20 px-6">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={benefitsSection}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-12">Benefits</motion.h2>
          <motion.div
            variants={benefitsStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((item, index) => (
              <motion.div
                variants={benefitCardAnim}
                key={index}
                whileHover={{ scale: 1.045 }}
                className="uiverse-benefit-card benefit-glow relative w-60 h-[240px] mx-auto rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 gap-3 cursor-pointer transition-all duration-500 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #F8FAFC, #E2E8F0, #CBD5E1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6, #1E40AF, #1E3A8A)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #F8FAFC, #E2E8F0, #CBD5E1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {/* Animated waves */}
                <div
                  className="wave"
                  style={{
                    position: 'absolute', width: '540px', height: '700px', opacity: 0.6, left: 0, top: 0,
                    marginLeft: '-50%', marginTop: '-70%', background: 'linear-gradient(744deg, #6B7280, #9CA3AF 50%, #CBD5E1)', borderRadius: '40%', animation: 'wave 55s infinite linear', zIndex: 1
                  }}
                />
                <div
                  className="wave"
                  style={{
                    position: 'absolute', width: '540px', height: '700px', opacity: 0.6, left: 0, top: 210,
                    marginLeft: '-50%', marginTop: '-70%', background: 'linear-gradient(744deg, #6B7280, #9CA3AF 50%, #CBD5E1)', borderRadius: '40%', animation: 'wave 50s infinite linear', zIndex: 1
                  }}
                />
                <div
                  className="wave"
                  style={{
                    position: 'absolute', width: '540px', height: '700px', opacity: 0.6, left: 0, top: 210,
                    marginLeft: '-50%', marginTop: '-70%', background: 'linear-gradient(744deg, #6B7280, #9CA3AF 50%, #CBD5E1)', borderRadius: '40%', animation: 'wave 45s infinite linear', zIndex: 1
                  }}
                />
                {/* Content */}
                <div className="infotop text-center text-[20px] font-semibold z-10 capitalize" style={{color: '#22223b'}}>
                  {item.title}
                </div>
                <div className="subinfo text-center text-[15px] font-normal z-10" style={{color: '#374151'}}>
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-12">How It Works</motion.h2>
          <div className="howit-cards flex flex-row gap-12 justify-center flex-wrap">
            {howItWorks.map((s, i) => (
              <div
                key={i}
                className={`howit-card flex flex-col items-center justify-center text-center h-[280px] w-[280px] rounded-[16px] text-white cursor-pointer transition-all duration-400 p-6 bg-gradient-to-r from-[#374151] to-[#6B7280] ${
                  howItHovered === null ? '' : howItHovered === i ? 'scale-105 z-10 shadow-2xl' : 'scale-95 blur-[2px] opacity-70'
                }`}
                onMouseEnter={() => setHowItHovered(i)}
                onMouseLeave={() => setHowItHovered(null)}
              >
                <p className="font-bold text-lg mb-2">{s.step}</p>
                <p className="font-semibold text-sm mb-3">{s.title}</p>
                <p className="text-xs leading-relaxed opacity-90">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Study Section */}
      <section className="bg-[#0c0d0c] text-white py-20 px-6">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={benefitsSection}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent mb-6">
            <TypingText text="Case Study: EcomBoost" speed={50} />
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#808080] mb-6">
            <TypingText text="Client: EcomBoost — eCommerce Startup" speed={20} />
          </motion.p>
          <motion.p variants={fadeUp} className="mb-4">
            <TypingText text="Challenge: Manual product content creation was slow and inconsistent." speed={30} />
          </motion.p>
          <motion.p variants={fadeUp} className="mb-4">
            <TypingText text="Solution: AI-powered content generator for automated product descriptions and blogs." speed={30} />
          </motion.p>
          <motion.ul
            variants={benefitsStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-left max-w-xl mx-auto text-blue-400 space-y-2"
          >
            <motion.li variants={benefitCardAnim} className="case-study-glow">🚀 <TypingText text="45% increase in organic traffic" speed={20} /></motion.li>
            <motion.li variants={benefitCardAnim} className="case-study-glow">⏱ <TypingText text="70% reduction in content production time" speed={20} /></motion.li>
            <motion.li variants={benefitCardAnim} className="case-study-glow">📈 <TypingText text="30% boost in product page engagement" speed={20} /></motion.li>
            <motion.li variants={benefitCardAnim} className="case-study-glow">💡 <TypingText text="Consistent brand voice across all content" speed={20} /></motion.li>
          </motion.ul>
          <motion.blockquote
            variants={benefitCardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 italic text-blue-400"
          >
            <TypingText text={'"Our content generator transformed our workflow. We now launch new products 2x faster and our SEO rankings have never been better."'} speed={20} />
          </motion.blockquote>
        </motion.section>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-12">Affordable Pricing</motion.h2>
          <div className="container flex flex-wrap justify-center gap-8">
            {plans.map((plan, i) => (
              <motion.div
                variants={fadeUp}
                key={i}
                whileHover={{ scale: 1.045 }}
                className={`card_box relative flex flex-col items-center justify-center w-[270px] h-[340px] rounded-2xl cursor-pointer transition-all duration-300 mx-6 my-4 ${
                  plan.name === "Professional"
                    ? "bg-gradient-to-r from-[#374151] to-[#6B7280] ring-4 ring-blue-300 ring-opacity-50 text-white"
                    : "bg-black"
                }`}
                style={{
                  boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(227, 210, 113, 0.35), 0 0 32px #e3d27155';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.55)';
                }}
              >
                <h3 className="text-2xl font-bold mb-2 mt-10">{plan.name}</h3>
                <p className={`font-semibold mb-4 text-lg ${plan.name === "Professional" ? "text-white" : "text-blue-400"}`}>{plan.price}</p>
                <p className={`mb-4 ${plan.name === "Professional" ? "text-white" : "text-gray-200"}`}>{plan.desc}</p>
                <ul className={`space-y-3 text-base mb-6 ${plan.name === "Professional" ? "text-white" : "text-gray-300"}`}>
                  {plan.features.map((f, index) => <li key={index}>✔ {f}</li>)}
                </ul>
                <button className={`mt-auto px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.name === "Professional"
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-[#374151] to-[#6B7280] text-white hover:from-[#4B5563] hover:to-[#9CA3AF]"
                }`}>
                  {plan.name === "Enterprise" ? "Contact Us" : "Start Plan"}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContentGenerator;

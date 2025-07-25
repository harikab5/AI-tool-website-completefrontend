import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import heroVideo from "../assets/Automation & Workflow Tools.mp4";


// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// Hero Section
const Service6Hero = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeUp}
    className="relative text-white py-32 min-h-screen text-center shadow-2xl overflow-hidden"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={heroVideo}
    />
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent">
        Automation & Workflow Tools
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-200 mb-8">
        Streamline operations with intelligent automation that eliminates repetitive tasks, reduces errors, and boosts productivity across your organization.
      </motion.p>
      <motion.button
        variants={fadeUp}
        className="bg-gradient-to-r from-[#374151] to-[#6B7280] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:from-[#4B5563] hover:to-[#9CA3AF] transition-all duration-300"
        onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}
      >
        Get Started
      </motion.button>
    </div>
  </motion.section>
);

// Service6Features Component
const features = [
  { title: "Process Automation", desc: "Automate repetitive tasks and workflows across departments." },
  { title: "Smart Triggers", desc: "Intelligent event-based automation that responds to data changes." },
  { title: "Workflow Design", desc: "Visual workflow builder for creating complex automation sequences." },
  { title: "Integration Hub", desc: "Connect and automate across multiple systems and applications." },
  { title: "Monitoring & Analytics", desc: "Track automation performance and identify optimization opportunities." },
  { title: "Error Handling", desc: "Robust error handling and recovery mechanisms for reliable automation." }
];
const Service6Features = () => (
  <section id="features-section" className="text-white py-20 px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
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
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 32px rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Blue circular badge in top-right corner */}
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
            {/* Removed image */}
            <h3 className="font-bold text-xl text-black mt-4">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-6">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service6Benefits Component
const benefits = [
  { title: "Time Savings", desc: "Free up valuable time by automating routine tasks and processes." },
  { title: "Error Reduction", desc: "Minimize human errors with consistent, rule-based automation." },
  { title: "Cost Efficiency", desc: "Reduce operational costs through automated workflows." },
  { title: "Scalability", desc: "Handle increased workloads without proportional resource increases." },
  { title: "Compliance", desc: "Ensure consistent adherence to business rules and regulations." },
  { title: "Employee Satisfaction", desc: "Allow teams to focus on high-value, strategic work." }
];
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
const Service6Benefits = () => (
  <section className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
      className="max-w-6xl mx-auto text-center"
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-12">Benefits</motion.h2>
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {benefits.map((item, index) => (
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }}
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
);

// Service6HowItWorks Component
const steps = [
  { step: "Step 1", title: "Identify Opportunities", desc: "Find error-prone tasks. Gather input from teams. Prioritize what to automate first." },
  { step: "Step 2", title: "Design Workflows", desc: "Map out triggers, actions, and decisions. Use visual tools for clarity. Plan for future changes." },
  { step: "Step 3", title: "Deploy & Test", desc: "Set up automation tools. Test for accuracy and reliability. Get feedback and refine." },
  { step: "Step 4", title: "Monitor & Optimize", desc: "Track results and fix issues. Improve workflows over time. Maximize your automation ROI." }
];
// How It Works Section
const Service6HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-3 sm:px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#fff] mb-12">How It Works</motion.h2>
        <div className="howit-cards flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`howit-card flex flex-col items-center justify-center text-center w-36 h-36 sm:w-44 sm:h-44 md:w-[220px] md:h-[220px] rounded-full text-white cursor-pointer transition-all duration-400 p-4 sm:p-6 bg-gradient-to-r from-[#374151] to-[#6B7280] ${
                hoveredCard === null ? '' : hoveredCard === i ? 'scale-105 z-10 shadow-2xl' : 'scale-95 blur-[2px] opacity-70'
              }`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{s.step}</p>
              <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-3">{s.title}</p>
              <p className="text-[10px] sm:text-xs leading-relaxed opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// TypingText component
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

// Case Study Section
const Service6CaseStudy = () => {
  const location = useLocation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
      className="bg-[#0c0d0c] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent mb-6">
          <TypingText key={location.key + '-title'} text="Case Study: AutoCorp" speed={50} />
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#808080] mb-6">
          <TypingText key={location.key + '-client'} text="Client: AutoCorp — Automotive Manufacturing" speed={20} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-challenge'} text="Challenge: Manual processes causing delays and errors." speed={30} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-solution'} text="Solution: Automated workflow tools for streamlined operations." speed={30} />
        </motion.p>
        <motion.ul
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left max-w-xl mx-auto text-blue-400 space-y-2"
        >
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">⚡ <TypingText key={location.key + '-stat1'} text="70% reduction in manual processing time" speed={20} /></motion.li>
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">💰 <TypingText key={location.key + '-stat2'} text="50% decrease in operational costs" speed={20} /></motion.li>
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">📊 <TypingText key={location.key + '-stat3'} text="90% improvement in process accuracy" speed={20} /></motion.li>
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">👥 <TypingText key={location.key + '-stat4'} text="40% increase in employee productivity" speed={20} /></motion.li>
        </motion.ul>
        <motion.blockquote
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 italic text-blue-400"
        >
          <TypingText key={location.key + '-quote'} text={'"Automation transformed our operations. We now handle 3x the workload with the same team size."'} speed={20} />
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

// Pricing Section
const plans = [
  { name: "Starter", price: "₹799/mo", features: ["Basic Automation", "Email Support", "5 Workflows"] },
  { name: "Pro", price: "₹2,499/mo", features: ["Advanced Automation", "Priority Support", "Unlimited Workflows", "Custom Integrations"] },
  { name: "Enterprise", price: "₹6,999/mo", features: ["Custom Automation", "Dedicated Manager", "24/7 Support", "SLA Guarantees"] }
];
const Service6Pricing = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-12">Pricing</motion.h2>
      <div className="container flex flex-wrap justify-center gap-8">
        {plans.map((plan, i) => (
          <motion.div
            variants={fadeUp}
            key={i}
            className={`card_box relative flex flex-col items-center justify-center w-[270px] h-[340px] rounded-2xl cursor-pointer transition-all duration-300 mx-6 my-4 ${
              plan.name === "Pro"
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
            <p className={`font-semibold mb-4 text-lg ${plan.name === "Pro" ? "text-white" : "text-blue-400"}`}>{plan.price}</p>
            <ul className={`space-y-3 text-base mb-6 ${plan.name === "Pro" ? "text-white" : "text-gray-300"}`}>
              {plan.features.map((f, index) => <li key={index}>✔ {f}</li>)}
            </ul>
            <button className={`mt-auto px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              plan.name === "Pro"
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
);

// Main App Component
const AutomationWorkflowTools = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service6Hero />
      <Service6Features />
      <Service6Benefits />
      <Service6HowItWorks />
      <Service6CaseStudy />
      <Service6Pricing />
    </main>
  );
};

export default AutomationWorkflowTools;
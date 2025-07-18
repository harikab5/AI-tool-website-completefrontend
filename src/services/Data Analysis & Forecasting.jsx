import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import dataHeroVideo from "../assets/Data Analysis & Forecasting.mp4";

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

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// Hero
const Service3Hero = () => (
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
      src={dataHeroVideo}
    />
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent">
        Data Analysis & Forecasting
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-200 mb-8">
        Transform raw data into actionable insights and accurate predictions using advanced AI algorithms and machine learning models.
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

// Features (with images)
const features = [
  { title: "Predictive Analytics", desc: "Forecast future trends and outcomes with high accuracy using ML models." },
  { title: "Real-Time Dashboards", desc: "Visualize key metrics and KPIs with interactive, live-updating dashboards." },
  { title: "Data Mining", desc: "Discover hidden patterns and correlations in large datasets." },
  { title: "Statistical Analysis", desc: "Advanced statistical modeling for comprehensive data insights." },
  { title: "Business Intelligence", desc: "Convert data into strategic business insights and recommendations." },
  { title: "Automated Reporting", desc: "Generate comprehensive reports automatically with scheduled delivery." }
];
// Features Section
const Service3Features = () => {
  return (
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
};

// Benefits (animated gold cards)
const benefits = [
  { title: "Informed Decisions", desc: "Make data-driven decisions with confidence using accurate insights." },
  { title: "Risk Mitigation", desc: "Identify potential risks and opportunities before they impact your business." },
  { title: "Operational Efficiency", desc: "Optimize processes and resource allocation based on data insights." },
  { title: "Competitive Advantage", desc: "Stay ahead of competitors with predictive market analysis." },
  { title: "Cost Optimization", desc: "Reduce costs by identifying inefficiencies and optimization opportunities." },
  { title: "Strategic Planning", desc: "Develop long-term strategies based on comprehensive data analysis." }
];
// Benefits Section
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
const Service3Benefits = () => (
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

// How It Works (modern gradient cards)
const steps = [
  { step: "Step 1", title: "Data Collection", desc: "Gather and integrate data from multiple sources and systems." },
  { step: "Step 2", title: "Data Processing", desc: "Clean, transform, and prepare data for analysis." },
  { step: "Step 3", title: "Model Development", desc: "Build and train predictive models using advanced algorithms." },
  { step: "Step 4", title: "Insight Delivery", desc: "Generate reports and visualizations for actionable insights." }
];
// How It Works Section
const Service3HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#fff] mb-12">How It Works</motion.h2>
        <div className="howit-cards flex flex-row gap-12 justify-center">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`howit-card flex flex-col items-center justify-center text-center h-[220px] w-[220px] rounded-[16px] text-white cursor-pointer transition-all duration-400 p-6 bg-gradient-to-r from-[#374151] to-[#6B7280] ${
                hoveredCard === null ? '' : hoveredCard === i ? 'scale-105 z-10 shadow-2xl' : 'scale-95 blur-[2px] opacity-70'
              }`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p className="font-bold text-lg mb-2">{s.step}</p>
              <p className="font-semibold text-sm mb-3">{s.title}</p>
              <p className="text-xs leading-relaxed opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Case Study Section
const Service3CaseStudy = () => {
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
          <TypingText key={location.key + '-title'} text="Case Study: RetailMax" speed={50} />
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#808080] mb-6">
          <TypingText key={location.key + '-client'} text="Client: RetailMax — Large Fashion Retail Chain" speed={20} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-challenge'} text="Challenge: No unified customer insight; ineffective promotions and inventory management." speed={30} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-solution'} text="Solution: AI-powered data analysis and forecasting for customer behavior and demand prediction." speed={30} />
        </motion.p>
        <motion.ul
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left max-w-xl mx-auto text-blue-400 space-y-2"
        >
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">📈 <TypingText key={location.key + '-stat1'} text="40% increase in promo engagement" speed={20} /></motion.li>
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">🧠 <TypingText key={location.key + '-stat2'} text="95% accuracy in demand forecasting" speed={20} /></motion.li>
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">💡 <TypingText key={location.key + '-stat3'} text="60% reduction in inventory costs" speed={20} /></motion.li>
          <motion.li variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }} className="case-study-glow">📊 <TypingText key={location.key + '-stat4'} text="25% increase in customer lifetime value" speed={20} /></motion.li>
        </motion.ul>
        <motion.blockquote
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 italic text-blue-400"
        >
          <TypingText key={location.key + '-quote'} text={'"We now make data-driven moves daily. It\'s a competitive advantage that transformed our business."'} speed={20} />
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

// Pricing Section
const plans = [
  { name: "Starter", price: "₹799/mo", features: ["Basic Analytics", "Email Support", "5 Data Sources"] },
  { name: "Pro", price: "₹2,499/mo", features: ["Advanced Forecasting", "Priority Support", "Unlimited Data Sources", "Custom Dashboards"] },
  { name: "Enterprise", price: "₹6,999/mo", features: ["Custom AI Models", "Dedicated Analyst", "Real-Time Analytics", "24/7 Support"] }
];
const Service3Pricing = () => (
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
const DataAnalysisInsights = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service3Hero />
      <Service3Features />
      <Service3Benefits />
      <Service3HowItWorks />
      <Service3CaseStudy />
      <Service3Pricing />
    </main>
  );
};

export default DataAnalysisInsights;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import heroVideo from "../assets/Computer Vision Solutions.mp4";


// Global styles for benefits animation and glow
const styleSheet = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .benefit-glow {
    box-shadow: 0 4px 24px 0 #3B82F655, 0 1.5px 8px 0 #0002;
    transition: box-shadow 0.4s, transform 0.4s;
  }
  .case-study-glow {
    transition: filter 0.5s;
    filter: drop-shadow(0 0 8px #3B82F688);
  }
  .premium-ribbon {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 35px;
    background: linear-gradient(90deg, #3B82F6, #1E40AF);
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 35px;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transform: rotate(-45deg) translate(-25px, 25px);
    z-index: 20;
    pointer-events: none;
  }
  .premium-ribbon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #3B82F6, #1E40AF);
    border-radius: 0 0 4px 4px;
    transform: rotate(90deg) translateY(-50%);
    z-index: -1;
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('benefit-glow-style')) {
  const style = document.createElement('style');
  style.id = 'benefit-glow-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const pricingStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const caseStudySection = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const caseStudyStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 }
  }
};
const statFadeGlow = {
  hidden: { opacity: 0, y: 20, filter: 'brightness(1)' },
  visible: { opacity: 1, y: 0, filter: 'brightness(1.3)', transition: { duration: 0.7, ease: 'easeOut' } }
};
const quoteAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};
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

// TypingText
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

// Hero Section
const Service5Hero = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeUp}
    className="relative text-white py-32 text-center shadow-2xl overflow-hidden"
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
    <div className="relative z-10">
      <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent">
        Computer Vision Solutions
      </motion.h1>
      <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl mx-auto">
        Advanced image and video analysis that sees, understands, and interprets visual data to automate processes and extract valuable insights.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex justify-center">
        <button 
          onClick={() => {
            const featuresSection = document.getElementById('features-section');
            const offset = 0;
            const elementPosition = featuresSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }}
          className="bg-gradient-to-r from-[#374151] to-[#6B7280] text-white px-6 py-3 rounded-2xl font-semibold hover:from-[#4B5563] hover:to-[#9CA3AF] transition-all duration-300 cursor-pointer"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  </motion.section>
);

// Features Section (no images, blue badge)
const features = [
  { title: "Image Recognition", desc: "Identify objects, people, and scenes in images with high accuracy." },
  { title: "Video Analysis", desc: "Process and analyze video content for real-time insights and automation." },
  { title: "Object Detection", desc: "Detect and track objects in images and videos for various applications." },
  { title: "Facial Recognition", desc: "Identify and verify individuals for security and personalization." },
  { title: "Quality Inspection", desc: "Automate quality control processes in manufacturing and production." },
  { title: "Document Processing", desc: "Extract text and data from images and scanned documents." }
];
const Service5Features = () => {
  const location = useLocation();
  // 3D tilt effect handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    card.style.boxShadow = '0 8px 32px 0 rgba(244,182,48,0.35), 0 0 32px 0 #e3d27155';
  };
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.boxShadow = '';
  };
  return (
    <section id="features-section" className="text-white py-20 px-6">
      <motion.div
        key={location.key + '-features'}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#fff] mb-12">Key Features</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group w-64 bg-white p-9 space-y-3 relative overflow-hidden mx-auto rounded-2xl flex flex-col items-start transition-all duration-300 cursor-pointer shadow-lg"
              style={{ willChange: 'transform, box-shadow' }}
              whileHover={{ scale: 1.04 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.3), 0 0 32px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                handleMouseLeave(e);
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
              <h3 className="font-bold text-xl text-black mt-4">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Benefits Section (animated glowing borders, wave bg)
const benefits = [
  { title: "Automated Processes", desc: "Reduce manual work with intelligent visual automation." },
  { title: "Enhanced Security", desc: "Improve safety and security through visual monitoring and detection." },
  { title: "Quality Assurance", desc: "Ensure consistent quality with automated visual inspection." },
  { title: "Data Extraction", desc: "Extract valuable information from images and documents efficiently." },
  { title: "Cost Reduction", desc: "Lower operational costs through automated visual analysis." },
  { title: "Real-Time Insights", desc: "Get instant visual insights for faster decision-making." }
];
const Service5Benefits = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={benefitsSection}
    className="bg-[#0c0d0c] text-white py-20 px-6"
  >
    <motion.div
      variants={benefitsStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto text-center"
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#fff] mb-12">Benefits</motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <motion.div
            variants={benefitCardAnim}
            key={index}
            whileHover={{ scale: 1.045 }}
            className="uiverse-benefit-card benefit-glow relative w-60 h-[240px] mx-auto rounded-2xl overflow-hidden flex flex-col justify-end p-4 gap-3 cursor-pointer transition-all duration-500 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F8FAFC, #E2E8F0, #CBD5E1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6, #1E40AF, #1E3A8A)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
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
            <div className="infotop text-center text-[20px] font-semibold z-10 text-gray-800 capitalize transition-colors duration-500 group-hover:text-white">
              {item.title}
            </div>
            <div className="w-full flex justify-center z-10">
              <div className="h-4" />
            </div>
            <div className="name text-[14px] font-light z-10 px-4 mt-2 text-gray-700 transition-colors duration-500 group-hover:text-white">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);

// How It Works Section (interactive hover)
const steps = [
  { step: "Step 1", title: "Image Capture", desc: "Collect visual data from cameras, sensors, or uploaded files." },
  { step: "Step 2", title: "Preprocessing", desc: "Clean and prepare images for optimal analysis." },
  { step: "Step 3", title: "AI Analysis", desc: "Apply computer vision algorithms to extract insights." },
  { step: "Step 4", title: "Action & Reporting", desc: "Generate reports and trigger automated actions." }
];
const Service5HowItWorks = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-3 sm:px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#fff] mb-12">How It Works</motion.h2>
        <div className="howit-cards flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`howit-card flex flex-col items-center justify-center text-center w-36 h-36 sm:w-44 sm:h-44 md:w-[220px] md:h-[220px] rounded-full text-white cursor-pointer transition-all duration-400 p-4 sm:p-6 ${hovered === null ? '' : hovered === i ? 'scale-105 z-10 shadow-2xl' : 'scale-95 blur-[2px] opacity-70'}`}
              style={{
                background: 'linear-gradient(to right, #374151, #6B7280)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
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

// Case Study Section (animated typing, glowing stats)
const Service5CaseStudy = () => {
  const location = useLocation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={caseStudySection}
      className="bg-[#0c0d0c] text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-blue-400 bg-clip-text text-transparent mb-6">
          <TypingText key={location.key + '-title'} text="Case Study: VisionTech" speed={50} />
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#808080] mb-6">
          <TypingText key={location.key + '-client'} text="Client: VisionTech — Manufacturing Company" speed={20} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-challenge'} text="Challenge: Manual quality control was slow and error-prone." speed={30} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-solution'} text="Solution: Automated computer vision for real-time defect detection." speed={30} />
        </motion.p>
        <motion.ul
          variants={caseStudyStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left max-w-xl mx-auto text-blue-400 space-y-2"
        >
          <motion.li variants={statFadeGlow} className="case-study-glow">👁 <TypingText key={location.key + '-stat1'} text="95% accuracy in defect detection" speed={20} /></motion.li>
          <motion.li variants={statFadeGlow} className="case-study-glow">⚡ <TypingText key={location.key + '-stat2'} text="90% faster inspection process" speed={20} /></motion.li>
          <motion.li variants={statFadeGlow} className="case-study-glow">💰 <TypingText key={location.key + '-stat3'} text="60% reduction in quality control costs" speed={20} /></motion.li>
          <motion.li variants={statFadeGlow} className="case-study-glow">📊 <TypingText key={location.key + '-stat4'} text="99.9% customer satisfaction rate" speed={20} /></motion.li>
        </motion.ul>
        <motion.blockquote
          variants={quoteAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 italic text-blue-400"
        >
          <TypingText key={location.key + '-quote'} text="Computer vision transformed our quality control. We catch defects instantly that humans might miss." speed={20} />
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

// Pricing Section (INR, Pro card highlight)
const plans = [
  { name: "Starter", price: "₹4,999/month", features: ["Basic Image Analysis", "Email Support", "1,000 Images/Month"] },
  { name: "Pro", price: "₹16,999/month", features: ["Advanced Video Analysis", "Priority Support", "Unlimited Processing", "Custom Models"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom Vision Models", "Dedicated Support", "Real-Time Processing", "24/7 SLA"] }
];
const Service5Pricing = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={pricingStagger}
      className="max-w-6xl mx-auto text-center"
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#fff] mb-12">Pricing</motion.h2>
      <div className="container flex flex-wrap justify-center gap-8">
        {plans.map((plan, i) => (
          <motion.div
            variants={fadeUp}
            key={i}
            whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(244,182,48,0.25), 0 0 32px 0 #e3d27155' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`card_box relative flex flex-col items-center justify-center w-[270px] h-[340px] rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.55)] cursor-pointer transition-all duration-300 mx-6 my-4 ${
              plan.name === "Pro" 
                ? "bg-gradient-to-r from-[#374151] to-[#6B7280] ring-4 ring-blue-300 ring-opacity-50" 
                : "bg-gradient-to-b from-[#3a3838a0] to-[#1f1f1f]"
            }`}
            style={{ 
              boxShadow: '0 25px 50px rgba(0,0,0,0.55)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.3), 0 0 32px rgba(59, 130, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
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
const ComputerVisionApp = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service5Hero />
      <Service5Features />
      <Service5Benefits />
      <Service5HowItWorks />
      <Service5CaseStudy />
      <Service5Pricing />
    </main>
  );
};

export default ComputerVisionApp;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/AI Chatbots & Assistants.mp4";
import { useLocation } from "react-router-dom";

// Global styles for benefits animation and glow
const styleSheet = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .benefit-glow {
    box-shadow: 0 4px 24px 0 #e3d27155, 0 1.5px 8px 0 #0002;
    transition: box-shadow 0.4s, transform 0.4s;
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('benefit-glow-style')) {
  const style = document.createElement('style');
  style.id = 'benefit-glow-style';
  style.innerHTML = `
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
  document.head.appendChild(style);
}

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

// Staggered container for cards
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Staggered container for pricing cards
const pricingStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Animation for case study section
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

// Animation for benefits section
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

// Service1Hero Component
const Service1Hero = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeUp}
    className="relative text-white py-16 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[848px]"
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
        AI Chatbots & Assistants
      </motion.h1>
      <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl mx-auto">
        Intelligent conversational AI that understands, responds, and assists users 24/7 with natural language processing and contextual awareness.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex justify-center">
        <button 
          onClick={() => {
            const featuresSection = document.getElementById('features-section');
            const offset = 0; // No offset - features will be exactly at top
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

// Service1Features Component
const features = [
  { title: "Natural Language Understanding", desc: "Advanced NLP to comprehend user intent and context accurately." },
  { title: "Multi-Channel Integration", desc: "Deploy across websites, mobile apps, messaging platforms, and voice assistants." },
  { title: "Contextual Conversations", desc: "Maintain conversation context and provide relevant, personalized responses." },
  { title: "24/7 Availability", desc: "Round-the-clock customer support and assistance without human intervention." },
  { title: "Seamless Handoff", desc: "Smooth transition to human agents when complex issues arise." },
  { title: "Analytics & Insights", desc: "Track performance, user satisfaction, and conversation analytics." }
];
const Service1Features = () => {
  const location = useLocation();

  // 3D tilt effect handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
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
          {features.map((feature, index) => {
            return (
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
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

// Service1Benefits Component
const benefits = [
  { title: "Improved Customer Service", desc: "Provide instant responses and reduce wait times for customer inquiries." },
  { title: "Cost Reduction", desc: "Automate routine customer interactions and reduce support team workload." },
  { title: "Scalability", desc: "Handle unlimited conversations simultaneously without additional resources." },
  { title: "Consistent Experience", desc: "Deliver uniform service quality across all customer interactions." },
  { title: "Data Collection", desc: "Gather valuable insights from customer conversations and preferences." },
  { title: "Increased Engagement", desc: "Interactive conversations that keep users engaged and satisfied." }
];
const Service1Benefits = () => (
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

// Service1HowItWorks Component
const steps = [
  {
    step: "Step 1",
    title: "Define Use Cases",
    desc: "List common customer questions. Map out key tasks to automate. Focus on high-impact conversations."
  },
  {
    step: "Step 2",
    title: "Train AI Model",
    desc: "Add your business FAQs and data. Teach the AI your terminology. Set up sample conversations."
  },
  {
    step: "Step 3",
    title: "Deploy & Integrate",
    desc: "Connect to your website or app. Test the chatbot. Go live for real users."
  },
  {
    step: "Step 4",
    title: "Monitor & Optimize",
    desc: "Track results and feedback. Improve answers over time. Boost customer satisfaction."
  }
];
const Service1HowItWorks = () => {
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

const Service1CaseStudy = () => {
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
          <TypingText key={location.key + '-title'} text="Case Study: TechSupport Pro" speed={50} />
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[#808080] mb-6">
          <TypingText key={location.key + '-client'} text="Client: TechSupport Pro — Software Support Company" speed={20} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-challenge'} text="Challenge: Overwhelming support ticket volume and long response times." speed={30} />
        </motion.p>
        <motion.p variants={fadeUp} className="mb-4">
          <TypingText key={location.key + '-solution'} text="Solution: AI-powered chatbot for instant technical support and issue resolution." speed={30} />
        </motion.p>
        <motion.ul
          variants={caseStudyStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left max-w-xl mx-auto text-blue-400 space-y-2"
        >
          <motion.li variants={statFadeGlow} className="case-study-glow">📈 <TypingText key={location.key + '-stat1'} text="85% reduction in response time" speed={20} /></motion.li>
          <motion.li variants={statFadeGlow} className="case-study-glow">⏱ <TypingText key={location.key + '-stat2'} text="70% of issues resolved without human intervention" speed={20} /></motion.li>
          <motion.li variants={statFadeGlow} className="case-study-glow">💰 <TypingText key={location.key + '-stat3'} text="60% reduction in support costs" speed={20} /></motion.li>
          <motion.li variants={statFadeGlow} className="case-study-glow">📊 <TypingText key={location.key + '-stat4'} text="95% customer satisfaction rate" speed={20} /></motion.li>
        </motion.ul>
        <motion.blockquote
          variants={quoteAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 italic text-blue-400"
        >
          <TypingText key={location.key + '-quote'} text="Our AI chatbot handles 80% of support queries instantly, allowing our team to focus on complex technical issues." speed={20} />
        </motion.blockquote>
      </div>
    </motion.section>
  );
};

// Add glow effect for stats

// Add glow effect for benefit cards

// Service1Pricing Component
const plans = [
  { name: "Starter", price: "$29/month", features: ["Basic Chatbot", "Email Support", "5,000 Conversations/Month"] },
  { name: "Pro", price: "$99/month", features: ["Advanced NLP", "Priority Support", "Unlimited Conversations", "Analytics Dashboard"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom AI Training", "Dedicated Manager", "Multi-Platform Integration", "24/7 Support"] }
];
const Service1Pricing = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    {/* Card ribbon styles for pricing */}
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
                          <button className={`mt-auto px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${plan.name === "Pro" ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-gradient-to-r from-[#374151] to-[#6B7280] text-white hover:from-[#4B5563] hover:to-[#9CA3AF]"}`}>
                {plan.name === "Enterprise" ? "Contact Us" : "Start Plan"}
              </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Main App Component
const AutomationEfficiency = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service1Hero />
      <Service1Features />
      <Service1Benefits />
      <Service1HowItWorks />
      <Service1CaseStudy />
      <Service1Pricing />
    </main>
  );
};
export default AutomationEfficiency;
 
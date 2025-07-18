import React, { useState } from 'react';
import Button from './components/Button';
import { FaCogs, FaChartLine, FaMobileAlt, FaRobot, FaShieldAlt, FaBrain, FaArrowRight, FaGlobe, FaGem, FaRocket } from 'react-icons/fa';
import pythonLogo from './assets/tech/python.png';
import djangoLogo from './assets/tech/django.png';
import reactLogo from './assets/tech/react.png';
import vueLogo from './assets/tech/vue.png';
import flutterLogo from './assets/tech/flutter.png';
import awsLogo from './assets/tech/aws.png';
import hero from './assets/hero.png';
import heroVideo from './assets/hero.mp4';
import agentImg from './assets/agent.png';
import card2Img from './assets/card2.jpeg';
import card3Img from './assets/card3.jpeg';
import card4Img from './assets/card4.jpeg';
import card5Img from './assets/card5.jpeg';
import card6Img from './assets/card6.jpeg';
import card7Img from './assets/card7.jpeg';
import card8Img from './assets/card8.jpeg';
import card9Img from './assets/card9.jpeg';

const serviceCards = [
  {
    icon: (
      <span>
        <img src={agentImg} alt="Agentic AI" className="h-20 w-100 mx-auto mb-2" />
        <FaCogs />
      </span>
    ),
    title: 'Agentic AI Integration',
    desc: 'Full automation system that thinks & acts.',
    back: 'Integrate advanced agentic AI for seamless business automation and decision making.',
    image: agentImg,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    title: 'App & Software Development',
    desc: 'Custom web and mobile solutions.',
    back: 'We build scalable, secure apps tailored for your business needs using modern tech.',
    image: card2Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    title: 'Analytics & BI',
    desc: 'Real‑time metrics and dashboards.',
    back: 'Unlock actionable insights with real-time dashboards and predictive analytics.',
    image: card3Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: <FaRobot />,
    title: 'Chatbots & Automation',
    desc: 'Automate repetitive tasks with AI.',
    back: 'Reduce operational load with smart chatbots and automation tools.',
    image: card4Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: <FaShieldAlt />,
    title: 'AI Security Solutions',
    desc: 'Intelligent threat detection systems.',
    back: 'We design AI-powered solutions for cybersecurity and risk mitigation.',
    image: card5Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning Models',
    desc: 'Custom ML for your business.',
    back: 'Train models tailored to your goals—classification, regression, NLP, and more.',
    image: card6Img,
    gradient: 'from-gray-600 to-gray-800'
  },
];

const insightCards = [
  {
    title: 'Market Trends',
    desc: 'Stay ahead with data-driven insights into evolving markets.',
    back: 'Our AI tools analyze market signals to help you anticipate changes and opportunities.',
  },
  {
    title: 'Growth Opportunities',
    desc: 'Unlock hidden growth potential using predictive AI models.',
    back: 'Discover new markets and optimize your strategy for maximum business growth.',
  },
  {
    title: 'Competitive Analysis',
    desc: 'Benchmark your business against industry leaders.',
    back: 'Leverage AI to monitor competitors and identify your unique advantages.',
  },
  {
    title: 'Operational Efficiency',
    desc: 'Streamline processes and reduce costs with automation.',
    back: 'AI-driven insights help you optimize workflows and resource allocation.',
  },
];

const insightGradients = [
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
  // Add more gradients if you want to use them for new cards
  "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
];

const insightIcons = [
  <FaGlobe />, 
  <FaRocket />,
  <FaChartLine />,
  <FaCogs />
];
const insightImages = [card7Img, card9Img, card2Img, card3Img];

export default function HomePage() {
  const [flippedService, setFlippedService] = useState(null);
  const [flippedInsight, setFlippedInsight] = useState(null);

  return (
    <div className="w-full space-y-16 bg-black text-white">
      
      {/* 🏠 Hero Section */}
      <section className="relative text-white py-16 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[848px]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight text-center">
            Empowering Businesses with <br className="hidden md:block" /> End-to-End AI Intelligence
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-semibold tracking-wide text-center">
            Unlock the Power of Automation, Analytics, and Personalization
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium text-center">
            Build, deploy, and scale AI-driven solutions tailored to your business needs.
          </p>
          <p className="text-xl text-gray-300 mb-10 text-center">
            Transform your operations with automation, predictive analytics, and scalable systems — all powered by next-gen artificial intelligence.
          </p>
          <ul className="flex flex-col md:flex-row gap-6 text-lg text-gray-200 mb-8 justify-center">
            <li className="flex items-center gap-2"><FaCogs className="text-blue-400" /> Intelligent Automation</li>
            <li className="flex items-center gap-2"><FaChartLine className="text-blue-400" /> Real-Time Analytics</li>
            <li className="flex items-center gap-2"><FaBrain className="text-blue-400" /> Custom AI Solutions</li>
            <li className="flex items-center gap-2"><FaShieldAlt className="text-blue-400" /> Enterprise-Grade Security</li>
          </ul>
          <Button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-xl font-bold hover:from-gray-600 hover:to-gray-800 px-8 py-4 rounded-full shadow-lg">Explore Tools</Button>
          <p className="mt-12 text-md text-gray-200 italic text-center">
            Trusted by startups, enterprises, and innovators to shape the future of intelligent solutions.
          </p>
        </div>
      </section>

      {/* 💡 Our Core Services */}
      <section className="bg-section-grey py-16 w-full px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-semibold mb-12 text-white text-center">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 justify-items-center">
            {serviceCards.map((card, i) => (
              <div
                key={card.title}
                className={`flip-card group ${flippedService === i ? 'flipped' : ''} w-full max-w-[340px] h-[320px] flex flex-col relative overflow-hidden`}
                onMouseEnter={() => setFlippedService(i)}
                onMouseLeave={() => setFlippedService(null)}
              >
                <div className="flip-card-inner h-full">
                  <div className={`flip-card-front bg-gradient-to-b ${card.gradient} rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative`}>
                    {/* Hologram Effect Overlay for Card */}
                    <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{
                           background: "linear-gradient(120deg, rgba(0,255,255,0.12) 0%, rgba(0,0,0,0) 60%, rgba(0,255,255,0.12) 100%)"
                         }} />
                    {/* Image Section */}
                    <div className="flex-1 w-full relative">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Text Area */}
                    <div className="p-6 min-h-[60px] flex flex-col justify-center relative group/text hover:z-20">
                      {/* Hologram Effect Overlay for Text */}
                      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:text:opacity-100 hover:opacity-100 transition-opacity duration-500"
                           style={{
                             background: "linear-gradient(90deg, rgba(0,255,255,0.18) 0%, rgba(0,0,0,0) 60%, rgba(0,255,255,0.18) 100%)"
                           }} />
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:glitter-text transition-all duration-300 text-center">{card.title}</h3>
                    <p className="text-white text-sm leading-relaxed group-hover:glitter-text transition-all duration-300 text-center">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border-2 border-blue-400 text-white p-6 flex flex-col items-center justify-center h-full relative group">
                    {/* Hologram Effect on Back */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold mb-4 text-white text-center">{card.title}</h3>
                    <p className="text-gray-200 leading-relaxed text-center">{card.back}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 🚀 Insights */}
      <section className="bg-section-grey py-16 w-full px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-semibold mb-10 text-white text-center">Insights</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {insightCards.map((card, i) => (
            <div
              key={card.title}
              className={`insight-flip-card group ${flippedInsight === i ? 'flipped' : ''}`}
              style={{ width: '200px', height: '200px' }}
              onMouseEnter={() => setFlippedInsight(i)}
              onMouseLeave={() => setFlippedInsight(null)}
            >
              <div className="insight-flip-inner">
                {/* Front Side */}
                <div
                  className="insight-flip-front"
                  style={{
                    backgroundImage: `url(${insightImages[i]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {/* Add a dark overlay for text visibility */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                  <div className="content flex flex-col items-center justify-center w-full h-full relative z-10">
                    {/* Removed icon */}
                    <div className="title text-center text-white font-bold text-lg mb-2 drop-shadow">{card.title}</div>
                    <div className="text-sm text-center text-gray-200 drop-shadow">{card.desc}</div>
                  </div>
                </div>
                {/* Back Side */}
                <div className="insight-flip-back flex flex-col items-center justify-center p-6">
                  <div className="title text-center">{card.title}</div>
                  <div className="text-sm text-center">{card.back}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 Tech Stack */}
      <section className="bg-black py-24 w-full px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold mb-10 text-white text-center">Tech We Use</h2>
          <div className="relative overflow-hidden">
            <div className="marquee flex gap-16 w-max px-8 animate-scroll">
              {[pythonLogo, djangoLogo, reactLogo, vueLogo, flutterLogo, awsLogo,
                pythonLogo, djangoLogo, reactLogo, vueLogo, flutterLogo, awsLogo].map((logo, index) => (
                <div key={index} className="tech-logo-wrapper">
                  <img
                    src={logo}
                    alt={`Tech ${index}`}
                    className="tech-logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        <p className="text-gray-300 mt-12 text-lg text-center">
             we build intelligent, scalable, and secure digital solutions using modern technologies. Our tech stack includes powerful tools like Python, Django, React, Vue.js, Flutter, AWS, and PostgreSQL. These technologies help us develop responsive web apps, robust mobile applications, seamless cloud integrations, and AI-driven platforms that drive real business value. We choose tools that are trusted by developers and enterprises worldwide to ensure performance, reliability, and future scalability.
          </p>
      </section>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import teamImg from '../assets/SecondHome/clients.jpeg';
import worldMapImg from '../assets/SecondHome/card1.jpeg';
import abouthero from '../assets/abouthero.mp4';
import excellenceBg from '../assets/core-values/excellence-bg.svg';
import integrityBg from '../assets/core-values/integrity-bg.svg';
import innovationBg from '../assets/core-values/innovation-bg.svg';
import sustainabilityBg from '../assets/core-values/sustainability-bg.svg';
import growthBg from '../assets/core-values/growth-bg.svg';
import passionBg from '../assets/core-values/passion-bg.svg';
import globalVideo from '../assets/global.mp4';
import 
const caseStudies = [
  {
    title: 'E-commerce Revolution',
    desc: 'Increased sales by 300% for a leading retail brand through AI-powered personalization',
    details: 'Our AI-driven recommendation engine boosted conversion rates and average order value, resulting in a 300% sales increase for a top retailer.\n\nKey Highlights:\n- Personalized product recommendations for every user.\n- Seamless integration with the client\'s e-commerce platform.\n- Real-time analytics dashboard for marketing teams.'
  },
  {
    title: 'Healthcare Innovation',
    desc: 'Developed diagnostic AI that improved accuracy by 40% for a major hospital network',
    details: 'We built a deep learning model for medical imaging, reducing diagnostic errors and improving patient outcomes across the network.\n\nKey Highlights:\n- Automated detection of anomalies in X-rays and MRIs.\n- HIPAA-compliant data handling.\n- Reduced diagnosis time from hours to minutes.'
  },
  {
    title: 'Financial Services',
    desc: 'Automated fraud detection system saving $2M annually for a global bank',
    details: 'Our real-time fraud detection platform prevented losses and improved compliance, saving millions for the client.\n\nKey Highlights:\n- Machine learning models trained on millions of transactions.\n- Instant alerts for suspicious activity.\n- 24/7 monitoring and reporting.'
  },
  {
    title: 'Automotive Tech',
    desc: 'Built predictive maintenance system reducing downtime by 60% for car manufacturers',
    details: 'IoT sensors and AI analytics enabled proactive maintenance, minimizing costly breakdowns and boosting productivity.\n\nKey Highlights:\n- Real-time monitoring of vehicle health.\n- Predictive alerts for part replacements.\n- Integration with manufacturer ERP systems.'
  },
  {
    title: 'Mobile App Success',
    desc: 'Created AI-powered app with 1M+ downloads and 4.8-star rating',
    details: 'The app leveraged NLP and personalization to drive engagement, retention, and stellar user reviews.\n\nKey Highlights:\n- AI-powered chat assistant for users.\n- Personalized content feeds.\n- Scalable cloud infrastructure.'
  },
  {
    title: 'Manufacturing AI',
    desc: 'Implemented smart factory solutions increasing efficiency by 45%',
    details: 'Computer vision and automation streamlined quality control and logistics, raising efficiency and reducing waste.\n\nKey Highlights:\n- Automated defect detection on assembly lines.\n- Real-time inventory tracking.\n- Energy usage optimization.'
  },
];

function FlipCard({ title, desc, details, flipped, onFlip, onBack }) {
  return (
    <div className={`flip-card group bg-[#181818] p-0 rounded-xl border-2 border-[#60a5fa] shadow-lg transition-all duration-500 flex flex-col items-center text-center cursor-pointer hover:scale-105 ${flipped ? 'flipped' : ''}`}
      onClick={!flipped ? onFlip : undefined}
      style={{ perspective: '1200px', minHeight: 320 }}
    >
      <div className="flip-card-inner w-full h-full" style={{ position: 'relative', width: '100%', height: '100%', transition: 'transform 0.6s', transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'none' }}>
        {/* Front */}
        <div className="flip-card-front w-full h-full p-8 flex flex-col items-center justify-center" style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#60a5fa' }}>{title}</h3>
          <p className="text-gray-300 mb-4">{desc}</p>
          <button className="mt-auto bg-gradient-to-r from-[#60a5fa] to-[#f7e37a] text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">View More</button>
        </div>
        {/* Back */}
        <div className="flip-card-back w-full h-full p-8 flex flex-col items-center justify-center bg-[#232a3a] rounded-xl" style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0, transform: 'rotateY(180deg)' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#f7e37a' }}>{title}</h3>
          <pre className="text-gray-200 mb-6 text-left whitespace-pre-wrap" style={{fontFamily:'inherit'}}>{details}</pre>
          <button className="bg-[#60a5fa] text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-[#f7e37a] transition-all duration-300" onClick={e => { e.stopPropagation(); onBack(); }}>Back</button>
        </div>
      </div>
    </div>
  );
}

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-[#121212] min-h-[848px] flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={abouthero} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 w-full flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight" style={{ color: '#f7e37a' }}>About Us</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium max-w-xl mx-auto">Learn about our journey, values, and the team driving innovation in AI and digital solutions.</p>
        </div>
      </section>

      {/* 1. Company Timeline - Interactive Timeline */}
      <section className="py-20 px-4 bg-[#181818] relative overflow-x-hidden">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Journey Through Time</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">From humble beginnings to global impact, our story is one of innovation, growth, and relentless pursuit of excellence.</p>
        {/* Floating team image */}
         <div className="w-full max-w-6xl mx-auto relative z-20">
          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#60a5fa] via-[#f7e37a] to-[#60a5fa] animate-pulse shadow-[0_0_30px_10px_#60a5fa]" style={{boxShadow:'0 0 30px 5px #60a5fa'}}></div>
            {/* Timeline Items */}
            <div className="space-y-16">
              <div className="flex items-center aos-fade-right" data-aos="fade-right">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#60a5fa' }}>2012 - Foundation</h3>
                  <p className="text-gray-300">Started in a garage with a vision to revolutionize digital solutions</p>
                </div>
                <div className="w-6 h-6 bg-[#f7e37a] rounded-full border-4 border-[#181818] relative z-10 animate-bounce"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center aos-fade-left" data-aos="fade-left">
                <div className="w-1/2 pr-8"></div>
                <div className="w-6 h-6 bg-[#60a5fa] rounded-full border-4 border-[#181818] relative z-10 animate-bounce"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#60a5fa' }}>2015 - First 100 Clients</h3>
                  <p className="text-gray-300">Reached our first milestone with 100 satisfied clients worldwide</p>
                </div>
              </div>
              <div className="flex items-center aos-fade-right" data-aos="fade-right">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#60a5fa' }}>2018 - AI Integration</h3>
                  <p className="text-gray-300">Pioneered AI solutions and machine learning implementations</p>
                </div>
                <div className="w-6 h-6 bg-[#f7e37a] rounded-full border-4 border-[#181818] relative z-10 animate-bounce"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center aos-fade-left" data-aos="fade-left">
                <div className="w-1/2 pr-8"></div>
                <div className="w-6 h-6 bg-[#60a5fa] rounded-full border-4 border-[#181818] relative z-10 animate-bounce"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#60a5fa' }}>2023 - Global Expansion</h3>
                  <p className="text-gray-300">Expanded to 15 countries with offices in major tech hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values - Animated Cards */}
      <section className="py-20 px-4 bg-[#121212] relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Core Values</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">Our values drive our culture and our work. We believe in excellence, integrity, and innovation at every step.</p>
        {/* SVG pattern background */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 320"><path fill="#60a5fa" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center relative z-10">
          {[
            {icon:'🎯',title:'Excellence',desc:'We pursue excellence in every project, delivering beyond expectations with unwavering quality standards.', bg: excellenceBg},
            {icon:'🤝',title:'Integrity',desc:'Building trust through transparent communication, honest practices, and ethical business relationships.', bg: integrityBg},
            {icon:'💡',title:'Innovation',desc:'Constantly pushing boundaries with cutting-edge technologies and creative problem-solving approaches.', bg: innovationBg},
            {icon:'🌍',title:'Sustainability',desc:'Committed to environmental responsibility and creating solutions that benefit future generations.', bg: sustainabilityBg},
            {icon:'🚀',title:'Growth',desc:'Fostering continuous learning and development for our team and clients alike.', bg: growthBg},
            {icon:'❤',title:'Passion',desc:'Driven by genuine passion for technology and creating meaningful impact in the digital world.', bg: passionBg},
          ].map((v,i)=>(
            <div key={v.title} className="group rounded-full w-56 h-56 flex flex-col items-center justify-center text-center p-6 shadow-xl transition-all duration-500 relative overflow-hidden border-4 border-[#60a5fa] hover:shadow-[0_0_40px_10px_#60a5fa] hover:border-[#f7e37a] bg-gradient-to-br from-[#232a3a80] via-[#181818cc] to-[#232a3a80] backdrop-blur-xl" style={{borderImage: 'none'}} data-aos="zoom-in" data-aos-delay={i*100}>
              {/* Background Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img src={v.bg} alt={`${v.title} background`} className="w-full h-full object-cover" />
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-2" style={{ color: '#60a5fa', textShadow: '0 0 10px #60a5fa88' }}>{v.title}</h3>
              <p className="relative z-10 text-gray-300 text-sm leading-snug">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Team Expertise - Animated Skill Bars & Avatars */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Team Expertise</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">A diverse team of experts in AI, cloud, analytics, and more. We bring together the best minds to deliver world-class solutions.</p>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 space-y-8 w-full">
            {[
              {label:'Artificial Intelligence',value:95},
              {label:'Cloud Architecture',value:92},
              {label:'Data Analytics',value:88},
              {label:'Mobile Development',value:90},
              {label:'Cybersecurity',value:87},
            ].map((s,i)=>(
              <div key={s.label} data-aos="fade-up" data-aos-delay={i*100}>
              <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">{s.label}</span>
                  <span className="font-bold" style={{ color: '#f7e37a' }}>{s.value}%</span>
              </div>
                <div className="w-full bg-[#232323] rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#60a5fa] to-[#f7e37a] h-3 rounded-full transition-all duration-1000" style={{width: s.value+'%'}}></div>
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Success Stories - Animated Cards */}
      <section className="py-20 px-4 bg-[#121212] relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Client Success Stories</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">Discover how we've helped businesses transform their operations and achieve remarkable results.</p>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {caseStudies.map((v, i) => (
            <FlipCard
              key={v.title}
              title={v.title}
              desc={v.desc}
              details={v.details}
              flipped={flippedIndex === i}
              onFlip={() => setFlippedIndex(i)}
              onBack={() => setFlippedIndex(null)}
            />
          ))}
        </div>
        {/* Gradient background overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#60a5fa]/10 via-transparent to-[#f7e37a]/10"></div>
      </section>

      {/* 5. Global Reach - Animated Stat Cards & World Map */}
      <section className="py-20 px-4 bg-[#181818] relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Global Reach</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We are proud to serve clients in 15+ countries, with a growing network of offices and partners worldwide.
        </p>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={globalVideo}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        {/* Global Reach Heading */}
        <h3 className="text-5xl font-extrabold text-center mb-8 text-white relative z-10">Our Global Reach</h3>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            {label:'Countries',value:'15+',desc:'Serving clients across North America, Europe, Asia, and more.'},
            {label:'Offices',value:'25+',desc:'Strategically located offices in major tech hubs.'},
            {label:'Clients',value:'1000+',desc:'Trusted by startups, enterprises, and Fortune 500 companies.'},
            {label:'Partners',value:'50+',desc:'Collaborating with leading technology and business partners.'},
          ].map((v,i)=>(
            <div key={v.label} className="group bg-[#181818] p-8 rounded-xl border-2 border-[#60a5fa] shadow-lg hover:shadow-[0_0_30px_5px_#60a5fa] transition-all duration-500 flex flex-col items-center text-center aos-pop-in animate-bounceIn" data-aos="zoom-in" data-aos-delay={i*100}>
              <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#f7e37a' }}>{v.value}</div>
              <p className="text-gray-300 text-center font-semibold mb-1">{v.label}</p>
              <p className="text-gray-400 text-center text-sm mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Future Vision - Holographic Cards */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Future Vision</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#60a5fa] via-[#f7e37a] to-[#60a5fa] p-8 hover:shadow-[0_0_50px_10px_#60a5fa] transition-all duration-500" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2025 - Quantum Leap</h3>
                <p className="mb-4">Launching our quantum computing division to solve complex problems that were previously impossible.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Quantum AI algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Cryptography breakthroughs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Climate modeling solutions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#60a5fa] via-[#f7e37a] to-[#60a5fa] p-8 hover:shadow-[0_0_50px_10px_#60a5fa] transition-all duration-500" data-aos="fade-left">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2030 - Sustainable Future</h3>
                <p className="mb-4">Leading the charge in green technology and sustainable digital solutions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Carbon-neutral operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Renewable energy tech
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Smart city solutions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#60a5fa] via-[#f7e37a] to-[#60a5fa] p-8 hover:shadow-[0_0_50px_10px_#60a5fa] transition-all duration-500" data-aos="fade-right" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2035 - Human-AI Collaboration</h3>
                <p className="mb-4">Creating seamless partnerships between humans and artificial intelligence.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Brain-computer interfaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Augmented reality workplaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    AI-powered education
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#60a5fa] via-[#f7e37a] to-[#60a5fa] p-8 hover:shadow-[0_0_50px_10px_#60a5fa] transition-all duration-500" data-aos="fade-left" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2040 - Interstellar Tech</h3>
                <p className="mb-4">Pioneering technologies for space exploration and interplanetary communication.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Space-based AI systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Interplanetary networks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Mars colony tech
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

/*
<style>
{`
.flip-card { perspective: 1200px; }
.flipped .flip-card-inner { transform: rotateY(180deg) !important; }
`}
</style>
*/
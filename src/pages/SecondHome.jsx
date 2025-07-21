import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import card1 from "../assets/SecondHome/card1.jpeg";
import card2 from "../assets/SecondHome/card2.jpeg";
import card3 from "../assets/SecondHome/card3.jpeg";
import card4 from "../assets/SecondHome/card4.jpeg";
import card5 from "../assets/SecondHome/card5.jpeg";
import card6 from "../assets/SecondHome/card6.jpeg";
import Clients from "../assets/SecondHome/clients.jpeg";
import secondHeroVideo from "../assets/SecondHome/secondhero.mp4";
import agentImg from "../assets/agent.png";
import janeDoeImg from "../assets/Jane Doe.jpg";
import lisaRayImg from "../assets/Lisa Ray.jpg";

function InsightCard({ icon, title, desc, more, cardImage, index }) {
  const [flipped, setFlipped] = useState(false);
  
  const getShiftDirection = (index) => {
    const directions = [
      'hover:-translate-x-2 hover:-translate-y-2', // top-left
      'hover:translate-x-2 hover:-translate-y-2',  // top-right
      'hover:-translate-x-2 hover:translate-y-2',  // bottom-left
      'hover:translate-x-2 hover:translate-y-2',   // bottom-right
      'hover:translate-x-3 hover:translate-y-0',   // right
      'hover:-translate-x-3 hover:translate-y-0',  // left
    ];
    return directions[index % directions.length];
  };
  
  return (
    <div 
      style={{ perspective: '1000px' }} 
      data-aos="fade-up"
      className={`transition-transform duration-300 ease-in-out ${getShiftDirection(index)}`}
    >
      <div
        className="relative w-full h-72 transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 p-8 border-2 border-[#60a5fa] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 group hover:shadow-[0_0_30px_5px_#60a5fa] hover:border-[#60a5fa] cursor-pointer overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.8), rgba(24, 24, 24, 0.9)), url(${cardImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h3 className="text-2xl font-bold" style={{ color: '#f7e37a' }}>{title}</h3>
            <p className="mb-4 text-center flex-1 text-white">{desc}</p>
          </div>
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#60a5fa] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 cursor-pointer"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h3 className="text-2xl font-bold" style={{ color: '#f7e37a' }}>{title} - Details</h3>
            <p className="text-center text-white mb-4 flex-1">{more}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ServiceCard with simple dark background and yellow theme
function ServiceCard({ title, desc, more }) {
  return (
    <div 
      className="group relative w-full h-72 cursor-pointer" 
      data-aos="fade-up"
    >
      {/* Main Card Container */}
      <div 
        className="relative w-full h-full bg-[#181818] rounded-xl border-2 border-[#60a5fa] p-8 flex flex-col justify-center items-center transition-all duration-500 hover:shadow-[0_0_30px_5px_#60a5fa] hover:border-[#60a5fa]"
      >
        {/* Card Content */}
        <div className="text-center">
          {/* Title */}
          <h3 className="text-2xl font-bold" style={{ color: '#f7e37a' }}>
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-white mb-6 transition-all duration-500 group-hover:text-white">
            {desc}
          </p>
          
          {/* Hover Details */}
          <div 
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
          >
            <p className="text-[#60a5fa] text-sm leading-relaxed">
              {more}
            </p>
          </div>
        </div>
        
        {/* Hologram Glow Effect on Hover */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
          }}
        ></div>
      </div>
    </div>
  );
}

// WhyChooseCard component with Bruno Rocha's hard hover effect and hologram styling
function WhyChooseCard({ title, desc, more }) {
  return (
    <div className="group relative w-full h-72 bg-[#181818] rounded-xl border-2 border-[#60a5fa] overflow-hidden transition-all duration-500 hover:h-80 hover:shadow-[0_0_30px_5px_#60a5fa] hover:border-[#60a5fa] animate-pulse flex flex-col items-center justify-center text-center" data-aos="fade-up">
      {/* Hologram Border Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#60a5fa]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      
      {/* Animated Border Lines */}
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#60a5fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#60a5fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#60a5fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#60a5fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Top Layer - Shrinks on hover */}
      <div className="absolute inset-0 bg-[#181818] p-8 flex flex-col justify-center items-center transition-all duration-500 group-hover:scale-95 group-hover:opacity-90 z-10 text-center">
        <div className="relative w-full">
          {/* Hologram Glow Effect */}
          <div className="absolute inset-0 bg-[#60a5fa]/20 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl font-bold w-full text-center" style={{ color: '#f7e37a' }}>{title}</h3>
        </div>
        <p className="text-white transition-all duration-500 group-hover:text-sm relative z-10 w-full text-center">{desc}</p>
      </div>
      
      {/* Inner Layer - Revealed on hover */}
      <div className="absolute inset-0 bg-[#232323] p-8 flex flex-col justify-center items-center opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 z-20 text-center">
        <div className="relative w-full">
          {/* Hologram Glow Effect for Inner Layer */}
          <div className="absolute inset-0 bg-[#60a5fa]/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-xl font-bold w-full text-center" style={{ color: '#f7e37a' }}>{title} - Details</h3>
        </div>
        <p className="text-white text-sm leading-relaxed relative z-10 w-full text-center">{more}</p>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-4 left-4 w-1 h-1 bg-[#60a5fa] rounded-full animate-ping"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-[#60a5fa] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#60a5fa] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-8 right-4 w-1 h-1 bg-[#60a5fa] rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Alice Johnson",
    company: "TechNova",
    text: "The team delivered beyond our expectations. Their AI solutions transformed our business operations!"
  },
  {
    name: "Michael Lee",
    company: "FinEdge",
    text: "Professional, innovative, and always on time. Highly recommended for any digital transformation project."
  },
  {
    name: "Sara Kim",
    company: "HealthSync",
    text: "Their insights and analytics helped us unlock new growth opportunities. Fantastic experience!"
  }
];

const whyChoose = [
  {
    title: "10+ Years Experience",
    desc: "A decade of proven expertise in delivering digital solutions across industries.",
    more: "Our team brings together years of hands-on experience, ensuring every project is handled with professionalism and deep technical know-how."
  },
  {
    title: "200+ Projects Delivered",
    desc: "A strong track record of successful, on-time project delivery.",
    more: "From startups to enterprises, we have delivered a wide range of projects, always focusing on quality and client satisfaction."
  },
  {
    title: "Expert Team",
    desc: "A multidisciplinary team of passionate professionals.",
    more: "Our experts in AI, development, design, and strategy work together to create holistic solutions for your business."
  },
  {
    title: "98% Client Satisfaction",
    desc: "We pride ourselves on building lasting client relationships.",
    more: "Our commitment to excellence and transparency has earned us a high client satisfaction rate and repeat business."
  }
];

const services = [
  {
    title: "AI & Automation",
    desc: "Automate processes and unlock new efficiencies with custom AI solutions.",
    more: "We design, build, and deploy intelligent systems that streamline your workflows and drive innovation."
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights for smarter decisions.",
    more: "Our analytics solutions help you visualize trends, predict outcomes, and optimize strategies."
  },
  {
    title: "Web Development",
    desc: "Modern, scalable websites tailored to your business goals.",
    more: "We use the latest technologies to build fast, secure, and responsive web applications."
  },
  {
    title: "Mobile Apps",
    desc: "Seamless mobile experiences for iOS and Android platforms.",
    more: "From concept to launch, we create apps that engage users and drive results."
  },
  {
    title: "UI/UX Design",
    desc: "User-centric design for delightful digital experiences.",
    more: "Our designers craft intuitive interfaces that boost engagement and satisfaction."
  },
  {
    title: "Cloud Integration",
    desc: "Migrate, manage, and scale your business in the cloud.",
    more: "We ensure seamless cloud adoption, integration, and ongoing support for your operations."
  }
];

const insights = [
  {
    title: 'Market Trends',
    desc: 'Stay ahead with data-driven insights into evolving markets.',
    more: 'We analyze global and local market trends to help you make informed decisions and stay competitive.',
    cardImage: card1
  },
  {
    title: 'Customer Behavior',
    desc: 'Understand your customers and tailor your services effectively.',
    more: 'Deep dive into customer analytics to optimize engagement and retention strategies.',
    cardImage: card2
  },
  {
    title: 'Growth Opportunities',
    desc: 'Unlock hidden growth potential for your business success.',
    more: 'Identify new markets, products, and partnerships for sustainable growth.',
    cardImage: card3
  },
  {
    title: 'Innovation Insights',
    desc: 'Discover the latest innovations in your industry.',
    more: 'Stay updated with cutting-edge technologies and innovative business models.',
    cardImage: card4
  },
  {
    title: 'Security Analysis',
    desc: 'Protect your business with advanced security insights.',
    more: 'Get recommendations on best practices and tools to safeguard your data.',
    cardImage: card5
  },
  {
    title: 'Global Expansion',
    desc: 'Expand your reach with global market insights.',
    more: 'Learn about international opportunities and how to enter new markets.',
    cardImage: card6
  }
];

const SecondHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div className="bg-[#121212] text-white">
      {/* 1. Hero/Intro Section */}
      <section className="relative text-white py-16 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-[#121212] min-h-[848px] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full flex flex-col items-center justify-center">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={secondHeroVideo} type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          {/* Content */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Empowering Your Digital Future</h1>
            <p className="text-xl text-[#fffffe] max-w-2xl mb-8 drop-shadow-lg">We help businesses achieve remarkable growth with innovative AI, analytics, and digital solutions. Partner with us to unlock new opportunities and drive success in a rapidly evolving world.</p>
            <a href="#contact" className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition drop-shadow-lg">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* 2. Deep Insights Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Deep Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((card, idx) => (
            <InsightCard key={idx} title={card.title} desc={card.desc} more={card.more} cardImage={card.cardImage} index={idx} />
          ))}
        </div>
      </section>

      {/* 3. Featured Clients & Testimonials */}
      <section className="py-20 px-4 bg-[#181818]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">What Our Client Say</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl text-[#60a5fa] italic">About Us</span>
              <span className="text-[#60a5fa]">✨</span>
              <span className="text-[#60a5fa]">✨</span>
            </div>
          </div>

          {/* Main Testimonial */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
            {/* Left Side - Testimonial Card */}
            <div className="lg:w-1/2 flex justify-center items-stretch">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#60a5fa] relative w-full max-w-md">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-4xl text-[#60a5fa]">"</div>
                
                {/* Client Info */}
                <div className="mb-6 mt-8">
                  <img src={janeDoeImg} alt="MICK WATSON" className="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />
                  <h3 className="text-2xl font-bold text-black uppercase">MICK WATSON</h3>
                  <p className="text-black uppercase text-sm">CEO, AGENCY</p>
                </div>

                {/* Testimonial Text */}
                <p className="text-black text-lg mb-6 leading-relaxed">
                  "The team delivered beyond our expectations. Their AI solutions transformed our business operations! Professional, innovative, and always on time. Highly recommended for any digital transformation project."
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-gray-300 text-xl">☆</span>
                </div>
              </div>
            </div>

            {/* Right Side - Another Testimonial Card */}
            <div className="lg:w-1/2 flex items-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#60a5fa] relative w-full max-w-md">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-4xl text-[#60a5fa]">"</div>
                
                {/* Client Info */}
                <div className="mb-6 mt-8">
                  <img src={lisaRayImg} alt="ALICE JOHNSON" className="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />
                  <h3 className="text-2xl font-bold text-black uppercase">ALICE JOHNSON</h3>
                  <p className="text-black uppercase text-sm">CTO, TECHNOVA</p>
                </div>

                {/* Testimonial Text */}
                <p className="text-black text-lg mb-6 leading-relaxed">
                  "Professional, innovative, and always on time. Highly recommended for any digital transformation project. Their insights and analytics helped us unlock new growth opportunities."
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                  <span className="text-[#60a5fa] text-xl">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {whyChoose.map((card, idx) => (
            <WhyChooseCard key={idx} title={card.title} desc={card.desc} more={card.more} />
          ))}
        </div>
      </section>

      {/* 5. Our Services (6 cards) */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((card, idx) => (
            <ServiceCard key={idx} title={card.title} desc={card.desc} more={card.more} />
          ))}
        </div>
      </section>

      {/* 6. Contact/CTA Section */}
      <section id="contact" className="py-24 flex flex-col items-center justify-center text-center bg-gradient-to-t from-black via-[#181818] to-[#232323]">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-[#fffffe] max-w-xl mb-8">Contact us today to discuss your goals and discover how we can help you achieve them with innovative technology and expert guidance.</p>
        {messageSent ? (
          <div className="bg-[#232323] p-8 rounded-xl shadow-lg max-w-md w-full border-2 border-[#60a5fa] flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-4">Message sent!</h3>
            <p className="text-lg text-gray-300 mb-2">Thank you for reaching out. We will get back to you soon.</p>
            <p className="text-base text-gray-400">Our team appreciates your interest in our services. Have a great day!</p>
          </div>
        ) : (
          <form className="bg-[#232323] p-8 rounded-xl shadow-lg max-w-md w-full border-2 border-[#60a5fa]" onSubmit={e => { e.preventDefault(); setMessageSent(true); }}>
            <input type="text" placeholder="Your Name" className="block w-full mb-4 p-3 rounded bg-[#181818] text-white border border-[#60a5fa]" required />
            <input type="email" placeholder="Your Email" className="block w-full mb-4 p-3 rounded bg-[#181818] text-white border border-[#60a5fa]" required />
            <textarea placeholder="Your Message" className="block w-full mb-4 p-3 rounded bg-[#181818] text-white border border-[#60a5fa]" rows={4} required />
            <button type="submit" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition w-full">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default SecondHome;

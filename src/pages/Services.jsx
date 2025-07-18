import React from "react";
import { Link } from "react-router-dom";
import serviceshero from '../assets/hero.mp4';

const services = [
  { id: 1, name: "AI Text Generator", description: "Generate text using AI." },
  { id: 2, name: "Image Recognition", description: "Analyze images with AI." },
  { id: 3, name: "Chatbot Platform", description: "Deploy AI chatbots." },
];

const Services = () => (
  <div className="bg-[#121212] text-white">
    {/* Hero Section */}
    <section className="relative text-white py-16 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-[#121212] min-h-[848px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={serviceshero} type="video/mp4" />
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="relative z-20">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight" style={{ color: '#f7e37a' }}>Our Services</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">Comprehensive AI solutions to transform your business</p>
      </div>
    </section>
    
    <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-4">AI Tools & Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(service => (
        <Link key={service.id} to={`/services/${service.id}`}>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="font-semibold">{service.name}</h2>
            <p>{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Services;
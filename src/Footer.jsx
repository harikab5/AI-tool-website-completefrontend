import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0c0d0c] via-[#1a1a1a] to-[#222] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info & Social */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start mb-6 gap-2">
              <img src={logo} alt="Logo" className="h-12 mb-2" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f7e37a] via-[#f7e37a] to-[#f7e37a] bg-clip-text text-transparent">AI Tools Company</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              Leading the future with cutting-edge AI tools and solutions. Transform your business with intelligent automation and insights.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: FaLinkedin, url: "https://www.linkedin.com", label: "LinkedIn" },
                { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
                { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#333] hover:bg-blue-400 hover:text-black transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center lg:justify-start bg-gradient-to-r from-[#f7e37a] via-[#f7e37a] to-[#f7e37a] bg-clip-text text-transparent">
              Quick Links
              <FaArrowRight className="ml-2 text-sm" />
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about-us" },
                { label: "Services", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#f7e37a] via-[#f7e37a] to-[#f7e37a] bg-clip-text text-transparent">        Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "AI Chatbots & Assistants", path: "/services/ai-chatbots" },
                { name: "Content & Code Generation", path: "/services/content-generation" },
                { name: "Data Analysis & Forecasting", path: "/services/data-analysis" },
                { name: "NLP & Language Intelligence", path: "/services/nlp-intelligence" },
                { name: "Computer Vision Solutions", path: "/services/computer-vision" },
                { name: "Automation & Workflow Tools", path: "/services/automation-tools" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-between h-full">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#f7e37a] via-[#f7e37a] to-[#f7e37a] bg-clip-text text-transparent">Get In Touch</h3>
            <div className="space-y-4 mb-6 w-full max-w-xs">
              <div className="flex items-center text-gray-300">
                <FaPhoneAlt className="mr-3 text-[#f7e37a]" />
                <span className="text-sm">+919390594407</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-[#f7e37a]" />
                <span className="text-sm">ai@tools.in</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-[#f7e37a]" />
                <span className="text-sm">India</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaClock className="mr-3 text-[#f7e37a]" />
                <span className="text-sm">Mon - Fri: 9am - 6pm</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#f7e37a] via-[#f7e37a] to-[#f7e37a] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_#FFD700] transition-all duration-300 hover:scale-105">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm mb-0 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} AI Tools Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 justify-center md:justify-end">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaComments, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import contacthero from '../assets/contacthero.mp4'; 

const faqs = [
  {
    question: 'What services does your AI platform offer?',
    answer: 'We offer AI chatbots, workflow automation, computer vision, content generation, data analysis, NLP, and more. Visit our Services page for details.'
  },
  {
    question: 'How can I get a custom AI solution for my business?',
    answer: 'Contact us using the form above or call our sales team. We will discuss your requirements and propose a tailored AI solution.'
  },
  {
    question: 'Do you provide technical support?',
    answer: 'Yes! Our support team is available to help with onboarding, troubleshooting, and ongoing maintenance for all our AI tools.'
  },
  {
    question: 'Is my data secure with your platform?',
    answer: 'Absolutely. We use enterprise-grade security, encryption, and compliance best practices to keep your data safe.'
  },
  {
    question: 'Can I integrate your AI tools with my existing software?',
    answer: 'Yes, our solutions are designed for easy integration with popular platforms and custom systems via APIs.'
  },
  {
    question: 'Do you offer a free trial or demo?',
    answer: 'We offer demos and limited free trials for most of our AI tools. Contact us to schedule a personalized demo.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out the contact form above or reach out to our team. We’ll guide you through the next steps.'
  },
];

const ContactUs = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  // Query section state
  const [askQuery, setAskQuery] = useState('');
  const [askQuerySent, setAskQuerySent] = useState(false);
  // Newsletter section state
  const [newsletter, setNewsletter] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleSupportClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Query section handlers
  const handleAskQueryChange = (e) => setAskQuery(e.target.value);
  const handleAskQuerySubmit = (e) => {
    e.preventDefault();
    setAskQuerySent(true);
    setAskQuery('');
    setTimeout(() => setAskQuerySent(false), 4000);
  };
  // Newsletter section handlers
  const handleNewsletterChange = (e) => setNewsletter(e.target.value);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSent(true);
    setNewsletter('');
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  return (
    <div className="min-h-screen w-full bg-[#f7fafc] flex flex-col">
      {/* Hero Section with Background Video */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 py-16 bg-black overflow-hidden min-h-[400px]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={contacthero} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4 tracking-wide">GET IN TOUCH.</h1>
          <div className="text-center text-white mb-6 space-y-2">
            <div><span className="font-semibold">Phone:</span> +2 (02) 2737 6756</div>
            <div><span className="font-semibold">Email:</span> <a href="mailto:handy.mostafa@legaliscorp.com" className="text-red-400 underline">handy.mostafa@legaliscorp.com</a></div>
            <div><span className="font-semibold">Address:</span> 18 Mahmoud Azmy Street, off 26th July Street, Zamalek, Cairo, Egypt.</div>
          </div>
        </div>
      </section>

      {/* Split Card Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch px-6 md:px-16 -mt-16 z-20 relative">
        {/* Card 1: Talk to Sales */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center border-t-4 border-[#2d3a4a]">
          <FaPhoneAlt className="text-4xl text-[#2d3a4a] mb-4" />
          <h2 className="text-xl font-bold mb-2 text-[#2d3a4a]">Talk to Sales</h2>
          <p className="text-gray-700 mb-4">Interested in our software? Just pick up the phone to chat with a member of our sales team.</p>
          <a href="tel:+18779290687" className="text-[#009688] font-bold text-lg mb-2 hover:underline">+1 877 929 0687</a>
          <a href="#" className="text-[#2d3a4a] underline text-sm hover:text-[#ff7043] transition">View all global numbers</a>
        </div>
        {/* Card 2: Contact Customer Support */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center border-t-4 border-[#ff7043]">
          <FaComments className="text-4xl text-[#ff7043] mb-4" />
          <h2 className="text-xl font-bold mb-2 text-[#2d3a4a]">Contact Customer Support</h2>
          <p className="text-gray-700 mb-4">Sometimes you need a little help from your friends. Or a support rep. Don’t worry — we’re here for you.</p>
          <button onClick={handleSupportClick} className="bg-gray-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300">Contact Support</button>
        </div>
      </section>

      {/* Modern Contact Form Section (like the image) */}
      <section ref={formRef} className="w-full flex flex-col md:flex-row items-stretch justify-center bg-[#f5f3f0] py-12 px-4 mt-12 rounded-2xl shadow-xl max-w-5xl mx-auto">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex items-center justify-center mb-8 md:mb-0">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Contact" className="rounded-xl object-cover w-full h-80 md:h-full max-w-xs md:max-w-full" />
        </div>
        {/* Right: Form and Info */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-4 md:px-12">
          <h2 className="text-3xl font-bold mb-6 text-[#222]">Contact Us</h2>
          <form className="flex flex-col gap-4 mb-6" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Full Name" className="border-b border-[#bbb] bg-transparent py-2 px-1 focus:outline-none focus:border-black text-[#222]" required />
            <input type="email" placeholder="Email" className="border-b border-[#bbb] bg-transparent py-2 px-1 focus:outline-none focus:border-black text-[#222]" required />
            <textarea placeholder="Message" className="border-b border-[#bbb] bg-transparent py-2 px-1 focus:outline-none focus:border-black text-[#222] resize-none" rows={3} required />
            <button type="submit" className="mt-4 bg-black text-white py-3 rounded-full font-semibold shadow-lg hover:bg-[#333] transition-all">Contact Us</button>
          </form>
          {submitted && (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-center font-semibold transition-all">Thank you! Your message has been sent.</div>
          )}
          <div className="flex flex-col gap-2 text-[#222] text-sm mb-4">
            <div><span className="font-semibold">Contact:</span> aitools.com</div>
            <div><span className="font-semibold">Based in:</span> marthallali, Banglore</div>
          </div>
          <div className="flex gap-4 text-[#222] text-xl">
            <a href="#" className="hover:text-black transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-black transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto w-full mt-16 mb-12 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-[#222]">FAQ&apos;s</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-lg text-[#222]">{faq.question}</span>
                {openIndex === idx ? (
                  <FaChevronUp className="text-[#222]" />
                ) : (
                  <FaChevronDown className="text-[#222]" />
                )}
              </button>
              {openIndex === idx && (
                <div className="py-2 px-2 text-gray-700 bg-gray-50 rounded-b">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ask Query Section */}
      <section className="max-w-3xl mx-auto w-full mb-12 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-[#222]">Have a Query?</h2>
        <form className="w-full flex flex-col gap-4 items-center" onSubmit={handleAskQuerySubmit}>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            rows={3}
            placeholder="Ask us anything about our AI tools, services, or support..."
            value={askQuery}
            onChange={handleAskQueryChange}
            required
            spellCheck={false}
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg shadow transition-all">Send Query</button>
        </form>
        {askQuerySent && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mt-4 text-center font-semibold transition-all">Message sent! We’ll get back to you soon.</div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="max-w-3xl mx-auto w-full mb-16 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-[#222]">Subscribe to our AI Newsletter</h2>
        <p className="text-gray-600 mb-4 text-center">Get the latest updates, AI trends, and exclusive offers from our team. No spam, just smart insights!</p>
        <form className="w-full text-black flex flex-col sm:flex-row gap-4 items-center justify-center" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your email address"
            value={newsletter}
            onChange={handleNewsletterChange}
            required
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg shadow transition-all">Subscribe</button>
        </form>
        {newsletterSent && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mt-4 text-center font-semibold transition-all">Thank you for subscribing!</div>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
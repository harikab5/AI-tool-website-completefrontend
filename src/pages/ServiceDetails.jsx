import React from "react";
import { useParams } from "react-router-dom";

const details = {
  1: {
    name: "AI Text Generator",
    description: "Generate high-quality text using advanced AI models.",
    faqs: ["How does it work?", "Is it free?"],
    pricing: "$10/month"
  },
  2: {
    name: "Image Recognition",
    description: "Analyze and classify images with AI.",
    faqs: ["What formats are supported?", "Is it accurate?"],
    pricing: "$15/month"
  },
  3: {
    name: "Chatbot Platform",
    description: "Deploy intelligent chatbots for customer support.",
    faqs: ["Can I customize responses?", "Is it multilingual?"],
    pricing: "$20/month"
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = details[id];

  if (!service) return <div>Service not found.</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p>{service.description}</p>
      <h2 className="mt-6 font-semibold">FAQs</h2>
      <ul>
        {service.faqs.map((faq, idx) => <li key={idx}>{faq}</li>)}
      </ul>
      <h2 className="mt-6 font-semibold">Pricing</h2>
      <p>{service.pricing}</p>
    </div>
  );
};

export default ServiceDetails;
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bloghero from '../assets/bloghero.mp4';




// --- Authors Section ---
import janeDoeImage from "../assets/Jane Doe.jpg";
import johnSmithImage from "../assets/John Smith.webp";
import lisaRayImage from "../assets/Lisa Ray.jpg";

const authors = [
  {
    name: "Jane Doe",
    image: janeDoeImage,
    role: "AI Researcher & Writer",
    bio: "Jane explores machine learning trends and writes in-depth research-backed articles.",
  },
  {
    name: "John Smith",
    image: johnSmithImage,
    role: "Business Analyst",
    bio: "John breaks down how AI is impacting businesses and industries around the world.",
  },
  {
    name: "Lisa Ray",
    image: lisaRayImage,
    role: "Full-Stack Developer",
    bio: "Lisa brings tech tutorials and creative ways to integrate AI into applications.",
  },
];

const AuthorCard = ({ author }) => (
  <div className="relative w-[300px] h-[300px] m-6 group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white">
    <motion.img
      src={author.image}
      alt={author.name}
      className="absolute w-full h-full object-cover rounded-2xl z-10"
      initial={{ y: 0, opacity: 1 }}
      whileHover={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-full h-full flex flex-col justify-center items-center p-8 text-center z-20 bg-gray-900"
      initial={{ y: 40, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
    >
      <h3 className="text-2xl font-bold text-white mb-2">{author.name}</h3>
      <span className="block text-base text-blue-200 mb-2 font-medium">{author.role}</span>
      <p className="text-gray-100 text-sm mb-2 font-normal">{author.bio}</p>
    </motion.div>
  </div>
);

const BlogAuthors = () => (
  <section className="bg-gray-950 text-white py-16 px-6 min-h-screen flex flex-col items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-white mb-2">Meet Our Authors</h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Experts behind the insights – each author brings deep knowledge and practical AI experience.
      </p>
    </motion.div>
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl mx-auto">
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </div>
  </section>
);

// --- Categories Section ---
const categories = [
  {
    name: "AI Tools",
    description: "Explore cutting-edge tools for developers, businesses, and creatives.",
  },
  {
    name: "Machine Learning",
    description: "Dive deep into supervised, unsupervised, and reinforcement learning.",
  },
  {
    name: "Automation",
    description: "Learn how AI automates workflows, saving time and cost.",
  },
  {
    name: "Generative AI",
    description: "Discover how machines are generating text, images, and even code.",
  },
  {
    name: "Business & Strategy",
    description: "Understand AI’s impact on business models and decision-making.",
  },
  {
    name: "Case Studies",
    description: "Real-world applications and results from companies using AI.",
  },
];

const BlogCategories = () => (
  <section className="bg-black text-white py-16 px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-white mb-2">Categories</h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Browse by topics and discover content tailored to your interests.
      </p>
    </motion.div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-xl p-6 border-4 border-dotted border-gray-400 bg-gray-900 cursor-pointer group transition-all duration-500 hover:border-blue-400 hover:border-solid"
        >
          <motion.h3
            className="text-xl font-semibold text-white mb-2 group-hover:-translate-y-1 transition-transform duration-500"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
          >
            {category.name}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-400 group-hover:translate-y-1 transition-transform duration-500"
            whileHover={{ y: 8 }}
            transition={{ duration: 0.5 }}
          >
            {category.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Featured Insights Section ---
const picks = [
  {
    title: "AI for Healthcare Breakthroughs",
    description: "Exploring how AI is driving innovation in diagnostics and patient care.",
  },
  {
    title: "The Rise of Generative Models",
    description: "Understanding GPT, DALL·E, and the creative side of AI.",
  },
  {
    title: "Smarter Marketing with AI",
    description: "How brands are personalizing user experiences using machine learning.",
  },
];

const FeaturedInsights = () => (
  <section className="bg-[#0c0d0c] text-white py-16 px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        Featured Insights
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {picks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 0 32px 0 #60a5fa, 0 2px 8px 0 #0003"
            }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg transition duration-300 cursor-pointer"
          >
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              whileHover={{ color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// --- More Articles Section ---
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.jpg";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";

const articles = [
  {
    id: 3,
    title: "AI in Healthcare: Real Case Studies",
    summary: "Discover how hospitals and research labs are using AI to enhance diagnostics and save lives.",
    author: "Dr. Priya Sharma",
    date: "July 10, 2025",
    readTime: "6 min read",
    image: healthcareImg
  },
  {
    id: 4,
    title: "Building Custom AI Assistants for Business",
    summary: "Learn how startups are creating tailored AI solutions for customer support and operations.",
    author: "Anil Verma",
    date: "June 25, 2025",
    readTime: "5 min read",
    image: businessImg
  },
  {
    id: 5,
    title: "Open Source AI Projects to Watch",
    summary: "Explore the top open source AI projects that are shaping the future of innovation.",
    author: "Lina George",
    date: "June 15, 2025",
    readTime: "4 min read",
    image: openSourceImg
  }
];

const MoreArticlesSection = () => (
  <section className="bg-gray-950 text-white py-16 px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-white mb-2">More Articles</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Continue exploring hand-picked articles covering AI innovations, insights, and practical uses.
      </p>
    </motion.div>
    <div className="flex flex-row flex-nowrap gap-8 overflow-x-auto pb-4 justify-center items-stretch">
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-xl transition flex flex-col h-[500px] w-[400px] min-w-[350px]"
        >
          <img src={article.image} alt={article.title} className="w-full h-60 object-cover" />
          <div className={`p-5 flex flex-col flex-1
            ${index === 0 || index === 2 ? "pt-8" : ""}
            ${index === 1 ? "pt-2" : ""}
          `}>
            <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
            <div className="text-gray-500 text-xs mb-4">
              <span>By {article.author}</span> • <span>{article.date}</span> • <span>{article.readTime}</span>
            </div>
            {/* Read Article Button */}
            <Link to={`/blog/article${index + 1}`}>
              <motion.button
                className={`w-full bg-gradient-to-r from-blue-400 to-blue-600 text-gray-900 font-semibold py-3 px-6 rounded-lg relative overflow-hidden group
                  ${index === 0 || index === 2 ? "mt-4" : ""}
                  ${index === 1 ? "mt-2" : ""}
                `}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                {/* Button content */}
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Read Article
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </motion.span>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%", opacity: 0.3 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- Hero Section ---
const BlogHero = () => (
  <section className="relative text-white py-16 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-[#121212] min-h-[848px] flex items-center justify-center">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={bloghero} type="video/mp4" />
    </video>
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
    <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight" style={{ color: '#fff' }}>AI Blog & Insights</h1>
      <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium max-w-3xl mx-auto">Explore the latest in AI, from industry breakthroughs to hands-on tutorials and expert opinions.</p>
    </div>
  </section>
);

// --- Main Page ---
const BlogPage = () => (
  <div>
    <BlogHero />
    <BlogAuthors />
    <BlogCategories />
    <FeaturedInsights />
    <MoreArticlesSection />
  </div>
);

export default BlogPage;
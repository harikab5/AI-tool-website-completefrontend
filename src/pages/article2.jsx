import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import articleImage from "../assets/Building Custom AI Assistants for Business.png";

const gradientSubheading = "bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent";

const Article2 = () => (
  <div className="min-h-screen w-full bg-black text-white flex flex-col">
    <nav className="bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <Link to="/blog" className="text-yellow-300 font-bold text-xl">
          ← Back to Blog
        </Link>
        <h1 className="text-xl font-semibold">AI Blog</h1>
      </div>
    </nav>
    <div className="flex-1 w-full px-0 py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full min-h-screen py-12"
      >
        <div className="w-full px-0 py-12 bg-transparent">
          <motion.h1
            className="text-5xl font-bold mb-4 px-8 text-white text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Custom AI Assistants for Business
          </motion.h1>
          <div className="flex items-center gap-4 text-gray-400 mb-6 px-8 justify-center">
            <span>By Anil Verma</span>
            <span>•</span>
            <span>June 25, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
        <motion.div
          className="w-full flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={articleImage}
            alt="Building Custom AI Assistants"
            className="rounded-xl mx-auto w-full max-w-[500px] h-[300px] object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          className="prose prose-invert w-full px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
            Learn how startups are creating tailored AI solutions for customer support and operations.
          </p>
          {/* More Info Box 1 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Did You Know?</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Custom AI assistants can be trained on your own business data.</li>
              <li>• They can automate repetitive tasks and improve customer satisfaction.</li>
            </ul>
          </section>
          <h2 className="text-3xl font-bold mb-4 text-white">The Rise of Custom AI Solutions</h2>
          <p className="text-lg text-gray-200 mb-6">
            In today's competitive business landscape, off-the-shelf AI solutions often fall short
            of meeting specific organizational needs. This has led to a surge in custom AI assistant
            development, where businesses build solutions tailored to their unique workflows and challenges.
          </p>
          {/* More Info Box 2 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Key Takeaways</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Custom AI can integrate with your existing tools and databases.</li>
              <li>• They can provide 24/7 support and reduce operational costs.</li>
            </ul>
          </section>
          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>Customer Support Revolution</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Modern AI assistants are transforming customer support by providing 24/7 availability,
            instant responses, and personalized interactions. Companies like Zendesk and Intercom
            are leading the charge with AI-powered chatbots that can handle complex customer queries
            with human-like understanding.
          </p>
          {/* More Info Box 3 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>More About This Revolution</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• AI chatbots can resolve up to 80% of customer queries without human intervention.</li>
              <li>• They can learn and improve from every interaction.</li>
            </ul>
          </section>
          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>Operational Efficiency</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            AI assistants are streamlining business operations by automating repetitive tasks,
            managing schedules, and providing real-time insights. From inventory management to
            employee onboarding, these intelligent systems are becoming indispensable business tools.
          </p>
          {/* More Info Box 4 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Why It Matters</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Automation frees up employees for higher-value work.</li>
              <li>• AI can help identify inefficiencies and suggest improvements.</li>
            </ul>
          </section>
          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>Implementation Strategies</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Successful AI assistant implementation requires careful planning, data preparation,
            and continuous optimization. Businesses must consider factors like data privacy,
            user experience, and integration with existing systems.
          </p>
          {/* More Info Box 5 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Looking Ahead</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• The future of business AI is hyper-personalized and proactive assistants.</li>
              <li>• Ongoing training and monitoring are key to long-term success.</li>
            </ul>
          </section>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Article2;
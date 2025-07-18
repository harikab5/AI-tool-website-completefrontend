import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import articleImage from "../assets/Open Source AI Projects to Watch.webp";

const gradientSubheading = "bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent";

const Article3 = () => (
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
            Open Source AI Projects to Watch
          </motion.h1>
          <div className="flex items-center gap-4 text-gray-400 mb-6 px-8 justify-center">
            <span>By Lina George</span>
            <span>•</span>
            <span>June 15, 2025</span>
            <span>•</span>
            <span>4 min read</span>
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
            alt="Open Source AI Projects"
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
            Explore the top open source AI projects that are shaping the future of innovation.
          </p>
          {/* More Info Box 1 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Did You Know?</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Open source AI projects are driving rapid innovation in the field.</li>
              <li>• Many industry leaders contribute to and use open source AI tools.</li>
            </ul>
          </section>
          <h2 className="text-3xl font-bold mb-4 text-white">The Open Source AI Revolution</h2>
          <p className="text-lg text-gray-200 mb-6">
            Open source AI projects are democratizing artificial intelligence, making cutting-edge
            technologies accessible to developers, researchers, and businesses worldwide. These
            projects are not only advancing the field but also fostering collaboration and innovation.
          </p>
          {/* More Info Box 2 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Key Takeaways</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Open source allows for rapid prototyping and iteration.</li>
              <li>• Community-driven projects benefit from diverse expertise.</li>
            </ul>
          </section>
          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>{'1. Hugging Face Transformers'}</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Hugging Face has become the go-to platform for natural language processing models.
            Their Transformers library provides access to thousands of pre-trained models,
            making it easy for developers to implement state-of-the-art NLP solutions.
          </p>
          {/* More Info Box 3 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>More About Hugging Face</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Transformers support over 100 languages.</li>
              <li>• The community has contributed thousands of models and datasets.</li>
            </ul>
          </section>
          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>{'2. TensorFlow and PyTorch'}</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            These two deep learning frameworks continue to dominate the AI landscape. TensorFlow,
            backed by Google, and PyTorch, backed by Meta, provide powerful tools for building
            and deploying machine learning models at scale.
          </p>
          {/* More Info Box 4 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Why It Matters</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Both frameworks are used in production by top tech companies.</li>
              <li>• They have large, active communities and extensive documentation.</li>
            </ul>
          </section>
          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>{'3. Stable Diffusion'}</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            This open-source text-to-image generation model has revolutionized creative AI.
            It allows users to generate high-quality images from text descriptions, opening
            up new possibilities for artists, designers, and content creators.
          </p>
          {/* More Info Box 5 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Looking Ahead</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Open source AI will continue to drive innovation and accessibility.</li>
              <li>• Collaboration and transparency are key to responsible AI development.</li>
            </ul>
          </section>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Article3;
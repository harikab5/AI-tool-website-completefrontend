import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import articleImage from "../assets/AI in Healthcare- Real Case Studies.jpg";

const gradientSubheading = "bg-gradient-to-r from-gray-200 via-white to-gray-400 bg-clip-text text-transparent";

const Article1 = () => (
  <div className="min-h-screen w-full bg-black text-white flex flex-col">
    {/* Navigation */}
    <nav className="bg-gray-900 p-4">
      <div className="flex justify-between items-center">
        <Link to="/blog" className="text-yellow-300 font-bold text-xl">
          ← Back to Blog
        </Link>
        <h1 className="text-xl font-semibold">AI Blog</h1>
      </div>
    </nav>

    {/* Article Content */}
    <div className="flex-1 w-full px-0 py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full min-h-screen py-12"
      >
        {/* Article Header */}
        <div className="w-full px-0 py-12 bg-transparent">
          <motion.h1
            className="text-5xl font-bold mb-4 px-8 text-white text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI in Healthcare: Real Case Studies
          </motion.h1>
          <div className="flex items-center gap-4 text-gray-400 mb-6 px-8 justify-center">
            <span>By Dr. Priya Sharma</span>
            <span>•</span>
            <span>July 10, 2025</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>

        {/* Featured Image - Centered and Medium Size */}
        <motion.div
          className="w-full flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={articleImage}
            alt="AI in Healthcare"
            className="rounded-xl mx-auto w-full max-w-[500px] h-[300px] object-cover shadow-lg"
          />
        </motion.div>

        {/* Main Article Content */}
        <motion.div
          className="prose prose-invert w-full px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover how hospitals and research labs are using AI to enhance diagnostics and save lives.
          </p>

          {/* More Info Box 1 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Did You Know?</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• AI can analyze thousands of medical images in seconds.</li>
              <li>• Some AI systems are trained on millions of patient records for accuracy.</li>
            </ul>
          </section>

          <h2 className="text-3xl font-bold mb-4 text-white">Revolutionizing Medical Diagnostics</h2>
          <p className="text-lg text-gray-200 mb-6">
            Artificial Intelligence is transforming the healthcare industry at an unprecedented pace.
            From early disease detection to personalized treatment plans, AI technologies are becoming
            indispensable tools in modern medicine. Hospitals are now leveraging AI-powered imaging
            systems to detect anomalies that even experienced doctors might miss.
          </p>

          {/* More Info Box 2 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Key Takeaways</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• AI-driven radiology is reducing diagnostic errors.</li>
              <li>• Predictive analytics help hospitals allocate resources more efficiently.</li>
            </ul>
          </section>

          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>Case Study 1: Early Cancer Detection</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            At Memorial Sloan Kettering Cancer Center, AI algorithms are analyzing mammograms with
            accuracy rates exceeding 95%. The system can detect early-stage breast cancer up to two
            years before traditional methods, significantly improving survival rates.
          </p>

          {/* More Info Box 3 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>More About This Case</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Early detection increases survival rates by up to 30%.</li>
              <li>• AI can help reduce unnecessary biopsies.</li>
            </ul>
          </section>

          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>Case Study 2: Predictive Analytics</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Johns Hopkins Hospital implemented an AI system that predicts patient deterioration
            up to 12 hours before critical symptoms appear. This early warning system has reduced
            ICU readmissions by 30% and saved countless lives.
          </p>

          {/* More Info Box 4 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Why It Matters</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• Early warnings allow for timely intervention.</li>
              <li>• AI can help reduce hospital costs and improve patient outcomes.</li>
            </ul>
          </section>

          <h3 className={`text-2xl font-semibold mb-3 ${gradientSubheading}`}>The Future of AI in Healthcare</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            As AI technology continues to evolve, we can expect even more groundbreaking applications
            in healthcare. From drug discovery to robotic surgery, the possibilities are endless.
            The key is ensuring these technologies are implemented ethically and with patient safety
            as the top priority.
          </p>

          {/* More Info Box 5 */}
          <section className="w-full bg-gray-800 py-6 px-6 mb-8 rounded-xl">
            <h3 className={`text-2xl font-bold mb-2 ${gradientSubheading}`}>Looking Ahead</h3>
            <ul className="text-lg text-gray-200 space-y-2">
              <li>• AI is being used for drug discovery and personalized medicine.</li>
              <li>• Robotics and AI are assisting in complex surgeries.</li>
              <li>• Data privacy and security remain top concerns in AI healthcare.</li>
            </ul>
          </section>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Article1;
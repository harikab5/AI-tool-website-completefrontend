import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from './HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import SecondHome from './pages/SecondHome';
import AboutUs from "./pages/AboutUs";
import ContentCodeGeneration from "./services/Content & Code Generation";
import AutomationWorkflowTools from "./services/Automation & Workflow Tools";
import NLPLanguageIntelligence from "./services/NLP & Language Intelligence";
import ComputerVisionSolutions from "./services/Computer Vision Solutions";
import AutomationEfficiency from "./services/AI Chatbots & Assistants";
import DataAnalysisForecasting from "./services/Data Analysis & Forecasting";
import BlogPage from "./pages/Blog";
import Welcome from "./pages/Welcome";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import ContactUs from "./pages/ContactUs";
import { RoleProvider } from "./context/RoleContext";
import BlogDetails from "./pages/BlogDetails";
import Article1 from "./pages/article1";
import Article2 from "./pages/article2";
import Article3 from "./pages/article3";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Responsive layout: add a container for main content
  const noHeaderFooterRoutes = ["/", "/login", "/signup", "/forgot-password", "/not-found"];
  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <RoleProvider>
      <div className={darkMode ? "dark bg-[#222] text-white min-h-screen flex flex-col" : "bg-white text-black min-h-screen flex flex-col"}>
        {showHeaderFooter && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}
        <main className="flex-1 w-full">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/signup" element={<SignupWrapper />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Protected User Routes */}
            <Route element={<ProtectedRoute allowedRoles={["user"]} />}> {/* User-only routes */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/second-home" element={<SecondHome />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/article1" element={<Article1 />} />
              <Route path="/blog/article2" element={<Article2 />} />
              <Route path="/blog/article3" element={<Article3 />} />
              <Route path="/services/content-generation" element={<ContentCodeGeneration />} />
              <Route path="/services/automation-tools" element={<AutomationWorkflowTools />} />
              <Route path="/services/nlp-intelligence" element={<NLPLanguageIntelligence />} />
              <Route path="/services/computer-vision" element={<ComputerVisionSolutions />} />
              <Route path="/services/ai-chatbots" element={<AutomationEfficiency />} />
              <Route path="/services/data-analysis" element={<DataAnalysisForecasting />} />
            </Route>

            {/* Protected Admin Route */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}> {/* Admin-only routes */}
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {showHeaderFooter && <Footer darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
    </RoleProvider>
  );
}

// Wrapper components for Login and Signup to pass isAdmin
function LoginWrapper() {
  const location = useLocation();
  return <Login isAdmin={location.state?.isAdmin || false} />;
}

function SignupWrapper() {
  const location = useLocation();
  return <Signup isAdmin={location.state?.isAdmin || false} />;
}

export default App;

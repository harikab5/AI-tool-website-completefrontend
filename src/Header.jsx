import React, { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRole } from "./context/RoleContext";

const servicesDropdown = [
  { name: "Content & Code Generation", path: "/services/content-generation" },
  { name: "Automation & Workflow Tools", path: "/services/automation-tools" },
  { name: "NLP & Language Intelligence", path: "/services/nlp-intelligence" },
  { name: "Computer Vision Solutions", path: "/services/computer-vision" },
  { name: "AI Chatbots & Assistants", path: "/services/ai-chatbots" },
  { name: "Data Analysis & Forecasting", path: "/services/data-analysis" },
];

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isAdmin, setIsAdmin } = useRole();
  const navigate = useNavigate();

  // Get user email and initials
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const email = user.email || "";
  const initials = email.slice(0, 2).toUpperCase();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <header className="bg-black bg-gradient-to-br from-[#0c0d0c] via-[#1a1a1a] to-[#222] w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6 shadow-2xl sticky top-0 z-50 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center gap-6">
        <img src={logo} alt="Logo" className="h-14 md:h-[60px] w-auto object-contain drop-shadow-[0_0_10px_#60a5fa]" />
      </div>
      {/* Nav and Avatar aligned right */}
      <div className="flex items-center gap-4 ml-auto">
        <nav className="hidden md:flex items-center gap-8">
          {/* Home Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center text-white text-lg font-semibold hover:text-yellow-400 transition group focus:outline-none">
              <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Home</span> <FaChevronDown className="ml-1 text-xs group-hover:rotate-180 transition-transform duration-300" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-right rounded-md bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1 text-sm">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/home"
                        className={`block px-4 py-2 ${active ? "bg-yellow-400 text-black" : "text-white"}`}
                      >
                        HomePage (Public)
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/second-home"
                        className={`block px-4 py-2 ${active ? "bg-yellow-400 text-black" : "text-white"}`}
                      >
                        UserHome (Dashboard)
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link
            to="/about-us"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition group focus:outline-none"
          >
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">About Us</span>
          </Link>

          {/* Services Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center text-white text-lg font-semibold hover:text-yellow-400 transition group focus:outline-none">
              <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Services</span> <FaChevronDown className="ml-1 text-xs group-hover:rotate-180 transition-transform duration-300" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-[#232323] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  {servicesDropdown.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <Link
                          to={item.path}
                          className={`block px-4 py-2 text-sm ${active ? "bg-yellow-400 text-black" : "text-white"}`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link
            to="/blog"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition group focus:outline-none"
          >
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Blog</span>
          </Link>
          <Link
            to="/contact-us"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition group focus:outline-none"
          >
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Contact Us</span>
          </Link>

          {/* User/Admin Toggle */}
          {/* Removed User/Admin toggle buttons as requested */}
          {/* Theme toggle */}
        </nav>
        {/* Avatar Dropdown */}
        {email && (
          <Menu as="div" className="relative">
            <Menu.Button
              className="flex items-center justify-center rounded-full bg-red-700 text-white font-bold text-lg w-10 h-10 focus:outline-none"
              style={{ minWidth: 40, minHeight: 40 }}
              title={email}
            >
              {initials}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          active ? "bg-red-100 text-red-700" : "text-red-600"
                        }`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-yellow-400 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-br from-[#0c0d0c] via-[#1a1a1a] to-[#222] text-white p-6 flex flex-col space-y-4 md:hidden z-50 shadow-2xl animate-fade-in">
          <Link to="/home" className="text-lg hover:text-yellow-400 group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Home</span>
          </Link>
          <Link to="/about-us" className="text-lg hover:text-yellow-400 group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">About Us</span>
          </Link>
          <div>
            <p className="text-yellow-400 font-semibold mb-2 text-lg">Services</p>
            <ul className="space-y-2">
              {servicesDropdown.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="block text-base hover:text-yellow-400 group focus:outline-none"
                  >
                    <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/blog" className="text-lg hover:text-yellow-400 group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Blog</span>
          </Link>
          <Link to="/contact-us" className="text-lg hover:text-yellow-400 group focus:outline-none">
            <span className="group-hover:scale-105 group-hover:text-blue-400 transition-transform duration-300">Contact Us</span>
          </Link>
        </div>
      )}
    </header>
  );
}
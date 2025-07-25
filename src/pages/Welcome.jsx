import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import logo from "../assets/logo1.png";
import welcomeImg from "../assets/welcome.jpg";

export default function Welcome() {
  const [isAdmin, setIsAdmin] = useState(false); // Default to "User" mode
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center flex-col md:flex-row bg-[#f4f5f7]">
      {/* Left Section (Form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 min-h-screen p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="mb-8 flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto rounded shadow-sm bg-gray-100 p-2 mr-2" />
          </div>
          {/* Role Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsAdmin(false)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${!isAdmin ? "bg-gray-300 text-gray-900" : "bg-gray-100 text-gray-500"}`}
            >
              User
            </button>
            <button
              onClick={() => setIsAdmin(true)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 ${isAdmin ? "bg-gray-300 text-gray-900" : "bg-gray-100 text-gray-500"}`}
            >
              Admin
            </button>
          </div>
          {/* Welcome Text */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome {isAdmin ? "Admin" : "User"}</h2>
          <p className="text-gray-400 mb-6">Please enter your details</p>
          {/* Login Component */}
          <Login isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login({ isAdmin }) {
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.prefillEmail || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Default admin credentials (for demo)
  const DEFAULT_ADMINS = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "superadmin@example.com", password: "superadmin123", role: "admin" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Combine with default admins for demo
    const allUsers = [...users, ...DEFAULT_ADMINS];
    
    // Find matching user
    const user = allUsers.find(
      user => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    // Check if role matches
    if ((isAdmin && user.role !== "admin") || (!isAdmin && user.role !== "user")) {
      setError(`Please login as ${user.role}`);
      return;
    }

    // Successful login
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    // Redirect based on role
    navigate(user.role === "admin" ? "/admin-dashboard" : "/home");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none text-black"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none text-black"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="text-red-500 text-sm text-center bg-red-100 p-2 rounded">{error}</div>}
        <button
          type="submit"
          className="w-full py-3 mt-4 rounded bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center text-gray-500 form-footer">
        Don't have an account?{" "}
        <Link
          to="/signup"
          state={{ isAdmin }}
          className="text-blue-600 font-medium hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
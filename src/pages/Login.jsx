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
    <div className="w-full">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <div className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded-lg">{error}</div>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-3 px-4 rounded-lg transition hover:from-gray-600 hover:to-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center text-gray-400">
        Don't have an account?{" "}
        <Link 
          to="/signup" 
          state={{ isAdmin }}
          className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Sign up
        </Link>
      </div>

      {/* Demo credentials for admin */}
      {isAdmin && (
        <div className="mt-6 p-4 bg-gray-700/30 rounded-lg text-sm border border-gray-600/30">
          <h3 className="text-black font-medium mb-2">Demo Admin Accounts:</h3>
          <ul className="space-y-1 text-black">
            {DEFAULT_ADMINS.map((admin, i) => (
              <li key={i} className="text-xs">
                <span className="text-black">Email:</span> {admin.email}<br />
                <span className="text-black">Password:</span> {admin.password}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signup({ isAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Password validation: min 6 chars, at least one special character
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 6 || !specialCharRegex.test(password)) {
      setError("Password must be at least 6 characters and contain at least one special character");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(user => user.email === email)) {
      setError("User already exists");
      return;
    }

    const newUser = {
      email,
      password,
      firstName,
      lastName,
      role: isAdmin ? "admin" : "user"
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Redirect to login with prefill and correct isAdmin
    navigate("/login", {
      state: {
        prefillEmail: email,
        isAdmin
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center">
          Sign up as {isAdmin ? "Admin" : "User"}
        </h2>
        <p className="mb-6 text-gray-500 text-center">Please enter your details</p>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
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
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
              minLength="6"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
              minLength="6"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            state={{ isAdmin }}
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

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
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
        Sign up as {isAdmin ? "Admin" : "User"}
      </h2>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500"
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
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500"
            required
            minLength="6"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500"
            required
            minLength="6"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold py-2 px-4 rounded transition hover:from-gray-600 hover:to-gray-800 shadow-lg"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4 text-center text-gray-400">
        Already have an account?{" "}
        <Link
          to="/login"
          state={{ isAdmin }}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

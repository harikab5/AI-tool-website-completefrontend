// ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// This component protects routes based on login status and user role.
// 'allowedRoles' is an array of roles that are permitted to access the route.
// Example: <ProtectedRoute allowedRoles={["user"]} /> for user-only pages
// Example: <ProtectedRoute allowedRoles={["admin"]} /> for admin-only pages
// Example: <ProtectedRoute /> for any logged-in user (no specific role check)
const ProtectedRoute = ({ allowedRoles }) => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true";
  const userRole = localStorage.getItem("userRole"); // Get the stored role

  // If not authenticated, redirect to the welcome/login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If allowedRoles are specified, check if the user's role is among them
  if (allowedRoles && allowedRoles.length > 0) {
    if (!userRole || !allowedRoles.includes(userRole)) {
      // Logged in but not authorized for this specific role
      alert("You do not have permission to access this page.");
      // Redirect to the welcome page or a dedicated unauthorized page
      return <Navigate to="/" replace />;
    }
  }

  // If authenticated and authorized, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
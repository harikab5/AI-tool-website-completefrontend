import React from "react";

const Button = ({ children, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

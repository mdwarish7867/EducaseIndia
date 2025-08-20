import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-pop-gray flex flex-col justify-center items-center p-4">
      <div className="mobile-container bg-white rounded-xl p-6 flex flex-col items-center animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-pop-text mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="w-64 h-64 bg-pop-purple-light rounded-full flex items-center justify-center mb-8">
          <svg
            className="w-32 h-32 text-pop-purple"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="w-full space-y-4">
          <Link to="/signup" className="btn-primary block w-full text-center">
            Create Account
          </Link>
          <Link to="/login" className="btn-secondary block w-full text-center">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;

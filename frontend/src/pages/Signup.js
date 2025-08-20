import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/signup", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pop-gray flex items-center justify-center p-4">
      <div className="mobile-container bg-white rounded-xl p-6 animate-slide-up">
        <h1 className="text-2xl font-bold text-pop-text mb-2">Create your</h1>
        <h1 className="text-2xl font-bold text-pop-text mb-4">PopX account</h1>

        {error && <div className="alert-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-pop-text text-sm font-medium mb-2"
              htmlFor="name"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Marry Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-pop-text text-sm font-medium mb-2"
              htmlFor="phone"
            >
              Phone number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="1234567890"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-pop-text text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="marry@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-pop-text text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              placeholder="********"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-pop-text text-sm font-medium mb-2"
              htmlFor="company"
            >
              Company name*
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input-field"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-pop-text text-sm font-medium mb-2">
              Are you an Agency?*
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  onChange={handleChange}
                  className="text-pop-purple focus:ring-pop-purple"
                  required
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  onChange={handleChange}
                  className="text-pop-purple focus:ring-pop-purple"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

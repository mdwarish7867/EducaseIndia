import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile");
        if (err.response?.status === 401) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-pop-gray flex items-center justify-center p-4">
        <div className="mobile-container bg-white rounded-xl p-6 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pop-purple mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pop-gray flex items-center justify-center p-4">
      <div className="mobile-container bg-white rounded-xl p-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-pop-text mb-6">
          Account Settings
        </h1>

        {error && <div className="alert-error">{error}</div>}

        {user && (
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-pop-purple-light rounded-full flex items-center justify-center mr-4">
                <span className="text-xl text-pop-purple font-bold">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-pop-text">
                  {user.name}
                </h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="bg-pop-gray p-4 rounded-lg">
              <p className="text-pop-text text-sm">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr. Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                Aliquyam Erat. Sed Diam
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-500 text-sm mb-1">
                  Phone Number
                </label>
                <p className="text-pop-text font-medium">
                  {user.phone || "Not provided"}
                </p>
              </div>

              <div>
                <label className="block text-gray-500 text-sm mb-1">
                  Company
                </label>
                <p className="text-pop-text font-medium">
                  {user.company || "Not provided"}
                </p>
              </div>

              <div>
                <label className="block text-gray-500 text-sm mb-1">
                  Account Type
                </label>
                <p className="text-pop-text font-medium">
                  {user.isAgency ? "Agency" : "Individual"}
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="btn-secondary w-full py-3 mt-8"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

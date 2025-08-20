const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "90d",
  });
};

// Register
router.post("/signup", async (req, res) => {
  try {
    const { name, phone, email, password, company, isAgency } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Create new user
    const newUser = await User.create({
      name,
      phone,
      email,
      password,
      company,
      isAgency: isAgency === "true",
    });

    // Remove password from output
    newUser.password = undefined;

    // Generate token
    const token = signToken(newUser._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      token,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists and password is correct
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Remove password from output
    user.password = undefined;

    // Generate token
    const token = signToken(user._id);

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;

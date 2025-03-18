import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.scheme.js";

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address } = req.body; // Include missing fields

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with all required fields
    user = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

// **SIGN IN (Login)**
router.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log the received email and password
    console.log("Sign-In Request:", { email, password });

    // Check if user exists
    const user = await User.findOne({ email });
    console.log("User Found:", user); // Log the user object to verify it was found
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Log the entered password and stored hash for debugging
    console.log("Entered Password:", password);
    console.log("Stored Hash:", user.password);

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch); // Log if password matches

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      message: "Error signing in",
      error: error.message,
      stack: error.stack,
    });
  }
});

export default router;

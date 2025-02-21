require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Extract token from cookies

    if (!token) {
      return res.status(401).json({ status: false, message: "Unauthorized access. Please log in." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Find the user from the database using the token's payload
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ status: false, message: "Unauthorized access. User not found." });
    }

    req.user = user; // Attach user data to `req` for later use
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ status: false, message: "Invalid or expired token. Please log in again." });
  }
};

module.exports = userVerification;

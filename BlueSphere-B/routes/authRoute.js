// --------------------------------------------------
// routes/auth.routes.js
// --------------------------------------------------

const express = require("express");
const authRouter = express.Router();

const authController = require("../controllers/authController");

const authMiddleware = require("../middlewares/authMiddleware");

// PUBLIC ROUTES
authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);

// PROTECTED ROUTES
authRouter.get("/me", authMiddleware, authController.getProfile);
authRouter.put("/update", authMiddleware, authController.updateProfile);

module.exports = authRouter;

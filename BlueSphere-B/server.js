require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/db");
const path = require("path");

// Import Routes
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ status: "Server running successfully 🚀" });
});

app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
  });

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    avatar: {
      type: String,
      default: "https://i.ibb.co/Yy9L2pt/default-avatar.png",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// --------------------------------------------------
// Password Hashing (pre-save middleware)
// --------------------------------------------------
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash if changed

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// --------------------------------------------------
// Compare Password
// --------------------------------------------------
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// --------------------------------------------------
// Generate JWT
// --------------------------------------------------
UserSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = mongoose.model("User", UserSchema);

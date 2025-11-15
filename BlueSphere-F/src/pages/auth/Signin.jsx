import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Simple Login handler (dummy logic)
  const handleLogin = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    // Dummy credentials check
    if (email === "admin@gmail.com" && password === "admin123") {
      toast.success("Welcome Admin!");
      setTimeout(() => navigate("/admin/dashboard"), 1000);
      return;
    }

    if (email === "fan@gmail.com" && password === "fan123") {
      toast.success("Logged in successfully!");
      setTimeout(() => navigate("/"), 1000);
      return;
    }

    toast.error("Invalid email or password");
  };

  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md bg-white border shadow-lg rounded-xl p-8'
      >
        <h1 className='text-3xl font-bold text-blue-700 mb-6 text-center'>
          Login to BlueSphere
        </h1>

        <form className='space-y-5' onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className='font-semibold text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className='font-semibold text-gray-700'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='w-full mt-4 px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 shadow'
          >
            Login
          </button>
        </form>

        {/* Redirect link */}
        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{" "}
          <a
            href='/signup'
            className='text-blue-600 font-semibold hover:underline'
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;

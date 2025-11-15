import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Account created successfully!");
    setTimeout(() => navigate("/login"), 800);
  };

  return (
    <div className='min-h-[85vh] flex items-center justify-center  px-4'>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200'
      >
        {/* Heading */}
        <h1 className='text-3xl font-bold text-blue-700 text-center mb-2'>
          Create Account
        </h1>
        <p className='text-center text-gray-600 mb-6'>
          Join the <span className='font-semibold'>BlueSphere</span> community
          🏏
        </p>

        {/* Form */}
        <form className='space-y-5' onSubmit={handleRegister}>
          {/* Full Name */}
          <div>
            <label className='font-semibold text-gray-700'>Full Name</label>
            <input
              type='text'
              placeholder='Your name'
              className='w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className='font-semibold text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className='font-semibold text-gray-700'>Password</label>
            <input
              type='password'
              placeholder='Create a password'
              className='w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className='font-semibold text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              placeholder='Re-enter password'
              className='w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type='submit'
            className='w-full px-4 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition'
          >
            Register
          </button>
        </form>

        {/* Redirect */}
        <p className='mt-6 text-center text-gray-600'>
          Already have an account?{" "}
          <a
            href='/login'
            className='text-blue-600 font-semibold hover:underline'
          >
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

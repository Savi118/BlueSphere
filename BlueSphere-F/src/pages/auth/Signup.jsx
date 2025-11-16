import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import api from "../../utils/axios";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // ✅ Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Confirm your password"),
  });

  // 🔥 react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // 🔥 API Signup Handler
  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const res = await api.post("/auth/register", formData);

      toast.success("Account created successfully 🎉");

      // Auto login after signup
      dispatch(loginSuccess(res.data));

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-[85vh] flex items-center justify-center px-4'>
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
        <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className='font-semibold text-gray-700'>Full Name</label>
            <input
              type='text'
              placeholder='Your name'
              className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring ${
                errors.name ? "border-red-500" : "focus:ring-blue-300"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className='font-semibold text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring ${
                errors.email ? "border-red-500" : "focus:ring-blue-300"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className='font-semibold text-gray-700'>Password</label>
            <input
              type='password'
              placeholder='Create a password'
              className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring ${
                errors.password ? "border-red-500" : "focus:ring-blue-300"
              }`}
              {...register("password")}
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className='font-semibold text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              placeholder='Re-enter password'
              className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "focus:ring-blue-300"
              }`}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={loading}
            className='w-full px-4 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow hover:bg-blue-700 disabled:bg-blue-400 transition'
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Redirect */}
        <p className='mt-6 text-center text-gray-600'>
          Already have an account?{" "}
          <Link
            to='/login'
            className='text-blue-600 font-semibold hover:underline'
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

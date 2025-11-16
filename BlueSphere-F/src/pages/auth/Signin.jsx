import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import api from "../../utils/axios";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Actual Login Handler
  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      // ❗ Correct API call (no extra /api)
      const res = await api.post("/auth/login", formData);

      // Store user + token
      dispatch(
        loginSuccess({
          user: res.data.user,
          token: res.data.token,
        })
      );

      toast.success("Login successful!");

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      // Interceptor already handles error toast
      console.log(err);
    } finally {
      setLoading(false);
    }
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

        <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <label className='font-semibold text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring ${
                errors.email ? "border-red-500" : "focus:ring-blue-200"
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
              placeholder='Enter your password'
              className={`w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring ${
                errors.password ? "border-red-500" : "focus:ring-blue-200"
              }`}
              {...register("password")}
            />
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full mt-4 px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 shadow disabled:bg-blue-400'
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{" "}
          <Link
            to='/signup'
            className='text-blue-600 font-semibold hover:underline'
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;

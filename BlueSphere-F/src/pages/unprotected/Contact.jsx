import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import SocialButton from "../../components/SocialButton";

const Contact = () => {
  return (
    <div className='space-y-16'>
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className='text-5xl font-extrabold bg-linear-to-r from-blue-700 via-sky-500 to-blue-600 bg-clip-text text-transparent'
      >
        Contact Us
      </motion.h1>

      {/* CONTACT FORM */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white border border-blue-100 shadow-lg rounded-2xl p-10 hover:shadow-xl transition'
      >
        <h2 className='text-3xl font-bold text-blue-700 mb-3'>
          Send a Message
        </h2>

        <div className='h-1 w-20 bg-linear-to-r from-blue-500 to-sky-400 rounded-full mb-8'></div>

        <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-700 mb-1'>
              Your Name
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              className='border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold text-gray-700 mb-1'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='you@example.com'
              className='border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition'
            />
          </div>

          <div className='md:col-span-2 flex flex-col'>
            <label className='font-semibold text-gray-700 mb-1'>
              Your Message
            </label>
            <textarea
              rows='6'
              placeholder='Write your message...'
              className='border rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition'
            ></textarea>
          </div>

          <div className='md:col-span-2'>
            <button
              type='submit'
              className='px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl font-semibold transition'
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>

      {/* SOCIAL LINKS */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white border border-blue-100 shadow-lg rounded-2xl p-10 hover:shadow-xl transition'
      >
        <h2 className='text-3xl font-bold text-blue-700 mb-3'>
          Connect With Us
        </h2>
        <div className='h-1 w-20 bg-linear-to-r from-blue-500 to-sky-400 rounded-full mb-8'></div>

        <div className='flex flex-wrap gap-4'>
          <SocialButton
            href='https://facebook.com'
            label='Facebook'
            color='bg-blue-600'
            icon={<Facebook size={18} />}
          />
          <SocialButton
            href='https://instagram.com'
            label='Instagram'
            color='bg-pink-600'
            icon={<Instagram size={18} />}
          />
          <SocialButton
            href='https://twitter.com'
            label='Twitter'
            color='bg-sky-500'
            icon={<Twitter size={18} />}
          />
          <SocialButton
            href='https://youtube.com'
            label='YouTube'
            color='bg-red-600'
            icon={<Youtube size={18} />}
          />
        </div>
      </motion.section>

      {/* CONTACT DETAILS */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white border border-blue-100 shadow-lg rounded-2xl p-10 hover:shadow-xl transition'
      >
        <h2 className='text-3xl font-bold text-blue-700 mb-3'>
          Contact Details
        </h2>
        <div className='h-1 w-20 bg-linear-to-r from-blue-500 to-sky-400 rounded-full mb-8'></div>

        <div className='space-y-4 text-lg text-gray-700'>
          <div className='flex items-center gap-3'>
            <MapPin className='text-blue-600' />
            <p>
              <span className='font-semibold'>Location:</span> Mumbai, India
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <Mail className='text-blue-600' />
            <p>
              <span className='font-semibold'>Email:</span>{" "}
              bluesphere@support.com
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <Phone className='text-blue-600' />
            <p>
              <span className='font-semibold'>Business Hours:</span> Mon - Fri
              (10:00 AM – 6:00 PM)
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;

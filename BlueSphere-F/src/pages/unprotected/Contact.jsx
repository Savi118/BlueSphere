import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='space-y-16'>
      <h1 className='text-4xl font-bold text-blue-700'>Contact Us</h1>

      {/* CONTACT FORM */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white border shadow rounded-xl p-8'
      >
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Send a Message
        </h2>

        <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-700 mb-1'>
              Your Name
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              className='border rounded-lg px-4 py-2 shadow-sm'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold text-gray-700 mb-1'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='you@example.com'
              className='border rounded-lg px-4 py-2 shadow-sm'
            />
          </div>

          <div className='md:col-span-2 flex flex-col'>
            <label className='font-semibold text-gray-700 mb-1'>
              Your Message
            </label>
            <textarea
              rows='5'
              placeholder='Write your message...'
              className='border rounded-lg px-4 py-2 shadow-sm'
            ></textarea>
          </div>

          <div className='md:col-span-2'>
            <button
              type='submit'
              className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700'
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>

      {/* SOCIAL LINKS */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Connect With Us
        </h2>

        <div className='flex flex-wrap gap-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            className='px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            className='px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700'
          >
            Instagram
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            className='px-5 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600'
          >
            Twitter (X)
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            className='px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700'
          >
            YouTube
          </a>
        </div>
      </section>

      {/* LOCATION AND EMAIL */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Contact Details
        </h2>

        <div className='space-y-4 text-lg text-gray-700'>
          <p>
            📍 <span className='font-semibold'>Location:</span> Mumbai, India
          </p>
          <p>
            📧 <span className='font-semibold'>Email:</span>{" "}
            bluesphere@support.com
          </p>
          <p>
            🕒 <span className='font-semibold'>Business Hours:</span>
            Mon - Fri (10:00 AM – 6:00 PM)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

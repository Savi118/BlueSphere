import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const QuickLink = ({ title, desc, to }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className='bg-white rounded-xl p-6 shadow border'
  >
    <h4 className='text-xl font-semibold text-blue-700'>{title}</h4>
    <p className='text-gray-600 mt-2 mb-4'>{desc}</p>
    <Link
      to={to}
      className='inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
    >
      Open →
    </Link>
  </motion.div>
);

export default QuickLink;

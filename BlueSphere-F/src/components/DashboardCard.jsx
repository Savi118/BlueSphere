import { motion } from "framer-motion";

const DashboardCard = ({ icon, label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    className='bg-white shadow-lg p-6 rounded-xl border flex items-center gap-4'
  >
    <div className='text-blue-600'>{icon}</div>

    <div>
      <p className='text-gray-600'>{label}</p>
      <h3 className='text-3xl font-bold'>{value}</h3>
    </div>
  </motion.div>
);

export default DashboardCard;

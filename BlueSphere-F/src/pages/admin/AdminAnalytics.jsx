import { motion } from "framer-motion";
import { BarChart3, Users, Newspaper, ThumbsUp, Activity } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";

const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <div className='space-y-12'>
        <h1 className='text-3xl font-bold text-blue-700'>Analytics Overview</h1>

        {/* TOP STATS */}
        <section className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className='bg-white border rounded-xl shadow p-6 text-center'>
            <Users size={32} className='mx-auto text-blue-600' />
            <h3 className='text-xl font-bold mt-3'>14.2K</h3>
            <p className='text-gray-600 text-sm'>Monthly Visitors</p>
          </div>

          <div className='bg-white border rounded-xl shadow p-6 text-center'>
            <Newspaper size={32} className='mx-auto text-blue-600' />
            <h3 className='text-xl font-bold mt-3'>42</h3>
            <p className='text-gray-600 text-sm'>Articles Published</p>
          </div>

          <div className='bg-white border rounded-xl shadow p-6 text-center'>
            <Activity size={32} className='mx-auto text-blue-600' />
            <h3 className='text-xl font-bold mt-3'>68%</h3>
            <p className='text-gray-600 text-sm'>User Engagement</p>
          </div>

          <div className='bg-white border rounded-xl shadow p-6 text-center'>
            <ThumbsUp size={32} className='mx-auto text-blue-600' />
            <h3 className='text-xl font-bold mt-3'>312</h3>
            <p className='text-gray-600 text-sm'>Poll Votes</p>
          </div>
        </section>

        {/* CHARTS */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* VISITOR CHART */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white border rounded-xl shadow p-6'
          >
            <h3 className='text-xl font-bold mb-4 text-blue-700'>
              Visitors Growth
            </h3>
            <img
              src="https://quickchart.io/chart?c={type:'line',data:{labels:['Jan','Feb','Mar','Apr','May'],datasets:[{label:'Visitors',data:[10,20,15,25,30]}]}}"
              alt='chart'
              className='w-full rounded-lg'
            />
          </motion.div>

          {/* NEWS PERFORMANCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white border rounded-xl shadow p-6'
          >
            <h3 className='text-xl font-bold mb-4 text-blue-700'>
              News Performance
            </h3>
            <img
              src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Team','Rankings','Series','Interviews'],datasets:[{label:'Articles',data:[12,5,14,11]}]}}"
              alt='chart'
              className='w-full rounded-lg'
            />
          </motion.div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;

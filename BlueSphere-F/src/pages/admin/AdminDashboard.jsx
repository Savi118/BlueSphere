import { Link } from "react-router-dom";
import {
  Users,
  Newspaper,
  BarChart3,
  MessageSquare,
  ListChecks,
  CalendarCheck,
} from "lucide-react";
import DashboardCard from "../../components/DashboardCard";
import QuickLink from "../../components/QuickLink";

const AdminDashboard = () => {
  return (
    <div className='flex min-h-[85vh]'>
      {/* SIDEBAR */}
      <aside className='w-64 bg-blue-700 text-white p-6 space-y-6 hidden md:block'>
        <h1 className='text-2xl font-bold'>Admin Panel</h1>

        <nav className='space-y-4'>
          <Link
            to='/admin/dashboard'
            className='block py-2 px-3 rounded hover:bg-blue-600 transition'
          >
            Dashboard
          </Link>
          <Link
            to='/admin/players'
            className='block py-2 px-3 rounded hover:bg-blue-600 transition'
          >
            Player Manager
          </Link>
          <Link
            to='/admin/matches'
            className='block py-2 px-3 rounded hover:bg-blue-600 transition'
          >
            Match Manager
          </Link>
          <Link
            to='/admin/news'
            className='block py-2 px-3 rounded hover:bg-blue-600 transition'
          >
            News Manager
          </Link>
          <Link
            to='/admin/polls'
            className='block py-2 px-3 rounded hover:bg-blue-600 transition'
          >
            Poll Manager
          </Link>
          <Link
            to='/admin/comments'
            className='block py-2 px-3 rounded hover:bg-blue-600 transition'
          >
            Comment Moderation
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className='flex-1 p-6 space-y-10 bg-gray-50'>
        {/* TOPBAR */}
        <div className='flex justify-between items-center bg-white shadow p-4 rounded-xl'>
          <h2 className='text-2xl font-bold text-blue-700'>
            Dashboard Overview
          </h2>
          <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>
            Logout
          </button>
        </div>

        {/* DASHBOARD CARDS */}
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <DashboardCard
            icon={<Users size={32} />}
            label='Total Players'
            value='24'
          />

          <DashboardCard
            icon={<CalendarCheck size={32} />}
            label='Scheduled Matches'
            value='6'
          />

          <DashboardCard
            icon={<Newspaper size={32} />}
            label='Published News'
            value='18'
          />

          <DashboardCard
            icon={<ListChecks size={32} />}
            label='Active Polls'
            value='3'
          />

          <DashboardCard
            icon={<MessageSquare size={32} />}
            label='Pending Comments'
            value='12'
          />

          <DashboardCard
            icon={<BarChart3 size={32} />}
            label='Site Visitors'
            value='14.2K'
          />
        </section>

        {/* QUICK LINKS SECTION */}
        <section>
          <h3 className='text-2xl font-bold text-blue-700 mb-4'>
            Quick Management
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <QuickLink
              title='Manage Players'
              to='/admin/players'
              desc='Add, edit, delete players'
            />

            <QuickLink
              title='Manage Matches'
              to='/admin/matches'
              desc='Update upcoming or past matches'
            />

            <QuickLink
              title='Manage News'
              to='/admin/news'
              desc='Publish or edit news articles'
            />

            <QuickLink
              title='Manage Polls'
              to='/admin/polls'
              desc='Create live polls'
            />

            <QuickLink
              title='Comments Moderation'
              to='/admin/comments'
              desc='Approve or delete comments'
            />

            <QuickLink
              title='Analytics'
              to='/admin/analytics'
              desc='Visual overview of performance'
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;

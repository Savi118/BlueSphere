import {
  Users,
  Newspaper,
  BarChart3,
  MessageSquare,
  ListChecks,
  CalendarCheck,
} from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import DashboardCard from "../../components/DashboardCard";
import QuickLink from "../../components/QuickLink";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className='text-3xl font-bold text-blue-700 mb-8'>
        Dashboard Overview
      </h1>

      {/* CARDS */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <DashboardCard icon={<Users />} label='Total Players' value='24' />
        <DashboardCard
          icon={<CalendarCheck />}
          label='Scheduled Matches'
          value='6'
        />
        <DashboardCard icon={<Newspaper />} label='Published News' value='18' />
        <DashboardCard icon={<ListChecks />} label='Active Polls' value='3' />
        <DashboardCard
          icon={<MessageSquare />}
          label='Pending Comments'
          value='12'
        />
        <DashboardCard
          icon={<BarChart3 />}
          label='Site Visitors'
          value='14.2K'
        />
      </section>

      {/* QUICK LINKS */}
      <section className='mt-12'>
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
            desc='Review & approve comments'
          />
          <QuickLink
            title='Analytics'
            to='/admin/analytics'
            desc='View graphs & charts'
          />
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;

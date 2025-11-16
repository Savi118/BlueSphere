import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Newspaper,
  ListChecks,
  MessageSquare,
  BarChart3,
  Menu,
  X,
} from "lucide-react";

const sidebarLinks = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  { to: "/admin/players", label: "Player Manager", icon: <Users size={20} /> },
  {
    to: "/admin/matches",
    label: "Match Manager",
    icon: <CalendarCheck size={20} />,
  },
  { to: "/admin/news", label: "News Manager", icon: <Newspaper size={20} /> },
  { to: "/admin/polls", label: "Poll Manager", icon: <ListChecks size={20} /> },
  {
    to: "/admin/comments",
    label: "Comments",
    icon: <MessageSquare size={20} />,
  },
  { to: "/admin/analytics", label: "Analytics", icon: <BarChart3 size={20} /> },
];

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full 
          bg-blue-800 text-white shadow-xl 
          z-20   /* UPDATED: sidebar behind main navbar */
          transition-all duration-300
          ${open ? "w-64" : "w-0 md:w-64 overflow-hidden"}
        `}
      >
        <div className='p-6 border-b border-blue-700 flex justify-between items-center'>
          <h1 className='text-2xl font-bold tracking-wide'>Admin Panel</h1>

          {/* Mobile close button */}
          <button className='md:hidden' onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className='p-4 space-y-2'>
          {sidebarLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition 
                ${isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"}`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className='flex-1'>
        {/* TOPBAR */}
        <header
          className='
            bg-white shadow p-4 flex justify-between items-center 
            sticky top-0 
            z-30       /* UPDATED: topbar stays above sidebar */
          '
        >
          <button className='md:hidden' onClick={() => setOpen(true)}>
            <Menu size={28} className='text-blue-700' />
          </button>

          <h2 className='text-xl font-bold text-blue-700'>BlueSphere Admin</h2>

          <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>
            Logout
          </button>
        </header>

        {/* CONTENT */}
        <main className='p-6'>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;

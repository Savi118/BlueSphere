import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  let user = null;
  // user = "admin";
  user = "fan";

  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const baseLinks = [
    { to: "/", label: "Home" },
    { to: "/squad", label: "Squad" },
    { to: "/matches", label: "Matches" },
    { to: "/stats", label: "Stats" },
    { to: "/news", label: "News" },
    { to: "/fan-zone", label: "Fan Zone" },
    { to: "/contact", label: "Contact" },
  ];

  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/players", label: "Manage Players" },
    { to: "/admin/matches", label: "Manage Matches" },
    { to: "/admin/news", label: "Manage News" },
    { to: "/admin/polls", label: "Manage Polls" },
  ];

  const fanLinks = [
    { to: "/favorites", label: "Favorites" },
    { to: "/profile", label: "Profile" },
  ];

  const linkClass =
    "px-4 py-2 text-gray-700 hover:text-blue-700 transition font-medium relative group";

  const activeUnderline =
    "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-700 after:rounded-full";

  const hoverUnderline =
    "group-hover:after:w-full after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300";

  return (
    <header className='bg-white/70 backdrop-blur-md border-b border-blue-200 w-full px-6 py-3 shadow-sm sticky top-0 z-50'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <h1 className='text-4xl font-extrabold bg-linear-to-r from-blue-700 via-sky-500 to-green-500 bg-clip-text text-transparent drop-shadow-sm'>
            BlueSphere
          </h1>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className='md:hidden text-gray-700 text-3xl focus:outline-none'
        >
          {mobileMenu ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-4 text-lg'>
          {baseLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "text-blue-800 font-semibold " + activeUnderline
                    : hoverUnderline
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {user === null ? (
            <>
              {/* Sign In */}
              <Link
                to='/login'
                className='px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white shadow-sm transition font-semibold'
              >
                Sign In
              </Link>

              {/* Join */}
              <Link
                to='/signup'
                className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg font-semibold'
              >
                Join Fan Club
              </Link>
            </>
          ) : (
            <>
              {/* Admin Dropdown */}
              {user === "admin" ? (
                <div className='relative'>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center gap-1'
                  >
                    Admin Panel ▾
                  </button>

                  {openDropdown && (
                    <div className='absolute top-12 right-0 bg-white shadow-xl border border-gray-200 rounded-lg w-64 py-2 z-50 animate-fadeIn'>
                      {adminLinks.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpenDropdown(false)}
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition'
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                fanLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `${linkClass} ${
                        isActive
                          ? "text-blue-800 font-semibold " + activeUnderline
                          : hoverUnderline
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))
              )}

              {/* Logout Button */}
              <button className='ml-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600'>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className='md:hidden mt-4 bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-4 space-y-3 animate-fadeIn'>
          {baseLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenu(false)}
              className='block py-2 text-gray-700 hover:text-blue-700 transition'
            >
              {item.label}
            </NavLink>
          ))}

          {user === null ? (
            <>
              <Link
                to='/login'
                onClick={() => setMobileMenu(false)}
                className='block py-2 bg-blue-600 text-white text-center rounded-lg shadow hover:bg-blue-700'
              >
                Sign In
              </Link>
              <Link
                to='/signup'
                onClick={() => setMobileMenu(false)}
                className='block py-2 bg-blue-600 text-white text-center rounded-lg shadow hover:bg-blue-700'
              >
                Join Fan Club
              </Link>
            </>
          ) : (
            <>
              {/* Admin Panel */}
              {user === "admin" && (
                <div className='pt-2 border-t'>
                  <p className='font-semibold text-gray-800 mb-2'>
                    Admin Panel
                  </p>
                  {adminLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenu(false)}
                      className='block py-2 text-gray-700 hover:text-blue-700 transition'
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}

              {/* Fan Links */}
              {user !== "admin" &&
                fanLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenu(false)}
                    className='block py-2 text-gray-700 hover:text-blue-700 transition'
                  >
                    {item.label}
                  </NavLink>
                ))}

              <button className='w-full py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600'>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

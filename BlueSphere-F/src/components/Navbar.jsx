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
    "px-4 py-2 text-gray-700 hover:text-blue-600 transition font-medium";

  return (
    <header className='bg-blue-100 border-b border-blue-200 w-full px-6 py-4 shadow-sm'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <h1 className='bg-linear-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-4xl font-extrabold text-transparent'>
            BlueSphere
          </h1>
        </Link>

        {/* Hamburger Button (Mobile) */}
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
                  isActive ? "text-blue-800 font-semibold underline" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {user === null ? (
            <>
              <Link
                to='/login'
                className='px-4 py-2 text-blue-600 hover:border-blue-600 border-0 rounded-lg hover:shadow hover:text-white hover:bg-blue-600 font-semibold'
              >
                Sign In
              </Link>
              <Link
                to='/signup'
                className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 font-semibold'
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
                    className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700'
                  >
                    Admin Panel ▾
                  </button>

                  {openDropdown && (
                    <div className='absolute top-12 right-0 bg-white shadow-xl border border-gray-200 rounded-lg w-60 py-2 z-50'>
                      {adminLinks.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                          onClick={() => setOpenDropdown(false)}
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
                        isActive ? "text-blue-800 font-semibold underline" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))
              )}

              <button className='ml-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600'>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenu && (
        <div className='md:hidden mt-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-3'>
          {baseLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenu(false)}
              className='block py-2 text-gray-700 hover:text-blue-600'
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
              {/* Admin dropdown for mobile */}
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
                      className='block py-2 pl-2 text-gray-700 hover:text-blue-600'
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}

              {/* Fan links */}
              {user !== "admin" &&
                fanLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenu(false)}
                    className='block py-2 text-gray-700 hover:text-blue-600'
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

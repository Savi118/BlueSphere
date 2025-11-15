import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-white border-t border-blue-200 mt-16'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* BRAND */}
        <div>
          <h2 className='text-3xl font-extrabold bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent'>
            BlueSphere
          </h2>
          <p className='text-gray-600 mt-3'>
            Your ultimate hub for Team India cricket. Live scores, news, stats,
            squads, and interactive fan experiences — all in one place.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className='text-xl font-bold text-blue-700 mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-700'>
            <li>
              <Link className='hover:text-blue-600' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='hover:text-blue-600' to='/squad'>
                Squad
              </Link>
            </li>
            <li>
              <Link className='hover:text-blue-600' to='/matches'>
                Matches
              </Link>
            </li>
            <li>
              <Link className='hover:text-blue-600' to='/news'>
                News
              </Link>
            </li>
            <li>
              <Link className='hover:text-blue-600' to='/fan-zone'>
                Fan Zone
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className='text-xl font-bold text-blue-700 mb-4'>Contact</h3>
          <ul className='space-y-3 text-gray-700'>
            <li className='flex items-center gap-2'>
              <Mail size={18} className='text-blue-600' />
              bluesphere@support.com
            </li>
            <li className='flex items-center gap-2'>
              <MapPin size={18} className='text-blue-600' />
              Mumbai, India
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className='text-xl font-bold text-blue-700 mb-4'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href='https://facebook.com' target='_blank'>
              <Facebook
                className='text-blue-600 hover:text-blue-800'
                size={28}
              />
            </a>
            <a href='https://instagram.com' target='_blank'>
              <Instagram
                className='text-pink-600 hover:text-pink-700'
                size={28}
              />
            </a>
            <a href='https://twitter.com' target='_blank'>
              <Twitter className='text-sky-500 hover:text-sky-600' size={28} />
            </a>
            <a href='https://youtube.com' target='_blank'>
              <Youtube className='text-red-600 hover:text-red-700' size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className='border-t border-blue-200 bg-blue-50 py-4 text-center text-gray-700'>
        © {new Date().getFullYear()} BlueSphere. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

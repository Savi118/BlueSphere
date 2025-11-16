// Core modules
import "./App.css";
import { Routes, Route } from "react-router-dom";

// --- Pages (create these files later) ---
import Home from "./pages/unprotected/Home";
import Squad from "./pages/unprotected/Squad";
import Matches from "./pages/unprotected/Matches";
import Stats from "./pages/unprotected/Stats";
import News from "./pages/unprotected/News";
import FanZone from "./pages/unprotected/FanZone";
import Contact from "./pages/unprotected/Contact";

// --- Auth pages ---
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";

// --- Fan pages ---
import Favorites from "./pages/fans/Favorites";
import Profile from "./pages/fans/Profile";

// --- Admin pages ---
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPlayers from "./pages/admin/AdminPlayers";
import AdminMatches from "./pages/admin/AdminMatches";
import AdminNews from "./pages/admin/AdminNews";
import AdminPolls from "./pages/admin/AdminPolls";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminComments from "./pages/admin/AdminComments";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Additional Pages
import PlayerProfile from "./pages/additional/PlayerProfile";
import MatchDetail from "./pages/additional/MatchDetail";
import NewsDetail from "./pages/additional/NewsDetail";

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
      <Navbar />

      {/* Page content wrapper */}
      <main className='flex-1 px-6 py-8'>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/squad' element={<Squad />} />
          <Route path='/squad/:playerId' element={<PlayerProfile />} />
          <Route path='/matches' element={<Matches />} />
          <Route path='/matches/:matchId' element={<MatchDetail />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:newsId' element={<NewsDetail />} />
          <Route path='/fan-zone' element={<FanZone />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />

          {/* Fan Routes */}
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/profile' element={<Profile />} />

          {/* Admin Routes */}
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/players' element={<AdminPlayers />} />
          <Route path='/admin/matches' element={<AdminMatches />} />
          <Route path='/admin/news' element={<AdminNews />} />
          <Route path='/admin/polls' element={<AdminPolls />} />
          <Route path='/admin/comments' element={<AdminComments />} />
          <Route path='/admin/analytics' element={<AdminAnalytics />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

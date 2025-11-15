import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [liveScore, setLiveScore] = useState(null);

  // Auto-refresh live scores every 15 seconds
  useEffect(() => {
    const fetchScore = async () => {
      try {
        // Replace with a real cricket API
        const response = await fetch("https://api.example.com/live-score");
        const data = await response.json();
        setLiveScore(data);
      } catch (err) {
        setLiveScore({
          match: "India vs Australia",
          score: "IND 178/3 (17.2)",
          status: "Live • T20",
        });
      }
    };

    fetchScore();
    const interval = setInterval(fetchScore, 15000);

    return () => clearInterval(interval);
  }, []);

  // Dummy Players
  const featuredPlayers = [
    {
      name: "Virat Kohli",
      role: "Batsman",
      img: "/images/virat.png",
    },
    {
      name: "Rohit Sharma",
      role: "Batsman",
      img: "/images/rohit.png",
    },
    {
      name: "Jasprit Bumrah",
      role: "Bowler",
      img: "/images/bumrah.png",
    },
  ];

  // Dummy news preview
  const news = [
    {
      id: 1,
      title: "India announces squad for upcoming T20 series",
      date: "Nov 15, 2025",
    },
    {
      id: 2,
      title: "Shubman Gill hits spectacular century vs England",
      date: "Nov 14, 2025",
    },
  ];

  return (
    <div className='space-y-16'>
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 text-white rounded-xl p-10 shadow-lg flex flex-col md:flex-row items-center justify-between'
      >
        <div>
          <h1 className='text-5xl font-extrabold mb-4'>Team India 🇮🇳</h1>
          <p className='text-lg max-w-xl opacity-90'>
            Welcome to BlueSphere — your ultimate Indian cricket hub. Stay
            updated with live scores, team stats, latest news, and more!
          </p>

          <div className='mt-6 flex gap-4'>
            <Link
              to='/squad'
              className='px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-gray-100'
            >
              View Squad
            </Link>
            <Link
              to='/matches'
              className='px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold shadow hover:bg-blue-950'
            >
              View Matches
            </Link>
          </div>
        </div>

        <motion.img
          src='/images/logo.png'
          alt='Team India'
          className='w-72 mt-6 md:mt-0'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.section>

      {/* NEXT MATCH WIDGET */}
      <section className='bg-white shadow-lg rounded-xl p-8 border border-gray-200'>
        <h2 className='text-3xl font-bold mb-4 text-blue-700'>Next Match</h2>
        <p className='text-lg'>India vs South Africa</p>
        <p className='text-gray-600'>Date: 20 Nov 2025</p>
        <p className='text-gray-600'>Location: Mumbai Stadium</p>

        <Link
          to='/matches'
          className='mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        >
          View Match Details
        </Link>
      </section>

      {/* LIVE SCORE BOX */}
      <section className='bg-blue-100 rounded-xl p-8 shadow border border-blue-200'>
        <h2 className='text-3xl font-bold text-blue-800 mb-4'>Live Score</h2>

        {liveScore ? (
          <div>
            <p className='text-xl font-semibold'>{liveScore.match}</p>
            <p className='text-3xl font-bold text-blue-700 mt-2'>
              {liveScore.score}
            </p>
            <p className='text-gray-700 mt-1'>{liveScore.status}</p>
          </div>
        ) : (
          <p>Loading live score...</p>
        )}
      </section>

      {/* FEATURED PLAYERS */}
      <section>
        <h2 className='text-3xl font-bold mb-6 text-blue-700'>
          Featured Players
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {featuredPlayers.map((player) => (
            <motion.div
              key={player.name}
              whileHover={{ scale: 1.05 }}
              className='bg-white shadow border border-gray-200 rounded-xl p-6 text-center'
            >
              <img
                src={player.img}
                alt={player.name}
                className='w-32 mx-auto mb-4'
              />
              <h3 className='text-xl font-bold'>{player.name}</h3>
              <p className='text-gray-600'>{player.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LATEST NEWS */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>Latest News</h2>
        <div className='space-y-4'>
          {news.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className='block bg-white border border-gray-200 shadow hover:bg-gray-50 p-4 rounded-lg'
            >
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <p className='text-gray-500 text-sm'>{item.date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TEAM STATS */}
      <section className='bg-white shadow-lg border border-gray-200 p-8 rounded-xl'>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          Team Stats Overview
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='p-6 text-center bg-blue-50 rounded-lg'>
            <p className='text-5xl font-bold text-blue-700'>64%</p>
            <p className='text-gray-600'>Win Rate (all formats)</p>
          </div>

          <div className='p-6 text-center bg-blue-50 rounded-lg'>
            <p className='text-5xl font-bold text-blue-700'>#2</p>
            <p className='text-gray-600'>ICC ODI Ranking</p>
          </div>

          <div className='p-6 text-center bg-blue-50 rounded-lg'>
            <p className='text-5xl font-bold text-blue-700'>#1</p>
            <p className='text-gray-600'>ICC T20 Ranking</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

// Dummy Database (replace with API later)
const playersDB = {
  1: {
    id: 1,
    name: "Rohit Sharma",
    role: "Batsman",
    img: "https://i.ibb.co/pKGt67m/rohit.png",
    age: 38,
    country: "India",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak",

    career: {
      ODI: { matches: 265, runs: 10700, avg: 49.3, wickets: 8 },
      T20: { matches: 148, runs: 3850, avg: 32.1, wickets: 1 },
      Test: { matches: 57, runs: 4137, avg: 45.3, wickets: 2 },
    },

    graphData: [
      { year: 2019, runs: 1490, wickets: 2 },
      { year: 2020, runs: 498, wickets: 0 },
      { year: 2021, runs: 906, wickets: 1 },
      { year: 2022, runs: 657, wickets: 0 },
      { year: 2023, runs: 1140, wickets: 2 },
    ],

    recentMatches: [
      { match: "IND vs AUS", format: "ODI", runs: 78, wickets: 0 },
      { match: "IND vs ENG", format: "T20", runs: 42, wickets: 0 },
      { match: "IND vs SA", format: "Test", runs: 103, wickets: 0 },
    ],

    news: [
      { id: 11, title: "Rohit Sharma leads India to massive win" },
      { id: 12, title: "Rohit hits blistering 90 vs Pakistan" },
    ],
  },

  // Add more players here...
};

const PlayerProfile = () => {
  const { playerId } = useParams();
  const player = playersDB[playerId];

  const [isLoggedIn] = useState(true); // change based on auth

  if (!player) {
    return <h2 className='text-2xl text-red-600'>Player not found.</h2>;
  }

  return (
    <div className='space-y-12'>
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-linear-to-r from-blue-600 via-blue-400 to-blue-200 text-white rounded-xl p-10 flex flex-col md:flex-row items-center justify-between'
      >
        <div className='max-w-lg'>
          <h1 className='text-5xl font-extrabold'>{player.name}</h1>
          <p className='text-xl opacity-90 mt-2'>{player.role}</p>

          <div className='mt-6 space-y-1 text-blue-100'>
            <p>Age: {player.age}</p>
            <p>Batting: {player.battingStyle}</p>
            <p>Bowling: {player.bowlingStyle}</p>
          </div>

          {isLoggedIn && (
            <button className='mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold shadow hover:bg-gray-100'>
              Add to Favorites ❤️
            </button>
          )}
        </div>

        <motion.img
          src={player.img}
          alt={player.name}
          className='w-72 mt-6 md:mt-0'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        />
      </motion.section>

      {/* CAREER SUMMARY */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          Career Summary
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {Object.entries(player.career).map(([format, stats]) => (
            <div key={format} className='bg-white shadow border p-6 rounded-xl'>
              <h3 className='text-xl font-bold'>{format}</h3>
              <p>Matches: {stats.matches}</p>
              <p>Runs: {stats.runs}</p>
              <p>Average: {stats.avg}</p>
              <p>Wickets: {stats.wickets}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE GRAPH */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Performance Graph (Last 5 Years)
        </h2>

        <div className='bg-white shadow border rounded-xl p-6 h-72'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={player.graphData}>
              <Line
                type='monotone'
                dataKey='runs'
                stroke='#2563eb'
                strokeWidth={3}
              />
              <Line
                type='monotone'
                dataKey='wickets'
                stroke='#dc2626'
                strokeWidth={3}
              />
              <CartesianGrid stroke='#ccc' />
              <XAxis dataKey='year' />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* RECENT MATCHES */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          Recent Matches
        </h2>

        <table className='w-full bg-white border rounded-xl shadow overflow-hidden'>
          <thead className='bg-blue-100 text-blue-700'>
            <tr>
              <th className='p-3 text-left'>Match</th>
              <th className='p-3 text-left'>Format</th>
              <th className='p-3 text-left'>Runs</th>
              <th className='p-3 text-left'>Wickets</th>
            </tr>
          </thead>

          <tbody>
            {player.recentMatches.map((m, i) => (
              <tr key={i} className='border-t'>
                <td className='p-3'>{m.match}</td>
                <td className='p-3'>{m.format}</td>
                <td className='p-3 font-bold'>{m.runs}</td>
                <td className='p-3'>{m.wickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* RELATED NEWS */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>Related News</h2>

        <div className='space-y-4'>
          {player.news.map((n) => (
            <Link
              key={n.id}
              to={`/news/${n.id}`}
              className='block p-4 bg-white border rounded-lg shadow hover:bg-gray-100'
            >
              <h3 className='text-xl'>{n.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlayerProfile;

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Matches = () => {
  // Dummy Matches Data
  const matchesDB = [
    {
      id: 1,
      type: "upcoming",
      opponent: "Australia",
      format: "ODI",
      date: "22 Nov 2025",
      time: "2:00 PM IST",
      venue: "Mumbai",
      live: false,
    },
    {
      id: 2,
      type: "upcoming",
      opponent: "England",
      format: "T20",
      date: "28 Nov 2025",
      time: "7:00 PM IST",
      venue: "Ahmedabad",
      live: false,
    },
    {
      id: 3,
      type: "completed",
      opponent: "Pakistan",
      format: "T20",
      result: "India won by 35 runs",
      date: "10 Nov 2025",
      live: false,
    },
    {
      id: 4,
      type: "completed",
      opponent: "South Africa",
      format: "Test",
      result: "Match Drawn",
      date: "5 Nov 2025",
      live: false,
    },
    {
      id: 5,
      type: "upcoming",
      opponent: "New Zealand",
      format: "T20",
      date: "18 Nov 2025",
      venue: "Delhi",
      time: "7:30 PM IST",
      live: true, // LIVE indicator
    },
  ];

  const [activeTab, setActiveTab] = useState("upcoming");
  const [formatFilter, setFormatFilter] = useState("All");
  const [opponentFilter, setOpponentFilter] = useState("All");

  // Unique opponents
  const opponents = ["All", ...new Set(matchesDB.map((m) => m.opponent))];

  // Filtered Matches
  const filteredMatches = matchesDB.filter((m) => {
    const matchTab = m.type === activeTab;
    const matchFormat = formatFilter === "All" || m.format === formatFilter;
    const matchOpponent =
      opponentFilter === "All" || m.opponent === opponentFilter;

    return matchTab && matchFormat && matchOpponent;
  });

  return (
    <div className='space-y-10'>
      <h1 className='text-4xl font-bold text-blue-700'>Matches</h1>

      {/* TOGGLE BUTTONS */}
      <div className='flex gap-4'>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === "upcoming"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === "completed"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Completed
        </button>
      </div>

      {/* FILTERS */}
      <div className='bg-white shadow border border-gray-200 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Format Filter */}
        <div>
          <label className='text-gray-700 font-semibold'>Format</label>
          <select
            className='w-full mt-2 px-3 py-2 border rounded-lg shadow-sm'
            value={formatFilter}
            onChange={(e) => setFormatFilter(e.target.value)}
          >
            <option>All</option>
            <option>ODI</option>
            <option>T20</option>
            <option>Test</option>
          </select>
        </div>

        {/* Opponent Filter */}
        <div>
          <label className='text-gray-700 font-semibold'>Opponent</label>
          <select
            className='w-full mt-2 px-3 py-2 border rounded-lg shadow-sm'
            value={opponentFilter}
            onChange={(e) => setOpponentFilter(e.target.value)}
          >
            {opponents.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </select>
        </div>
      </div>

      {/* MATCH LIST */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {filteredMatches.length === 0 && (
          <p className='text-gray-600 text-lg col-span-full'>
            No matches found.
          </p>
        )}

        {filteredMatches.map((match) => (
          <motion.div
            key={match.id}
            whileHover={{ scale: 1.03 }}
            className='bg-white shadow-lg border border-gray-200 rounded-xl p-6 relative'
          >
            {/* LIVE INDICATOR */}
            {match.live && (
              <span className='absolute top-3 right-3 text-sm bg-red-600 text-white px-3 py-1 rounded-full animate-pulse'>
                LIVE
              </span>
            )}

            <h2 className='text-2xl font-bold text-blue-700'>
              India vs {match.opponent}
            </h2>

            <p className='mt-2 text-gray-600'>
              Format: <span className='font-semibold'>{match.format}</span>
            </p>

            <p className='mt-1 text-gray-600'>Date: {match.date}</p>

            {activeTab === "upcoming" && (
              <>
                <p className='text-gray-600'>Time: {match.time}</p>
                <p className='text-gray-600'>Venue: {match.venue}</p>
              </>
            )}

            {activeTab === "completed" && (
              <p className='mt-2 font-semibold text-green-700'>
                Result: {match.result}
              </p>
            )}

            <Link
              to={`/matches/${match.id}`}
              className='mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium'
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Matches;

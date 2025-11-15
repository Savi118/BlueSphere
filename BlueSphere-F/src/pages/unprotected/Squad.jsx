import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Squad = () => {
  // Dummy Player Data
  const playersData = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "Batsman",
      formats: ["ODI", "T20", "Test"],
      img: "https://i.ibb.co/pKGt67m/rohit.png",
    },
    {
      id: 2,
      name: "Virat Kohli",
      role: "Batsman",
      formats: ["ODI", "T20", "Test"],
      img: "https://i.ibb.co/0QyY8V4/kohli.png",
    },
    {
      id: 3,
      name: "Hardik Pandya",
      role: "All-rounder",
      formats: ["T20", "ODI"],
      img: "https://i.ibb.co/3BKC4D1/hardik.png",
    },
    {
      id: 4,
      name: "Jasprit Bumrah",
      role: "Bowler",
      formats: ["ODI", "T20", "Test"],
      img: "https://i.ibb.co/2PSxKRB/bumrah.png",
    },
    {
      id: 5,
      name: "Rishabh Pant",
      role: "WK",
      formats: ["ODI", "T20", "Test"],
      img: "https://i.ibb.co/GVSBkxg/pant.png",
    },
  ];

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [format, setFormat] = useState("All");

  // Filter Function
  const filteredPlayers = playersData.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchRole = role === "All" || p.role === role;
    const matchFormat = format === "All" || p.formats.includes(format);

    return matchSearch && matchRole && matchFormat;
  });

  return (
    <div className='space-y-10'>
      <h1 className='text-4xl font-bold text-blue-700'>Team India Squad</h1>

      {/* FILTERS */}
      <div className='bg-white shadow-md border border-gray-200 p-6 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-6'>
        {/* Search */}
        <div>
          <label className='text-gray-700 font-semibold'>Search Player</label>
          <input
            type='text'
            placeholder='Search by name...'
            className='w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Role Filter */}
        <div>
          <label className='text-gray-700 font-semibold'>Role</label>
          <select
            className='w-full mt-2 px-3 py-2 border rounded-lg shadow-sm'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>All</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>All-rounder</option>
            <option>WK</option>
          </select>
        </div>

        {/* Format Filter */}
        <div>
          <label className='text-gray-700 font-semibold'>Format</label>
          <select
            className='w-full mt-2 px-3 py-2 border rounded-lg shadow-sm'
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option>All</option>
            <option>ODI</option>
            <option>T20</option>
            <option>Test</option>
          </select>
        </div>
      </div>

      {/* PLAYER GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {filteredPlayers.length === 0 && (
          <p className='text-gray-600 text-lg col-span-full'>
            No players match your filters.
          </p>
        )}

        {filteredPlayers.map((player) => (
          <motion.div
            key={player.id}
            whileHover={{ scale: 1.05 }}
            className='bg-white shadow-lg border border-gray-200 p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition'
          >
            <Link to={`/squad/${player.id}`}>
              <img
                src={player.img}
                alt={player.name}
                className='w-32 mx-auto mb-4'
              />
              <h2 className='text-xl font-bold'>{player.name}</h2>
              <p className='text-gray-600'>{player.role}</p>

              {/* Format tags */}
              <div className='flex justify-center gap-2 mt-3'>
                {player.formats.map((f) => (
                  <span
                    key={f}
                    className='px-2 py-1 text-xs bg-blue-200 text-blue-700 rounded'
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Squad;

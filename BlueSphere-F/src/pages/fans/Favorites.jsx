import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, BarChart3, Heart } from "lucide-react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Virat Kohli",
      role: "Batsman",
      img: "https://i.ibb.co/0rRLc1s/kohli.png",
      stats: { runs: 12850, avg: 58.2, sr: 93.4 },
    },
    {
      id: 2,
      name: "Jasprit Bumrah",
      role: "Bowler",
      img: "https://i.ibb.co/X7dQn11/bumrah.png",
      stats: { wickets: 352, avg: 21.4, econ: 4.6 },
    },
  ]);

  const [comparison, setComparison] = useState([]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  const toggleCompare = (player) => {
    if (comparison.some((p) => p.id === player.id)) {
      setComparison(comparison.filter((p) => p.id !== player.id));
    } else if (comparison.length < 2) {
      setComparison([...comparison, player]);
    }
  };

  return (
    <div className='space-y-16'>
      <h1 className='text-4xl font-bold text-blue-700'>Your Favorites</h1>

      {/* FAVORITES LIST */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>Saved Players</h2>

        {favorites.length === 0 ? (
          <div className='text-center py-10 text-gray-600'>
            <img
              src='/empty-favorites.svg'
              alt='Empty'
              className='w-60 mx-auto mb-4 opacity-80'
            />
            <p className='italic text-lg'>No favorite players added yet.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {favorites.map((player) => (
              <motion.div
                key={player.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className='relative bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition'
              >
                {/* Favorite Badge */}
                <div className='absolute top-3 right-3 text-red-500'>
                  <Heart size={22} fill='rgb(220 38 38)' />
                </div>

                <img
                  src={player.img}
                  alt={player.name}
                  className='w-40 h-40 object-contain mx-auto drop-shadow'
                />

                <h3 className='text-xl font-bold text-center mt-4'>
                  {player.name}
                </h3>
                <p className='text-center text-gray-600'>{player.role}</p>

                <div className='flex justify-between mt-6'>
                  <button
                    onClick={() => removeFavorite(player.id)}
                    className='px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 transition'
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>

                  <button
                    onClick={() => toggleCompare(player)}
                    className={`px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                      comparison.some((p) => p.id === player.id)
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <BarChart3 size={16} />
                    Compare
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* COMPARISON SECTION */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Stats Comparison
        </h2>

        {comparison.length === 0 ? (
          <p className='text-gray-600 italic text-lg'>
            Select up to <span className='font-semibold'>two</span> players to
            compare.
          </p>
        ) : comparison.length === 1 ? (
          <p className='text-gray-600 italic text-lg'>
            Select one more player to compare.
          </p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {comparison.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-white border rounded-2xl shadow-md p-6 hover:shadow-xl transition'
              >
                <h3 className='text-2xl font-bold text-blue-700 mb-4 text-center'>
                  {p.name}
                </h3>

                <div className='w-full border-b mb-4'></div>

                <div className='space-y-3 text-lg'>
                  {p.stats.runs && (
                    <p className='text-gray-700'>
                      <span className='font-semibold'>Runs:</span>{" "}
                      {p.stats.runs}
                    </p>
                  )}

                  {p.stats.avg && (
                    <p className='text-gray-700'>
                      <span className='font-semibold'>Average:</span>{" "}
                      {p.stats.avg}
                    </p>
                  )}

                  {p.stats.sr && (
                    <p className='text-gray-700'>
                      <span className='font-semibold'>Strike Rate:</span>{" "}
                      {p.stats.sr}
                    </p>
                  )}

                  {p.stats.wickets && (
                    <p className='text-gray-700'>
                      <span className='font-semibold'>Wickets:</span>{" "}
                      {p.stats.wickets}
                    </p>
                  )}

                  {p.stats.econ && (
                    <p className='text-gray-700'>
                      <span className='font-semibold'>Economy:</span>{" "}
                      {p.stats.econ}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;

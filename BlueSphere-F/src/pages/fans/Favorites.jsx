import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, BarChart3 } from "lucide-react";

const Favorites = () => {
  // Dummy favorite players (replace with API data)
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
      <h1 className='text-4xl font-bold text-blue-700'>Your Favorites ❤️</h1>

      {/* FAVORITES LIST */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>Saved Players</h2>

        {favorites.length === 0 ? (
          <p className='text-gray-600 italic'>No favorite players yet.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {favorites.map((player) => (
              <motion.div
                key={player.id}
                whileHover={{ scale: 1.03 }}
                className='bg-white p-6 rounded-xl shadow-lg border'
              >
                <img
                  src={player.img}
                  alt={player.name}
                  className='w-40 h-40 object-contain mx-auto'
                />

                <h3 className='text-xl font-bold text-center mt-4'>
                  {player.name}
                </h3>
                <p className='text-center text-gray-600'>{player.role}</p>

                <div className='flex justify-between mt-6'>
                  <button
                    onClick={() => removeFavorite(player.id)}
                    className='px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2'
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>

                  <button
                    onClick={() => toggleCompare(player)}
                    className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
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
          <p className='text-gray-600 italic'>
            Select up to 2 players to compare.
          </p>
        ) : comparison.length === 1 ? (
          <p className='text-gray-600 italic'>
            Select one more player to compare.
          </p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {comparison.map((p) => (
              <div key={p.id} className='bg-white border shadow rounded-xl p-6'>
                <h3 className='text-2xl font-bold text-blue-700 mb-4'>
                  {p.name}
                </h3>

                <div className='space-y-2'>
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
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;

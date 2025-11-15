import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FanZone = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [dreamXI, setDreamXI] = useState([]);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState(null);

  const [favorites] = useState(["Virat Kohli", "Bumrah", "Rohit Sharma"]);
  const [badges] = useState(["Super Fan", "Quiz Master", "Dream XI Expert"]);

  const playersList = [
    "Rohit Sharma",
    "Virat Kohli",
    "Shubman Gill",
    "Hardik Pandya",
    "Jasprit Bumrah",
    "KL Rahul",
    "Rishabh Pant",
    "Ravindra Jadeja",
  ];

  const handleAddToDreamXI = (player) => {
    if (!dreamXI.includes(player) && dreamXI.length < 11) {
      setDreamXI([...dreamXI, player]);
    }
  };

  const handleQuizSubmit = () => {
    if (quizAnswer.toLowerCase() === "sachin tendulkar") {
      setQuizResult("correct");
    } else {
      setQuizResult("wrong");
    }
  };

  return (
    <div className='space-y-16'>
      <h1 className='text-4xl font-bold text-blue-700'>Fan Zone 🎉</h1>

      {/* LIVE POLLS */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>Live Polls</h2>

        <p className='text-lg font-medium mb-4'>
          Who will be the{" "}
          <span className='text-blue-600'>Player of the Series</span>?
        </p>

        <div className='space-y-4'>
          {["Virat Kohli", "Rohit Sharma", "Shubman Gill", "Bumrah"].map(
            (opt) => (
              <div key={opt}>
                <label className='flex gap-3 items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='poll'
                    value={opt}
                    onChange={() => setSelectedOption(opt)}
                  />
                  <span>{opt}</span>
                </label>
              </div>
            )
          )}

          <button
            onClick={() =>
              alert(`Vote submitted for: ${selectedOption || "No selection"}`)
            }
            className='mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          >
            Submit Vote
          </button>
        </div>
      </section>

      {/* QUIZZES */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Quiz of the Day
        </h2>

        <p className='font-medium mb-3'>
          Who is known as the “God of Cricket”?
        </p>

        <input
          type='text'
          placeholder='Your answer...'
          className='px-3 py-2 w-full border rounded-lg shadow-sm'
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
        />

        <button
          onClick={handleQuizSubmit}
          className='mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
        >
          Submit Answer
        </button>

        {quizResult === "correct" && (
          <p className='text-green-600 mt-3 font-semibold'>Correct! 🎉</p>
        )}
        {quizResult === "wrong" && (
          <p className='text-red-600 mt-3 font-semibold'>Wrong! Try again 😅</p>
        )}
      </section>

      {/* DREAM XI BUILDER */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Build Your Dream XI
        </h2>

        <p className='text-gray-600 mb-4'>
          Choose up to <span className='font-bold'>11 players</span>.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Player List */}
          <div className='border rounded-xl p-4'>
            <h3 className='text-xl font-bold mb-3'>Available Players</h3>

            <div className='space-y-2'>
              {playersList.map((p) => (
                <button
                  key={p}
                  onClick={() => handleAddToDreamXI(p)}
                  className='block w-full text-left px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-md'
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Selected XI */}
          <div className='border rounded-xl p-4'>
            <h3 className='text-xl font-bold mb-3'>Your Dream XI</h3>

            <div className='space-y-2'>
              {dreamXI.length === 0 ? (
                <p className='text-gray-500 italic'>No players selected yet.</p>
              ) : (
                dreamXI.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className='px-4 py-2 bg-green-50 border rounded-md shadow-sm'
                  >
                    {i + 1}. {p}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAVORITE PLAYERS */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Your Favorite Players ❤️
        </h2>

        <div className='flex flex-wrap gap-4'>
          {favorites.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className='px-5 py-2 bg-blue-600 text-white rounded-full shadow'
            >
              {f}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS / BADGES */}
      <section className='bg-white border shadow rounded-xl p-8'>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Your Achievements 🏆
        </h2>

        <div className='flex flex-wrap gap-4'>
          {badges.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className='px-6 py-3 bg-yellow-200 text-yellow-900 font-bold rounded-xl shadow'
            >
              {b}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FanZone;

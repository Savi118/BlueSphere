import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ThumbsUp, Star, Shield, Award, Plus } from "lucide-react";

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

  const Card = ({ children }) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className='bg-white border border-blue-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition'
    >
      {children}
    </motion.section>
  );

  const Title = ({ children }) => (
    <h2 className='text-3xl font-extrabold bg-linear-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent mb-6'>
      {children}
    </h2>
  );

  return (
    <div className='space-y-16'>
      <h1 className='text-5xl font-extrabold bg-linear-to-r from-blue-700 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow'>
        Fan Zone
      </h1>

      {/* LIVE POLLS */}
      <Card>
        <Title>Live Polls</Title>

        <p className='text-lg font-medium mb-4'>
          Who will be the{" "}
          <span className='text-blue-600'>Player of the Series</span>?
        </p>

        <div className='space-y-4'>
          {["Virat Kohli", "Rohit Sharma", "Shubman Gill", "Bumrah"].map(
            (opt) => (
              <label
                key={opt}
                className='flex gap-3 items-center cursor-pointer p-3 border rounded-lg hover:bg-blue-50 transition'
              >
                <input
                  type='radio'
                  name='poll'
                  value={opt}
                  onChange={() => setSelectedOption(opt)}
                />
                <span className='font-medium'>{opt}</span>
              </label>
            )
          )}

          <button
            onClick={() =>
              alert(`Vote submitted for: ${selectedOption || "No selection"}`)
            }
            className='mt-4 px-5 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow hover:shadow-lg transition'
          >
            Submit Vote
          </button>
        </div>
      </Card>

      {/* QUIZ */}
      <Card>
        <Title>Quiz of the Day</Title>

        <p className='font-medium mb-3'>
          Who is known as the “God of Cricket”? 🏏
        </p>

        <input
          type='text'
          placeholder='Your answer...'
          className='px-3 py-2 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-200 outline-none'
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
        />

        <button
          onClick={handleQuizSubmit}
          className='mt-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow'
        >
          Submit Answer
        </button>

        {/* Result */}
        {quizResult === "correct" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-green-600 mt-3 font-semibold text-lg flex items-center gap-2'
          >
            <ThumbsUp size={20} /> Correct! 🎉
          </motion.p>
        )}

        {quizResult === "wrong" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-red-600 mt-3 font-semibold text-lg'
          >
            Wrong! Try again
          </motion.p>
        )}
      </Card>

      {/* DREAM XI BUILDER */}
      <Card>
        <Title>Build Your Dream XI</Title>

        <p className='text-gray-600 mb-4'>
          Choose up to <span className='font-bold'>11 players</span>.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Player List */}
          <div className='border rounded-xl p-4 shadow-inner bg-blue-50/30'>
            <h3 className='text-xl font-bold mb-3'>Available Players</h3>

            <div className='space-y-2'>
              {playersList.map((p) => (
                <button
                  key={p}
                  onClick={() => handleAddToDreamXI(p)}
                  className='block w-full text-left px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-md transition'
                >
                  <Plus className='inline mr-2' size={16} />
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Selected XI */}
          <div className='border rounded-xl p-4 shadow-inner bg-green-50/30'>
            <h3 className='text-xl font-bold mb-3'>Your Dream XI</h3>

            <div className='space-y-3'>
              {dreamXI.length === 0 ? (
                <p className='text-gray-500 italic'>No players selected yet.</p>
              ) : (
                dreamXI.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className='px-4 py-2 bg-green-100 border rounded-md shadow-sm font-medium'
                  >
                    {i + 1}. {p}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* FAVORITE PLAYERS */}
      <Card>
        <Title>Your Favorite Players ❤️</Title>

        <div className='flex flex-wrap gap-4'>
          {favorites.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className='px-5 py-2 bg-blue-600 text-white rounded-full shadow font-semibold'
            >
              {f}
            </motion.div>
          ))}
        </div>
      </Card>

      {/* ACHIEVEMENTS */}
      <Card>
        <Title>Your Achievements 🏆</Title>

        <div className='flex flex-wrap gap-4'>
          {badges.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className='px-6 py-3 bg-yellow-300 text-yellow-900 font-bold rounded-xl shadow flex items-center gap-2'
            >
              <Award size={20} /> {b}
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FanZone;

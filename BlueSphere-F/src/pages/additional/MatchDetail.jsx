import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Dummy database for match details
const matchDB = {
  1: {
    id: 1,
    opponent: "Australia",
    date: "22 Nov 2025",
    venue: "Mumbai",
    format: "ODI",
    live: true,

    liveScore: {
      team1: "India",
      team2: "Australia",
      score: "IND 178/3 (27.2)",
      runRate: "6.52",
      status: "India batting first",
    },

    innings: [
      {
        team: "India",
        runs: 320,
        wickets: 6,
        overs: "50.0",
        runRate: "6.40",
      },
      {
        team: "Australia",
        runs: 287,
        wickets: 10,
        overs: "48.3",
        runRate: "5.91",
      },
    ],

    battingCard: [
      {
        team: "India",
        players: [
          { name: "Rohit Sharma", runs: 78, balls: 64, fours: 8, sixes: 3, out: "c Finch b Starc" },
          { name: "Shubman Gill", runs: 54, balls: 51, fours: 6, sixes: 1, out: "lbw Zampa" },
          { name: "Virat Kohli", runs: 63, balls: 57, fours: 5, sixes: 1, out: "not out" },
        ],
      },
    ],

    bowlingCard: [
      {
        team: "Australia",
        bowlers: [
          { name: "Starc", overs: "10", runs: 62, wickets: 2, economy: "6.2" },
          { name: "Hazlewood", overs: "10", runs: 48, wickets: 1, economy: "4.8" },
          { name: "Zampa", overs: "10", runs: 67, wickets: 2, economy: "6.7" },
        ],
      },
    ],

    fallOfWickets: [
      "1-42 (Rohit)",
      "2-96 (Gill)",
      "3-187 (Iyer)",
      "4-248 (Rahul)",
    ],

    commentaryAPI: "https://api.example.com/commentary",
  },
};

const MatchDetail = () => {
  const { matchId } = useParams();
  const match = matchDB[matchId];

  const [commentary, setCommentary] = useState([]);
  const [isLoggedIn] = useState(true); // Replace with auth later
  const [selectedPlayer, setSelectedPlayer] = useState("");

  // Auto-refresh commentary
  useEffect(() => {
    const fetchCommentary = async () => {
      try {
        // Replace with live cricket API
        // const response = await fetch(match.commentaryAPI);
        // const data = await response.json();
        // setCommentary(data.commentary);

        setCommentary([
          "27.2 — FOUR! Kohli punches through covers.",
          "27.1 — Single taken by Kohli.",
          "26.6 — Rohit OUT! Caught at long-on!",
        ]);
      } catch (err) {
        setCommentary([]);
      }
    };

    fetchCommentary();
    const interval = setInterval(fetchCommentary, 15000);

    return () => clearInterval(interval);
  }, []);

  if (!match) {
    return <h2 className="text-2xl text-red-600">Match not found.</h2>;
  }

  return (
    <div className="space-y-12">
      {/* LIVE SCORE WIDGET */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-100 border border-blue-200 rounded-xl p-8 shadow"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          India vs {match.opponent}
        </h1>

        {match.live && (
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
            LIVE
          </span>
        )}

        <p className="text-gray-700 mt-4">
          {match.liveScore.score} • RR {match.liveScore.runRate}
        </p>

        <p className="text-sm text-gray-600">{match.liveScore.status}</p>

        <p className="mt-4 text-gray-700">
          {match.format} • {match.date} • {match.venue}
        </p>
      </motion.section>

      {/* SCORECARD */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Scorecard</h2>

        {match.battingCard.map((team, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-bold mb-2">{team.team} Batting</h3>

            <table className="w-full bg-white border rounded-xl shadow">
              <thead className="bg-blue-50 text-blue-700">
                <tr>
                  <th className="p-3 text-left">Batsman</th>
                  <th className="p-3">Runs</th>
                  <th className="p-3">Balls</th>
                  <th className="p-3">4s</th>
                  <th className="p-3">6s</th>
                  <th className="p-3 text-left">Out</th>
                </tr>
              </thead>
              <tbody>
                {team.players.map((p, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3 font-semibold">{p.name}</td>
                    <td className="p-3 text-center">{p.runs}</td>
                    <td className="p-3 text-center">{p.balls}</td>
                    <td className="p-3 text-center">{p.fours}</td>
                    <td className="p-3 text-center">{p.sixes}</td>
                    <td className="p-3">{p.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {match.bowlingCard.map((team, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-bold mb-2">{team.team} Bowling</h3>

            <table className="w-full bg-white border rounded-xl shadow">
              <thead className="bg-blue-50 text-blue-700">
                <tr>
                  <th className="p-3">Bowler</th>
                  <th className="p-3">Overs</th>
                  <th className="p-3">Runs</th>
                  <th className="p-3">Wkts</th>
                  <th className="p-3">Econ</th>
                </tr>
              </thead>
              <tbody>
                {team.bowlers.map((b, i) => (
                  <tr key={i} className="border-t text-center">
                    <td className="p-3 text-left font-semibold">{b.name}</td>
                    <td className="p-3">{b.overs}</td>
                    <td className="p-3">{b.runs}</td>
                    <td className="p-3">{b.wickets}</td>
                    <td className="p-3">{b.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      {/* INNINGS BREAKDOWN */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Innings Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {match.innings.map((inn, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-6 shadow text-center"
            >
              <h3 className="text-xl font-bold">{inn.team}</h3>
              <p className="text-4xl font-extrabold text-blue-700 mt-2">
                {inn.runs}/{inn.wickets}
              </p>
              <p className="text-gray-700 mt-1">Overs: {inn.overs}</p>
              <p className="text-gray-600">Run Rate: {inn.runRate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FALL OF WICKETS */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Fall of Wickets
        </h2>

        <div className="bg-white border rounded-xl p-6 shadow">
          {match.fallOfWickets.map((fw, i) => (
            <p key={i} className="text-gray-700">
              {fw}
            </p>
          ))}
        </div>
      </section>

      {/* COMMENTARY */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Live Commentary
        </h2>

        <div className="bg-white border rounded-xl p-6 shadow space-y-2 max-h-64 overflow-y-auto">
          {commentary.length === 0 ? (
            <p className="text-gray-600">Loading commentary...</p>
          ) : (
            commentary.map((line, i) => (
              <p key={i} className="text-gray-800">
                {line}
              </p>
            ))
          )}
        </div>
      </section>

      {/* PLAYER OF THE MATCH POLL */}
      {isLoggedIn && (
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Player of the Match - Poll
          </h2>

          <select
            className="px-4 py-2 border rounded-lg shadow-sm"
            value={selectedPlayer}
            onChange={(e) => setSelectedPlayer(e.target.value)}
          >
            <option value="">Select Player</option>
            {match.battingCard[0].players.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>

          <button
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => alert("Vote submitted!")}
          >
            Submit Vote
          </button>
        </section>
      )}
    </div>
  );
};

export default MatchDetail;

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { motion } from "framer-motion";

const Stats = () => {
  // Dummy Data — Replace with API later

  const iccRankings = [
    { format: "T20", rank: 1 },
    { format: "ODI", rank: 2 },
    { format: "Test", rank: 2 },
  ];

  const runLeaders = [
    { name: "Virat Kohli", runs: 12850 },
    { name: "Rohit Sharma", runs: 10650 },
    { name: "Shubman Gill", runs: 2850 },
  ];

  const wicketLeaders = [
    { name: "Jasprit Bumrah", wickets: 352 },
    { name: "Mohammed Shami", wickets: 336 },
    { name: "Ravindra Jadeja", wickets: 267 },
  ];

  const winLossData = [
    { year: 2019, wins: 33, losses: 11 },
    { year: 2020, wins: 17, losses: 9 },
    { year: 2021, wins: 28, losses: 12 },
    { year: 2022, wins: 30, losses: 14 },
    { year: 2023, wins: 29, losses: 11 },
  ];

  const comparisonData = [
    { stat: "Runs", Kohli: 12850, Rohit: 10650 },
    { stat: "100s", Kohli: 47, Rohit: 31 },
    { stat: "50s", Kohli: 66, Rohit: 52 },
    { stat: "Strike Rate", Kohli: 93.2, Rohit: 90.1 },
  ];

  return (
    <div className='space-y-16'>
      <h1 className='text-4xl font-bold text-blue-700'>Team India Stats</h1>

      {/* ICC RANKINGS */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>ICC Rankings</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {iccRankings.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className='bg-white shadow-lg border border-gray-200 p-6 rounded-xl text-center'
            >
              <h3 className='text-xl font-bold'>{r.format}</h3>
              <p className='text-5xl text-blue-700 font-extrabold mt-3'>
                #{r.rank}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RUN LEADERS */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>Run Leaders</h2>

        <div className='bg-white border shadow rounded-xl p-6 h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={runLeaders}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='runs' fill='#2563eb' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* WICKET LEADERS */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          Wicket Leaders
        </h2>

        <div className='bg-white border shadow rounded-xl p-6 h-80'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={wicketLeaders}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='wickets' fill='#dc2626' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* PLAYER COMPARISON */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          Player Comparison (Kohli vs Rohit)
        </h2>

        <div className='bg-white border shadow rounded-xl p-6 h-96'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={comparisonData}>
              <CartesianGrid stroke='#ccc' />
              <XAxis dataKey='stat' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='Kohli' fill='#2563eb' />
              <Bar dataKey='Rohit' fill='#f59e0b' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* WIN / LOSS OVERVIEW */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          Win / Loss Overview (Last 5 Years)
        </h2>

        <div className='bg-white border shadow rounded-xl p-6 h-96'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={winLossData}>
              <CartesianGrid stroke='#ccc' />
              <XAxis dataKey='year' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='wins'
                stroke='#16a34a'
                strokeWidth={3}
              />
              <Line
                type='monotone'
                dataKey='losses'
                stroke='#dc2626'
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Stats;

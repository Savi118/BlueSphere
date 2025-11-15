import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const News = () => {
  // Dummy News Data — Replace with API later
  const newsDB = [
    {
      id: 1,
      title: "India announces squad for Australia tour",
      category: "Team",
      date: "Nov 15, 2025",
      img: "https://i.ibb.co/SN4cZy9/cricket-news1.jpg",
    },
    {
      id: 2,
      title: "Bumrah shines with 5-wicket haul against England",
      category: "Match Reports",
      date: "Nov 14, 2025",
      img: "https://i.ibb.co/Jqn24c9/cricket-news2.jpg",
    },
    {
      id: 3,
      title: "Shubman Gill becomes ICC No.1 ODI batsman",
      category: "Rankings",
      date: "Nov 10, 2025",
      img: "https://i.ibb.co/80VWy2G/cricket-news3.jpg",
    },
    {
      id: 4,
      title: "Hardik Pandya set to return for T20 series",
      category: "Injury Updates",
      date: "Nov 12, 2025",
      img: "https://i.ibb.co/dDXLmyt/cricket-news4.jpg",
    },
  ];

  const trending = [
    "Kohli hits fastest 50 in T20 World Cup",
    "India retains No.1 T20 ranking",
    "BCCI announces domestic schedule",
    "Shami ruled out due to injury",
  ];

  const categories = [
    "All",
    "Team",
    "Match Reports",
    "Rankings",
    "Injury Updates",
  ];

  // State values
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Filter Logic
  const filteredNews = newsDB.filter((n) => {
    const categoryMatch =
      selectedCategory === "All" || n.category === selectedCategory;

    const searchMatch = n.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
      {/* LEFT CONTENT: NEWS LIST */}
      <div className='lg:col-span-3 space-y-10'>
        <h1 className='text-4xl font-bold text-blue-700'>Latest News</h1>

        {/* SEARCH + CATEGORIES */}
        <div className='bg-white border shadow rounded-xl p-6 space-y-6'>
          {/* Search */}
          <input
            type='text'
            placeholder='Search news...'
            className='w-full px-4 py-2 border rounded-lg shadow-sm'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Categories */}
          <div className='flex gap-3 flex-wrap'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* NEWS LIST */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {filteredNews.map((n) => (
            <motion.div
              key={n.id}
              whileHover={{ scale: 1.03 }}
              className='bg-white border shadow-lg rounded-xl overflow-hidden'
            >
              <Link to={`/news/${n.id}`}>
                <img
                  src={n.img}
                  alt={n.title}
                  className='w-full h-52 object-cover'
                />
                <div className='p-5'>
                  <span className='text-blue-600 text-sm font-medium'>
                    {n.category}
                  </span>
                  <h3 className='text-xl font-bold mt-2'>{n.title}</h3>
                  <p className='text-gray-500 text-sm mt-1'>{n.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          {filteredNews.length === 0 && (
            <p className='text-gray-600 text-lg col-span-full'>
              No news found for selected filters.
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SIDEBAR: TRENDING STORIES */}
      <div className='space-y-6'>
        <h2 className='text-2xl font-bold text-blue-700'>Trending</h2>

        <div className='bg-white border shadow rounded-xl p-6 space-y-4'>
          {trending.map((story, i) => (
            <div
              key={i}
              className='p-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer'
            >
              {story}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

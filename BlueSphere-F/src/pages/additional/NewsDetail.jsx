import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Dummy News Database (replace with API)
const newsDB = {
  1: {
    id: 1,
    title: "India announces squad for Australia tour",
    heroImg: "https://i.ibb.co/SN4cZy9/cricket-news1.jpg",
    author: "Rahul Sharma",
    date: "Nov 15, 2025",
    category: "Team",
    content: `
      The BCCI has officially announced the Indian squad for the upcoming 
      tour of Australia. Several young players have been given opportunities 
      while senior players make a strong return. The selectors highlighted 
      the importance of rotation and workload management ahead of a packed schedule.
      
      Head Coach Rahul Dravid expressed confidence in the balance of the squad
      and emphasized the need for adaptability in Australian conditions.
    `,
    related: [2, 3],
    comments: [
      {
        user: "Amit",
        text: "Excited to see this strong squad!",
        date: "Just now",
      },
      {
        user: "Karan",
        text: "Good to see youngsters getting chances.",
        date: "1h ago",
      },
    ],
  },

  2: {
    id: 2,
    title: "Bumrah shines with 5-wicket haul against England",
    heroImg: "https://i.ibb.co/Jqn24c9/cricket-news2.jpg",
    author: "Priya Verma",
    date: "Nov 14, 2025",
    category: "Match Reports",
    content: `
      Jasprit Bumrah controlled the game brilliantly as he dismantled 
      England's top order. His five-wicket haul led India to a monumental victory 
      in the first ODI of the series.
    `,
    related: [1],
    comments: [],
  },

  3: {
    id: 3,
    title: "Shubman Gill becomes ICC No.1 ODI batsman",
    heroImg: "https://i.ibb.co/80VWy2G/cricket-news3.jpg",
    author: "Neha Gupta",
    date: "Nov 10, 2025",
    category: "Rankings",
    content: `
      Shubman Gill has officially risen to the top of the ICC ODI batting 
      rankings. His consistent performances have made him one of the most 
      dangerous opening batsmen in world cricket.
    `,
    related: [1],
    comments: [],
  },
};

const NewsDetail = () => {
  const { newsId } = useParams();
  const article = newsDB[newsId];

  const [isLoggedIn] = useState(true); // change later
  const [commentText, setCommentText] = useState("");

  if (!article) {
    return <h2 className='text-2xl text-red-600'>Article not found.</h2>;
  }

  const relatedArticles = article.related.map((id) => newsDB[id]);

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;

    article.comments.push({
      user: "You",
      text: commentText,
      date: "Just now",
    });

    setCommentText("");
  };

  return (
    <div className='space-y-12'>
      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg'
      >
        <img
          src={article.heroImg}
          alt={article.title}
          className='w-full h-full object-cover'
        />
      </motion.div>

      {/* TITLE + AUTHOR */}
      <section>
        <h1 className='text-4xl font-bold text-blue-700'>{article.title}</h1>

        <div className='mt-4 flex items-center gap-4 text-gray-600'>
          <p>
            By{" "}
            <span className='font-semibold text-gray-800'>
              {article.author}
            </span>
          </p>
          <span>•</span>
          <p>{article.date}</p>
          <span>•</span>
          <p className='text-blue-600 font-semibold'>{article.category}</p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className='bg-white shadow border border-gray-200 rounded-xl p-8 leading-7 text-gray-800 whitespace-pre-line'>
        {article.content}
      </section>

      {/* RELATED ARTICLES */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Related Articles
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {relatedArticles.map((r) => (
            <Link
              key={r.id}
              to={`/news/${r.id}`}
              className='bg-white border shadow rounded-xl overflow-hidden hover:shadow-lg transition'
            >
              <img
                src={r.heroImg}
                alt={r.title}
                className='w-full h-44 object-cover'
              />
              <div className='p-5'>
                <h3 className='text-xl font-bold'>{r.title}</h3>
                <p className='text-gray-500 text-sm mt-1'>{r.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COMMENTS SECTION */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>Comments</h2>

        {/* Only logged in users can comment */}
        {isLoggedIn ? (
          <div className='bg-white border rounded-xl shadow p-6 mb-6'>
            <textarea
              className='w-full border p-3 rounded-lg shadow-sm'
              rows='3'
              placeholder='Write a comment...'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>

            <button
              onClick={handleCommentSubmit}
              className='mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              Post Comment
            </button>
          </div>
        ) : (
          <p className='text-gray-600 italic'>Login to write a comment.</p>
        )}

        {/* Comments Display */}
        <div className='space-y-4'>
          {article.comments.length === 0 ? (
            <p className='text-gray-600'>No comments yet.</p>
          ) : (
            article.comments.map((c, i) => (
              <div
                key={i}
                className='bg-white border rounded-xl shadow p-4 space-y-1'
              >
                <p className='font-semibold'>{c.user}</p>
                <p className='text-gray-800'>{c.text}</p>
                <p className='text-sm text-gray-500'>{c.date}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;

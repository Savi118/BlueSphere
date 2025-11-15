import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil, CalendarDays, Brain, Star, Camera } from "lucide-react";

const presetAvatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
];

const Profile = () => {
  // USER DATA (Dummy)
  const [user, setUser] = useState({
    name: "Saksham",
    email: "saksham@example.com",
    favoriteTeam: "India",
    avatar: "/avatars/default.png", // Default profile picture
  });

  const [savedQuizzes] = useState([
    { id: 1, title: "World Cup Quiz", score: "8/10", date: "12 Nov 2025" },
    { id: 2, title: "T20 Legends Quiz", score: "9/10", date: "05 Nov 2025" },
  ]);

  const [predictions] = useState([
    {
      id: 1,
      title: "Ind vs Aus Winner",
      prediction: "India",
      accuracy: "Correct",
    },
    { id: 2, title: "Top Run Scorer", prediction: "Gill", accuracy: "Pending" },
  ]);

  // MODAL
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(user);

  // Avatar upload preview
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setForm({ ...form, avatar: imgURL });
    }
  };

  const handleSave = () => {
    setUser(form);
    setShowModal(false);
  };

  return (
    <div className='space-y-16'>
      <h1 className='text-4xl font-bold text-blue-700'>My Profile</h1>

      {/* USER INFO CARD */}
      <section className='bg-white border shadow rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='flex flex-col items-center gap-2'
        >
          <img
            src={user.avatar}
            alt='Avatar'
            className='w-28 h-28 rounded-full object-cover shadow-lg border border-gray-300'
          />
          <button
            onClick={() => setShowModal(true)}
            className='flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 border rounded-md'
          >
            <Camera size={16} /> Update Picture
          </button>
        </motion.div>

        {/* User Info */}
        <div>
          <h2 className='text-3xl font-bold text-blue-700 mb-2'>{user.name}</h2>

          <p className='text-gray-700'>
            ✉️ <span className='font-semibold'>Email:</span> {user.email}
          </p>
          <p className='text-gray-700 mt-1'>
            🇮🇳 <span className='font-semibold'>Favorite Team:</span>{" "}
            {user.favoriteTeam}
          </p>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={() => {
            setForm(user);
            setShowModal(true);
          }}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700'
        >
          <Pencil size={18} /> Edit Profile
        </button>
      </section>

      {/* SAVED QUIZZES */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>Saved Quizzes</h2>

        {savedQuizzes.length === 0 ? (
          <p className='text-gray-600 italic'>No quizzes saved yet.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {savedQuizzes.map((q) => (
              <motion.div
                key={q.id}
                whileHover={{ scale: 1.03 }}
                className='bg-white border shadow rounded-xl p-6 flex gap-4 items-start'
              >
                <Brain size={30} className='text-blue-600' />
                <div>
                  <h3 className='text-xl font-bold'>{q.title}</h3>
                  <p className='text-gray-700 mt-1'>
                    Score: <span className='font-semibold'>{q.score}</span>
                  </p>
                  <p className='text-gray-600 text-sm flex items-center gap-1 mt-1'>
                    <CalendarDays size={14} /> {q.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* SAVED PREDICTIONS */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6'>
          Saved Predictions
        </h2>

        {predictions.length === 0 ? (
          <p className='text-gray-600 italic'>No predictions saved yet.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {predictions.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.03 }}
                className='bg-white border shadow rounded-xl p-6 flex gap-4'
              >
                <Star size={30} className='text-yellow-500' />
                <div>
                  <h3 className='text-xl font-bold'>{p.title}</h3>
                  <p className='text-gray-700 mt-1'>
                    Prediction:{" "}
                    <span className='font-semibold'>{p.prediction}</span>
                  </p>
                  <p
                    className={`text-sm mt-1 font-semibold ${
                      p.accuracy === "Correct"
                        ? "text-green-600"
                        : p.accuracy === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    Status: {p.accuracy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* EDIT PROFILE + AVATAR MODAL */}
      {showModal && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'
          >
            <h2 className='text-xl font-bold mb-4'>Edit Profile</h2>

            {/* Avatar Preview */}
            <div className='flex flex-col items-center mb-4'>
              <img
                src={form.avatar}
                className='w-24 h-24 rounded-full object-cover border shadow'
                alt='Avatar Preview'
              />
              <label className='mt-3 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer text-sm'>
                Upload Image
                <input
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>

            {/* Preset Avatar Gallery */}
            <p className='text-gray-700 mb-2 text-sm font-semibold'>
              Choose a preset avatar:
            </p>
            <div className='grid grid-cols-5 gap-3 mb-6'>
              {presetAvatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setForm({ ...form, avatar: img })}
                  className={`w-14 h-14 rounded-full object-cover border cursor-pointer transition ${
                    form.avatar === img
                      ? "ring-4 ring-blue-500"
                      : "hover:opacity-80"
                  }`}
                />
              ))}
            </div>

            {/* Form Inputs */}
            <input
              placeholder='Full Name'
              className='w-full border p-2 rounded-lg mb-4'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder='Email'
              className='w-full border p-2 rounded-lg mb-4'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder='Favorite Team'
              className='w-full border p-2 rounded-lg mb-4'
              value={form.favoriteTeam}
              onChange={(e) =>
                setForm({ ...form, favoriteTeam: e.target.value })
              }
            />

            <div className='flex justify-end gap-3'>
              <button
                onClick={() => setShowModal(false)}
                className='px-4 py-2 bg-gray-300 rounded'
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className='px-4 py-2 bg-blue-600 text-white rounded'
              >
                Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Profile;

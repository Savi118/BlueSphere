import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";

const AdminNews = () => {
  const [news, setNews] = useState([
    { id: 1, title: "India wins by 8 wickets", category: "Match Report" },
    { id: 2, title: "Gill reaches ICC Rank #1", category: "Rankings" },
  ]);

  const [modal, setModal] = useState(false);
  const [newsForm, setNewsForm] = useState({
    id: null,
    title: "",
    category: "",
  });

  const openAdd = () => {
    setNewsForm({ id: null, title: "", category: "" });
    setModal(true);
  };

  const openEdit = (n) => {
    setNewsForm(n);
    setModal(true);
  };

  const saveNews = () => {
    if (!newsForm.title || !newsForm.category) return;

    if (newsForm.id) {
      setNews(news.map((n) => (n.id === newsForm.id ? newsForm : n)));
    } else {
      setNews([...news, { ...newsForm, id: Date.now() }]);
    }

    setModal(false);
  };

  const deleteNews = (id) => {
    if (confirm("Delete this news article?")) {
      setNews(news.filter((n) => n.id !== id));
    }
  };

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-blue-700'>Manage News</h1>
        <button
          onClick={openAdd}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2'
        >
          <Plus size={18} /> Add News
        </button>
      </div>

      {/* Table */}
      <div className='bg-white shadow rounded-xl border'>
        <table className='w-full'>
          <thead className='bg-blue-100 text-blue-700'>
            <tr>
              <th className='p-3 text-left'>Title</th>
              <th className='p-3'>Category</th>
              <th className='p-3 text-right'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {news.map((n) => (
              <tr key={n.id} className='border-t'>
                <td className='p-3'>{n.title}</td>
                <td className='p-3 text-center'>{n.category}</td>
                <td className='p-3 flex justify-end gap-3 pr-4'>
                  <button onClick={() => openEdit(n)}>
                    <Pencil size={20} className='text-blue-600' />
                  </button>
                  <button onClick={() => deleteNews(n.id)}>
                    <Trash2 size={20} className='text-red-600' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modal && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            className='bg-white p-6 rounded-xl shadow-lg w-full max-w-lg'
          >
            <h2 className='text-xl font-bold mb-4'>
              {newsForm.id ? "Edit Article" : "Add News Article"}
            </h2>

            <input
              placeholder='News Title'
              className='w-full border p-2 rounded-lg mb-4'
              value={newsForm.title}
              onChange={(e) =>
                setNewsForm({ ...newsForm, title: e.target.value })
              }
            />

            <input
              placeholder='Category (Team, Rankings...)'
              className='w-full border p-2 rounded-lg mb-4'
              value={newsForm.category}
              onChange={(e) =>
                setNewsForm({ ...newsForm, category: e.target.value })
              }
            />

            <div className='flex justify-end gap-3'>
              <button
                onClick={() => setModal(false)}
                className='px-4 py-2 bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={saveNews}
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

export default AdminNews;

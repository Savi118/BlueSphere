import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";

const AdminPolls = () => {
  const [polls, setPolls] = useState([
    { id: 1, question: "Who will win today's match?", status: "Active" },
    { id: 2, question: "Best bowler of 2025?", status: "Closed" },
  ]);

  const [modal, setModal] = useState(false);
  const [pollForm, setPollForm] = useState({
    id: null,
    question: "",
    status: "Active",
  });

  const openAdd = () => {
    setPollForm({ id: null, question: "", status: "Active" });
    setModal(true);
  };

  const openEdit = (p) => {
    setPollForm(p);
    setModal(true);
  };

  const savePoll = () => {
    if (!pollForm.question) return;

    if (pollForm.id) {
      setPolls(polls.map((p) => (p.id === pollForm.id ? pollForm : p)));
    } else {
      setPolls([...polls, { ...pollForm, id: Date.now() }]);
    }

    setModal(false);
  };

  const deletePoll = (id) => {
    if (confirm("Delete this poll?")) {
      setPolls(polls.filter((p) => p.id !== id));
    }
  };

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-blue-700'>Manage Polls</h1>
        <button
          onClick={openAdd}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2'
        >
          <Plus size={18} /> Add Poll
        </button>
      </div>

      <div className='bg-white shadow border rounded-xl'>
        <table className='w-full'>
          <thead className='bg-blue-100 text-blue-700'>
            <tr>
              <th className='p-3 text-left'>Question</th>
              <th className='p-3 text-center'>Status</th>
              <th className='p-3 text-right'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {polls.map((p) => (
              <tr key={p.id} className='border-t'>
                <td className='p-3'>{p.question}</td>
                <td className='p-3 text-center'>{p.status}</td>
                <td className='p-3 flex justify-end gap-3 pr-4'>
                  <button onClick={() => openEdit(p)}>
                    <Pencil size={20} className='text-blue-600' />
                  </button>
                  <button onClick={() => deletePoll(p.id)}>
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
            className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'
          >
            <h2 className='text-xl font-bold mb-4'>
              {pollForm.id ? "Edit Poll" : "Create New Poll"}
            </h2>

            <input
              placeholder='Poll Question'
              className='w-full border p-2 rounded-lg mb-4'
              value={pollForm.question}
              onChange={(e) =>
                setPollForm({ ...pollForm, question: e.target.value })
              }
            />

            <select
              className='w-full border p-2 rounded-lg mb-4'
              value={pollForm.status}
              onChange={(e) =>
                setPollForm({ ...pollForm, status: e.target.value })
              }
            >
              <option>Active</option>
              <option>Closed</option>
            </select>

            <div className='flex justify-end gap-3'>
              <button
                onClick={() => setModal(false)}
                className='px-4 py-2 bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={savePoll}
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

export default AdminPolls;

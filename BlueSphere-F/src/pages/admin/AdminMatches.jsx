import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";

const AdminMatches = () => {
  const [matches, setMatches] = useState([
    { id: 1, opponent: "Australia", date: "22 Nov 2025", format: "ODI" },
    { id: 2, opponent: "England", date: "28 Nov 2025", format: "T20" },
  ]);

  const [modal, setModal] = useState(false);
  const [matchForm, setMatchForm] = useState({
    id: null,
    opponent: "",
    date: "",
    format: "",
  });

  const openAdd = () => {
    setMatchForm({ id: null, opponent: "", date: "", format: "" });
    setModal(true);
  };

  const openEdit = (m) => {
    setMatchForm(m);
    setModal(true);
  };

  const saveMatch = () => {
    if (!matchForm.opponent || !matchForm.date || !matchForm.format) return;

    if (matchForm.id) {
      setMatches(matches.map((m) => (m.id === matchForm.id ? matchForm : m)));
    } else {
      setMatches([...matches, { ...matchForm, id: Date.now() }]);
    }

    setModal(false);
  };

  const deleteMatch = (id) => {
    if (confirm("Delete this match?")) {
      setMatches(matches.filter((m) => m.id !== id));
    }
  };

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-blue-700'>Manage Matches</h1>
        <button
          onClick={openAdd}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2'
        >
          <Plus size={18} /> Add Match
        </button>
      </div>

      <div className='bg-white shadow rounded-xl border'>
        <table className='w-full'>
          <thead className='bg-blue-100 text-blue-700'>
            <tr>
              <th className='p-3 text-left'>Opponent</th>
              <th className='p-3'>Date</th>
              <th className='p-3'>Format</th>
              <th className='p-3 text-right'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {matches.map((m) => (
              <tr key={m.id} className='border-t'>
                <td className='p-3'>{m.opponent}</td>
                <td className='p-3 text-center'>{m.date}</td>
                <td className='p-3 text-center'>{m.format}</td>
                <td className='p-3 flex justify-end gap-3 pr-4'>
                  <button onClick={() => openEdit(m)}>
                    <Pencil size={20} className='text-blue-600' />
                  </button>
                  <button onClick={() => deleteMatch(m.id)}>
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
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'
          >
            <h2 className='text-xl font-bold mb-4'>
              {matchForm.id ? "Edit Match" : "Add Match"}
            </h2>

            <input
              placeholder='Opponent Team'
              className='w-full border p-2 rounded-lg mb-3'
              value={matchForm.opponent}
              onChange={(e) =>
                setMatchForm({ ...matchForm, opponent: e.target.value })
              }
            />

            <input
              placeholder='Date (22 Nov 2025)'
              className='w-full border p-2 rounded-lg mb-3'
              value={matchForm.date}
              onChange={(e) =>
                setMatchForm({ ...matchForm, date: e.target.value })
              }
            />

            <input
              placeholder='Format (ODI, T20, Test)'
              className='w-full border p-2 rounded-lg mb-3'
              value={matchForm.format}
              onChange={(e) =>
                setMatchForm({ ...matchForm, format: e.target.value })
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
                onClick={saveMatch}
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

export default AdminMatches;

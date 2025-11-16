import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";
import AdminLayout from "../../components/AdminLayout";

const AdminMatches = () => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      opponent: "Australia",
      date: "22 Nov 2025",
      format: "ODI",
      status: "Upcoming",
    },
    {
      id: 2,
      opponent: "England",
      date: "28 Nov 2025",
      format: "T20",
      status: "Upcoming",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [matchForm, setMatchForm] = useState({
    id: null,
    opponent: "",
    date: "",
    format: "",
    status: "Upcoming",
  });

  const openAdd = () => {
    setMatchForm({
      id: null,
      opponent: "",
      date: "",
      format: "",
      status: "Upcoming",
    });
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
    <AdminLayout>
      <div className='space-y-8'>
        {/* HEADER */}
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-blue-700'>Manage Matches</h1>

          <button
            onClick={openAdd}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-700 transition'
          >
            <Plus size={18} /> Add Match
          </button>
        </div>

        {/* MATCH TABLE */}
        <div className='bg-white shadow-lg rounded-xl border overflow-hidden'>
          {matches.length === 0 ? (
            <p className='p-6 text-gray-500 italic text-center'>
              No matches added yet.
            </p>
          ) : (
            <table className='w-full text-gray-700'>
              <thead className='bg-blue-100 text-blue-700'>
                <tr>
                  <th className='p-3 text-left'>Opponent</th>
                  <th className='p-3 text-center'>Date</th>
                  <th className='p-3 text-center'>Format</th>
                  <th className='p-3 text-center'>Status</th>
                  <th className='p-3 text-right'>Actions</th>
                </tr>
              </thead>

              <tbody>
                {matches.map((m, index) => (
                  <motion.tr
                    key={m.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`border-t hover:bg-blue-50/40 transition ${
                      index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}
                  >
                    <td className='p-3'>{m.opponent}</td>
                    <td className='p-3 text-center'>{m.date}</td>
                    <td className='p-3 text-center'>{m.format}</td>
                    <td className='p-3 text-center'>
                      <span
                        className={`px-3 py-1 text-sm rounded-full 
                        ${
                          m.status === "Upcoming"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {m.status}
                      </span>
                    </td>

                    <td className='p-3 flex justify-end gap-3 pr-4'>
                      <button
                        onClick={() => openEdit(m)}
                        className='p-2 rounded hover:bg-blue-100 transition'
                      >
                        <Pencil size={20} className='text-blue-600' />
                      </button>

                      <button
                        onClick={() => deleteMatch(m.id)}
                        className='p-2 rounded hover:bg-red-100 transition'
                      >
                        <Trash2 size={20} className='text-red-600' />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* MODAL */}
        {modal && (
          <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className='bg-white p-6 rounded-xl shadow-2xl w-full max-w-md'
            >
              <h2 className='text-xl font-bold mb-4 text-blue-700'>
                {matchForm.id ? "Edit Match" : "Add Match"}
              </h2>

              {/* FORM INPUTS */}
              <div className='space-y-4'>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>
                    Opponent Team
                  </label>
                  <input
                    placeholder='Australia'
                    className='w-full border p-2 rounded-lg mt-1 focus:ring focus:ring-blue-200'
                    value={matchForm.opponent}
                    onChange={(e) =>
                      setMatchForm({ ...matchForm, opponent: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className='text-sm font-semibold text-gray-600'>
                    Match Date
                  </label>
                  <input
                    placeholder='22 Nov 2025'
                    className='w-full border p-2 rounded-lg mt-1 focus:ring focus:ring-blue-200'
                    value={matchForm.date}
                    onChange={(e) =>
                      setMatchForm({ ...matchForm, date: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className='text-sm font-semibold text-gray-600'>
                    Match Format
                  </label>
                  <select
                    className='w-full border p-2 rounded-lg mt-1 focus:ring focus:ring-blue-200'
                    value={matchForm.format}
                    onChange={(e) =>
                      setMatchForm({ ...matchForm, format: e.target.value })
                    }
                  >
                    <option value=''>Select Format</option>
                    <option>ODI</option>
                    <option>T20</option>
                    <option>Test</option>
                  </select>
                </div>

                <div>
                  <label className='text-sm font-semibold text-gray-600'>
                    Status
                  </label>
                  <select
                    className='w-full border p-2 rounded-lg mt-1 focus:ring focus:ring-blue-200'
                    value={matchForm.status}
                    onChange={(e) =>
                      setMatchForm({ ...matchForm, status: e.target.value })
                    }
                  >
                    <option>Upcoming</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>

              {/* MODAL BUTTONS */}
              <div className='flex justify-end gap-3 mt-6'>
                <button
                  onClick={() => setModal(false)}
                  className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
                >
                  Cancel
                </button>
                <button
                  onClick={saveMatch}
                  className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                >
                  Save
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminMatches;

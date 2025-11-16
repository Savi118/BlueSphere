import { useState } from "react";
import { motion } from "framer-motion";
import { Pencil, Trash2, Plus } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";

const AdminPlayers = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Rohit Sharma", role: "Batsman" },
    { id: 2, name: "Jasprit Bumrah", role: "Bowler" },
    { id: 3, name: "Ravindra Jadeja", role: "All-rounder" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [playerForm, setPlayerForm] = useState({
    id: null,
    name: "",
    role: "",
  });

  const openAdd = () => {
    setPlayerForm({ id: null, name: "", role: "" });
    setShowModal(true);
  };

  const openEdit = (player) => {
    setPlayerForm(player);
    setShowModal(true);
  };

  const savePlayer = () => {
    if (!playerForm.name || !playerForm.role) return;

    if (playerForm.id) {
      // Edit
      setPlayers(players.map((p) => (p.id === playerForm.id ? playerForm : p)));
    } else {
      // Add
      setPlayers([...players, { ...playerForm, id: Date.now() }]);
    }

    setShowModal(false);
  };

  const deletePlayer = (id) => {
    if (confirm("Delete this player?")) {
      setPlayers(players.filter((p) => p.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className='space-y-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-blue-700'>Manage Players</h1>
          <button
            onClick={openAdd}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2'
          >
            <Plus size={18} /> Add Player
          </button>
        </div>

        {/* Table */}
        <div className='bg-white shadow border rounded-xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-blue-100 text-blue-700'>
              <tr>
                <th className='p-3 text-left'>Name</th>
                <th className='p-3'>Role</th>
                <th className='p-3 text-right'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {players.map((p) => (
                <tr key={p.id} className='border-t'>
                  <td className='p-3'>{p.name}</td>
                  <td className='p-3 text-center'>{p.role}</td>
                  <td className='p-3 flex justify-end gap-3 pr-4'>
                    <button onClick={() => openEdit(p)}>
                      <Pencil size={20} className='text-blue-600' />
                    </button>
                    <button onClick={() => deletePlayer(p.id)}>
                      <Trash2 size={20} className='text-red-600' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'
            >
              <h2 className='text-xl font-bold mb-4'>
                {playerForm.id ? "Edit Player" : "Add Player"}
              </h2>

              <input
                placeholder='Player Name'
                className='w-full border p-2 rounded-lg mb-4'
                value={playerForm.name}
                onChange={(e) =>
                  setPlayerForm({ ...playerForm, name: e.target.value })
                }
              />

              <input
                placeholder='Role (Batsman, Bowler...)'
                className='w-full border p-2 rounded-lg mb-4'
                value={playerForm.role}
                onChange={(e) =>
                  setPlayerForm({ ...playerForm, role: e.target.value })
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
                  onClick={savePlayer}
                  className='px-4 py-2 bg-blue-600 text-white rounded'
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

export default AdminPlayers;

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trash2 } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";

const AdminComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Saksham",
      content: "What a match! Gill was amazing 🔥",
      status: "Pending",
    },
    {
      id: 2,
      user: "Aarav",
      content: "India should prepare better for test series.",
      status: "Approved",
    },
    {
      id: 3,
      user: "Riya",
      content: "Not a fan of the umpiring decisions today.",
      status: "Rejected",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  const deleteComment = (id) => {
    if (confirm("Delete this comment?")) {
      setComments(comments.filter((c) => c.id !== id));
    }
  };

  const badgeStyle = (status) => {
    return status === "Approved"
      ? "bg-green-100 text-green-700"
      : status === "Rejected"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";
  };

  return (
    <AdminLayout>
      <div className='space-y-8'>
        <h1 className='text-3xl font-bold text-blue-700'>
          Comments Moderation
        </h1>

        <div className='bg-white shadow rounded-xl border overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-blue-100 text-blue-700'>
              <tr>
                <th className='p-3 text-left'>User</th>
                <th className='p-3 text-left'>Comment</th>
                <th className='p-3 text-center'>Status</th>
                <th className='p-3 text-right'>Actions</th>
              </tr>
            </thead>

            <tbody>
              {comments.map((c) => (
                <tr key={c.id} className='border-t'>
                  <td className='p-3 font-semibold'>{c.user}</td>
                  <td className='p-3'>{c.content}</td>
                  <td className='p-3 text-center'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${badgeStyle(
                        c.status
                      )}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className='p-3 pr-4 flex justify-end gap-3'>
                    <button onClick={() => updateStatus(c.id, "Approved")}>
                      <CheckCircle className='text-green-600' size={20} />
                    </button>
                    <button onClick={() => updateStatus(c.id, "Rejected")}>
                      <XCircle className='text-red-600' size={20} />
                    </button>
                    <button onClick={() => deleteComment(c.id)}>
                      <Trash2 className='text-gray-600' size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminComments;

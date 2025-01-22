import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-gray-100 shadow-md rounded-lg">
      <input
        className="w-full p-3 border-2 border-gray-400 rounded-lg"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-6 flex flex-col gap-6">
        {filterData.map((paste) => (
          <div key={paste._id} className="p-4 border border-gray-300 rounded-lg bg-white shadow">
            <h1 className="text-2xl font-semibold text-gray-800">{paste.title}</h1>
            <p className="text-gray-600 mt-2">{paste.content}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <NavLink to={`/?pasteId=${paste._id}`} className="p-2 bg-blue-600 text-white rounded-lg">
                Edit
              </NavLink>
              <NavLink to={`/pastes/${paste._id}`} className="p-2 bg-green-600 text-white rounded-lg">
                View
              </NavLink>
              <button
                onClick={() => handleDelete(paste._id)}
                className="p-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to clipboard");
                }}
                className="p-2 bg-yellow-500 text-white rounded-lg"
              >
                Copy
              </button>
            </div>
            <div className="text-gray-500 text-sm mt-3 text-right">
              Created at: {new Date(paste.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paste;

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ViewPaste() {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const specificPaste = allPastes.find((p) => p._id === id);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">View Paste</h1>
      <div className="flex flex-col gap-6">
        <input
          className="w-full p-3 border-2 border-gray-400 rounded-lg bg-gray-200 text-gray-600"
          type="text"
          placeholder="Enter title here"
          value={specificPaste?.title || ""}
          disabled
        />
        <textarea
          value={specificPaste?.content || ""}
          placeholder="Enter content here"
          disabled
          rows={10}
          className="w-full p-4 border-2 border-gray-400 rounded-lg bg-gray-200 text-gray-600"
        />
      </div>
      <div className="text-gray-500 text-sm mt-4 text-right">
        <span>Created at: {new Date(specificPaste?.createdAt).toLocaleString()}</span>
      </div>
    </div>
  );
}

export default ViewPaste;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste?.title || "");
      setValue(paste?.content || "");
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-gray-100 shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="p-3 w-full border-2 rounded-lg border-gray-400"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="p-3 font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-6">
        <textarea
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={10}
          className="w-full p-4 border-2 rounded-lg border-gray-400"
        />
      </div>
    </div>
  );
}

export default Home;

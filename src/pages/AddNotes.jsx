import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";

function AddNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addNote } = useContext(NoteContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    addNote(title, content);

    // ensure state update before navigation
    setTimeout(() => {
      navigate("/");
    }, 0);
  };

  return (
    <div className="form_container">
      <h2>Add New Note</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="input-field-email"
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="input-field-email"
          placeholder="Write your note here..."
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btns" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNotes;

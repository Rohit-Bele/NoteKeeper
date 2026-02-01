import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function NoteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, deleteNote } = useContext(NoteContext);

  // find note by id
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    return (
      <div className="page-container">
        <div className="glass-card">
          <h2>Note not found</h2>
          <button className="btns" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="glass-card">
        <h2>{note.title}</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
          {note.content}
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <button className="btns" onClick={() => navigate("/")}>
            ← Back
          </button>

          <button
            className="btns"
            style={{ background: "#ef4444" }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteDetails;

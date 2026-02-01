import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import NoteContext from "../context/NoteContext";

function NoteDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, deleteNote } = useContext(NoteContext);

  const note = notes.find((n) => n.id === Number(id));

  // ✅ AUTO-REDIRECT if note not found
  useEffect(() => {
    if (notes.length > 0 && !note) {
      navigate("/");
    }
  }, [notes, note, navigate]);

  if (!note) return null; // temporary blank while redirecting

  return (
    <div className="page-container">
      <div className="glass-card">
        <h2>{note.title}</h2>
        <p style={{ marginTop: "15px" }}>{note.content}</p>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button className="btns" onClick={() => navigate("/")}>
            Back
          </button>

          <button
            className="btns"
            style={{ background: "#ef4444" }}
            onClick={() => {
              deleteNote(note.id);
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteDetails;

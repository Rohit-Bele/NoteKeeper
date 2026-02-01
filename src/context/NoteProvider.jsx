import { useState } from "react";
import NoteContext from "./NoteContext";

function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        content,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;

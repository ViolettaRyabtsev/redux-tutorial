import { useState, useContext, useReducer } from "react";
import { NoteContext } from "../App";

const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return [...state, action.payload];
    case "GET_NOTES":
      return [...state];
    default:
      return state;
  }
};

const ContactUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [note, setNote] = useState({});
  const [notes, setNotes] = useState([]);

  const count = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note, "one note");
  };

  const handleClick = () => {
    setNotes([...notes, note]);
    dispatch({ type: "ADD_NOTES", payload: note });
    dispatch({ type: "GET_NOTES" });
    console.log(notes, "notes");
    console.log(count, "app");
  };

  console.log(state, "state");
  return (
    // <NotesContext.Provider value={notes}>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="name"
            value={note.name}
            onChange={(e) => setNote({ ...note, name: e.target.value })}
          ></input>
        </label>
        <label>
          text
          <input
            type="text"
            value={note.text}
            onChange={(e) => setNote({ ...note, text: e.target.value })}
          ></input>
        </label>
        <button type="submit" onClick={handleClick}>
          submit
        </button>
      </form>
      {notes.map((item) => (
        <div>
          <div>{item.name}</div>
          <div>{item.text}</div>
        </div>
      ))}
    </div>
    // </NotesContext.Provider>
  );
};

export default ContactUs;

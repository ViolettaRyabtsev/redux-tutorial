import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { createContext, useState, useReducer, useEffect, useRef } from "react";

// import ProductComponent from "./components/ProductComponent";
import ProductDetails from "./components/ProductDetail";
import ContactUs from "./components/ContactUs";
import ListOfProducts from "./components/ListOfProducts";
//design store
//define actions
// create a reducer
// set up the store

export const NoteContext = createContext([]);

function App() {
  const [notes, setNotes] = useState(["bla", "bkfdf"]);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="App">
      <Header />
      <NoteContext.Provider value={notes}>
        <Routes>
          <Route path="/" element={<ListOfProducts />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <div> i rendered {renderCount.current} times </div>
      </NoteContext.Provider>
    </div>
  );
}

export default App;

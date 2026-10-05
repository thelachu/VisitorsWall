import "./App.css";
import Visitor from "./components/Visitor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListVisitor from "./components/ListVisitor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [toast, setToast] = useState({
    message: "",
    type: "error",
  });

  const showToast = (message, type = "error") => {
    setToast({
      message,
      type,
    });
  };
  const closeToast = () => {
    setToast({ message: "", type: "error" });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListVisitor showToast={showToast} />} />
        <Route
          path="/Visitors"
          element={<ListVisitor showToast={showToast} />}
        />
        <Route
          path="/add-Visitor"
          element={<Visitor showToast={showToast} />}
        />
        <Route
          path="/edit-Visitor/:id"
          element={<Visitor showToast={showToast} />}
        />
      </Routes>
      <Footer message={toast.message} type={toast.type} onClose={closeToast} />
    </BrowserRouter>
  );
}

export default App;

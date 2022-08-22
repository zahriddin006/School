import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  function componentDidMount() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>

      <button
        className="btn btn-primary rounded-circle top-btn"
        onClick={componentDidMount}
      >
        <i class="bi bi-arrow-up fs-2"></i>
      </button>
    </>
  );
};

export default App;

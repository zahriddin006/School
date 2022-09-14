import React from "react";
import Home from "./pages/Home";
import SchoolBoss from "./pages/SchoolBoss"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SchoolAbout from "./pages/SchoolAbout";
import SchoolMis from "./pages/SchoolMis";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  function componentDidMount() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
  AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/royal" element={<SchoolBoss/>}/>
          <Route path="/about" element={<SchoolAbout/>}/>
          <Route path="/qoidalar" element={<SchoolMis/>}/>
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
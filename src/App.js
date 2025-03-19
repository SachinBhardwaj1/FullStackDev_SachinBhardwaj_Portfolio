import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ResumeNew from "./components/Resume/ResumeNew";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home />
        <ExperienceEducation />
        <About />
        <Projects />
        <ResumeNew />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
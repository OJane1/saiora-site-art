import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ListOfPrograms from "./components/ListOfPrograms";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";


function App() {
  return (
    <div className="App"> 
    <Router>
      <div>
        <Sidebar />
        </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/program" element={ <ListOfPrograms />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

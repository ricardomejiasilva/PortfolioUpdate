import "./App.css";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Project from "./Pages/Project";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
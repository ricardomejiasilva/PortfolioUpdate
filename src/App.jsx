import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom"; 
import Project from "./Pages/Project";
import Home from "./Pages/Home";

function App() {
  return (
    <HashRouter hashType="noslash">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
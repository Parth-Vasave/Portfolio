import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
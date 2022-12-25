import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import Home from "./pages/home";
import "./styles/app.css";

function App() {
  return (
    <div className="app bg-body-tertiary">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

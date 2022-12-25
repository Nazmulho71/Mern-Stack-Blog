import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header";
import Login from "./pages/login";
import Signup from "./pages/signup.js";
import Home from "./pages/home";
import Blog from "./pages/blog";
import "./styles/app.css";

function App() {
  const location = useLocation();
  const login = location.pathname === "/login";
  const signup = location.pathname === "/signup";

  return (
    <div className="app">
      {login || signup ? null : <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

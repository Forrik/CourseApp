import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Screen from "./pages/Screen/Screen.jsx";

function App() {
  return (
    <div className="course--app">
      <div className="header-wrp">
        <Header />
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/screen" element={<Screen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

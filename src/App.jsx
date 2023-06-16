import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="">
      <div className="gradient-bg-hero">
        <TopBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

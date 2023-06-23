import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SideBar from "./components/SideBar/SideBar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <TopBar /> */}
    <SideBar>
      <App />
    </SideBar>
  </BrowserRouter>
);

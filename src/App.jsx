import { createContext, useContext, useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import PlatformLaunch from "./pages/PlatformLaunch/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan/MarketingPlan";
import RoadMap from "./pages/Roadmap/RoadMap";
import appData from "./store/data.json";
import SideBar from "./components/SideBar/SideBar";
export const CountContext = createContext();
import CreateNewBoardComp from "./pages/CreateNewBoardComp/CreateNewBoardComp";

function App() {
  const [boardData, setAppBoardData] = useState(
    JSON.parse(localStorage.getItem("BoardData"))
  );

  const updateAppData = (data) => {
    setAppBoardData(data);
  };

  useEffect(() => {
    localStorage.setItem("BoardData", JSON.stringify(boardData));
  }, [boardData]);

  return (
    <CountContext.Provider value={{ boardData, updateAppData }}>
      <SideBar>
        <div className="">
          <div className="gradient-bg-hero">
            {/* <SideBar /> */}
            <TopBar />

            <Routes>
              <Route path="/boards" element={<CreateNewBoardComp />} />
              <Route
                path="/"
                element={
                  <Navigate to="/boards/platform-launch" replace={true} />
                }
              ></Route>
              <Route
                path="/boards/create-new-board"
                element={<CreateNewBoardComp />}
              />
              <Route path="/boards/:boardName" element={<PlatformLaunch />} />

              {/* <Route path="/marketing-plan" element={<MarketingPlan />} />
              <Route path="/roadmap" element={<RoadMap />} /> */}
            </Routes>
          </div>
        </div>
      </SideBar>
    </CountContext.Provider>
  );
}

export default App;

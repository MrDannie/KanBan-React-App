import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import PlatformLaunch from "./pages/PlatformLaunch/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan/MarketingPlan";
import RoadMap from "./pages/Roadmap/RoadMap";

import appData from "./store/data.json";

function App() {
  const getAppDataValues = () => {
    const boardData = localStorage.getItem("BoardData");
    if (!boardData) return {};
    return JSON.parse(boardData);
  };
  const [platformLaunchData, setPlatformLaunchData] = useState();
  const [appBoardData, setAppBoardData] = useState(getAppDataValues);

  useEffect(() => {
    setPlatformLaunchData(appData.boards[0]["columns"]);
    localStorage.setItem("BoardData", JSON.stringify(appBoardData));
  }, [appBoardData]);

  return (
    <div className="">
      <div className="gradient-bg-hero">
        {/* <SideBar /> */}
        <TopBar />

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/platform-launch" replace={true} />}
          ></Route>
          <Route
            path="/platform-launch"
            element={<PlatformLaunch platformLaunchData={platformLaunchData} />}
          />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/roadmap" element={<RoadMap />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

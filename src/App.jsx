import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import PlatformLaunch from "./pages/PlatformLaunch/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan/MarketingPlan";
import CreateNewBoard from "./pages/CreateNewBoard/CreateNewBoard";
import RoadMap from "./pages/Roadmap/RoadMap";

import appData from "./store/data.json";

function App() {
  const [platformLaunchData, setPlatformLaunchData] = useState();

  useEffect(() => {
    setPlatformLaunchData(appData.boards[0]);
  });

  return (
    <div className="">
      <div className="gradient-bg-hero">
        {/* <SideBar /> */}
        <TopBar />
        <Routes>
          <Route
            path="/platform-launch"
            element={<PlatformLaunch platformLaunchData={platformLaunchData} />}
          />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/create-new-board" element={<CreateNewBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

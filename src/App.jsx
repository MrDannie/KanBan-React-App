import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import PlatformLaunch from "./pages/PlatformLaunch/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan/MarketingPlan";
import RoadMap from "./pages/Roadmap/RoadMap";

import appData from "./store/data.json";

function App() {
  const [platformLaunchData, setPlatformLaunchData] = useState();

  useEffect(() => {
    setPlatformLaunchData(appData.boards[0]["columns"]);
  });

  return (
    <div className="">
      <div className="gradient-bg-hero">
        {/* <SideBar /> */}
        <TopBar />

        <Routes>
          <Route path="/" element={<PlatformLaunch />}></Route>
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

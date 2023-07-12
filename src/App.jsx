import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import PlatformLaunch from "./pages/PlatformLaunch/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan/MarketingPlan";
import RoadMap from "./pages/Roadmap/RoadMap";

import appData from "./store/data.json";

localStorage.setItem("BoardData", JSON.stringify(appData));

function App() {
  // const getAppDataValues = () => {
  //   let boardData = localStorage.getItem("BoardData");
  //   if (boardData) {
  //     return (boardData = JSON.parse(localStorage.getItem("BoardData")));
  //   } else {
  //     return {};
  //   }
  // };
  // const [platformLaunchData, setPlatformLaunchData] = useState();
  // useEffect(() => {
  //   localStorage.setItem("BoardData", JSON.stringify(appData));
  // }, [appData]);

  const [boardData, setAppBoardData] = useState(
    JSON.parse(localStorage.getItem("BoardData"))
  );

  // useEffect(() => {}, []);

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
            element={
              <PlatformLaunch
                platformLaunchData={boardData.boards[0]["columns"]}
              />
            }
          />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/roadmap" element={<RoadMap />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

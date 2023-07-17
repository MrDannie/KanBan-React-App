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
  const updateAppData = (data) => {
    setAppBoardData(data);
  };

  const updateTask = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    setCount(count - 1);
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
              <Route
                path="/"
                element={<Navigate to="/platform-launch" replace={true} />}
              ></Route>
              <Route path="/platform-launch" element={<PlatformLaunch />} />
              <Route path="/marketing-plan" element={<MarketingPlan />} />
              <Route path="/roadmap" element={<RoadMap />} />
            </Routes>
          </div>
        </div>
      </SideBar>
    </CountContext.Provider>
  );
}

export default App;

import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  isSideBarOpen: { show: true },
});

const setSideBar = (show) => {
  const isSideBarOpen = getGlobalState("isSideBarOpen");
  setGlobalState("isSideBarOpen", { ...isSideBarOpen, show });
};

export { setSideBar, useGlobalState, getGlobalState, setGlobalState };

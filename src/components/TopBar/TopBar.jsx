import React from "react";
import PropTypes from "prop-types";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { useGlobalState } from "../../store/store";

const TopBar = () => {
  const isSideBarOpen = useGlobalState("isSideBarOpen");
  console.log("SideBar", isSideBarOpen[0].show);
  return (
    <div className="TopBar">
      <div className="logo-title-region">
        <img
          style={{ display: isSideBarOpen[0].show ? "none" : "block" }}
          src={logo}
          alt=""
          className="logo inline"
        />
        <h1 className="page-title inline">Platform Launch</h1>
      </div>
      <div className="add-newtask">
        <button className="add-task">+ Add New Task</button>
        <img
          className="inline cursor-pointer"
          src={iconVerticalEllipsis}
          alt=""
        />
      </div>
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;

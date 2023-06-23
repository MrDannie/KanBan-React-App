import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./SideBar.css";

import logo from "../assets/logo-dark.svg";
import boardIcon from "../assets/icon-board.svg";
import iconLightTheme from "../assets/icon-light-theme.svg";
import iconDarkTheme from "../assets/icon-dark-theme.svg";
import iconHideSideBar from "../assets/icon-hide-sidebar.svg";
import iconShowSideBar from "../assets/icon-show-sidebar.svg";
import appData from "../../store/data.json";

import { setSideBar } from "../../store/store";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
    setSideBar(!isOpen);
  };

  return (
    <div className="main-container ">
      <div
        className="sidebar"
        style={{
          width: isOpen ? "300px" : "0px",
          minWidth: isOpen ? "261px" : "0px",
        }}
      >
        <span>
          <img
            className="logo-section"
            style={{ display: isOpen ? "block" : "none" }}
            src={logo}
            alt="logo"
          />
        </span>

        <div className="navigation">
          <div>
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="title"
            >
              ALL BOARD (3)
            </h1>
            {appData.boards.map((item, index) => (
              <NavLink
                to={item.name.replace(/ /, "-")}
                key={index}
                style={{ display: isOpen ? "block" : "none" }}
                className="nav-tabs"
                activeclassname="active"
              >
                <span className="nav-tab__content">
                  {" "}
                  <img className="nav-icon" src={boardIcon} alt="boardIcon" />
                  {item.name}
                </span>
              </NavLink>
            ))}
            <Link
              to="/create-new-board"
              style={{ display: isOpen ? "flex" : "none" }}
              className="nav-tabs"
            >
              {" "}
              <span className="nav-tab__content add-board-btn">
                {" "}
                <img className="nav-icon" src={boardIcon} alt="boardIcon" />+
                Create New Board
              </span>
            </Link>{" "}
            {/* <ul className="navigation-tabs">
              <Link
                to="/platform-launch"
                style={{ display: isOpen ? "block" : "none" }}
                className="launch bg-[#635FC7] py-[20px]"
              >
                <span className="text-content text">
                  {" "}
                  <img className="inline" src={boardIcon} alt="boardIcon" />
                  Platform Launch
                </span>
              </Link>
              <Link
                to="/marketing-plan"
                style={{ display: isOpen ? "block" : "none" }}
                className="launch py-[20px]"
              >
                {" "}
                <span className="">
                  {" "}
                  <img className="inline" src={boardIcon} alt="boardIcon" />
                  Marketing Plan
                </span>
              </Link>
              <Link
                to="/roadmap"
                style={{ display: isOpen ? "block" : "none" }}
                className="launch  py-[20px]"
              >
                {" "}
                <span className="">
                  {" "}
                  <img className="inline" src={boardIcon} alt="boardIcon" />
                  Roadmap
                </span>
              </Link>
              <Link
                to="/create-new-board"
                style={{ display: isOpen ? "flex" : "none" }}
                className="launch py-[20px]"
              >
                {" "}
                <span className="">
                  {" "}
                  <img
                    className="add-board-icon inline text-[#635FC7]"
                    src={boardIcon}
                    alt="boardIcon"
                  />
                  + Create New Board
                </span>
              </Link>{" "}
            </ul> */}
          </div>

          {/* HIDE SIDE BAR SECTION */}
          <div className="theme_and_switch">
            <div
              style={{ display: isOpen ? "flex" : "none" }}
              className="switch"
            >
              <img src={iconLightTheme} alt="Light Theme" />
              <div className="toggler">
                <div className="toggler-btn"></div>
              </div>
              <img src={iconDarkTheme} alt="Dark Theme" />
            </div>

            {/* HIDE SIDEBAR */}
            <div onClick={toggle}>
              <span
                style={{ display: isOpen ? "block" : "none" }}
                className="hide-btn"
              >
                {" "}
                <img
                  className="hide-sidebar-icon "
                  src={iconHideSideBar}
                  alt="Hide Sidebar"
                />
                Hide Sidebar
              </span>
              <div
                style={{ display: isOpen ? "none" : "flex" }}
                className="show-sidebar-btn"
              >
                <img
                  src={iconShowSideBar}
                  alt=""
                  className="show-sidebar-icon inline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;

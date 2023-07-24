import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CountContext } from "../../App";

import PropTypes from "prop-types";
import "./SideBar.css";

import logo from "../assets/logo-dark.svg";
import boardIcon from "../assets/icon-board.svg";
import iconLightTheme from "../assets/icon-light-theme.svg";
import iconDarkTheme from "../assets/icon-dark-theme.svg";
import iconHideSideBar from "../assets/icon-hide-sidebar.svg";
import iconShowSideBar from "../assets/icon-show-sidebar.svg";

import { setSideBar } from "../../store/store";
import CreateNewBoard from "../../pages/CreateNewBoard/CreateNewBoard";

const SideBar = ({ children }) => {
  const { boardData, updateAppData } = useContext(CountContext);

  const [isOpen, setIsOpen] = useState(true);
  const [showNewBoardModal, setNewBoardModal] = useState(false);
  const closeNewBoardModal = () => {
    setNewBoardModal(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    setSideBar(!isOpen);
  };

  const handleModal = () => {
    setNewBoardModal(true);
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
            {boardData.boards.map((item, index) => (
              <NavLink
                to={`/boards/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                key={index}
                style={{ display: isOpen ? "block" : "none" }}
                className="nav-tabs"
                activeclassname="active"
              >
                <span className="nav-tab__content">
                  {" "}
                  <img className="nav-icon" src={boardIcon} alt="boardIcon" />
                  {item.name.length > 20
                    ? item.name.substring(0, 20) + "..."
                    : item.name}
                </span>
              </NavLink>
            ))}
            <Link
              style={{ display: isOpen ? "flex" : "none" }}
              className="nav-tabs"
              onClick={handleModal}
            >
              <span className="nav-tab__content add-board-btn">
                <img className="nav-icon" src={boardIcon} alt="boardIcon" />+
                Create New Board
              </span>
            </Link>
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
            <div
              style={{ width: isOpen ? "276px" : "48px" }}
              className="hideSidebar"
              onClick={toggle}
            >
              <span
                style={{
                  display: isOpen ? "block" : "none",
                }}
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

      <main
        style={{
          width: isOpen ? "calc(100% - 300px)" : "100%",
        }}
      >
        {children}
      </main>
      <CreateNewBoard
        closeNewBoardModal={closeNewBoardModal}
        visible={showNewBoardModal}
      />
    </div>
  );
};

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;

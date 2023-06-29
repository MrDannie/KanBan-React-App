import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { useGlobalState } from "../../store/store";
import ModalContainer from "../ModalContainer/ModalContainer";

const TopBar = () => {
  const [showViewTaskModal, setViewTaskModal] = useState("");
  const handleOnClose = () => {
    setViewTaskModal("");
  };

  const isSideBarOpen = useGlobalState("isSideBarOpen");
  return (
    <div className="TopBar">
      <div
        style={{ display: isSideBarOpen[0].show ? "none" : "block" }}
        className="rectangle-line"
      ></div>
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
        <button
          onClick={() => setViewTaskModal("AddTask")}
          className="add-task"
        >
          + Add New Task
        </button>
        <img
          className="inline cursor-pointer"
          src={iconVerticalEllipsis}
          alt=""
        />
      </div>
      <ModalContainer
        component={showViewTaskModal}
        onClose={handleOnClose}
        visible={showViewTaskModal}
      />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;

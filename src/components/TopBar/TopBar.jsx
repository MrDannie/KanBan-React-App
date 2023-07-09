import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { showModal, getGlobalState, useGlobalState } from "../../store/store";
import ModalContainer from "../ModalContainer/ModalContainer";

const TopBar = () => {
  const [showViewTaskModal, setViewTaskModal] = useState("");
  const isSideBarOpen = useGlobalState("isSideBarOpen");
  const [showAddTask, setAddTask] = useState(false);

  // const isModalContainerOpen = getGlobalState("isModalContainerOpen");
  // console.log(isModalContainerOpen, "fhhsds");

  const handleOnClose = () => {
    showModal(false);
    setViewTaskModal("");
    setAddTask(false);
  };

  const showAddTaskModal = () => {
    showModal(!showAddTask);
    setViewTaskModal("AddTask");
    setAddTask(!showAddTask);
  };

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
        <button onClick={() => showAddTaskModal()} className="add-task">
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
        isModalContainerOpen={showAddTask}
      />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;

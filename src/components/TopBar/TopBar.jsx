import React, { useState, useEffect, useRef } from "react";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { showModal, useGlobalState } from "../../store/store";
import DeleteBoard from "../../pages/DeleteBoard/DeleteBoard";
import EditBoard from "../../pages/EditBoard/EditBoard";
import AddTask from "../../pages/AddTask/AddTask";

const TopBar = () => {
  const topBarMenu = useRef();
  const topmenuBtnRef = useRef();
  const [showAddTaskModal, setAddTaskModal] = useState(false);
  const isSideBarOpen = useGlobalState("isSideBarOpen");
  const [showAddTask, setAddTask] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (topmenuBtnRef.current?.contains(e.target)) return;
      if (!topBarMenu.current?.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.body.addEventListener("mousedown", handler, true);
    return () => {
      document.body.removeEventListener("mousedown", handler, true);
    };
  }, []);

  const handleOnClose = () => {
    showModal(false);
    setViewTaskModal("");
    setAddTask(false);
  };

  const closeDeleteBoardModal = () => {
    setShowDeleteBoardModal(false);
  };

  const handleModal = () => {
    setShowDeleteBoardModal(true);
    setOpenMenu(!openMenu);
  };

  const closeAddTaskdModal = () => {
    setAddTaskModal(false);
  };

  const handleAddTaskModal = () => {
    setAddTaskModal(true);
  };

  const closeEditBoardModal = () => {
    setShowEditBoardModal(false);
  };

  const handleEditModal = () => {
    setShowEditBoardModal(true);
    setOpenMenu(!openMenu);
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
        <button onClick={handleAddTaskModal} className="add-task">
          + Add New Task
        </button>
        <img
          className="menu-ellipsis inline cursor-pointer"
          src={iconVerticalEllipsis}
          alt=""
          ref={topmenuBtnRef}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />

        <div
          ref={topBarMenu}
          className={`dropdown-menu ${openMenu ? "active" : "inactive"}`}
        >
          <ul>
            <li onClick={handleEditModal} className="mb-2 cursor-pointer">
              Edit Board
            </li>
            <li onClick={handleModal} className="text-[red] cursor-pointer">
              Delete Board
            </li>
          </ul>
        </div>
      </div>
      <AddTask
        visible={showAddTaskModal}
        closeAddTaskModal={closeAddTaskdModal}
      />
      <DeleteBoard
        visible={showDeleteBoardModal}
        closeDeleteBoardModal={closeDeleteBoardModal}
      />

      <EditBoard
        visible={showEditBoardModal}
        closeEditBoardModal={closeEditBoardModal}
      />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;

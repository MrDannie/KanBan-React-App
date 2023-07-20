import React, { useState, useEffect, useRef, useContext } from "react";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { showModal, useGlobalState } from "../../store/store";
import DeleteBoard from "../../pages/DeleteBoard/DeleteBoard";
import EditBoard from "../../pages/EditBoard/EditBoard";
import AddTask from "../../pages/AddTask/AddTask";
import { CountContext } from "../../App";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const chars = { "/": "", "-": " " };
  const topBarMenu = useRef();
  const topmenuBtnRef = useRef();
  const [showAddTaskModal, setAddTaskModal] = useState(false);
  const isSideBarOpen = useGlobalState("isSideBarOpen");
  const [openMenu, setOpenMenu] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);
  const { boardData } = useContext(CountContext);
  const [currentBoard, setCurrentBoard] = useState("");
  const location = useLocation();
  const boardPosition = boardData.boards.findIndex((item) =>
    item.name
      .toLowerCase()
      .includes(location.pathname.replace(/[/ -]/g, (m) => chars[m]))
  );
  const [boardColumns, setBoardColumns] = useState(
    boardData.boards[boardPosition]
  );
  console.log(boardColumns);

  // useEffect(() => {
  //   const boardPosition = boardData.boards.findIndex((item) =>
  //     item.name
  //       .toLowerCase()
  //       .includes(location.pathname.replace(/[/ -]/g, (m) => chars[m]))
  //   );
  //   setBoardColumns(boardData.boards[boardPosition]);
  //   console.log(boardColumns);
  // }, [location]);

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

  useEffect(() => {
    const chars = { "/": "", "-": " " };

    const boardPosition = boardData.boards.findIndex((item) =>
      item.name
        .toLowerCase()
        .includes(location.pathname.replace(/[/ -]/g, (m) => chars[m]))
    );
    setCurrentBoard(location.pathname.replace(/[/ -]/g, (m) => chars[m]));

    setBoardColumns(boardData.boards[boardPosition]);
  }, [location]);

  const closeDeleteBoardModal = () => {
    setShowDeleteBoardModal(false);
  };

  const handleDeleteModal = () => {
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
        <h1 className="page-title inline">{currentBoard}</h1>
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
            <li
              onClick={handleDeleteModal}
              className="text-[red] cursor-pointer"
            >
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
        selectedBoard={boardPosition}
        boardName={boardColumns.name}
      />

      <EditBoard
        visible={showEditBoardModal}
        closeEditBoardModal={closeEditBoardModal}
        boardColumns={boardColumns}
      />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;

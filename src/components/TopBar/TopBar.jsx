import React, { useState, useEffect, useRef, useContext } from "react";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { useGlobalState } from "../../store/store";
import DeleteBoard from "../../pages/DeleteBoard/DeleteBoard";
import EditBoard from "../../pages/EditBoard/EditBoard";
import AddTask from "../../pages/AddTask/AddTask";
import { CountContext } from "../../App";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const TopBar = () => {
  const { boardName } = useParams();
  const chars = { "/": "", "-": " " };
  const topBarMenu = useRef();
  const topmenuBtnRef = useRef();
  const [showAddTaskModal, setAddTaskModal] = useState(false);
  const isSideBarOpen = useGlobalState("isSideBarOpen");
  const [openMenu, setOpenMenu] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);
  const { boardData } = useContext(CountContext);
  const [currentBoard, setCurrentBoard] = useState(
    localStorage.getItem("currentBoard")
  );
  const [navTitle, setNavTitle] = useState("");
  console.log(navTitle);
  const location = useLocation();
  const boardPosition = boardData.boards.findIndex((item) =>
    item.name
      .toLowerCase()
      .includes(location.pathname.slice(8).replace(/-/g, " ").toLowerCase())
  );
  const [boardColumns, setBoardColumns] = useState(
    boardData.boards[boardPosition]
  );

  useEffect(() => {
    setCurrentBoard(localStorage.getItem("currentBoard"));
    setNavTitle(location.pathname.slice(8).replace(/-/g, " ").toLowerCase());
  }, [location.pathname]);

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
        .includes(location.pathname.slice(8).replace(/-/g, " ").toLowerCase())
    );
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
    resetForm();
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
        style={{ display: isSideBarOpen[0].show ? "none" : "flex" }}
        className="rectangle-line"
      ></div>
      <div className="logo-title-region">
        <img
          style={{ display: isSideBarOpen[0].show ? "none" : "flex" }}
          src={logo}
          alt=""
          className="logo inline"
        />
        <h1 className="page-title inline">{navTitle}</h1>
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

import React, { useState, useEffect, useRef, useContext } from "react";
import "./TopBar.css";
import logo from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import logoMobile from "../assets/logo-mobile.svg";
import chevronDown from "../assets/icon-chevron-down.svg";
import addTaskMobile from "../assets/icon-addtask-mobile.svg";

import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";
import { getGlobalState, setSideBar, useGlobalState } from "../../store/store";
import DeleteBoard from "../../pages/DeleteBoard/DeleteBoard";
import EditBoard from "../../pages/EditBoard/EditBoard";
import AddTask from "../../pages/AddTask/AddTask";
import CountContext from "../../Context";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import MobileSideBar from "../MobileSideBar/MobileSideBar";

const TopBar = () => {
  const topBarMenu = useRef();
  const largeScreenLogo = useRef();
  const topmenuBtnRef = useRef();
  const [showAddTaskModal, setAddTaskModal] = useState(false);
  let isSideBarOpen = getGlobalState("isSideBarOpen");
  const [openMenu, setOpenMenu] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [showNavBar, setShowNavbar] = useState(false);

  const { boardData, addTaskBtnState, showSideBar, updateShowSideBar } =
    useContext(CountContext);
  const [currentBoard, setCurrentBoard] = useState(
    localStorage.getItem("currentBoard")
  );
  console.log(isSideBarOpen);
  const [navTitle, setNavTitle] = useState("");
  const location = useLocation();
  const boardPosition = boardData.boards.findIndex((item) =>
    item.name
      .toLowerCase()
      .includes(location.pathname.slice(8).replace(/-/g, " ").toLowerCase())
  );
  const [boardColumns, setBoardColumns] = useState(
    boardData.boards[boardPosition]
  );

  // const checkScreenSize = () => {
  //   window.addEventListener("resize", function () {
  //     if (window.matchMedia("(min-width: 640px)").matches) {
  //       console.log("TRUE");
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // };

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
    window.addEventListener("resize", function () {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
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
  };

  const handleAddTaskModal = () => {
    setAddTaskModal(true);
  };

  const handleMobileSideBar = () => {
    setShowMobileSideBar(true);
  };

  const closeEditBoardModal = () => {
    setShowEditBoardModal(false);
  };

  const closeMobileSideBar = () => {
    setShowMobileSideBar(false);
  };

  const handleEditModal = () => {
    setShowEditBoardModal(true);
    setOpenMenu(!openMenu);
  };

  return (
    <div className="TopBar">
      <div
        style={{ display: showNavBar || showSideBar ? "none" : "flex" }}
        className="rectangle-line"
      ></div>
      <div className="logo-title-region">
        <img
          className="logo-lg-screen"
          ref={largeScreenLogo}
          style={{ display: showNavBar || showSideBar ? "none" : "flex" }}
          src={
            localStorage.getItem("selectedTheme") === "light" ? logo : logoLight
          }
          alt=""
          srcSet=""
        />
        <img
          className="flex sm:hidden mx-4"
          src={logoMobile}
          alt=""
          srcSet=""
        />
        <h1 className="page-title">{navTitle}</h1>
        <h1 onClick={handleMobileSideBar} className="page-title_mobile">
          {navTitle}
        </h1>
        <img className="chevron-icon" src={chevronDown} alt="" />
      </div>
      <div
        style={{ display: location.pathname === "/boards" ? "none" : "flex" }}
        className="add-newtask"
      >
        <button
          disabled={addTaskBtnState}
          onClick={handleAddTaskModal}
          className="add-task"
          style={{
            backgroundColor: addTaskBtnState ? "#635fc740" : "#635FC7",
          }}
        >
          + Add New Task
        </button>

        <span>
          <button
            disabled={addTaskBtnState}
            onClick={handleAddTaskModal}
            style={{
              backgroundColor: addTaskBtnState ? "#635fc740" : "#635FC7",
            }}
            className="add-task-mobile"
          >
            +
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
        </span>

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
        boardName={boardColumns?.name}
      />

      <EditBoard
        visible={showEditBoardModal}
        closeEditBoardModal={closeEditBoardModal}
        boardColumns={boardColumns}
      />

      <MobileSideBar
        visible={showMobileSideBar}
        closeMobileSideBar={closeMobileSideBar}
      />
    </div>
  );
};

TopBar.propTypes = {};

TopBar.defaultProps = {};

export default TopBar;

import React from "react";
import PropTypes from "prop-types";
import "./SideBar.css";
import logo from "../assets/logo-dark.svg";
import boardIcon from "../assets/icon-board.svg";

const SideBar = () => (
  <div className="SideBar absolute h-screen w-[300px] left-0 top-0 bg-white">
    <span>
      <img className="mt-[40px] ml-[45px] mb-[55px]" src={logo} alt="log" />
    </span>
    <div className="navigation">
      <h1 className="title mb-[20px] ml-[45px] text-[#828FA3]">
        ALL BOARD (3)
      </h1>
      <ul className="navigation-tabs">
        <li className="launch bg-[#635FC7] py-[20px]">
          <span className="text-content">
            {" "}
            <img className="inline" src={boardIcon} alt="boardIcon" />
            Platform Launch
          </span>
        </li>
        <li className="launch py-[20px]">
          {" "}
          <span className="">
            {" "}
            <img className="inline" src={boardIcon} alt="boardIcon" />
            Marketing Launch
          </span>
        </li>
        <li className="launch  py-[20px]">
          {" "}
          <span className="">
            {" "}
            <img className="inline" src={boardIcon} alt="boardIcon" />
            Roadmap
          </span>
        </li>
        <li className="launch py-[20px]">
          {" "}
          <span className="">
            {" "}
            <img className="inline" src={boardIcon} alt="boardIcon" />+ Create
            New Board
          </span>
        </li>{" "}
      </ul>
    </div>
  </div>
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;

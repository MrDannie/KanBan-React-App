import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ViewTask.css";
import iconVerticalEllipsis from "../../components/assets/icon-vertical-ellipsis.svg";
import { showModal } from "../../store/store";

const ViewTask = ({ selectedTask }) => {
  const [subtaskStatus, setSubtaskStatus] = useState(false);
  const [taskStatus, setTaskStatus] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  let menuRef = useRef();
  let menuBtnRef = useRef();

  // const [task, setTask] = useState({
  //   title: "",
  //   description: "",
  //   status: "",
  //   subtasks: [
  //     {
  //       title: "",
  //       isCompleted: true,
  //     },
  //     {
  //       title: "",
  //       isCompleted: false,
  //     },
  //     {
  //       title: "",
  //       isCompleted: false,
  //     },
  //   ],
  // });

  const handleClick = () => {
    showModal(false);
  };

  const count = selectedTask["subtasks"].filter((subtask, index) => {
    return subtask["isCompleted"] === true;
  }).length;

  useEffect(() => {
    let handler = (e) => {
      if (menuBtnRef.current.contains(e.target)) return;
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <section className="ViewTask-Modal">
      <div className="view_task-title">
        <h4 className="">{selectedTask.title}</h4>
        <img
          className="menu-ellipsis inline cursor-pointer"
          src={iconVerticalEllipsis}
          alt=""
          ref={menuBtnRef}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
        <div
          ref={menuRef}
          className={`dropdown-menu ${openMenu ? "active" : "inactive"}`}
        >
          <ul>
            <li className="mb-2 cursor-pointer">Edit Task</li>
            <li className="text-[red] cursor-pointer">Delete Task</li>
          </ul>
        </div>
      </div>

      <p className="task-description">{selectedTask.description}</p>

      <div className="sub-tasks">
        <span className="number-of-tasks">
          {"Subtask " +
            "( " +
            count +
            " of " +
            selectedTask["subtasks"].length +
            " )"}
        </span>
        {selectedTask["subtasks"].map((subtask, index) => (
          <label
            onClick={(e) => setSubtaskStatus(e.target.value)}
            key={index}
            htmlFor=""
          >
            <input
              value={subtaskStatus}
              onChange={(e) => setSubtaskStatus(e.target.value)}
              type="checkbox"
              name=""
              id=""
            />
            <span className="inputName">{subtask.title}</span>
          </label>
        ))}
      </div>

      <div className="current-status">
        <span> Current Status</span>
        <label htmlFor="">
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            name="status"
            id="status"
          >
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </div>
      <button onClick={handleClick}>Close</button>
      {/* <p>{subtaskStatus}</p>
      <p>{taskStatus}</p> */}
    </section>
  );
};

ViewTask.propTypes = {};

ViewTask.defaultProps = {};

export default ViewTask;

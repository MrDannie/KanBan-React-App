import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ViewTask.css";
import iconVerticalEllipsis from "../../components/assets/icon-vertical-ellipsis.svg";
import EditTask from "../EditTask/EditTask";

const ViewTask = ({
  selectedTask,
  visible,
  closeViewTaskModal,
  showEditTask,
  showDeleteTask,
}) => {
  const menuRef = useRef();
  const menuBtnRef = useRef();
  const [subtaskStatus, setSubtaskStatus] = useState(false);
  const [taskStatus, setTaskStatus] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (menuBtnRef.current?.contains(e.target)) return;
      if (!menuRef.current?.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.body.addEventListener("mousedown", handler, true);
    return () => {
      document.body.removeEventListener("mousedown", handler, true);
    };
  }, []);

  const openEditModal = () => {
    showEditTask();
  };

  const openDeleteTask = () => {
    showDeleteTask();
  };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeViewTaskModal();
  };
  const count = selectedTask["subtasks"].filter((subtask, index) => {
    return subtask["isCompleted"] === true;
  }).length;

  return (
    <div
      onClick={handleOnClose}
      id="modal-container"
      className="ModalContainer"
    >
      <section className="modal-container-modal">
        <div className="modal-body">
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
                  <li onClick={openEditModal} className="mb-2 cursor-pointer">
                    Edit Task
                  </li>
                  <li
                    onClick={openDeleteTask}
                    className="text-[red] cursor-pointer"
                  >
                    Delete Task
                  </li>
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
          </section>
        </div>
      </section>
      {/* <EditTask
        visible={editTask}
        selectedTask={selectedTask}
        closeModal={closeModal}
      /> */}
    </div>
  );
};

ViewTask.propTypes = {};

ViewTask.defaultProps = {};

export default ViewTask;

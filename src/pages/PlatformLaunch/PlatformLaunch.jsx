import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PlatformLaunch.css";

import { showModal } from "../../store/store";
import ViewTask from "../ViewTask/ViewTask";
import EditTask from "../EditTask/EditTask";
import DeleteTask from "../DeleteTask/DeleteTask";

const PlatformLaunch = (props) => {
  const [taskModalDetails, setModalData] = useState({});
  const [showTaskDetailModal, setTaskDetailsModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [subtasks, setSubTasks] = useState([]);
  const platformLaunchData = props.platformLaunchData;

  const closeViewTaskModal = () => {
    setTaskDetailsModal(false);
  };

  const closeEditModal = () => {
    setEditTask(false);
  };

  const closeDeleteModal = () => {
    setDeleteTask(false);
  };

  const showTaskDetails = (id, item) => {
    setModalData(item);
    setSubTasks(item.subtasks);
    console.log(subtasks, taskModalDetails);
    showModal(!showTaskDetailModal);
    setTaskDetailsModal(!showTaskDetailModal);
  };

  const showEditTask = () => {
    closeViewTaskModal();
    setEditTask(true);
  };

  const showDeleteTask = () => {
    closeViewTaskModal();
    setDeleteTask(true);
  };

  return (
    <div className="PlatformLaunch">
      <div
        className="default-content"
        style={{ display: platformLaunchData ? "none" : "flex" }}
      >
        <h3 className="empty-message">
          This board is empty. Create a new column to get started.
        </h3>
        <button className="add-column-btn">+Add New Column</button>
      </div>
      {/* TASKS CONTAINER */}
      <div className="tasks-container">
        {platformLaunchData.map((item, index) => (
          <section key={index} className="todo-col">
            <div className="title">
              <span className="dot color-dot-1"></span>
              <h2>{item.name + " " + "(" + item["tasks"].length + ")"}</h2>
            </div>
            {item["tasks"].map((item, id) => (
              <div key={id} className="task">
                <h3
                  className="task-title"
                  onClick={() => showTaskDetails(id, item)}
                >
                  {item.title}
                </h3>
                <span className="sub-task">
                  {"0" + " of " + item["subtasks"].length + " subtasks"}
                </span>
              </div>
            ))}
          </section>
        ))}
        <section
          onClick={() => setViewTaskModal("AddNewColumn")}
          className="task add-new-col"
        >
          <h3 className="add-col-btn">+New Column</h3>
        </section>
      </div>
      <ViewTask
        visible={showTaskDetailModal}
        selectedTask={taskModalDetails}
        closeViewTaskModal={closeViewTaskModal}
        showEditTask={showEditTask}
        showDeleteTask={showDeleteTask}
      />
      <EditTask
        visible={editTask}
        selectedTask={taskModalDetails}
        closeEditModal={closeEditModal}
        subtasks={subtasks}
      />
      <DeleteTask visible={deleteTask} closeDeleteModal={closeDeleteModal} />
    </div>
  );
};

PlatformLaunch.propTypes = {};

PlatformLaunch.defaultProps = {};

export default PlatformLaunch;

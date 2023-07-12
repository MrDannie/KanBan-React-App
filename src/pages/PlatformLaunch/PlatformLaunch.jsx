import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PlatformLaunch.css";

import { showModal } from "../../store/store";
import ViewTask from "../ViewTask/ViewTask";
import EditTask from "../EditTask/EditTask";
import DeleteTask from "../DeleteTask/DeleteTask";
import AddNewColumn from "../AddNewColumn/AddNewColumn";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("BoardData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const PlatformLaunch = (props) => {
  const [taskModalDetails, setModalData] = useState({});
  const [showTaskDetailModal, setTaskDetailsModal] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [subtasks, setSubTasks] = useState([]);
  const [showAddColumnModal, setShowAddColumnModal] = useState(false);
  const [platformLaunchDatas, setPlatformLaunchData] = useState(
    getDataFromLocalStorage
  );

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

  const closeAddColumnModal = () => {
    setShowAddColumnModal(false);
  };

  const handleModal = () => {
    setShowAddColumnModal(true);
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
        <button onClick={handleModal} className="add-column-btn">
          +Add New Column
        </button>
      </div>
      {/* TASKS CONTAINER */}
      <div className="tasks-container">
        {platformLaunchData.map((item, index) => (
          <section key={index} className="todo-col">
            <div className="title">
              <span className={`dot ${item.name}`}></span>
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
                  {item["subtasks"].reduce(
                    (counter, subtask) =>
                      subtask.isCompleted ? (counter += 1) : counter,
                    0
                  ) +
                    " of " +
                    item["subtasks"].length +
                    " subtasks"}
                </span>
              </div>
            ))}
          </section>
        ))}
        <section onClick={handleModal} className="task add-new-col">
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

      <AddNewColumn
        visible={showAddColumnModal}
        closeAddColumnModal={closeAddColumnModal}
      />
    </div>
  );
};

PlatformLaunch.propTypes = {};

PlatformLaunch.defaultProps = {};

export default PlatformLaunch;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PlatformLaunch.css";

import { showModal } from "../../store/store";
import ViewTask from "../ViewTask/ViewTask";

const PlatformLaunch = (props) => {
  const [taskModalDetails, setModalData] = useState({});
  const [showTaskDetailModal, setTaskDetailsModal] = useState(false);
  const platformLaunchData = props.platformLaunchData;

  const closeModal = () => {
    setTaskDetailsModal(false);
  };

  const showTaskDetails = (id, item) => {
    setModalData(item);
    showModal(!showTaskDetailModal);
    setTaskDetailsModal(!showTaskDetailModal);
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
        closeModal={closeModal}
      />
      {/* <ViewTask
        component={showViewTaskModal}
        onClose={handleOnClose}
        isModalContainerOpen={showTaskDetailModal}
        taskDetails={taskModalDetails}
      /> */}
    </div>
  );
};

PlatformLaunch.propTypes = {};

PlatformLaunch.defaultProps = {};

export default PlatformLaunch;

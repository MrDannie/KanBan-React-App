import React from "react";
import PropTypes from "prop-types";
import "./PlatformLaunch.css";

import appData from "../../store/data.json";

const PlatformLaunch = (props) => {
  // const { platformLaunchData } = props;
  // console.log("Launch Data", props);

  // const PlatformLaunchData = appData.boards[0];
  const platformLaunchData = appData.boards[0]["columns"];
  console.log("HERE", platformLaunchData);

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
          <section className="todo-col">
            <div className="title">
              <span className="dot color-dot-1"></span>
              <h2>{item.name + " " + "(" + item["tasks"].length + ")"}</h2>
            </div>
            {item["tasks"].map((item) => (
              <div className="task">
                <h3 className="task-title">{item.title}</h3>
                <span className="sub-task">
                  0 of {item["subtasks"].length} substasks
                </span>
              </div>
            ))}
          </section>
        ))}
        <section className="task add-new-col">
          <h3 className="add-col-btn">+New Column</h3>
        </section>
      </div>
    </div>
  );
};

PlatformLaunch.propTypes = {};

PlatformLaunch.defaultProps = {};

export default PlatformLaunch;

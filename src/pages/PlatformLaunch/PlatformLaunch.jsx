import React from "react";
import PropTypes from "prop-types";
import "./PlatformLaunch.css";

import appData from "../../store/data.json";

const PlatformLaunch = (props) => {
  const { platformLaunchData } = props;
  console.log("Launch Data", props);

  // const PlatformLaunchData = appData.boards[0];
  // const platformLaunchTasks = appData.boards[0]["columns"][0]["tasks"];
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
        <section className="todo-col">
          <div className="title">
            <span className="dot color-dot-1"></span>
            <h2>TODO (4)</h2>
          </div>
          <div className="task">
            <h3>Build UI for onboarding flow</h3>
            <span className="sub-task">0 of 3 substasks</span>
          </div>
        </section>

        <section className="doing-col">
          <div className="title">
            <span className="dot color-dot-2"></span>
            <h2>DOING (6)</h2>
          </div>
          <div className="task">
            <h3>Build UI for onboarding flow</h3>
            <span className="sub-task">0 of 3 substasks</span>
          </div>
        </section>

        <section className="done-col">
          <div className="title">
            <span className="dot color-dot-3"></span>
            <h2>DONE (7)</h2>
          </div>
          <div className="task">
            <h3>Build UI for onboarding flow</h3>
            <span className="sub-task">0 of 3 substasks</span>
          </div>
        </section>

        <section className="todo-col">
          <div className="title"></div>
          <div className="task">
            <h3>+New Column</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

PlatformLaunch.propTypes = {};

PlatformLaunch.defaultProps = {};

export default PlatformLaunch;

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ViewTask.css";
import iconVerticalEllipsis from "../../components/assets/icon-vertical-ellipsis.svg";

const ViewTask = ({ selectedTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  const setIsCheckedProperty = () => {
    setIsChecked(!isChecked);
  };

  const count = selectedTask["subtasks"].filter((subtask, index) => {
    return subtask["isCompleted"] === true;
  }).length;
  console.log(count);
  return (
    <section className="ViewTask-Modal">
      <div className="view_task-title">
        <h4 className="">{selectedTask.title}</h4>
        <img
          className="inline cursor-pointer"
          src={iconVerticalEllipsis}
          alt=""
        />
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
          <label onClick={setIsCheckedProperty} key={index} htmlFor="">
            <input
              defaultChecked={subtask.isCompleted}
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
          <select defaultValue={selectedTask.status} name="status" id="status">
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </div>
    </section>
  );
};

ViewTask.propTypes = {};

ViewTask.defaultProps = {};

export default ViewTask;

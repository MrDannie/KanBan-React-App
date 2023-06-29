import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddTask.css";

import removeSubtask from "../../components/assets/icon-cross.svg";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [subtasks, setSubtasks] = useState([{ title: "", isCompleted: false }]);
  const [status, setStatus] = useState("");
  console.log(subtasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = [
      {
        title: taskTitle,
        description: taskDescription,
        status,
        subtasks: subtasks,
      },
    ];

    console.log(task, "here is the task to submit");
  };

  const addSubtask = () => {
    console.log("herer");
    setSubtasks([...subtasks, { title: "", isCompleted: false }]);
  };

  const deleteSubtask = (i) => {
    const deleteVal = [...subtasks];
    deleteVal.splice(i, 1);
    setSubtasks(deleteVal);
  };

  const handleSubtaskUpdate = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...subtasks];
    onChangeVal[i][name] = value;
    setSubtasks(onChangeVal);
  };

  return (
    <section className="AddTask">
      <h4 className="AddTask-title">Add New Task</h4>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">
            <span className="inputName">Title</span>
            <input
              className=""
              placeholder="e.g. Take coffee break"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </label>

          <label htmlFor="">
            <span className="inputName">Description</span>
            <textarea
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little"
              name=""
              id=""
              cols="30"
              rows="3"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
          </label>

          <div className="add-subtask-section">
            <span className="inputName">Subtasks</span>
            {subtasks.map((subtask, index) => (
              <label key={index} htmlFor="">
                <input
                  className=""
                  placeholder="e.g. Make coffee"
                  type="text"
                  name="title"
                  value={subtask.title}
                  onChange={(e) => handleSubtaskUpdate(e, index)}
                />
                <button
                  onClick={(index) => deleteSubtask(index)}
                  className="remove-subtask-btn"
                >
                  <img src={removeSubtask} alt="" />
                </button>
              </label>
            ))}
          </div>

          <div onClick={addSubtask} className="add-new-task-btn">
            +Add New Subtask
          </div>

          <div className="current-status">
            <span>Status</span>
            <label htmlFor="">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                name="status"
                id="status"
              >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </label>
          </div>

          <button className="create-task">Create Task</button>
        </fieldset>
      </form>
    </section>
  );
};

AddTask.propTypes = {};

AddTask.defaultProps = {};

export default AddTask;

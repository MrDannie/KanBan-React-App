import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./AddTask.css";

import removeSubtask from "../../components/assets/icon-cross.svg";

const AddTask = () => {
  // const [taskTitle, setTaskTitle] = useState("");
  // const [taskDescription, setTaskDescription] = useState("");
  // const [status, setStatus] = useState("");
  const [subtasks, setSubtasks] = useState([{ title: "", isCompleted: false }]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    status: "",
    subtasks: [
      {
        title: "",
        isCompleted: true,
      },
    ],
  });

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, { title: "", isCompleted: false }]);
  };

  const deleteSubtask = (i) => {
    const deleteVal = [...subtasks];
    deleteVal.splice(i, 1);
    setSubtasks(deleteVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    formValues.subtasks = subtasks;
    let formData = JSON.parse(localStorage.getItem("BoardData"));
    formData["boards"][0]["columns"][0]["tasks"].push(formValues);
    console.log(formData, "HERER");
    localStorage.setItem("BoardData", JSON.stringify(formData));
    setIsSubmit(true);
  };

  const handleSubtaskUpdate = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...subtasks];
    onChangeVal[i][name] = value;
    setSubtasks(onChangeVal);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required!";
    }
    if (!values.description) {
      errors.description = "description is required!";
    }
    if (!subtasks.title) {
      errors.subtask = "Subtask can't be empty!";
    }
    return errors;
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
              name="title"
              value={formValues.title}
              onChange={handleChange}
            />
            <p className="formErrors">{formErrors.title}</p>
          </label>

          <label htmlFor="">
            <span className="inputName">Description</span>
            <textarea
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little"
              name="description"
              id=""
              cols="30"
              rows="3"
              value={formValues.description}
              onChange={handleChange}
            ></textarea>
            <p className="formErrors">{formErrors.description}</p>
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
            <p className="formErrors">{formErrors.subtask}</p>
          </div>

          <div onClick={addSubtask} className="add-new-task-btn">
            +Add New Subtask
          </div>

          <div className="current-status">
            <span>Status</span>
            <label htmlFor="">
              <select
                value={formValues.status}
                onChange={handleChange}
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

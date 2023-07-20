import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./AddTask.css";

import removeSubtask from "../../components/assets/icon-cross.svg";
import { CountContext } from "../../App";
import { useLocation } from "react-router-dom";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("BoardData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const AddTask = ({ closeOnSubmit, closeAddTaskModal, visible }) => {
  const { boardData, updateAppData } = useContext(CountContext);
  const location = useLocation();
  const [subtasks, setSubtasks] = useState([{ title: "", isCompleted: false }]);
  const [formErrors, setFormErrors] = useState({});
  const chars = { "/": "", "-": " " };
  let formData = { ...boardData };
  const boardPosition = formData.boards.findIndex((item) =>
    item.name
      .toLowerCase()
      .includes(location.pathname.replace(/[/ -]/g, (m) => chars[m]))
  );

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    status: "Todo",
    subtasks: [
      {
        title: "",
        isCompleted: true,
      },
    ],
  });

  useEffect(() => {
    // let formData = JSON.parse(localStorage.getItem("BoardData"));
    // formData["boards"][0]["columns"][0]["tasks"].push(formValues);
    // localStorage.setItem("BoardData", JSON.stringify(formData));
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const addSubtask = () => {
    setSubtasks([...subtasks, { title: "", isCompleted: false }]);
  };

  const deleteSubtask = (i) => {
    console.log(i);
    const deleteVal = [...subtasks];
    deleteVal.splice(i, 1);
    setSubtasks(deleteVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValues.subtasks = subtasks;

    const taskColumn = formData.boards[boardPosition]["columns"].findIndex(
      (item) =>
        item.name.toLowerCase().includes(formValues.status.toLowerCase())
    );

    formData["boards"][boardPosition]["columns"][taskColumn]["tasks"].push(
      formValues
    );
    updateAppData(formData);
    closeAddTaskModal();
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
      errors.description = "Description is required!";
    }
    if (!subtasks.title) {
      errors.subtask = "Subtask can't be empty!";
    }
    return errors;
  };

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeAddTaskModal();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      id="modal-container"
      className="ModalContainer"
    >
      {/* <div>
        <div>
          <button onClick={onIncrement}>Increase</button>
          <button onClick={onDecrement}>Decrease</button>
        </div>
      </div> */}
      {/* <div>Inside The AddTask Modal: {count}</div> */}
      <section className="modal-container-modal">
        <div className="modal-body">
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
                    required
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                  />
                  <span className="formErrors">{formErrors.title}</span>
                </label>

                <label htmlFor="">
                  <span className="inputName">Description</span>
                  <textarea
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little"
                    name="description"
                    id=""
                    cols="30"
                    required
                    rows="3"
                    value={formValues.description}
                    onChange={handleChange}
                  ></textarea>
                  <span className="formErrors">{formErrors.description}</span>
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
                        required
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
                  <span className="formErrors">{formErrors.subtask}</span>
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
                      {boardData["boards"][boardPosition]["columns"].map(
                        (option, id) => (
                          <option key={id}>{option.name}</option>
                        )
                      )}
                    </select>
                  </label>
                </div>

                <button
                  onClick={(e) => handleOnClose(e)}
                  id="create-task-btn"
                  className="create-task"
                  disabled={
                    formValues.title.length === 0 ||
                    formValues.description.length === 0 ||
                    formValues.status.length === 0 ||
                    formValues.status.length === 0
                  }
                >
                  Create Task
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

AddTask.propTypes = {};

AddTask.defaultProps = {};

export default AddTask;

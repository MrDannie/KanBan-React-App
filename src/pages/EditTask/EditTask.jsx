import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./EditTask.css";
import removeSubtask from "../../components/assets/icon-cross.svg";

const EditTask = ({ selectedTask, visible, closeEditModal, subtasks }) => {
  console.log(selectedTask);
  console.log(subtasks);

  const [formValues, setFormValues] = useState(selectedTask);
  const [formSubtasks, setFormSubtasks] = useState(subtasks);

  useEffect(() => {
    setFormValues(selectedTask);
    setFormSubtasks(subtasks);
  }, [selectedTask]);

  console.log(formValues, formSubtasks);

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeEditModal();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubtaskUpdate = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...formSubtasks];
    onChangeVal[i][name] = value;
    setFormSubtasks(onChangeVal);
  };

  const deleteSubtask = (e, i) => {
    e.preventDefault();
    console.log(i);
    const deleteVal = [...formSubtasks];
    deleteVal.splice(i, 1);
    setFormSubtasks(deleteVal);
  };

  const addSubtask = () => {
    setFormSubtasks([...formSubtasks, { title: "", isCompleted: false }]);
  };

  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      id="modal-container"
      className="ModalContainer"
    >
      <section className="modal-container-modal">
        <div className="modal-body">
          <section className="EditTask">
            <h4 className="form-title">Edit Task</h4>
            <form action="">
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
                  {/* <span className="formErrors">{selectedTask.title}</span> */}
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
                  {/* <span className="formErrors">{selectedTask.description}</span> */}
                </label>

                <div className="add-subtask-section">
                  <span className="inputName">Subtasks</span>
                  {formSubtasks.map((subtask, index) => (
                    <label key={index} htmlFor="">
                      <input
                        className=""
                        placeholder="e.g. Make coffee"
                        type="text"
                        name="title"
                        required
                        value={subtask?.title}
                        onChange={(e) => handleSubtaskUpdate(e, index)}
                      />
                      <button
                        onClick={(e) => deleteSubtask(e, index)}
                        className="remove-subtask-btn"
                      >
                        <img src={removeSubtask} alt="" />
                      </button>
                    </label>
                  ))}

                  {/* <span className="formErrors">{formErrors.subtask}</span> */}
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
                  Save Changes
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

EditTask.propTypes = {};

EditTask.defaultProps = {};

export default EditTask;
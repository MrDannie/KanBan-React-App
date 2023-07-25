import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./DeleteTask.css";
import { CountContext } from "../../App";

const DeleteTask = ({ visible, closeDeleteModal, selectedTask }) => {
  const { boardData, updateAppData } = useContext(CountContext);
  const chars = { "/": "", "-": " " };

  const deleteTask = () => {
    let formData = { ...boardData };
    const boardPosition = formData.boards.findIndex((item) =>
      item.name
        .toLowerCase()
        .includes(location.pathname.slice(8).replace(/-/g, " ").toLowerCase())
    );
    const taskColumn = formData.boards[boardPosition]["columns"].findIndex(
      (item) =>
        item.name.toLowerCase().includes(selectedTask.status.toLowerCase())
    );
    const taskPosition = formData.boards[boardPosition]["columns"][taskColumn][
      "tasks"
    ].findIndex((item) =>
      item.title.toLowerCase().includes(selectedTask.title.toLowerCase())
    );
    formData.boards[boardPosition]["columns"][taskColumn]["tasks"].splice(
      taskPosition,
      1
    );
    updateAppData(formData);
    closeDeleteModal();
  };
  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeDeleteModal();
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
          <section className="DeleteTask">
            <h4 className="modal-title">Delete this task?</h4>

            <p className="short-note">
              Are you sure you want to delete the{" "}
              <strong>'{selectedTask.title}'</strong> task and <br /> its
              subtasks? This action will remove all columns and <br /> tasks and
              cannot be reversed.
            </p>

            <div className="action-buttons">
              <button onClick={deleteTask} className="btn delete-btn">
                Delete
              </button>
              <button className="btn cancel-btn">Cancel</button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

DeleteTask.propTypes = {};

DeleteTask.defaultProps = {};

export default DeleteTask;

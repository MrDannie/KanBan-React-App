import React from "react";
import PropTypes from "prop-types";
import "./DeleteTask.css";

const DeleteTask = ({ visible, closeDeleteModal }) => {
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
              Are you sure you want to delete the ‘Build settings UI' task and{" "}
              <br /> its subtasks? This action will remove all columns and{" "}
              <br /> tasks and cannot be reversed.
            </p>

            <div className="action-buttons">
              <button className="btn delete-btn">Delete</button>
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

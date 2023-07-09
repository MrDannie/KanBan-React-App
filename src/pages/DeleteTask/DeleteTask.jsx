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
          <div className="DeleteTask">DeleteTask Component</div>
        </div>
      </section>
    </div>
  );
};

DeleteTask.propTypes = {};

DeleteTask.defaultProps = {};

export default DeleteTask;

import React from "react";
import PropTypes from "prop-types";
import "./DeleteBoard.css";

const DeleteBoard = ({ visible, closeDeleteBoardModal }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeDeleteBoardModal();
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
          <section className="DeleteBoard">
            <h4 className="modal-title">Delete this board?</h4>

            <p className="short-note">
              Are you sure you want to delete the ‘Platform Launch’ board? This{" "}
              <br />
              action will remove all columns and tasks and cannot be reversed.
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

DeleteBoard.propTypes = {};

DeleteBoard.defaultProps = {};

export default DeleteBoard;

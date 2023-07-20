import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./DeleteBoard.css";
import { CountContext } from "../../App";

const DeleteBoard = ({
  visible,
  closeDeleteBoardModal,
  selectedBoard,
  boardColumns,
}) => {
  const { boardData, updateAppData } = useContext(CountContext);
  const chars = { "/": "", "-": " " };

  const deleteBoard = () => {
    let formData = { ...boardData };
    formData.boards.splice(selectedBoard, 1);
    updateAppData(formData);
    closeDeleteBoardModal();
  };

  console.log(boardColumns);

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
              Are you sure you want to delete the{" "}
              <strong>'{boardData.boards[selectedBoard]["name"]}'</strong>{" "}
              board? This <br />
              action will remove all columns and tasks and cannot be reversed.
            </p>

            <div className="action-buttons">
              <button onClick={deleteBoard} className="btn delete-btn">
                Delete
              </button>
              <button
                onClick={closeDeleteBoardModal()}
                className="btn cancel-btn"
              >
                Cancel
              </button>
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

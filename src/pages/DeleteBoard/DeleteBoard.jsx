import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./DeleteBoard.css";
import { CountContext } from "../../App";
import { useNavigate } from "react-router-dom";

const DeleteBoard = ({
  visible,
  closeDeleteBoardModal,
  selectedBoard,
  boardColumns,
}) => {
  const { boardData, updateAppData } = useContext(CountContext);
  const chars = { "/": "", "-": " " };
  let boardName = localStorage.getItem("currentBoard");
  const navigate = useNavigate();

  const deleteBoard = () => {
    let formData = { ...boardData };
    if (formData) {
      function1(formData.boards[0].name, function () {
        formData.boards.splice(selectedBoard, 1);
        updateAppData(formData);
        closeDeleteBoardModal();
      });
    } else {
      return;
    }

    function function1(param, callback) {
      if (param) {
        const route = param.replace(/\s+/g, "-").toLowerCase();
        navigate(`/boards/${route}`);
      }

      setTimeout(() => {
        callback();
      }, 250);
    }
  };

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeDeleteBoardModal();
  };

  const cancel = () => {
    closeDeleteBoardModal();
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
              Are you sure you want to delete the <strong>'{boardName}'</strong>{" "}
              board? This <br />
              action will remove all columns and tasks and cannot be reversed.
            </p>

            <div className="action-buttons">
              <button onClick={deleteBoard} className="btn delete-btn">
                Delete
              </button>
              <button onClick={cancel} className="btn cancel-btn">
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

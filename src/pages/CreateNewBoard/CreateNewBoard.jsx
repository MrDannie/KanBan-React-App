import React from "react";
import PropTypes from "prop-types";
import "./CreateNewBoard.css";
import removeSubtask from "../../components/assets/icon-cross.svg";

const CreateNewBoard = ({ visible, closeNewBoardModal }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeNewBoardModal();
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
          <section className="CreateNewBoard">
            <h4 className="form-title">Add New Board</h4>
            <form action="">
              <fieldset>
                <label className="first-label" htmlFor="">
                  <span className="inputName">Title</span>
                  <input
                    className=""
                    placeholder="e.g. Web Design"
                    type="text"
                    required
                    name="title"
                  />
                  {/* <span className="formErrors">{selectedTask.title}</span> */}
                </label>

                <div className="add-subtask-section">
                  <span className="inputName">Columns</span>
                  <label htmlFor="">
                    <input
                      className=""
                      placeholder="e.g. Todo"
                      type="text"
                      name="title"
                      required
                      // value={subtask?.title}
                      // onChange={(e) => handleSubtaskUpdate(e, index)}
                    />
                    <button
                      // onClick={(e) => deleteSubtask(e, index)}
                      className="remove-subtask-btn"
                    >
                      <img src={removeSubtask} alt="" />
                    </button>
                  </label>
                  <div className="btn add-column-btn mb-6">+Add New Column</div>
                  {/* <span className="formErrors">{formErrors.subtask}</span> */}
                </div>
                <div className="btn save-btn">Create New Board</div>
              </fieldset>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

CreateNewBoard.propTypes = {};

CreateNewBoard.defaultProps = {};

export default CreateNewBoard;

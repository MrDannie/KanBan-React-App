import React from "react";
import PropTypes from "prop-types";
import "./EditBoard.css";
import removeSubtask from "../../components/assets/icon-cross.svg";

const EditBoard = ({ visible, closeEditBoardModal }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") closeEditBoardModal();
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
          <section className="EditBoard">
            <h4 className="form-title">Edit Board</h4>
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
                  {/* <span className="formErrors">{formErrors.subtask}</span> */}
                </div>
                <div className="btn add-column-btn mb-6">+Add New Column</div>

                <div className="btn save-btn">Save Changes</div>
              </fieldset>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

EditBoard.propTypes = {};

EditBoard.defaultProps = {};

export default EditBoard;

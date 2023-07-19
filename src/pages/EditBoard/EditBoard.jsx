import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "./EditBoard.css";
import removeSubtask from "../../components/assets/icon-cross.svg";
import { useLocation } from "react-router-dom";
import { CountContext } from "../../App";
import { useState } from "react";

const EditBoard = ({ visible, closeEditBoardModal, boardColumns }) => {
  const { boardData, updateAppData } = useContext(CountContext);
  const [columns, setColumns] = useState(boardColumns["columns"]);
  const [name, setName] = useState(boardColumns.name);

  // useEffect(() => {
  //   setColumns(boardColumns);
  // }, [columns]);

  const handleBoardName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleColumn = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...columns];
    console.log(onChangeVal);
    onChangeVal[i][name] = value;
    setColumns(onChangeVal);
  };

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
                  <span className="inputName">Board Name</span>
                  <input
                    className=""
                    placeholder="e.g. Web Design"
                    type="text"
                    required
                    name="board"
                    value={name}
                    onChange={handleBoardName}
                  />
                  {/* <span className="formErrors">{selectedTask.title}</span> */}
                </label>

                <div className="add-subtask-section">
                  <span className="inputName">Board Columns</span>
                  {columns.map((item, index) => (
                    <label key={index} htmlFor="">
                      <input
                        className=""
                        placeholder="e.g. Todo"
                        type="text"
                        name="name"
                        required
                        value={item.name}
                        onChange={(e) => handleColumn(e, index)}
                      />
                      <button
                        // onClick={(e) => deleteSubtask(e, index)}
                        className="remove-subtask-btn"
                      >
                        <img src={removeSubtask} alt="" />
                      </button>
                    </label>
                  ))}

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

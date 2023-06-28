import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ModalContainer.css";
import ViewTask from "../../pages/ViewTask/ViewTask";
import AddNewColumn from "../../pages/AddNewColumn/AddNewColumn";
import CreateNewBoard from "../../pages/CreateNewBoard/CreateNewBoard";

const ModalContainer = ({ visible, onClose, component, taskDetails }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };

  if (component === "ViewTask") {
    return (
      <div
        id="modal-container"
        className="ModalContainer"
        onClick={handleOnClose}
      >
        <section className="modal-container-modal">
          <div className="modal-body">
            <ViewTask selectedTask={taskDetails} />
          </div>
        </section>
      </div>
    );
  } else if (component === "AddNewColumn") {
    return (
      <div
        id="modal-container"
        className="ModalContainer"
        onClick={handleOnClose}
      >
        <section className="modal-container-modal">
          <div className="modal-body">
            <AddNewColumn />
          </div>
        </section>
      </div>
    );
  } else if (component === "CreateNewBoard") {
    return (
      <div
        id="modal-container"
        className="ModalContainer"
        onClick={handleOnClose}
      >
        <section className="modal-container-modal">
          <div className="modal-body">
            <CreateNewBoard />
          </div>
        </section>
      </div>
    );
  }
};

ModalContainer.propTypes = {};

ModalContainer.defaultProps = {};

export default ModalContainer;

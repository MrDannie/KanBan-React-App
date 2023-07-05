import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ModalContainer.css";
import ViewTask from "../../pages/ViewTask/ViewTask";
import AddNewColumn from "../../pages/AddNewColumn/AddNewColumn";
import CreateNewBoard from "../../pages/CreateNewBoard/CreateNewBoard";
import AddTask from "../../pages/AddTask/AddTask";
import { showModal } from "../../store/store";

const ModalContainer = ({
  isModalContainerOpen,
  onClose,
  component,
  taskDetails,
}) => {
  if (!isModalContainerOpen) return null;

  const modalContainerController = () => {
    onClose();
  };

  const handleOnClose = (e) => {
    if (e.target.id === "modal-container") onClose();
  };

  if (component === "ViewTask" && isModalContainerOpen === true) {
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
  } else if (component === "AddTask" || isModalContainerOpen === true) {
    return (
      <div
        id="modal-container"
        className="ModalContainer"
        onClick={handleOnClose}
        style={{ display: isModalContainerOpen ? "flex" : "none" }}
      >
        <section className="modal-container-modal">
          <div className="modal-body">
            <AddTask closeOnSubmit={modalContainerController} />
          </div>
        </section>
      </div>
    );
  }
};

ModalContainer.propTypes = {};

ModalContainer.defaultProps = {};

export default ModalContainer;

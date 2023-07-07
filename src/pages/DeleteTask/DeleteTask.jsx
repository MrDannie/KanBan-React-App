import React from "react";
import PropTypes from "prop-types";
import "./DeleteTask.css";

const DeleteTask = () => (
  <div id="modal-container" className="ModalContainer">
    <section className="modal-container-modal">
      <div className="modal-body">
        <div className="DeleteTask">DeleteTask Component</div>
      </div>
    </section>
  </div>
);

DeleteTask.propTypes = {};

DeleteTask.defaultProps = {};

export default DeleteTask;

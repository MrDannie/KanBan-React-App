import React from "react";
import PropTypes from "prop-types";
import "./EditTask.css";

const EditTask = () => {
  return (
    <div id="modal-container" className="ModalContainer">
      <section className="modal-container-modal">
        <div className="modal-body">
          <div className="EditTask"></div>;
        </div>
      </section>
    </div>
  );
};

EditTask.propTypes = {};

EditTask.defaultProps = {};

export default EditTask;

import React from "react";
import PropTypes from "prop-types";
import "./AddNewColumn.css";

const AddNewColumn = () => (
  <div id="modal-container" className="ModalContainer">
    <section className="modal-container-modal">
      <div className="modal-body">
        <div className="AddNewColumn">AddNewColumn Component</div>
      </div>
    </section>
  </div>
);

AddNewColumn.propTypes = {};

AddNewColumn.defaultProps = {};

export default AddNewColumn;

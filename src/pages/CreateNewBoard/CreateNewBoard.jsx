import React from "react";
import PropTypes from "prop-types";
import "./CreateNewBoard.css";

const CreateNewBoard = () => (
  <div id="modal-container" className="ModalContainer">
    <section className="modal-container-modal">
      <div className="modal-body">
        <div className="CreateNewBoard">CreateNewBoard Component</div>
      </div>
    </section>
  </div>
);

CreateNewBoard.propTypes = {};

CreateNewBoard.defaultProps = {};

export default CreateNewBoard;

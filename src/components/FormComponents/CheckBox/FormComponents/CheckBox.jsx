import React from "react";
import PropTypes from "prop-types";
import "./FormComponents/CheckBox.css";

const CheckBox = () => (
  <div className="CheckBox">
    <label htmlFor="">
      <input type="checkbox" name="" id="" />
      <span className="inputName">
        Outline a business model that works for our solution
      </span>
    </label>
  </div>
);

FormComponentsCheckBoxes.propTypes = {};

FormComponentsCheckBoxes.defaultProps = {};

export default FormComponentsCheckBoxes;

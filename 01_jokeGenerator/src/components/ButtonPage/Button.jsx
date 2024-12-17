import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div id="button-div">
      <button onClick={props.callApi} id="generate-button">Click me to generate jokes!</button>
    </div>
  );
};

export default Button;

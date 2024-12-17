import React, { useState } from "react";
import "./index.css";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if(validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password.');
    } else {
      setErrorMessage('Is Not Strong Password!');
    }
  }
  return (
    <div>
      <h1>Check the strength of your password in ReactJS</h1>
      <span>Enter Password: </span>
      <input type="text" id="input" onChange={(e)=> validate(e.target.value)} />
      {errorMessage === '' ? null : <p>{errorMessage}</p>}
    </div>
  );
};

export default App;

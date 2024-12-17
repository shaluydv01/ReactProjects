import React from "react";
import './index.css';
import Joke from "./components/JokePage/Joke";

const App = () => {
  return (
    <>
      <div id="main-container">
        <h1>Joke Generator using React and Joke API</h1>
        <Joke />
      </div>
    </>
  );
};

export default App;

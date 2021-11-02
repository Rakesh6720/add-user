import React from "react";

const ErrorModal = (props) => {
  return (
    <>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </>
  );
};

export default ErrorModal;

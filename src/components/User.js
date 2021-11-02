import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const User = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid",
        message: "Username and age cannot be blank",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    const UserObject = {
      username: username,
      age: age,
    };

    setUsername("");
    setAge("");
    props.onSubmitHandler(UserObject);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form method="post" onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years):</label>
        <input
          id="age"
          type="number"
          min="1"
          step="1"
          value={age}
          onChange={ageChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default User;

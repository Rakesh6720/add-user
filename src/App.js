import "./App.css";
import User from "./components/User";
import UserList from "./components/UserList";
import React, { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const onSubmitSaveHandler = (userObject) => {
    setUserInfo((prevUsersList) => {
      const id = Math.random().toString();
      return [
        ...prevUsersList,
        { id: id, username: userObject.username, age: userObject.age },
      ];
    });
  };

  return (
    <div className="App">
      <User onSubmitHandler={onSubmitSaveHandler} />
      <UserList users={userInfo} />
    </div>
  );
}

export default App;

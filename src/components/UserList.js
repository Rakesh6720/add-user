import React from "react";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;

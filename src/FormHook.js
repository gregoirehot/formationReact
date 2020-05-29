import React, { useState, useEffect, useCallback, useReducer } from "react";

export default function FormHook() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
    }
  );
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    const usersStorage = window.localStorage.getItem("users")
      ? JSON.parse(window.localStorage.getItem("users"))
      : [];
    setUsers(usersStorage);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setUserInput({ [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstName: userInput.firstName,
      lastName: userInput.lastName,
    };

    const usersStorage = window.localStorage.getItem("users")
      ? JSON.parse(window.localStorage.getItem("users"))
      : [];
    usersStorage.push(user);
    window.localStorage.setItem("users", JSON.stringify(usersStorage));
    setUsers(usersStorage);
  };

  return (
    <div>
      <ul>
        {users &&
          users.map((user, index) => (
            <li key={index}>
              {user?.firstName} - {user?.lastName}
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          firstName :
          <input
            type="text"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          lastName :
          <input
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

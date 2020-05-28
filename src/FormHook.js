import React, { useState, useEffect, useCallback } from "react";

export default function FormHook() {
  const [name, setName] = useState(true);
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
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: name,
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
              {user?.name} - {user?.username}
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

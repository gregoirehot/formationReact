import React, { useContext } from "react";
import { AppContext } from "./store";

function TodoBis() {
  const { state } = useContext(AppContext);

  const indexTodo = state.indexTodo;

  return (
    <>
      <div>
        <h3>indexTodo Bis : {indexTodo}</h3>
      </div>
    </>
  );
}

export default TodoBis;

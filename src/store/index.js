import React from "react";

export const getRandom = () => {
  return Math.round(Math.random() * 100);
};

export const AppContext = React.createContext({});

export const initialState = {
  indexTodo: 0,
};

const getRandomIndex = (indexTodo) => {
  const random = getRandom();
  let randomIndex = 0;
  if (indexTodo !== random) {
    randomIndex = random;
  } else {
    randomIndex = getRandom();
  }
  return randomIndex;
};

const recordIndex = (indexTodo) => {
  window.localStorage.setItem("indexTodo", indexTodo);
  return indexTodo;
};

export function reducer(state, action) {
  switch (action.type) {
    case "PREVIEW_INDEX_TODO":
      return {
        ...state,
        indexTodo: recordIndex(state.indexTodo - 1),
      };
    case "RANDOM_INDEX_TODO":
      return {
        ...state,
        indexTodo: recordIndex(getRandomIndex(state.indexTodo)),
      };
    case "NEXT_INDEX_TODO":
      return {
        ...state,
        indexTodo: recordIndex(state.indexTodo + 1),
      };
    case "UPDATE_INDEX_TODO":
      return {
        ...state,
        indexTodo: recordIndex(action.payload),
      };
    default:
      return state;
  }
}

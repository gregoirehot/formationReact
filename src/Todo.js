import React, { useContext } from "react";
import { AppContext } from "./store";

function Todo() {
  const { state, dispatch } = useContext(AppContext);

  const getPreviewIndex = () => {
    if (state.indexTodo !== 0) {
      dispatch({ type: "PREVIEW_INDEX_TODO" });
    }
  };

  const getNextIndex = () => {
    dispatch({ type: "NEXT_INDEX_TODO" });
  };

  const getRandomIndex = () => {
    dispatch({ type: "RANDOM_INDEX_TODO" });
  };

  const indexTodo = state.indexTodo;

  return (
    <>
      <div>
        <div>
          <div>
            <h3>indexTodo : {indexTodo}</h3>
            <div>
              <button
                className="btn btn-secondary"
                onClick={getPreviewIndex}
                type="button"
              >
                <span aria-label="Previous" role="img">
                  ⏮️
                </span>{" "}
                Previous
              </button>{" "}
              <button
                className="btn btn-primary btn-lg"
                onClick={getRandomIndex}
                type="button"
              >
                <span aria-label="Zapping" role="img">
                  🔀
                </span>{" "}
                Zapping
              </button>{" "}
              <button
                className="btn btn-secondary"
                onClick={getNextIndex}
                type="button"
              >
                Next{" "}
                <span aria-label="Next" role="img">
                  ⏭️
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;

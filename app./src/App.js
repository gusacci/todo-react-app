import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case `increment`:
      return { ...state, count: state.count + 1 };
    case `decrement`:
      return { ...state, count: state.count - 1 };
    case `newUserInput`:
      return { ...state, userInput: action.payload };
    case `tgColor`:
      return { ...state, color: !state.color };

    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: ``,
    color: false,
  });
  return (
    <div className="app" style={{ color: state.color ? `#c0b236` : `#FFF38C` }}>
      <h1> Use Reducer </h1>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: `newUserInput`, payload: e.target.value })
        }
      ></input>
      <div className="count">
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({ type: `decrement` })}> - </button>
        <button onClick={() => dispatch({ type: `increment` })}> + </button>
        <button onClick={() => dispatch({ type: `tgColor` })}> COLOR </button>
        <p>{state.userInput}</p>{" "}
      </div>
    </div>
  );
}

export default App;

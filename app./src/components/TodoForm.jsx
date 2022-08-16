import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(``);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // props.onSubmit({
    //     id: Math.floor(Math.random()*1000)
    //     text: input
    // });

    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder="Add a todo"
          name="text"
          value={input}
          type="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;

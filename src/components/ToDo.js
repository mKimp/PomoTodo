import React, { useRef } from "react";

function ToDo({ todoItem, settoDoList, toDoList }) {
  const liRef = useRef(null);
  ///remove handler
  const removeHandler = () => {
    let removeList = toDoList.filter(
      (itemRemoved) => todoItem.id !== itemRemoved.id
    );
    settoDoList(removeList);
  };

  //Done handler
  const doneHandler = () => {
    let newDoneList = toDoList.map((item) => {
      if (item.id === todoItem.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    settoDoList(newDoneList);
  };

  // Focus Handler
  const FocusHandler = () => {};
  return (
    <div className="todo-list">
      <li
        tabIndex="0"
        className={`todo-item ${todoItem.completed ? "completed" : ""}`}
        ref={liRef}
        onClick={FocusHandler}
        placeholder="your pomo here"
      >
        {" "}
        {todoItem.text}{" "}
      </li>
      <button onClick={doneHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeHandler}>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default ToDo;

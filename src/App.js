import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'

function App() {

  const [userInput, setUserInput] = useState("");
  const [toDoList, settoDoList] = useState([]);
  return (
    <div className="App">
        <h1>Today's todo list</h1>
        <Form userInput={userInput} setUserInput={setUserInput} toDoList={toDoList} settoDoList={settoDoList}/>
        <TodoList toDoList={toDoList} settoDoList={settoDoList}/>
    </div>
  );
}

export default App;

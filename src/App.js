import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'

function App() {
  //handle form state
  const [userInput, setUserInput] = useState("");

  //handle to do list state
  const [toDoList, settoDoList] = useState([]);

  //handle select option
  const [selectoption, setOption] = useState("all");

  //filter to do list
  const [filterList, setFilterList] = useState([]);

  //use one time only to retrieve the saved data form local storage;
  useEffect(() =>{
    getLocal();
  }, [])

  useEffect(() => {
    filterListHandler();
    saveToLocal();
  }, [toDoList, selectoption])

  //switch todo list based on value on select option
  const filterListHandler =  () => {
    switch (selectoption){
      case 'completed':
        setFilterList(toDoList.filter((item)=>(item.completed ===true)))
        break;
      case 'incompleted':
        setFilterList(toDoList.filter((item)=>(item.completed === false)))
        break;
      default:
        setFilterList(toDoList)
        break;
    }
  }

  // save to the local storage

  const saveToLocal = () => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }

  const getLocal = () => {
    if(localStorage.getItem("toDoList") !== null){
      let items = localStorage.getItem("toDoList", JSON.stringify(toDoList));
      settoDoList(JSON.parse(items))
    }
  }

  return (
    <div className="App">
        <div className="todoHeader">
          <h1>Today's todo list</h1>
        </div>
        <div className="todoForm">
          <Form userInput={userInput} setUserInput={setUserInput} 
              toDoList={toDoList} settoDoList={settoDoList} 
              selectoption={selectoption} setOption={setOption}/>
        </div>
        <div className="todoList">
          <TodoList toDoList={filterList} settoDoList={settoDoList}/>
        </div>
    </div>
  );
}

export default App;

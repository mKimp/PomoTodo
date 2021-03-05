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

  useEffect(() => {
    filterListHandler();
  }, [toDoList, selectoption])

  return (
    <div className="App">
        <h1>Today's todo list</h1>
        <Form userInput={userInput} setUserInput={setUserInput} 
              toDoList={toDoList} settoDoList={settoDoList} 
              selectoption={selectoption} setOption={setOption}/>
        <TodoList toDoList={filterList} settoDoList={settoDoList}/>
    </div>
  );
}

export default App;

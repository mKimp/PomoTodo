import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import Timer from './components/Timer'

function App() {
  //handle form state
  const [userInput, setUserInput] = useState("");

  //handle to do list state
  const [toDoList, settoDoList] = useState([]);

  //handle select option
  const [selectoption, setOption] = useState("all");

  //filter to do list
  const [filterList, setFilterList] = useState([]);

  //handle the state change of timer
  const [timer, setTimer] = useState("25:00")

  //handle the state change of short break
  const [filterTimer, setFilterTimer] = useState("")

  //handle the state change of long break


  //use one time only to retrieve the saved data form local storage;
  useEffect(() =>{
    getLocal();
  }, [])

  useEffect(() => {
    filterListHandler();
    filterTimerHandler();
    saveToLocal();
  }, [toDoList, selectoption, filterTimer, timer])


  const filterTimerHandler = () => {
    switch (filterTimer) {
      case "05:00":
        setFilterTimer("05:00")
        break;
      case "15:00":
        setFilterTimer("15:00")
        break;
      default:
        setFilterTimer(timer)
        break;
    }
  }

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
          <h1>Today's todo list</h1>
          <Form userInput={userInput} setUserInput={setUserInput} 
              toDoList={toDoList} settoDoList={settoDoList} 
              selectoption={selectoption} setOption={setOption}/>
          <Timer setTimer={setTimer} timer={timer} filterTimer={filterTimer} setFilterTimer={setFilterTimer}/>
          <TodoList toDoList={filterList} settoDoList={settoDoList}/>
    </div>
  );
}

export default App;

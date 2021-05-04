import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import TimeLeft from "./components/TimeLeft";
import ShortBreak from "./components/ShortBreak";
import LongBreak from "./components/LongBreak";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/About";

function App() {
  //Pomo Time
  const [pomoTime, setTimer] = useState(1500); // 25 minute * 60 = 1500 seconds;
  const DecrementHandler = () => {
    if (pomoTime <= 0) {
      return pomoTime;
    }
    else {
      setTimer(pomoTime - 60);
    }
  };

  const IncrementHandler = () => {
    setTimer(pomoTime + 60);
  };

  //ShortBreak
  const [shortB, setshortB] = useState(300);

  const DecrementHandlerShort = () => {
    if (shortB <= 0) return shortB;
    else setshortB(shortB - 60);
  };

  const IncrementHandlerShort = () => {
    setshortB(shortB + 60);
  };

  //LongBreak = 900 * 60 = 15 mins
  const [longB, setlongB] = useState(900);

  const DecrementHandlerLong = () => {
    if (longB <= 0) return longB;
    else setlongB(longB - 60);
  };

  const IncrementHandlerLong = () => {
    setlongB(longB + 60);
  };

  //keep track with seassion, pomo time, short break or long break
  const[seasson, setSeasson] = useState("Pomo")


  //handle form state
  const [userInput, setUserInput] = useState("");

  //handle to do list state
  const [toDoList, settoDoList] = useState([]);
  
  //handle select option
  const [selectoption, setOption] = useState("all");
  
  //filter to do list
  const [filterList, setFilterList] = useState([]);

  //use one time only to retrieve the saved data form local storage;
  useEffect(() => {
    const getLocal = () => {
      if (localStorage.getItem("toDoList") !== null) {
        let items = localStorage.getItem("toDoList", JSON.stringify(toDoList));
        settoDoList(JSON.parse(items));
      }
    };
    getLocal();
  }, []);

  useEffect(() => {
    //switch todo list based on value on select option
    const filterListHandler = () => {
      switch (selectoption) {
        case "completed":
          setFilterList(toDoList.filter((item) => item.completed === true));
          break;
        case "incompleted":
          setFilterList(toDoList.filter((item) => item.completed === false));
          break;
        default:
          setFilterList(toDoList);
          break;
      }
    };
    filterListHandler();
    
    // save to the local storage
    const saveToLocal = () => {
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    };
    saveToLocal();
  }, [toDoList, selectoption]);

  return (
    <Router>
 <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="pomoDiv">
            <Timer
              pomoTime={pomoTime}
              DecrementHandler={DecrementHandler}
              IncrementHandler={IncrementHandler}
              seasson={seasson}
            />
            <ShortBreak
              shortB={shortB}
              DecrementHandlerShort={DecrementHandlerShort}
              IncrementHandlerShort={IncrementHandlerShort}
              seasson={seasson}
            />
            <LongBreak
              longB={longB}
              DecrementHandlerLong={DecrementHandlerLong}
              IncrementHandlerLong={IncrementHandlerLong}
              seasson={seasson}
            />
          </div>
          <TimeLeft
            pomoTime={pomoTime}
            shortB={shortB}
            longB={longB}
            setTimer={setTimer}
            setshortB={setshortB}
            setlongB={setlongB}
            seasson={seasson} 
            setSeasson={setSeasson}
          />
          <Form
            userInput={userInput}
            setUserInput={setUserInput}
            toDoList={toDoList}
            settoDoList={settoDoList}
            selectoption={selectoption}
            setOption={setOption}
          />
          <TodoList toDoList={filterList} settoDoList={settoDoList} />
        </Route>

        <Route exact path="/about"><About /></Route>
      </Switch>
      
    </div>
    </Router>
   
  );
}

export default App;

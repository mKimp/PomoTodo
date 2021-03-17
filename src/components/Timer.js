import React from 'react'

function Timer({setTimer, timer, filterTimer, setFilterTimer}) {
    const handleOnChange = (e) => {
        setTimer(e.target.value);
    }

    const handlePomodoro = (e) => {
        e.preventDefault();
        setFilterTimer(timer);
    }

    const handlerShortBreak = (e) => {
        e.preventDefault();
        setFilterTimer("05:00");
    }

    const handleLongBreak = (e) => {
        e.preventDefault();
        setFilterTimer("15:00")
    }

    const handleStart = (e) => {
        e.preventDefault();

        const re = /^\d{1,2}:\d{2}/;

        if (timer != null && timer.match(re)){
            console.log(timer)
        }
        else
            console.log("not timer ")

        const myParseString = timer.split(":");

        if (parseInt(myParseString[0]) > 60 || parseInt(myParseString[1]) > 60)
            console.log("Invalid format")

    }

    const updateTimer =  () => {
        let time = timer * 60;
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        
    }

    return (
        <div>
            <form>
                <button onClick={handlePomodoro}>Pomodoro</button> 
                <button onClick={handlerShortBreak}>Short Break</button>
                <button onClick={handleLongBreak}>Long Break</button>

                <div>
                    <input value ={filterTimer} onChange={handleOnChange} type="text"></input>
                </div>

                <button type="submit" onClick={handleStart}>Start</button>
            </form>

            <div>

            </div>
        </div>
    )
}

export default Timer

import React from 'react'

function Timer({setTimer, timer, filterTimer, setFilterTimer}) {
    const handleOnChange = (e) => {
        setTimer(e.target.value);
    }

    const handlePomodoro = (e) => {
        e.preventDefault();
        setTimer(e.target.value);
        setFilterTimer(e.target.value);
    }

    const handlerShortBreak = (e) => {
        e.preventDefault();
        setFilterTimer(5);
    }

    const handleLongBreak = (e) => {
        e.preventDefault();
        setFilterTimer(15)
    }
    return (
        <div>
            <form>
                <button onClick={handlePomodoro}>Pomodoro</button> 
                <button onClick={handlerShortBreak}>Short Break</button>
                <button onClick={handleLongBreak}>Long Break</button>

                <div>
                    <input value ={filterTimer} onChange={handleOnChange} type="number"></input>
                </div>

                <button type="submit">Start</button>
            </form>

            <div>

            </div>
        </div>
    )
}

export default Timer

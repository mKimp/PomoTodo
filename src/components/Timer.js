import React, {useState} from 'react'
import moment from 'moment'

function Timer({pomoTime, setTimer, DecrementHandler, IncrementHandler}) {

    const formattedTime = moment.duration(pomoTime, 's').minutes();
    return (
        <div className="PomoTime">
            <p>Pomo Time</p>
            <button onClick={DecrementHandler}>-</button>
            <p className="pomoInput">{formattedTime}</p> 
            <button onClick={IncrementHandler}>+</button>
        </div>
    )
}

export default Timer

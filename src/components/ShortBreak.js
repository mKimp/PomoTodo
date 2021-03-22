import React, {useState} from 'react'
import moment from 'moment'

function ShortBreak({shortB, DecrementHandlerShort, IncrementHandlerShort}) {

    const formattedTime = moment.duration(shortB, 's').minutes();
    return (
        <div className="ShortBreak">
            <p>Short Break</p>
            <button onClick={DecrementHandlerShort}>-</button>
            <p className="pomoInput">{formattedTime}</p> 
            <button onClick={IncrementHandlerShort}>+</button>
        </div>
    )
}

export default ShortBreak;

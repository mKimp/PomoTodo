import React, {useState} from 'react'
import moment from 'moment'

function ShortBreak({shortB, DecrementHandlerShort, IncrementHandlerShort}) {

    const formattedTime = moment.duration(shortB, 's').minutes();
    return (
        <div className="ShortBreak">
            <h5>Short Break</h5>
            <button onClick={DecrementHandlerShort}><i className="fas fa-minus-square"></i></button>
            <h4 className="pomoInput">{formattedTime}</h4> 
            <button onClick={IncrementHandlerShort}><i className="fas fa-plus-square"></i></button>
        </div>
    )
}

export default ShortBreak;

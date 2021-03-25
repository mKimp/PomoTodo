import React from 'react'
import moment from 'moment'

function LongBreak({longB, DecrementHandlerLong, IncrementHandlerLong}) {

    const formattedTime = moment.duration(longB, "s").minutes();
    return (
        <div className="LongBreak">
            <h5>Long Break</h5>
            <button onClick={DecrementHandlerLong}><i className="fas fa-minus-square" ></i></button>
            <h4 className="pomoInput">{formattedTime}</h4> 
            <button onClick={IncrementHandlerLong}><i className="fas fa-plus-square" ></i></button>
        </div>
    )
}

export default LongBreak;

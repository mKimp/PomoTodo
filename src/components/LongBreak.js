import React, {useState} from 'react'
import moment from 'moment'

function LongBreak({longB, DecrementHandlerLong, IncrementHandlerLong}) {

    const formattedTime = moment.duration(longB, "s").minutes();
    return (
        <div className="LongBreak">
            <p>LongBreak</p>
            <button onClick={DecrementHandlerLong}>-</button>
            <p className="pomoInput">{formattedTime}</p> 
            <button onClick={IncrementHandlerLong}>+</button>
        </div>
    )
}

export default LongBreak;

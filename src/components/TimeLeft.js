import React, {useState, useEffect} from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format' 

momentDurationFormatSetup(moment);

function TimeLeft ({pomoTime, shortB}) {
    const [timeleft, setTimeLeft] = useState(pomoTime);
    const [intervalID, setIntervalID] = useState(null);
    
    useEffect(() => {
        setTimeLeft(pomoTime);
    }, [pomoTime])

    const checkStatus = intervalID === null ? true : false;

    const StartHandler = () => {
        if(!checkStatus){
            clearInterval(intervalID);
            setIntervalID(null);
        }
        else{
            const interval = setInterval(() => {
                setTimeLeft(preTime => {
                    if(preTime > 0){
                        preTime = preTime - 1;
                        return preTime;
                    }
                    else{
                        console.log(shortB);
                        setTimeLeft(shortB);
                    }
                })
            }, 100);
            setIntervalID(interval);
        }

    };
    const formatedTime = moment.duration(timeleft, 's').format('mm:ss', {trim:false}); //take the secondary object

    return (
        <div>
            <p className="TimeDisplay">{formatedTime}</p>
            <button onClick={StartHandler}>{intervalID === null? 'Start' : 'Stop'}</button>
        </div>
    )
}
 
export default TimeLeft;
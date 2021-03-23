import React, {useState, useEffect} from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format' 

momentDurationFormatSetup(moment);

function TimeLeft ({pomoTime, setTimer, shortB, longB}) {
    const [timeleft, setTimeLeft] = useState(pomoTime);
    const [intervalID, setIntervalID] = useState(null);
    const[count, setCount] = useState(0);
    const[seasson, setSeasson] = useState("Pomo")

    useEffect(() => {
        setTimeLeft(pomoTime);
    }, [pomoTime])

    useEffect(() =>{
        if(timeleft === 0){
            if(seasson === "Pomo"){
                setTimeLeft(shortB);
                setSeasson("Short");
            }
            else if (seasson === "Short"){
                if (count <= 3){
                    setCount(pre => pre + 1)
                    setTimeLeft(pomoTime);
                    setSeasson("Pomo");
                }
                else {
                    setTimeLeft(longB);
                    setSeasson("Long");
                }
            }
            else if (seasson === "Long"){
                clearInterval(intervalID);
                setIntervalID(null);
            }
        }
    },[timeleft, shortB, seasson, count, longB])

    const checkStatus = intervalID === null ? true : false;

    const StartHandler = () => {
        if(!checkStatus){
            clearInterval(intervalID);
            setIntervalID(null);
        }
        else{
            const interval = setInterval(() => {
                setTimeLeft(preTime => preTime - 1)
            },150);
            setIntervalID(interval);
        }

    };
    const formatedTime = moment.duration(timeleft, 's').format('mm:ss', {trim:false}); //take the secondary object

    return (
        <div>
            <p className="TimeDisplay">{formatedTime}</p>
            <button onClick={StartHandler}>{intervalID === null? 'Start' : 'Stop'}</button>
            <p>{count}</p>
        </div>
    )
}
 
export default TimeLeft;
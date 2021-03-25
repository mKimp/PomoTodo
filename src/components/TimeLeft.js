import React, {useState, useEffect, useRef} from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format' 

momentDurationFormatSetup(moment);

function TimeLeft ({pomoTime, setTimer, shortB, longB,setshortB, setlongB}) {
    const [timeleft, setTimeLeft] = useState(pomoTime);
    const [intervalID, setIntervalID] = useState(null);
    const countRef = useRef(0);
    const audioSRef = useRef(null);
    const audioLRef = useRef(null);

    const[seasson, setSeasson] = useState("Pomo")

    useEffect(() => {
        setTimeLeft(pomoTime);
    }, [pomoTime])

    useEffect(() => {
        const switchTimeLeft = () => {
            if(timeleft === 0){
                if(seasson === "Pomo"){
                    countRef.current = countRef.current + 1;
                    if(countRef.current < 4){
                        setTimeLeft(shortB);
                        setSeasson("Short");
                        audioSRef.current.play();
                    }else{
                        setTimeLeft(longB);
                        setSeasson("Long");
                        audioLRef.current.play()
                    }
                }
                else if (seasson === "Short"){
                    setTimeLeft(pomoTime);
                    setSeasson("Pomo");
                }
                else if (seasson === "Long"){
                    clearInterval(intervalID);
                    setIntervalID(null);
                }
            }
        }
        switchTimeLeft();
    },[timeleft, shortB, seasson, longB])

    const checkStatus = intervalID === null ? true : false;

    const StartHandler = () => {
        if(!checkStatus){
            clearInterval(intervalID);
            setIntervalID(null);
        }
        else{
            const interval = setInterval(() => {
                setTimeLeft(preTime => preTime - 1)
            },1000);
            setIntervalID(interval);
        }

    };

    //reset 
    const ResetHandler = () => {
        setTimer(1500);
        setSeasson("Pomo");
        setIntervalID(null);
        setshortB(300);
        setlongB(900);
        clearInterval(intervalID);
        countRef.current = 0;
        setTimeLeft(pomoTime);
        audioSRef.current.load();
        audioLRef.current.load();

    }

    const formatedTime = moment.duration(timeleft, 's').format('mm:ss', {trim:false}); //take the secondary object
    return (
        <div className="TimeLeftDiv">
            <p className="TimeDisplay">{formatedTime}</p>
            <div>
                <button className="btnTimeLeftDiv" onClick={StartHandler}>{intervalID === null? 'Start' : 'Stop'}</button>
                <button className="btnTimeLeftDiv" onClick={ResetHandler}>Reset</button>
            </div>

            <audio src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3" type="audio/mpeg" ref={audioSRef}></audio>
            <audio src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav"  type="audio/mpeg" ref={audioLRef}></audio>
        </div>
    )
}
 
export default TimeLeft;
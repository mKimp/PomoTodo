import React from "react";
import moment from "moment";

function Timer({ pomoTime, DecrementHandler, IncrementHandler, seasson }) {
  const formattedTime = moment.duration(pomoTime, "s").minutes();
  return (
    <div className={`PomoTime ${seasson === "Pomo" ? "highlight" : ""}`}>
      <h5>Pomo Time</h5>
      <button onClick={DecrementHandler}>
        <i className="fas fa-minus-square"></i>
      </button>
      <h4 className="pomoInput">{formattedTime}</h4>
      <button onClick={IncrementHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
  );
}

export default Timer;

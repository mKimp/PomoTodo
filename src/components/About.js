import React from 'react'

function About() {
    const pStyle = {
        backgroundColor: "white",
        color:"black",
        display:"flex",
        justifyContent: "flex-start",
        fontSize:"16px",
        fontWeight: "normal",
        padding:"10px",
        paddingLeft:"25px",
    };

    const hStyle = {
        display:"flex",
        marginLeft:"8px",
        paddingTop:"25px",
        fontWeight: "bold",
        justifyContent:"center",
    }

    const uStyle = {
        display:"flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingLeft:"35px",
        backgroundColor:"white"
    }

    return (
        <div>
            <main  style={{backgroundColor:"white"}}>
                <section>
                    <h3 style={hStyle}>Pomodoro Technique</h3>
                    <p style={pStyle}> The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. 
                        The technique has been widely popularized by dozens of apps and websites providing timers and instructions. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts. 
                    </p>
                </section>
                <section>
                    <p>There are six steps in the original technique</p>
                    <ol style={uStyle}>
                        <li>Decide on the task to be done</li>
                        <li>Set the pomodoro timer (traditionally to 25 minutes)</li>
                        <li>Work on the task.</li>
                        <li>End work when the timer rings and put a checkmark on a piece of paper</li>
                        <li>If you have fewer than four checkmarks, take a short break (3–5 minutes) and then return to step 2; otherwise continue to step 6</li>
                        <li>After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.</li>
                    </ol>
                    <p style={pStyle}>For the purposes of the technique, a pomodoro is the interval of time spent working.</p>
                    <p style={pStyle}>Regular breaks are taken, aiding assimilation. A short (3–5 minutes) rest separates consecutive pomodoros. Four pomodoros form a set. A longer (15–30 minute) rest is taken between sets.</p>
                    <p style={pStyle}>A goal of the technique is to reduce the impact of internal and external interruptions on focus and flow. A pomodoro is indivisible; when interrupted during a pomodoro, either the other activity must be recorded and postponed (using the inform – negotiate – schedule – call back strategy) or the pomodoro must be abandoned.</p>      
                    <p>After task completion in a pomodoro, any time remaining could be devoted to activities such as</p>
                    <ol>
                        <li>Review and edit the work just completed.</li>
                        <li>Review the activities from a learning point of view: What did I learn? What could I do better or differently?</li>
                        <li>Review the list of upcoming tasks for the next planned Pomodoro time blocks, and start reflecting on or updating those tasks.</li>
                    </ol>
                 </section>
            </main>
            <footer>
                <p style={{ display: "block", textAlign: "center", backgroundColor:"rgba(0, 0, 255, 0.4)", margin:"0"}}>The information is from Wiki. Please refer to <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique"> Wiki</a> for more information</p>
            </footer>
        </div>
    )
}

export default About

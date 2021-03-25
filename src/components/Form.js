import React from 'react'

const Form = ({userInput, setUserInput, toDoList, settoDoList,selectoption, setOption}) => {
    const inputHandler = (e) =>{
        setUserInput(e.target.value);
    }
    const submitHandler = (e) => {
       e.preventDefault();

       if(userInput !==  ""){
            let newTodoEntry = {
            text: userInput,
            completed: false,
            id: Math.random()*1000
        }
            settoDoList([...toDoList, newTodoEntry]);
            setUserInput("")
       }
       return;
    }

    //select handler
    const selectOptionHandler = (e) => {
        setOption(e.target.value);
    }
    return (
        <div className="formContainer">
            <form>
                <input value={userInput} onChange={inputHandler}  placeholder="add your todo here" type="text"></input>                
                <button onClick={submitHandler} type="submit"><i className="fas fa-plus-square" ></i></button>
                <select onChange={selectOptionHandler}>
                    <option value="all">All</option>
                    <option value="incompleted">Incompleted</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
        </div>
    )
}

export default Form

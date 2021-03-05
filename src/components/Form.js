import React from 'react'
import TodoList from './TodoList';

const Form = ({userInput, setUserInput, toDoList, settoDoList}) => {
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
       else
        return;
   
    }
    return (
        <div>
            <form>
                <input value={userInput} onChange={inputHandler}  placeholder="add your todo here" type="text"></input>
                <button onClick={submitHandler} type="submit" >Add</button>

                <select>
                    <option value="all">All</option>
                    <option value="incompleted">Incompleted</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
        </div>
    )
}

export default Form

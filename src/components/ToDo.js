import React from 'react'
import TodoList from './TodoList'

function ToDo({todoItem, settoDoList, toDoList}) {
    ///remove handler
    const removeHandler = () => {
        let removeList = toDoList.filter(itemRemoved => todoItem.id !== itemRemoved.id);
        settoDoList(removeList)
    }

    //Done handler
    const doneHandler = () => {
        let newDoneList = toDoList.map(item => {
            if(item.id === todoItem.id){
                item.completed = !item.completed
            }
            return item
        })
        settoDoList(newDoneList)
    }
    return (
        <div className="todo-list">
            <li className={`todo-item ${todoItem.completed ? "completed" : ""}`}>{todoItem.text}</li>  
            <button onClick={doneHandler}>Done</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default ToDo

import React from 'react'
import ToDo from './ToDo'

const TodoList = ({toDoList, settoDoList}) => {
    return(
        <div className="todoContainer">
            <ul className="todoList">
                {toDoList.map(item => (
                    <ToDo key={item.id} todoItem= {item} settoDoList={settoDoList} toDoList={toDoList}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
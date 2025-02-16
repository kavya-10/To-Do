import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <FaRegEdit  className="edit-icon" onClick={() => editTodo(task.id)}  />
        <BsTrash3  className="delete-icon" onClick={() => deleteTodo(task.id)}/>
        {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} /> */}
        </div>
    </div>
  )
}
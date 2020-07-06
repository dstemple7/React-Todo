import React from "react"
import ToDo from "./Todo"

const ToDoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <ToDo toggleToDo={props.toggleToDo} key={todo.id} todo={todo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}
export default ToDoList
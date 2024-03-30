import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs"
import { removeTodo, selectTodo, toggleTodo } from "../store/todosSlice"

const Todo = ({ todo, handleEdit }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id))
  }

  const handleDelete = () => {
    dispatch(removeTodo(todo.id))
  }

  const handleSelectedTodo = () => {
    dispatch(selectTodo(todo.id))
    navigate(`/todo/${todo.id}`)
  }

  return (
    <div className="todo">
      <p className="text" onClick={handleSelectedTodo}>
        <span className={`${todo.isDone && "complete"}`}>{todo.text}</span>
      </p>
      <div className="edit">
        <div onClick={() => handleEdit(todo.id)}>
          <BsPencil />
        </div>
        <div onClick={handleToggle}>
          <BsCheckCircle />
        </div>
        <div onClick={handleDelete}>
          <BsTrash />
        </div>
      </div>
    </div>
  )
}

export default Todo

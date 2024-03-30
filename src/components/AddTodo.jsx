import React, { useEffect, useState } from "react"
import { BsPlusCircle } from "react-icons/bs"
import { IoBagAdd } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateTodo } from "../store/todosSlice"

const AddTodo = () => {
  const [text, setText] = useState("")
  const editedTodo = useSelector((state) => state.todos.editedTodo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (editedTodo !== null) {
      setText(editedTodo.text)
    } else {
      setText("")
    }
  }, [editedTodo])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    if (editedTodo !== null) {
      dispatch(updateTodo({ id: editedTodo.id, text }))
    } else {
      dispatch(addTodo(text))
    }
  }
  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button>
        {editedTodo !== null ? <IoBagAdd /> : <BsPlusCircle />}
        <span>{editedTodo !== null ? "Save" : "Add"}</span>
      </button>
    </form>
  )
}

export default AddTodo

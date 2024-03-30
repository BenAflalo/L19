import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import { selectTodo } from "../store/todosSlice"

const SelectedTodo = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const selectedTodo = useSelector((state) => state.todos.selectedTodo)

  useEffect(() => {
    if (id) {
      dispatch(selectTodo(+id))
    }

    return () => {
      dispatch(selectTodo(null))
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="selected-todo">
      <div className="selected-todo-wrapper">
        <BackButton />
        {selectedTodo ? <h3>{selectedTodo.text}</h3> : <p>Todo not found</p>}
        <form onSubmit={handleSubmit}>
          <textarea rows={5} />
          <button className="add-info-btn">Save</button>
        </form>
      </div>
    </div>
  )
}

export default SelectedTodo

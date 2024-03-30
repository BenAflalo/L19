import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [
    { id: 1, text: "Do something", isDone: false, info: "" },
    { id: 2, text: "Go somewhere", isDone: false, info: "" },
    { id: 3, text: "Eat something", isDone: false, info: "" },
  ],
  selectedTodo: null,
  editedTodo: null,
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const text = action.payload

      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text,
        isDone: false,
      }

      state.todos.push(newTodo)
    },
    removeTodo(state, action) {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    updateTodo(state, action) {
      const { id, text } = action.payload
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      if (exitingTodo) {
        exitingTodo.text = text
      }
      state.editedTodo = null
    },
    setEditedTodo(state, action) {
      const id = action.payload
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      state.editedTodo = exitingTodo
    },
    toggleTodo(state, action) {
      const id = action.payload
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      if (exitingTodo) {
        exitingTodo.isDone = !exitingTodo.isDone
      }
    },
    selectTodo(state, action) {
      const id = action.payload
      if (!id) {
        state.selectedTodo = null
        return
      }
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      if (!exitingTodo) return
      state.selectedTodo = exitingTodo
    },
  },
})

export const {
  addTodo,
  removeTodo,
  updateTodo,
  toggleTodo,
  selectTodo,
  setEditedTodo,
} = todoSlice.actions

export default todoSlice.reducer

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todosSlice";
import loginReducer from "./userSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    login: loginReducer,
  },
});

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

export default store;

window.gStore = store;

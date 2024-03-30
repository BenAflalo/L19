import React, { useEffect } from "react";
import AddTodo from "../components/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { setEditedTodo } from "../store/todosSlice";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { setLoggedInUser } from "../store/userSlice";

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLoggedInUser());
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleEdit = (id) => {
    dispatch(setEditedTodo(id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h2 className="heading">Todo List</h2>
        <AddTodo />
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

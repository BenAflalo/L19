import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import SelectedTodo from "./pages/selected-todo";
import TodoApp from "./pages/todo-app";
import Root from "./pages/root";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<TodoApp />} />
      <Route path="todo/:id" element={<SelectedTodo />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

export default router;

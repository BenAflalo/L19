import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlelogin, setLoggedInUser } from "../store/userSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedInUser());
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(handlelogin(user));
  };

  return (
    <section className="login-container">
      <div className="login-header">
        <h1>Login form</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-login">Login</button>
        </form>
        <div className="auth-switch">
          <p>
            Don't have an account?{" "}
            <button className="btn-login" onClick={() => navigate("/register")}>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

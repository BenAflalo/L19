import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { handlelogin, setLoggedInUser } from "../store/userSlice";

const RegisterPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedInUser());
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    const registrationCondition = userService.createUser(
      username,
      email,
      password
    );
    if (!registrationCondition) {
      alert("email already exist");
    } else {
      const user = { username, password };
      dispatch(handlelogin(user));
    }
  };

  return (
    <section className="register-container">
      <div className="register-header">
        <h1>Register form</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleRegister} className="register-form">
          <div className="input-wrapper">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" ref={emailRef} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" ref={userNameRef} />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} />
          </div>

          <button className="btn-register">Register</button>
        </form>
        <div className="auth-switch">
          <p>
            Already have an account?{"  "}{" "}
            <button className="btn-register" onClick={() => navigate("/login")}>
              Sign in
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;

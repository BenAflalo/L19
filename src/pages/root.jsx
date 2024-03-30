import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { userService } from "../services/userService";
import { logout } from "../store/userSlice";

const Root = () => {
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    userService.logout();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <main className="main">
      <header>
        <div className="header-container">
          <h2 className="logo">Todos</h2>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to="/">Todos</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                {" "}
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageService } from "../services/storageService";
import { setLoggedInUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLoggedInUser());
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="profile-body">
      <div className="avatar-container">
        <label className="profile-lable">Avatar</label>
        <div className="profile-container">
          <img src={loggedInUser?.avatar} alt="Profile img" />
        </div>
      </div>

      <div>
        <label className="profile-lable">Username</label>
        <input type="text" defaultValue={loggedInUser?.username} disabled />
      </div>
      <div>
        <label className="profile-lable">Password</label>
        <input type="password" defaultValue={loggedInUser?.password} disabled />
      </div>
      <div>
        <label className="profile-lable">Email</label>
        <input type="text" defaultValue={loggedInUser?.email} disabled />
      </div>
      <div>
        <label className="profile-lable">Created At</label>
        <input type="text" defaultValue={loggedInUser?.createdAt} disabled />
      </div>
    </div>
  );
};

export default ProfilePage;

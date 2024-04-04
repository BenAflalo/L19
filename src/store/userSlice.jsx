import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../services/userService";
import { storageService } from "../services/storageService";

const initialState = {
  loggedInUser: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handlelogin(state, action) {
      const user = userService.login(action.payload);
      if (user === false) {
        alert("Invalid credentials");
        return;
      } else if (user === null) {
        alert("User doesn't exist");
        // navigate("/signup");
      }
      if (user) state.loggedInUser = user;
      // console.log(state.loggedInUser);
    },
    logout(state, action) {
      state.loggedInUser = null;
    },
    setLoggedInUser(state, action) {
      const loggedInUser = storageService.getLoggedInUser();
      // console.log(state.loggedInUser);
      if (!state.loggedInUser) {
        state.loggedInUser = loggedInUser;
      }
    },
  },
});

export const { handlelogin, logout, setLoggedInUser } = loginSlice.actions;

export default loginSlice.reducer;

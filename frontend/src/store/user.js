import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegun } from "./api";
import { resetUserOrders } from "./userOrders";
import { resetUserList } from "./userList";

const slice = createSlice({
  name: "user",

  initialState: {
    userInfo: {},
    loading: false,
    error: null,
  },

  reducers: {
    userInfoRequested: (user, action) => {
      user.loading = true;
    },

    userInfoReceived: (user, action) => {
      user.userInfo = action.payload;
      user.loading = false;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      // window.location.reload(true);
    },

    userInfoRequestFailed: (user, action) => {
      user.error = action.payload;
      user.loading = false;
    },

    userLoggedOut: (user, action) => {
      user.userInfo = null;
    },

    errorCleared: (user, action) => {
      user.error = null;
    },
  },
});

const {
  userInfoRequested,
  userInfoReceived,
  userInfoRequestFailed,
  userLoggedOut,
  errorCleared,
} = slice.actions;
export default slice.reducer;

const headers = {
  "Content-Type": "application/json",
};

export const login = (email, password) =>
  apiCallBegun({
    url: "/api/users/login/",
    method: "post",
    data: { username: email, password },
    headers,
    onStart: userInfoRequested.type,
    onSuccess: userInfoReceived.type,
    onError: userInfoRequestFailed.type,
  });

export const register = (name, email, password) =>
  apiCallBegun({
    url: "/api/users/register/",
    method: "post",
    data: { email, name, password },
    headers,
    onStart: userInfoRequested.type,
    onSuccess: userInfoReceived.type,
    onError: userInfoRequestFailed.type,
  });

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: userLoggedOut.type });
  dispatch(resetUserOrders());
  dispatch(resetUserList());
};

export const clearError = () => (dispatch) => {
  dispatch({ type: errorCleared.type });
};

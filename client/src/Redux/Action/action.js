import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./type";
import axios from "axios";

// login
export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginError = () => {
  return { type: LOGIN_ERROR };
};

export const loginRedux = (user) => {
  return async (dispatch, getState) => {
    dispatch(loginRequest());
    try {
      let res = await axios.post("http://localhost:8000/api/login", user);
      if (res.data.status === 200) {
        dispatch(loginSuccess(res.data));
      }
    } catch (error) {
      dispatch(loginError());
    }
  };
};

// register
export const registerRequest = () => {
  return { type: REGISTER_REQUEST };
};
export const registerSuccess = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};
export const registerError = () => {
  return { type: REGISTER_ERROR };
};

export const registerRedux = (user) => {
  return async (dispatch, getState) => {
    dispatch(registerError());
    try {
      let res = await axios.post("http://localhost:8000/api/register", user);
      console.log(res);
      if (res.data.status === 200) {
        dispatch(registerSuccess(res.data));
      }
    } catch (error) {
      dispatch(registerError());
    }
  };
};

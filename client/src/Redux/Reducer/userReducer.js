import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGOUT_SUCCESS,
} from "../Action/type";

const INITTAL_STATE = {
  user: {},
  isAuth: false,
};
const userReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    // login
    case LOGIN_REQUEST: {
      return { ...state, isAuth: false };
    }
    case LOGIN_SUCCESS: {
      if (action.payload?.error === 0) {
        return { ...state, user: action.payload, isAuth: false };
      }
      return { ...state, user: action.payload, isAuth: true };
    }
    case LOGIN_ERROR: {
      return { ...state, isAuth: false };
    }
    // register
    case REGISTER_REQUEST: {
      return { ...state, isAuth: false };
    }
    case REGISTER_SUCCESS: {
      return { ...state, user: action.payload, isAuth: true };
    }
    case REGISTER_ERROR: {
      return { ...state, isAuth: false };
    }

    // logout
    case LOGOUT_SUCCESS: {
      return { isAuth: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;

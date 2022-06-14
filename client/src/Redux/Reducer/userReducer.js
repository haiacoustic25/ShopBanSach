import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGOUT_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../Action/type";

const INITTAL_STATE = {
  user: {},
  isAuth: false,

  listUser: [],

  listUsers: [],
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
      if (localStorage.getItem("LOCAL_STORAGE_TOKEN")) {
        INITTAL_STATE.isAuth = true;
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

    case FETCH_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        listUsers: action.payload,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return { ...state, user: action.payload };
    }

    // logout
    case LOGOUT_SUCCESS: {
      return { isAuth: false };
    }

    default:
      return state;
  }
};

export default userReducer;

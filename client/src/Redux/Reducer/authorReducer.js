import {
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_ERROR,
  FETCH_AUTHORBYID_ERROR,
  FETCH_AUTHORBYID_SUCCESS,
  FETCH_AUTHORBYID_REQUEST,
} from "../Action/type";

const INITTAL_STATE = {
  listAuthors: [],
  nameAuthor: "",
};

const authorReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTHOR_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_AUTHOR_SUCCESS: {
      return {
        ...state,
        listAuthors: action.dataAuthors,
      };
    }
    case FETCH_AUTHOR_ERROR: {
      return {
        ...state,
      };
    }
    case FETCH_AUTHORBYID_REQUEST: {
      return { ...state };
    }
    case FETCH_AUTHORBYID_SUCCESS: {
      return { nameAuthor: action.payload };
    }
    case FETCH_AUTHORBYID_ERROR: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default authorReducer;

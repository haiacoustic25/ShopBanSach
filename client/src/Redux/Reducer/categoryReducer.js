import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORYBYID_ERROR,
  FETCH_CATEGORYBYID_SUCCESS,
  FETCH_CATEGORYBYID_REQUEST,
} from "../Action/type";

const INITTAL_STATE = {
  listCategorys: [],
  nameCategory: "",
};

const categoryReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_CATEGORY_SUCCESS: {
      return {
        ...state,
        listCategorys: action.dataCategorys,
      };
    }
    case FETCH_CATEGORY_ERROR: {
      return {
        ...state,
      };
    }
    case FETCH_CATEGORYBYID_ERROR: {
      return { ...state };
    }
    case FETCH_CATEGORYBYID_SUCCESS: {
      return { nameCategory: action.payload };
    }
    case FETCH_CATEGORYBYID_REQUEST: {
      return { ...state };
    }

    default:
      return state;
  }
};

export default categoryReducer;

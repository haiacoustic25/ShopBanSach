import {
  FETCH_CART_REQUUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
} from "../Action/type";

const INITTAL_STATE = {
  listProducts: [],
};

const cartReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CART_REQUUEST: {
      return { ...state };
    }
    case FETCH_CART_SUCCESS: {
      return { ...state, listProducts: action.payload };
    }
    case FETCH_CART_ERROR: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;

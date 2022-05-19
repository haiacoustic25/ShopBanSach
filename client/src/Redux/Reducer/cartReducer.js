import {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  ADD_PRODUCT_INTO_CART_ERROR,
  ADD_PRODUCT_INTO_CART_REQUEST,
  ADD_PRODUCT_INTO_CART_SUCCESS,
} from "../Action/type";

const INITTAL_STATE = {
  listProducts: [],
  isAddProductIntoCart: false,
};

const cartReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CART_REQUEST: {
      return { ...state };
    }
    case FETCH_CART_SUCCESS: {
      return { ...state, listProducts: action.payload };
    }
    case FETCH_CART_ERROR: {
      return { ...state };
    }
    case ADD_PRODUCT_INTO_CART_REQUEST: {
      return { ...state, isAddProductIntoCart: false };
    }
    case ADD_PRODUCT_INTO_CART_SUCCESS: {
      return { ...state, isAddProductIntoCart: true };
    }
    case ADD_PRODUCT_INTO_CART_ERROR: {
      return { ...state, isAddProductIntoCart: false };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;

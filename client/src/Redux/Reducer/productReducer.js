import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCTBYID_ERROR,
  FETCH_PRODUCTBYID_SUCCESS,
  FETCH_PRODUCTBYID_REQUEST,
} from "../Action/type";

const INITTAL_STATE = {
  listProducts: [],
  inforProductById: {},
};
const productReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        listProducts: action.dataProducts,
      };
    }
    case FETCH_PRODUCT_ERROR: {
      return {
        ...state,
      };
    }
    case FETCH_PRODUCTBYID_REQUEST: {
      return {
        ...state,
      };
    }
    case FETCH_PRODUCTBYID_SUCCESS: {
      return {
        ...state,
        inforProductById: action.payload,
      };
    }
    case FETCH_PRODUCTBYID_ERROR: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default productReducer;

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCTBYID_ERROR,
  FETCH_PRODUCTBYID_SUCCESS,
  FETCH_PRODUCTBYID_REQUEST,
  MOVE_PRODUCTINTOPAYLOAD_SUCCESS,
  SEARCH_PRODUCT_ERROR,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
} from "../Action/type";

const INITTAL_STATE = {
  listProducts: [],
  inforProductById: {},
  moveInforProductToPayload: {},
  listProductsSearch: [],
  loading: false,
};
const productReducer = (state = INITTAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        listProducts: action.dataProducts,
        loading: false,
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
    case MOVE_PRODUCTINTOPAYLOAD_SUCCESS: {
      return { ...state, moveInforProductToPayload: action.payload };
    }
    case SEARCH_PRODUCT_ERROR: {
      return {
        ...state,
      };
    }
    case SEARCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        listProductsSearch: action.payload,
      };
    }
    case SEARCH_PRODUCT_REQUEST: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default productReducer;

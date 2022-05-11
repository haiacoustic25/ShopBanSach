import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR
  } from "../Action/type";
  
  const INITTAL_STATE = {
    listProducts: [],
  };
  const productReducer = (state = INITTAL_STATE, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST: {
        return { 
            ...state 
        };
      }
      case FETCH_PRODUCT_SUCCESS: {
        return { 
            ...state,
            listProducts: action.dataProducts
        };
      }
      case FETCH_PRODUCT_ERROR: {
        return { 
            ...state
        };
      }

      default: return state;
    }
  };
  
  export default productReducer;
  
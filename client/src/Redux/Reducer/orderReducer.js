import {
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR,
  } from "../Action/type";
  
  const INITTAL_STATE = {
    listOrders: [],
  };
  
  const orderReducer = (state = INITTAL_STATE, action) => {
    switch (action.type) {
      case FETCH_ORDER_REQUEST: {
        return {
          ...state,
        };
      }
      case FETCH_ORDER_SUCCESS: {
        return {
          ...state,
          listOrders: action.dataOrders,
        };
      }
      case FETCH_ORDER_ERROR: {
        return {
          ...state,
        };
      }
      default:
        return state;
    }
  };
  
  export default orderReducer;
  
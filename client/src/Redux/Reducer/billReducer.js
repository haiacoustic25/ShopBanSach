import {
    FETCH_BILL_REQUEST,
    FETCH_BILL_SUCCESS,
    FETCH_BILL_ERROR,
  } from "../Action/type";
  
  const INITTAL_STATE = {
    listBills: [],
  };
  
  const billReducer = (state = INITTAL_STATE, action) => {
    switch (action.type) {
      case FETCH_BILL_REQUEST: {
        return {
          ...state,
        };
      }
      case FETCH_BILL_SUCCESS: {
        return {
          ...state,
          listBills: action.dataBills,
        };
      }
      case FETCH_BILL_ERROR: {
        return {
          ...state,
        };
      }
      default:
        return state;
    }
  };
  
  export default billReducer;
  
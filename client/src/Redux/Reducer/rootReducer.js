import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer
});

export default rootReducer;

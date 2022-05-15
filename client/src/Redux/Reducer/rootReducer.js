import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;

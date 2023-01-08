import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import authorReducer from "./authorReducer";
import orderReducer from "./orderReducer";
import billReducer from "./billReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  author: authorReducer,
  order: orderReducer,
  bill: billReducer,
});

export default rootReducer;

import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  FETCH_PRODUCTBYID_ERROR,
  FETCH_PRODUCTBYID_REQUEST,
  FETCH_PRODUCTBYID_SUCCESS,
  FETCH_CART_REQUEST,
  FETCH_CART_ERROR,
  FETCH_CART_SUCCESS,
  ADD_PRODUCT_INTO_CART_ERROR,
  ADD_PRODUCT_INTO_CART_REQUEST,
  ADD_PRODUCT_INTO_CART_SUCCESS,
} from "./type";
import axios from "axios";

// login
export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginError = () => {
  return { type: LOGIN_ERROR };
};

export const loginRedux = (user) => {
  return async (dispatch, getState) => {
    dispatch(loginRequest());
    try {
      let res = await axios.post("http://localhost:8000/api/login", user);
      if (res.data.status === 200) {
        dispatch(loginSuccess(res.data));
      }
    } catch (error) {
      dispatch(loginError());
    }
  };
};

// register
export const registerRequest = () => {
  return { type: REGISTER_REQUEST };
};
export const registerSuccess = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};
export const registerError = () => {
  return { type: REGISTER_ERROR };
};

export const registerRedux = (user) => {
  return async (dispatch, getState) => {
    dispatch(registerError());
    try {
      let res = await axios.post("http://localhost:8000/api/register", user);
      if (res.data.status === 200) {
        dispatch(registerSuccess(res.data));
      }
    } catch (error) {
      dispatch(registerError());
    }
  };
};

//  logout
export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

export const logoutRedux = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error);
    }
  };
};

// cart
export const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST,
  };
};
export const fetchCartSuccess = (payload) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload,
  };
};
export const fetchCartError = () => {
  return {
    type: FETCH_CART_ERROR,
  };
};

export const fetchAllCartReduct = (username) => {
  return async (dispatch, getState) => {
    dispatch(fetchCartRequest());
    try {
      const res = await axios.get(
        `http://localhost:8000/api/show-product/${username}`
      );
      // console.log(res.data);
      if (res.data.status === 200) dispatch(fetchCartSuccess(res.data));
    } catch (error) {
      dispatch(fetchCartError());
    }
  };
};

// add product into cart
export const addProductIntoCartRequest = () => {
  return { type: ADD_PRODUCT_INTO_CART_REQUEST };
};
export const addProductIntoCartSuccess = () => {
  return { type: ADD_PRODUCT_INTO_CART_SUCCESS };
};
export const addProductIntoCartError = () => {
  return { type: ADD_PRODUCT_INTO_CART_ERROR };
};

export const addProductIntoCartRedux = (
  { cart_id, book_id, gh_amount },
  username
) => {
  return async (dispatch, getState) => {
    dispatch(addProductIntoCartRequest());
    try {
      const sendData = {
        cart_id,
        book_id,
        gh_amount,
      };
      const res = await axios.post(
        "http://localhost:8000/api/add-cart",
        sendData
      );
      if (res.data.status === 200) {
        dispatch(addProductIntoCartSuccess());
        dispatch(fetchAllCartReduct(username));
      }
    } catch (error) {
      dispatch(addProductIntoCartError());
    }
  };
};

// Infor Users
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const fetchAllUsers = () => {
  return (dispatch, getState) => {
    // const res = await axios.get("")
  };
};

// Infor Products
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductsSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    dataProducts: data,
  };
};

export const fetchProductsError = () => {
  return {
    type: FETCH_PRODUCT_ERROR,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch, getState) => {
    dispatch(fetchProductsRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/book");
      const data = res && res.data ? res.data : [];
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsError());
    }
  };
};

// fetch product by id
export const fetchProductByIdRequest = () => {
  return { type: FETCH_PRODUCTBYID_REQUEST };
};
export const fetchProductByIdSuccess = (payload) => {
  return { type: FETCH_PRODUCTBYID_SUCCESS, payload };
};
export const fetchProductByIdError = () => {
  return { type: FETCH_PRODUCTBYID_ERROR };
};

export const fetchProductByIdRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchProductByIdRequest());
    try {
      const res = await axios.get(`http://localhost:8000/api/edit-book/${id}`);
      if (res.data.status === 200) {
        dispatch(fetchProductByIdSuccess(res.data.book));
      }
    } catch (error) {
      dispatch(fetchProductByIdError());
    }
  };
};

// Create Product
export const createProductsRequest = () => {
  return {
    type: CREATE_PRODUCT_REQUEST,
  };
};

export const createProductsSuccess = () => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
  };
};

export const createProductsError = () => {
  return {
    type: CREATE_PRODUCT_ERROR,
  };
};

export const createNewProductsRedux = (product) => {
  return async (dispatch, getState) => {
    dispatch(createProductsRequest());
    try {
      let res = await axios.post("http://localhost:8000/api/add-book", product);
    } catch (error) {
      console.log(error);
      dispatch(createProductsError());
    }
  };
};

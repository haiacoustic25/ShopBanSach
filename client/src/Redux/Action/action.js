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
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  DELETE_CATEGORY_SUCCESS,
  FETCH_PRODUCTBYID_ERROR,
  FETCH_PRODUCTBYID_REQUEST,
  FETCH_PRODUCTBYID_SUCCESS,
  FETCH_CART_REQUUEST,
  FETCH_CART_ERROR,
  FETCH_CART_SUCCESS,
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
    type: FETCH_CART_REQUUEST,
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
  }
}

// Infor Categorys
export const fetchCategorysRequest = () => {
  return{
    type: FETCH_CATEGORY_REQUEST
  }
}

export const fetchCategorysSuccess = (data) => {
  return{
    type: FETCH_CATEGORY_SUCCESS,
    dataCategorys: data
  }
}

export const fetchCategorysError= () => {
  return{
    type: FETCH_CATEGORY_ERROR
  }
}

export const fetchAllCategorys = () => {
  return async (dispatch, getState) => {
    dispatch(fetchCategorysRequest())
    try{
      const res = await axios.get("http://localhost:8000/api/category");
      const data = res && res.data ? res.data : [];
      dispatch(fetchCategorysSuccess(data))
    }catch(error){
      dispatch(fetchCategorysError)
    }
  }
}

// Create Categorys
export const createCategorysRequest = () => {
  return{
    type: CREATE_CATEGORY_REQUEST
  }
}

export const createCategorysSuccess = () => {
  return{
    type: CREATE_CATEGORY_SUCCESS,
  }
}

export const createCategorysError= () => {
  return{
    type: CREATE_CATEGORY_ERROR
  }
}

export const createNewCategory = (tl_name) => {
  return async (dispatch, getState) =>{
    dispatch(createCategorysRequest())
    try{
      let res = await axios.post("http://localhost:8000/api/add-category", tl_name)
      console.log(res.data)
      if (res.data.status === 200) {
        dispatch(createCategorysSuccess());
        dispatch(fetchAllCategorys());
      }
    }catch (error) {
      dispatch(createCategorysError())
    }
  }
}

export const deleteCategorysSuccess = () => {
  return{
    type: DELETE_CATEGORY_SUCCESS,
  }
}

export const deleteCategory = (id) =>{
  return async (dispatch, getState) => {
    try{
      let res = await axios.delete(`http://localhost:8000/api/delete-category/${id}`)
      if (res && res.data.status === 200){
        dispatch(deleteCategorysSuccess());
        dispatch(fetchAllCategorys());
      }
    } catch (error){

    }
  }
}


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
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  // DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  DELETE_CATEGORY_SUCCESS,
  FETCH_CATEGORYBYID_ERROR,
  FETCH_CATEGORYBYID_REQUEST,
  FETCH_CATEGORYBYID_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  FETCH_PRODUCTBYID_ERROR,
  FETCH_PRODUCTBYID_REQUEST,
  FETCH_PRODUCTBYID_SUCCESS,
  SEARCH_PRODUCT_ERROR,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  FETCH_CART_REQUEST,
  FETCH_CART_ERROR,
  FETCH_CART_SUCCESS,
  ADD_PRODUCT_INTO_CART_REQUEST,
  ADD_PRODUCT_INTO_CART_ERROR,
  ADD_PRODUCT_INTO_CART_SUCCESS,
  DELETE_PRODUCTINCART_ERROR,
  DELETE_PRODUCTINCART_REQUEST,
  DELETE_PRODUCTINCART_SUCCESS,
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_ERROR,
  CREATE_AUTHOR_REQUEST,
  CREATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_ERROR,
  DELETE_AUTHOR_SUCCESS,
  FETCH_AUTHORBYID_ERROR,
  FETCH_AUTHORBYID_REQUEST,
  FETCH_AUTHORBYID_SUCCESS,
  UPDATE_AUTHOR_SUCCESS,
  FETCH_BILL_REQUEST,
  FETCH_BILL_SUCCESS,
  FETCH_BILL_ERROR,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_ERROR,
  UPDATE_ORDER_SUCCESS,
  MOVE_PRODUCTINTOPAYLOAD_SUCCESS,
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
      let res = await axios.post("http://localhost:8000/api/auth/login", user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "LOCAL_STORAGE_TOKEN"
          )}`,
        },
      });
      console.log(res);
      if (res.data.status === 200) {
        dispatch(loginSuccess(res.data));
        localStorage.setItem("LOCAL_STORAGE_TOKEN", res.data.access_token);
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
        `http://localhost:8000/api/show-product/${username}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "LOCAL_STORAGE_TOKEN"
            )}`,
          },
        }
      );
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
      const res = await axios.post("http://localhost:8000/api/add-cart", {
        cart_id,
        book_id,
        gh_amount,
      });
      if (res.data.status === 200) {
        dispatch(addProductIntoCartSuccess());
        dispatch(fetchAllCartReduct(username));
      }
    } catch (error) {
      dispatch(addProductIntoCartError());
    }
  };
};

// delete product in cart
export const deleteProductInCartRequest = () => {
  return { type: DELETE_PRODUCTINCART_REQUEST };
};
export const deleteProductInCartSuccess = () => {
  return { type: DELETE_PRODUCTINCART_SUCCESS };
};
export const deleteProductInCartError = () => {
  return { type: DELETE_PRODUCTINCART_ERROR };
};

export const deleteProductInCartRedux = ({ cart_id, book_id }, username) => {
  return async (dispatch, useState) => {
    dispatch(deleteProductInCartRequest());
    try {
      const res = await axios.post(
        "http://localhost:8000/api/delete-product-in-cart",
        { cart_id, book_id }
      );
      if (res.data.status === 200) {
        dispatch(deleteProductInCartSuccess());
        dispatch(fetchAllCartReduct(username));
      }
    } catch (error) {
      dispatch(deleteProductInCartError());
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
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/get-user");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersError());
    }
  };
};

// Create New User
export const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUsersSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

export const createNewUsersRedux = (user) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      let res = await axios.post("http://localhost:8000/api/register", user);
      if (res.data.status === 200) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllUsers());
      }
    } catch (error) {
      dispatch(createUsersError());
    }
  };
};

// Delete User
// export const deleteUsersSuccess = () => {
//   return{
//     type: DELETE_USER_SUCCESS,
//   }
// }

// export const deleteUser = (id) =>{
//   return async (dispatch, getState) => {
//     try{
//       let res = await axios.delete(`http://localhost:8000/api/delete-book/${id}`)
//       if (res && res.data.status === 200){
//         dispatch(deleteUsersSuccess());
//         dispatch(fetchAllUsers());
//       }
//     } catch (error){

//     }
//   }
// }

// Update Product
export const updateUsersSuccess = (payload) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  };
};

export const updateUser = (User) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.post(
        "http://localhost:8000/api/update-user",
        User,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "LOCAL_STORAGE_TOKEN"
            )}`,
          },
        }
      );
      if (res && res.data.status === 200) {
        dispatch(updateUsersSuccess(res.data));
        dispatch(fetchAllUsers());
      }
    } catch (error) {}
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

export const fetchAllProducts = (query) => {
  return async (dispatch, getState) => {
    dispatch(fetchProductsRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/book", {
        params: query,
      });
      const data = res && res.data ? res.data : [];
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsError());
    }
  };
};

export const fetchSearchProductsError = () => {
  return {
    type: SEARCH_PRODUCT_ERROR,
  };
};
export const fetchSearchProductsRequest = () => {
  return {
    type: SEARCH_PRODUCT_REQUEST,
  };
};
export const fetchSearchProductsSuccess = (payload) => {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload,
  };
};

export const fetchSearchProductRedux = (name) => {
  return async (dispatch, getState) => {
    dispatch(fetchSearchProductsRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/search-book", {
        params: name,
      });
      if (res.data.status === 200) {
        dispatch(fetchSearchProductsSuccess(res.data.book));
      }
    } catch (error) {
      dispatch(fetchSearchProductsError());
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
      if (res.data.status === 200) {
        dispatch(createProductsRequest());
        dispatch(fetchAllProducts());
      }
    } catch (error) {
      console.log(error);
      dispatch(createProductsError());
    }
  };
};

// Delete Product
export const deleteProductsSuccess = () => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.delete(
        `http://localhost:8000/api/delete-book/${id}`
      );
      if (res && res.data.status === 200) {
        dispatch(deleteProductsSuccess());
        dispatch(fetchAllProducts());
      }
    } catch (error) {}
  };
};

// Update Product
export const updateProductsSuccess = () => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
  };
};

export const updateProduct = (Product) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.post(
        "http://localhost:8000/api/update-book",
        Product
      );
      if (res && res.data.status === 200) {
        dispatch(updateProductsSuccess());
        dispatch(fetchAllProducts());
      }
    } catch (error) {}
  };
};

// Infor Authors
export const fetchAuthorsRequest = () => {
  return {
    type: FETCH_AUTHOR_REQUEST,
  };
};

export const fetchAuthorsSuccess = (data) => {
  return {
    type: FETCH_AUTHOR_SUCCESS,
    dataAuthors: data,
  };
};

export const fetchAuthorsError = () => {
  return {
    type: FETCH_AUTHOR_ERROR,
  };
};

export const fetchAllAuthors = () => {
  return async (dispatch, getState) => {
    dispatch(fetchAuthorsRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/author");
      const data = res && res.data ? res.data : [];
      dispatch(fetchAuthorsSuccess(data));
    } catch (error) {
      dispatch(fetchAuthorsError());
    }
  };
};

// CREATE Author
export const createAuthorsRequest = () => {
  return {
    type: CREATE_AUTHOR_REQUEST,
  };
};

export const createAuthorsSuccess = () => {
  return {
    type: CREATE_AUTHOR_SUCCESS,
  };
};

export const createAuthorsError = () => {
  return {
    type: CREATE_AUTHOR_ERROR,
  };
};

export const createNewAuthor = (Author) => {
  return async (dispatch, getState) => {
    dispatch(createAuthorsRequest());
    try {
      let res = await axios.post(
        "http://localhost:8000/api/add-author",
        Author
      );
      if (res.data.status === 200) {
        dispatch(createAuthorsSuccess());
        dispatch(fetchAllAuthors());
      }
    } catch (error) {
      dispatch(createAuthorsError());
    }
  };
};

// Delete Author
export const deleteAuthorsSuccess = () => {
  return {
    type: DELETE_AUTHOR_SUCCESS,
  };
};

export const deleteAuthor = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.delete(
        `http://localhost:8000/api/delete-author/${id}`
      );
      if (res && res.data.status === 200) {
        dispatch(deleteAuthorsSuccess());
        dispatch(fetchAllAuthors());
      }
    } catch (error) {}
  };
};

// fetch author by id
export const fetchAuthorByIdRequest = () => {
  return { type: FETCH_AUTHORBYID_REQUEST };
};
export const fetchAuthorByIdSuccess = (payload) => {
  return { type: FETCH_AUTHORBYID_SUCCESS, payload };
};
export const fetchAuthorByIdError = () => {
  return { type: FETCH_AUTHORBYID_ERROR };
};

export const fetchAuthorByIdRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchAuthorByIdRequest());
    try {
      const res = await axios.get(
        `http://localhost:8000/api/edit-author/${id}`
      );
      if (res.data.status === 200) {
        dispatch(fetchAuthorByIdSuccess(res.data.author.tg_name));
      }
    } catch (error) {
      dispatch(fetchAuthorByIdError());
    }
  };
};
// Update Author
export const updateAuthorsSuccess = () => {
  return {
    type: UPDATE_AUTHOR_SUCCESS,
  };
};

export const updateAuthor = (Author) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.post(
        "http://localhost:8000/api/update-author",
        Author
      );
      if (res && res.data.status === 200) {
        dispatch(updateAuthorsSuccess());
        dispatch(fetchAllAuthors());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Infor Categorys
export const fetchCategorysRequest = () => {
  return {
    type: FETCH_CATEGORY_REQUEST,
  };
};

export const fetchCategorysSuccess = (data) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    dataCategorys: data,
  };
};

export const fetchCategorysError = () => {
  return {
    type: FETCH_CATEGORY_ERROR,
  };
};

export const fetchAllCategorys = () => {
  return async (dispatch, getState) => {
    dispatch(fetchCategorysRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/category");
      const data = res && res.data ? res.data : [];
      dispatch(fetchCategorysSuccess(data));
    } catch (error) {
      dispatch(fetchCategorysError());
    }
  };
};

// Create Categorys
export const createCategorysRequest = () => {
  return {
    type: CREATE_CATEGORY_REQUEST,
  };
};

export const createCategorysSuccess = () => {
  return {
    type: CREATE_CATEGORY_SUCCESS,
  };
};

export const createCategorysError = () => {
  return {
    type: CREATE_CATEGORY_ERROR,
  };
};

export const createNewCategory = (tl_name) => {
  return async (dispatch, getState) => {
    dispatch(createCategorysRequest());
    try {
      let res = await axios.post(
        "http://localhost:8000/api/add-category",
        tl_name
      );
      console.log(res.data);
      if (res.data.status === 200) {
        dispatch(createCategorysSuccess());
        dispatch(fetchAllCategorys());
      }
    } catch (error) {
      dispatch(createCategorysError());
    }
  };
};

// Delete Categorys
export const deleteCategorysSuccess = () => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
  };
};

export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.delete(
        `http://localhost:8000/api/delete-category/${id}`
      );
      if (res && res.data.status === 200) {
        dispatch(deleteCategorysSuccess());
        dispatch(fetchAllCategorys());
      }
    } catch (error) {}
  };
};

// find category by id
export const fetchCategoryByIdRequest = () => {
  return { type: FETCH_CATEGORYBYID_REQUEST };
};
export const fetchCategoryByIdSuccess = (payload) => {
  return { type: FETCH_CATEGORYBYID_SUCCESS, payload };
};
export const fetchCategoryByIdError = () => {
  return { type: FETCH_CATEGORYBYID_ERROR };
};

export const fetchCategoryByIdRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchCategoryByIdRequest());
    try {
      const res = await axios.get(
        `http://localhost:8000/api/edit-category/${id}`
      );
      if (res.data.status === 200) {
        dispatch(fetchCategoryByIdSuccess(res.data.category.tl_name));
      }
    } catch (error) {
      dispatch(fetchCategoryByIdError());
    }
  };
};
// Update Category
export const updateCategorysSuccess = () => {
  return {
    type: UPDATE_CATEGORY_SUCCESS,
  };
};

export const updateCategory = (id, category) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.put(
        `http://localhost:8000/api/update-category/${id}`,
        category
      );
      if (res && res.data.status === 200) {
        dispatch(updateCategorysSuccess(category));
        dispatch(fetchAllCategorys());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Infor Bill
export const fetchbillsRequest = () => {
  return {
    type: FETCH_BILL_REQUEST,
  };
};

export const fetchbillsSuccess = (data) => {
  return {
    type: FETCH_BILL_SUCCESS,
    dataBills: data,
  };
};

export const fetchbillsError = () => {
  return {
    type: FETCH_BILL_ERROR,
  };
};

export const fetchAllBills = () => {
  return async (dispatch, getState) => {
    dispatch(fetchbillsRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/bill-all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchbillsSuccess(data));
    } catch (error) {
      dispatch(fetchbillsError());
    }
  };
};

// Infor Order
export const fetchordersRequest = () => {
  return {
    type: FETCH_ORDER_REQUEST,
  };
};

export const fetchordersSuccess = (data) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    dataOrders: data,
  };
};

export const fetchordersError = () => {
  return {
    type: FETCH_ORDER_ERROR,
  };
};

export const fetchAllOrders = () => {
  return async (dispatch, getState) => {
    dispatch(fetchordersRequest());
    try {
      const res = await axios.get("http://localhost:8000/api/bill-view");
      const data = res && res.data ? res.data : [];
      dispatch(fetchordersSuccess(data));
    } catch (error) {
      dispatch(fetchordersError());
    }
  };
};

// Update Bill
export const updateOrdersSuccess = () => {
  return {
    type: UPDATE_ORDER_SUCCESS,
  };
};

export const updateOrder = (Bill) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.post("http://localhost:8000/api/bill-update", Bill);
      if (res && res.data.status === 200) {
        dispatch(updateOrdersSuccess());
        dispatch(fetchAllOrders());
      }
    } catch (error) {}
  };
};

// move product into payload
export const moveProducrtIntoPayload = (payload) => {
  return { type: MOVE_PRODUCTINTOPAYLOAD_SUCCESS, payload };
};

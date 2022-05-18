import{
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_ERROR
} from "../Action/type";

const INITTAL_STATE = {
    listCategorys: [],
};

const categoryReducer = (state = INITTAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST: {
            return { 
                ...state 
            };
        }
        case FETCH_CATEGORY_SUCCESS: {
            return { 
                ...state,
                listCategorys: action.dataCategorys
            };
        }
        case FETCH_CATEGORY_ERROR: {
            return { 
                ...state
            };
        }

        default: return state;
    }
};
  
export default categoryReducer;
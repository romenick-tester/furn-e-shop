import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../constants";

const products_reducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false }

    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true }

    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, products: [] }

    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload }

    case GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: payload }

    default:
      return state
  }


}

export default products_reducer;

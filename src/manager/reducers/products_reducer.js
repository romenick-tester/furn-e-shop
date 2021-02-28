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
      return { ...state, isSidebarOpen: false };

    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case GET_PRODUCTS_REQUEST:
      return { 
        ...state, 
        products_loading: true, 
        products: [], products_featured: [] 
      };

    case GET_PRODUCTS_SUCCESS:
      const featured_products = payload.filter((product) => product.featured === true);
      return { 
        ...state, 
        products_loading: false, 
        products: payload, 
        products_featured: featured_products 
      };

    case GET_PRODUCTS_ERROR:
      return { 
        ...state, 
        products_loading: false, 
        products_error: true 
      };

    case GET_SINGLE_PRODUCT_REQUEST:
      return { 
        ...state, 
        single_product_loading: true, 
        single_product: {} 
      };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return { 
        ...state, 
        single_product_loading: false, 
        single_product: payload 
      };

    case GET_SINGLE_PRODUCT_ERROR:
      return { 
        ...state,
        single_product: {}, 
        single_product_loading: false, 
        single_product_error: true 
      };

    default:
      return state;
  }
};

export default products_reducer;

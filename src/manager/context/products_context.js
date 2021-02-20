import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { products_reducer as reducer } from "../reducers";
import { products_url as url } from "../utils/variables";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  //GET_SINGLE_PRODUCT_BEGIN,
  //GET_SINGLE_PRODUCT_SUCCESS,
  //GET_SINGLE_PRODUCT_ERROR,
} from "../constants";

const initialState = {
  isSidebarOpen: true,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async(para1) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    try {
      const { data } = await axios.get(para1);
      if(data) {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_PRODUCTS_ERROR, payload: { error: { message: "404: products not found!" } } });
      }
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error && error.message ? error.message : error })
      console.error(error.message);
    }
  }

  useEffect(() => {
    getProducts(url);
  }, [url])

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{openSidebar, closeSidebar, ...state}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

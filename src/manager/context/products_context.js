import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { products_reducer as reducer } from "../reducers";
import { products_url as url1 } from "../utils/variables";
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

const initialState = {
  isSidebarOpen: true,
  products_loading: false,
  products_error: false,
  products_featured: [],
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (para1) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });

      const { data } = await axios.get(para1);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });

    }
  }

  const getSingleProduct = async (para2) => {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
    try {
      const { data } = await axios.get(para2);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    getProducts(url1);
  }, [])

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ openSidebar, closeSidebar, getSingleProduct, ...state }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}

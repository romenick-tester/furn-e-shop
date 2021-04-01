import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../constants";

// const initialState = {
//   filtered_products: [],
//   all_products: [],
//   grid_view: true,
//   sort: "price-lowest",
//   filters: {
//   text: "",
//   company: "all",
//   category: "all",
//   color: "",
//   min_price: 0,
//   max_price: 0,
//   price: 0,
//   shipping: false,
// }
// }

const filter_reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case LOAD_PRODUCTS:
      let maxPrice = payload.map((p) => p.price);

      maxPrice = Math.max(...maxPrice);

      return {
        ...state, all_products: [...payload],
        filtered_products: [...payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice }
      };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: payload };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      };
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      };
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      };
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      };

      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = payload;

      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      return { ...state }

    default:
      return state;
  }
}

export default filter_reducer;

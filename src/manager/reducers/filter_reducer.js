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
      const { all_products } = state;

      const { text, category, company, color, price, shipping } = state.filters;

      let newProducts = [...all_products];

      if (text) {
        newProducts = newProducts.filter((product) => product.name.toLowerCase().startsWith(text));
      }

      if (category !== "all") {
        newProducts = newProducts.filter((product) => product.category === category);
      }

      if (company !== "all") {
        newProducts = newProducts.filter((product) => product.company === company);
      }

      if (color !== "all") {
        newProducts = newProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      if (price) {
        newProducts = newProducts.filter((product) => product.price <= price);
      }

      if (shipping) {
        tempProducts = tempProducts.filter((product) => product.shipping === true);
      }

      return { ...state, filtered_products: newProducts };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "",
          price: state.filters.max_price,
          shipping: false,
        }
      }

    default:
      return state;
  }
}

export default filter_reducer;

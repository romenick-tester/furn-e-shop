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
      return { ...state, all_products: [...payload], filtered_products: [...payload] };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: payload };

    default:
      return state;
  }
}

export default filter_reducer;

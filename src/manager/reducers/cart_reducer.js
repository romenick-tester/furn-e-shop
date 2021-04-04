import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../constants";

const cart_reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case ADD_TO_CART:
      const { id, color, amount, product } = payload;

      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;

            if (newAmount > item.max) {
              newAmount = item.max
            }

            return { ...item, amount: newAmount };

          } else {
            return item;
          }
        });

        return { ...state, cart: tempCart };

      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color, amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock
        };

        return { ...state, cart: [...state.cart, newItem] }
      }

    default:
      return state;
  }
}

export default cart_reducer;

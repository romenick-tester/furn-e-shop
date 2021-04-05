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

    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== payload);

      return { ...state, cart: tempCart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: tempId, value } = payload;

      const newCart = state.cart.map((item) => {

        if (item.id === tempId) {
          let newAmount;

          if (value === "inc") {
            newAmount = item.amount + 1;

            if (newAmount > item.max) {
              newAmount = item.max
            }

            return { ...item, amount: newAmount }

          } else if (value === "dec") {
            newAmount = item.amount - 1;

            if (newAmount < 1) {
              newAmount = 1;
            }

            return { ...item, amount: newAmount }
          }

        }

        return item;
      });

      return { ...state, cart: newCart };

    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce((total, item) => {
        const { amount, price } = item;

        total.total_items += amount;

        total.total_amount += price * amount;

        return total;
      }, { total_items: 0, total_amount: 0 })

      return { ...state, total_items, total_amount };

    default:
      return state;
  }
}

export default cart_reducer;

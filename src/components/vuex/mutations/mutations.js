export default {
  SWITCH_TO_MOBILE: (state) => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SWITCH_TO_DESKTOP: (state) => {
    state.isDesktop = true;
    state.isMobile = false;
  },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductPresent = false;
      state.cart.map(function(item) {
        if (item.article === product.article) {
          isProductPresent = true;
          item.quantity++;
        }
      });
      if (!isProductPresent) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
};

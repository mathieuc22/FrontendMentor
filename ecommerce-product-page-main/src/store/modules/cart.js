import shop from "../../api/shop";

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null,
};

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product) => product.id === id
      );
      return {
        id: product.id,
        name: product.name,
        price: product.price.current,
        photo: product.photos[0].thumbnail,
        quantity,
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },

  cartTotalQuantity: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  },
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    shop.buyProducts(
      products,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }, product) {
    commit("setCheckoutStatus", null);
    const cartItem = state.items.find((item) => item.id === product.id);
    if (!cartItem) {
      commit("pushProductToCart", {
        id: product.id,
        quantity: product.quantity,
      });
    } else {
      commit("incrementItemQuantity", { product });
    }
  },

  removeProductFromCart({ state, commit }, product) {
    commit("setCheckoutStatus", null);
    const cartItem = state.items.find((item) => item.id === product.id);
    if (cartItem) {
      commit("popProductFromCart", { product });
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, { id, quantity }) {
    state.items.push({
      id,
      quantity: quantity,
    });
  },

  popProductFromCart(state, { product }) {
    const cartItem = state.items.filter((item) => item.id !== product.id);
    state.items = cartItem;
  },

  incrementItemQuantity(state, { product }) {
    const cartItem = state.items.find((item) => item.id === product.id);
    cartItem.quantity += product.quantity;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

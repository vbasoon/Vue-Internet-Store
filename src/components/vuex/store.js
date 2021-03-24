import Vue from "vue";
import Vuex from "vuex";
//import axios from 'axios'
import actions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
});

export default store;

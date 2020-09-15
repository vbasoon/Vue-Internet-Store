<template>
  <div class="main-wrapper">
    <h2>{{ title }}</h2>
    <Catalog /><br />
    <Cart v-if="CART.length" />
  </div>
</template>

<script>
import Catalog from "../Catalog/Catalog.vue";
import Cart from "../Cart/Cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "Store-wrapper",
  props: {},
  data() {
    return {
      title: "Catalog",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello! A`m alive!!!");
  },
  components: {
    Cart,
    Catalog,
  },
};
</script>

<style>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
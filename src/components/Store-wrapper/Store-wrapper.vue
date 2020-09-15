<template>
  <div class="main-wrapper">
    <h2>{{ title }}</h2>
    <Catalog /><br />
    <Cart />
  </div>
</template>

<script>
import Catalog from "../Catalog/Catalog.vue";
import Cart from "../Cart/Cart.vue";

export default {
  name: "Store-wrapper",
  props: {},
  data() {
    return {
      title: "Catalog",
    };
  },
  computed: {},
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
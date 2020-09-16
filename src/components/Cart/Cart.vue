<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }"
      ><div class="catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from "./Cart-item";
import { mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="css" scoped></style>

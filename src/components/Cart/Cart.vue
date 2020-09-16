<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }"
      ><div class="catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">Cart is empty</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <div class="cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} P.</p>
    </div>
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
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          let price_total = item.price * item.quantity;
          result.push(price_total);
        }
      }

      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },
  methods: {
    ...mapActions([
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
      "DELETE_FROM_CART",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2;
    display: flex;
    justify-content: center;
    background-color: #062b92;
    color: #fff;
    font-size: 18px;
  }

  .total__name {
    margin-right: $margin * 2;
  }
}
</style>

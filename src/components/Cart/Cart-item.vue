<template>
  <div class="cart-item">
    <img
      class="cart-item__image img"
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} грн.</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item_quantity">
      <p>Quantity:</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    max-width: 60px;
  }
  .quantity__btn {
    cursor: pointer;
  }
}
</style>

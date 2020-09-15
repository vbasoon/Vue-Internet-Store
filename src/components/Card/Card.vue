<template>
  <div class="card">
    <img
      class="card__image img"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <h3 class="card__name title">{{ product_data.name }}</h3>
    <p class="card__prise text">{{ product_data.price }} P.</p>
    <button class="card__add_to_cart_button btn" @click="sendToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {
          products: [
            {
              image: "1.jpg",
              name: "T-shirt 1",
              price: 2100.234234234,
              article: "T1",
              available: true,
              category: "Мужские",
            },
            {
              image: "2.jpg",
              name: "T-shirt 2",
              price: 3150.12312412,
              article: "T2",
              available: true,
              category: "Женские",
            },
            {
              image: "3.jpg",
              name: "T-shirt 3",
              price: 4200.51524,
              article: "T3",
              available: false,
              category: "Женские",
            },
            {
              image: "4.jpg",
              name: "T-shirt 4",
              price: 5300.1245512,
              article: "T4",
              available: true,
              category: "Мужские",
            },
            {
              image: "5.jpg",
              name: "T-shirt 5",
              price: 6500.3522314,
              article: "T5",
              available: false,
              category: "Женские",
            },
            {
              image: "6.jpeg",
              name: "T-shirt 6",
              price: 8700.4124123,
              article: "T6",
              available: true,
              category: "Женские",
            },
          ],
        };
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    sendToCart() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
};
</script>

<style lang="scss">
.card-body {
  width: 100%;
}

.card {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 50%;
  }
}
</style>

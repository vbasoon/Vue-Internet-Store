<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }"
      ><div class="catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <div class="catalog__title">
      <h1>{{ title }}</h1>
      <Select
          :options="options"
          @select="sortByCategories"
          :selected="selected"
          :isExpanded="IS_DESKTOP"
      />
    </div>
    <div class="catalog__list">
      <Card
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
      
    </div>
  </div>
</template>

<script>
import Select from '../Select/Select.vue'
import Card from "../Card/Card.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: {
    Card,
    Select
  },
  props: {},
  data() {
    return {
      title: "Catalog",
      options: [
        {name: 'Всі', value: "All"},
        {name: 'Чоловічі', value: "M"},
        {name: 'Жіночі', value: "F"}
      ],
      selected: 'Всі',
      sortedProducts: [],
    };
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log("Data is OK!");
      }
    });
  },
  computed: {
    ...mapGetters([
      "PRODUCTS", 
      "CART",
      "IS_MOBILE",
      "IS_DESKTOP"
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }  
    },
  },
  
  beforeDestroy() {},
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API", 
      "ADD_TO_CART"
    ]),
    sortByCategories(category) {
      this.sortedProducts = [];
      let hl = this;
      this.PRODUCTS.map(function(item) {
        if (item.category === category.name) {
          hl.sortedProducts.push(item);
        }
      })
      this.selected = category.name;
    },
    addToCart(data) {
      //this.$emit(this.product_data);
      this.ADD_TO_CART(data);
    },
  },
};
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid #aeaeae;
  }
}
</style>

<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }"
      ><div class="catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <div class="catalog__title">
      <h1>{{ title }}</h1>
      <div class="filters">
        <Select
          :options="options"
          @select="sortByCategories"
          :selected="selected"
          :isExpanded="false"
      />
      <div class="range-slider">
        <input 
          type="range" 
          min="0" 
          max="1000" 
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        >
        <input 
          type="range" 
          min="0" 
          max="1000" 
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
      </div>
      
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
      minPrice: 0,
      maxPrice: 1000,

    };
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log("Data is OK!");
        this.sortByCategories()
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
      let hl= this;
     this.sortedProducts = [...this.PRODUCTS]
     this.sortedProducts = this.sortedProducts.filter(function (item){
       return item.price >= hl.minPrice && item.price <= hl.maxPrice
     })
     if (category) {
       this.sortedProducts = this.sortedProducts.filter(function(e){
         hl.selected === category.name
         return e.category === category.name
       })
     }
    },
    addToCart(data) {
      //this.$emit(this.product_data);
      this.ADD_TO_CART(data);
    },
    setRangeSlider() {
      if (this.minPrice> this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories()
    }
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
    background: #fff;
  }
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg,
.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}

</style>

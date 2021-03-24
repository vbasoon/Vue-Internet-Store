<template>
  <div id="app">
    <StoreWrapper />
    <Select
      :options="options"
    />
  </div>
</template>

<script>
import StoreWrapper from "./components/Store-wrapper/Store-wrapper.vue";
import Select from './components/Select/Select.vue'
export default {
  name: "App",
  components: { 
    StoreWrapper, 
    Select 
  },
  data() {
      return {
        options: [
          {name: 'Option 1', value: 1},
          {name: 'Option 2', value: 2},
          {name: 'Option 3', value: 3},
          {name: 'Option 4', value: 4},
          {name: 'Option 5', value: 5}
        ]
      }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h1>Hello Vue!!!</h1>
    <StoreWrapper />
  </div>
</template>

<script>
import StoreWrapper from "./components/Store-wrapper/Store-wrapper.vue";
export default {
  name: "App",
  components: { StoreWrapper },
};
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

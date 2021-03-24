<template>
  <div id="app">
    <StoreWrapper />
  </div>
</template>

<script>
import StoreWrapper from "./components/Store-wrapper/Store-wrapper.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "App",
  components: { 
    StoreWrapper, 
  },
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },
  methods: {
    ...mapActions([
      'SET_TO_MOBILE',
      'SET_TO_DESKTOP'
   ]),
  },
  mounted() {
    let hl = this;
   window.addEventListener('resize', function () {
     if (window.innerWidth > 767) {
       hl.SET_TO_DESKTOP()
       console.log('Desktop', hl.IS_DESKTOP);
       
     } else {
      hl.SET_TO_MOBILE()
      console.log('Mobile', hl.IS_MOBILE);
       
     }
   })
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

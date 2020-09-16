<template>
  <div class="main-wrapper">
    <!-- <h2>{{ title }}</h2> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Store-wrapper",
  props: {},
  data() {
    return {
      // title: "Catalog",
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
<template>
  <div class="select">
<p>Select</p>
<div class="options">
  <span>
    v-for="option in "

  </span>
</div>
  </div>
</template>

<script>
   
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      default() {
        return[]
      }
    }
  },
  data() {
    return {}
  },
computed: {}
}
</script>

<style scoped>

</style>
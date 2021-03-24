<template>
  <div class="select">
<p>Select</p>
    <div class="options">
      <p
        v-for="option in options"
        :key="option.value"
      >
        {{option.name}}

      </p>
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

<style>
  .select p {
    margin: 0;
  }

</style>
<template>
  <div class="select">
<p class="title">Select</p>
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
  .select {
    position: relative;
    width: 100px;
  }

  .title {
border: 1px solid #aeaeae;
  }

  .select p {
    margin: 0;
  }


  .options {
    border: solid 1px #aeaeae;
    position: absolute;
    top: 20px;
    right: 0;
    width: 100%;

  }

</style>
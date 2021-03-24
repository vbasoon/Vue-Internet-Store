<template>
  <div class="select">
<p 
  class="title"
  @click="isVisible = !isVisible"
  >Select</p>
    <div 
      class="options"
      v-if="isVisible">
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
    return {
      isVisible: false
    }
  },
computed: {}
}
</script>

<style>
  .select {
    position: relative;
    width: 200px;
    cursor: pointer;
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
    top: 30px;
    right: 0;
    width: 100%;
  }

  .options p:hover {
    background: #e7e7e7;
  }

</style>
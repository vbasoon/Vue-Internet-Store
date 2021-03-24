<template>
  <div class="select">
<p 
  class="title"
  @click="isVisible = !isVisible"
  >{{selected}}<span>  &darr;</span></p>
    <div 
      class="options"
      v-if="isVisible || isExpanded">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
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
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
methods: {
  selectOption(option) {
    this.$emit('select', option);
    this.isVisible = false;
  },
  hideSelect() {
    this.isVisible = false;
  }
},
mounted() {
  document.addEventListener('click', this.hideSelect.bind(this), true)
  },
beforeDestroy() {
  document.removeEventListener('click', this.hideSelect)
  }
}

</script>

<style>
  .select {
    position: relative;
    width: 200px;
    cursor: pointer;
    background: #fff;

  }

  .title {
    border: 1px solid #aeaeae;
  }

  .select p {
    margin: 0;
  }


  .options {
    background: #fff;
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
<template>
  <div class="popup">
     <div class="popup__header">
        <span>Popup name</span>
        <span>
           <i class="material-icons">close</i>
        </span>
     </div>
     <div class="popup__content">
        <slot></slot>
     </div>
     <div class="popup__footer">
        <button class="close_btn">Close</button>
        <button class="add_to_btn">Add to cart</button>
     </div>


  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
   .popup {
      padding: 16px;
      position: fixed;
      top: 50px;
      width: 400px;
      background: #fff;
      box-shadow: 0 0 17px #413e3e;
      &__header,
      &__footer {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__content {
         display: flex;
         justify-content: center;
         align-items: center;
      }
      .add_to_btn {
         padding: 8px;
         color: #c8cfee;
         background: #6495ed;
      }
      .close_btn {
         padding: 8px;
         color: #c8cfee;
         background: #d83636;
      }
   }

</style>
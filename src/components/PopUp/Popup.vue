<template>
   <div class="popup_wrapper" ref="popup_wrapper">
   <div class="popup">
      <div class="popup__header">
         <span>{{popupTitle}}</span>
         <span>
            <i 
               class="material-icons close-icon"
               @click="closePopup" 
            >
               close
            </i>
         </span>
      </div>
      <div class="popup__content">
         <slot></slot>
      </div>
      <div class="popup__footer">
         <button 
               class="close_btn"
               @click="closePopup"
            >
               Close
            </button>
         <button 
               class="add_to_btn"
               
            >Add to cart</button>
      </div>

      </div>
  </div>
</template>

<script>
export default {
   name: 'Popup',
   props: {
      shopBtn: {
         type: String,
         default: 'Ok'
      },
      popupTitle: {
         type: String,
         default: 'Name Item'
      }
   },
   data() {
      return {}
   },
   methods: {
      closePopup() {
         this.$emit('closePopup')
      }
   },
   mounted() {
      document.addEventListener('click', (item) =>{
         if (item.target === this.$refs['popup_wrapper']) {
            this.closePopup()
         }
      })
   }

}
</script>

<style lang="scss">
   .popup_wrapper {
      background: rgba(64,64,64, .6);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
   }

   .popup {
      padding: 16px;
      position: fixed;
      top: 50px;
      width: 400px;
      background: #fff;
      box-shadow: 2px 2px 5px #413e3e;
      z-index: 10;
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
         cursor: pointer;
      }
      .close_btn {
         padding: 8px;
         color: #c8cfee;
         background: #d83636;
         cursor: pointer;
      }
      .close-icon {
         cursor: pointer;
      }
   }

</style>
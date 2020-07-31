<template>
  <div class="modal_wrapper" ref="modal_wrapper">
    <div
      class="v-modal"
      :class="{ h100: this.GET_WINDOW_TYPE === 'Extra small' }"
    >
      <div class="v-modal__header">
        <h3>
          {{ modalCategory }} <br />
          "{{ modalTitle }}"
        </h3>
        <span class="v-modal__header_close" @click="closeModalButton">X</span>
      </div>
      <div
        class="v-modal__content"
        :class="{ h100: this.GET_WINDOW_TYPE === 'Extra small' }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'v-modal',
  props: {
    modalCategory: {
      type: String,
      default: 'Category'
    },
    modalTitle: {
      type: String,
      default: 'Title'
    },
    productPrice: {
      type: String,
      default: '0'
    }
  },
  computed: {
    ...mapGetters(['GET_WINDOW_TYPE'])
  },
  methods: {
    closeModalButton () {
      this.$emit('closeModalButton')
    }
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs.modal_wrapper) {
        vm.closeModalButton()
      }
    })
  }
}
</script>

<style lang="scss">
.modal_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba($color: $color-dark, $alpha: 0.8);
  z-index: 10;
}
.v-modal {
  padding: $padding * 2;
  position: fixed;
  top: 50px;
  max-width: $screenwidth;
  background: white;
  border-radius: $radius * 2;
  z-index: 10;
  &__header,
  &__footer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    h3 {
      margin-top: 0;
    }
    &_close {
      position: absolute;
      right: 5px;
      top: 5px;
      font-size: $font * 2;
      font-weight: 700;
      cursor: pointer;
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    width: 100%;
    img {
      max-width: 300px;
      max-height: 300px;
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      flex-basis: $screenwidth / 2;
      text-align: left;
      ul {
        flex-grow: 2;
      }
      h5 {
        display: flex;
        flex-direction: column;
        margin: auto;
      }
    }
  }
}
.h100 {
  height: 100%;
}
</style>

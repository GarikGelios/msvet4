<template>
  <section class="v-carousel">
    <div
      v-for="slide in banners"
      class="slide"
      :key="slide.id"
      :class="{
        show: slide.id == checkedBanner,
        hidden: slide.id != checkedBanner
      }"
    >
      <div class="banner">
        <img
          :src="'https://drive.google.com/uc?export=view&id=' + slide.img"
          alt=""
        />
        <!-- <div class="content">
            <h4>{{ slide.title }}</h4>
            <p>{{ slide.description }}</p>
          </div> -->
      </div>
    </div>
    <div class="v-carousel_buttons">
      <div
        v-for="slide in banners"
        :key="slide.id"
        class="v-carousel_buttons_button"
      >
        <input
          type="radio"
          :id="'banner' + slide.id"
          name="banners"
          :value="slide.id"
          checked
          v-model="checkedBanner"
        />
        <label :for="'banner' + slide.id"></label>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'vCarousel',
  data () {
    return {
      checkedBanner: 0
    }
  },
  computed: {
    ...mapGetters(['GET_BANNERS']),
    banners () {
      return this.GET_BANNERS
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.v-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #3f7900;
  min-height: $screenwidth / 4;
  .slide {
    display: block;
    transition: all 1s ease-out;
    &.hidden {
      position: absolute;
      opacity: 0;
    }
    &.show {
      opacity: 1;
    }
    .banner {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
      .content {
        position: absolute;
      }
    }
  }
  &_buttons {
    position: absolute;
    bottom: 0;
    display: flex;
    &_button {
      input {
        display: none;
        &:checked ~ label {
          background-color: $color-primary;
        }
      }
      label {
        display: flex;
        width: 20px;
        height: 20px;
        margin: $margin;
        border-radius: $radius * 2;
        background-color: $color-secondary;
        cursor: pointer;
        &:hover {
          background-color: $color-third;
        }
      }
    }
  }
}
</style>

<template>
  <section class="v-carousel">
    <div class="v-carousel_carousel-container">
      <transition-group class="v-carousel_carousel-container_carousel" tag="div">
        <div v-for="slide in slides" class="slide" :key="slide.id">
          <h4>{{ slide.title }}</h4>
        </div>
      </transition-group>
      <div class="v-carousel_carousel-container_carousel-controls">
        <button class="v-carousel_carousel-container_carousel-controls_button" @click="previous">
          &#60;
        </button>
        <button class="v-carousel_carousel-container_carousel-controls_button" @click="next">&#62;</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'vCarousel',
  data () {
    return {
      slides: [
        {
          title: 'Slide 1',
          id: 1
        },
        {
          title: 'Slide 2',
          id: 2
        }
      ]
    }
  },
  methods: {
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>

<style></style>

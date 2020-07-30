<template>
  <div class="home">
    <vCarousel />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import vCarousel from '@/components/v-carousel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    vCarousel
  }
}
</script>

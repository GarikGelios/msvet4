<template>
  <div class="home">
    <vCarousel />
    <vBenefits/>
  </div>
</template>

<script>
// @ is an alias to /src
import vCarousel from '@/components/v-carousel.vue'
import vBenefits from '@/components/v-benefits.vue'

export default {
  name: 'Home',
  components: {
    vCarousel,
    vBenefits
  }
}
</script>

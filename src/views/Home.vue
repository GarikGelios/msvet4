<template>
  <div class="home">
    <vCarousel />
    <vBenefits />
    <div class="bg-primary">
      <vWelcome />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vCarousel from '@/components/v-carousel.vue'
import vBenefits from '@/components/v-benefits.vue'
import vWelcome from '@/components/v-welcome.vue'

export default {
  name: 'Home',
  components: {
    vCarousel,
    vBenefits,
    vWelcome
  }
}
</script>

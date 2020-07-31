<template>
  <div class="v-catalog-item" v-if="product_data.published == 1">
    <h3>{{ product_data.title }}</h3>
    <img :src="'https://drive.google.com/uc?export=view&id=' + product_data.img" alt="">
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
    display: flex;
    flex-direction: column;
    margin: $margin;
    img {
        // width: $screenwidth / 2;
    }
}
</style>

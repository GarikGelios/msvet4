<template>
  <div class="Contacts">
    <h2>Напишите нам</h2>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang='scss'>
.Contacts {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: $screenwidth * 2;
  margin: $margin * 4 auto;
  h2 {
    text-align: left;
    border-bottom: 0.5px solid $color-secondary;
    padding: $padding;
  }
}
</style>

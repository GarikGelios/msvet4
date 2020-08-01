<template>
  <section class="v-welcome">
    <h2>Собственное производство и первый импортёр</h2>
    <div class="v-welcome_content">
      <img src="@/assets/logo.png" width="300" alt="logo" />
      <div class="v-welcome_content_text">
        <ul>
          <li>10-летний опыт работы</li>
          <li>26 специалистов</li>
          <li>более 1600 постоянных клиентов</li>
        </ul>
        <p>
          Мы следим за качеством импортной продукции от начала производства до
          момента погрузки и отправки.
        </p>
        <p>
          Каждый образец перед упаковкой проходит проверку — втечение 72-х часов
          каждая гирлянда работает в условиях перепада напряжения и температуры.
        </p>
        <p>
          Продукция испытана в аккредитованных лабораториях и соответствует
          техническим регламентам Таможенного cоюза.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-welcome'
}
</script>

<style lang="scss">
.v-welcome {
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
  &_content {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    img {
      margin: auto;
    }
    &_text {
      flex-basis: $screenwidth;
      flex-grow: 2;
      font-style: italic;
      p {
        padding: 0 $padding * 2;
      }
    }
  }
}
</style>

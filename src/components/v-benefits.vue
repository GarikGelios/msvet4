<template>
  <section class="v-benefits">
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>1</span>
        <h3>Гарантия 4 года</h3>
      </div>
      <p>
        Мы следим за качеством импортной продукции от начала производства до момента погрузки и отправки. Каждый образец перед упаковкой проходит проверку — в течение 72-х часов каждая гирлянда работает в условиях перепада напряжения и температуры.
Продукция испытана в аккредитованных лабораториях и соответствует техническим регламентам Таможенного cоюза.
      </p>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>2</span>
        <h3>Креативные новинки</h3>
      </div>
      <p>
        Выставка ростовых 3D фигур и импорт светодиодного 3D-зоопарка + фотозона и большие светодиодные уличные арки
      </p>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>3</span>
        <h3>Надежная команда</h3>
      </div>
      <ul>
        <li>12-летний опыт работы</li>
        <li>24 специалиста</li>
        <li>более 2000 постоянных клиентов</li>
      </ul>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>4</span>
        <h3>Работаем с собственного склада</h3>
      </div>
      <p>
        Вся продукция на сайте есть в наличии!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-benefits'
}
</script>

<style lang="scss">
.v-benefits {
  display: flex;
  flex-wrap: wrap;
  max-width: $screenwidth * 2;
  margin: $margin * 4 auto;
  &_item {
    max-width: $screenwidth / 2;
    padding: $padding;
    margin: 0 auto;
    box-sizing: border-box;
    &_heading {
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: $radius * 5;
        color: $color-light;
        font-size: $font * 2;
        font-weight: 700;
        background-color: $color-primary;
      }
      h3 {
        margin: 0 0 0 $margin;
        width: 220px;
      }
    }
    p, ul {
      text-align: left;
      font-style: italic;
    }
  }
}
</style>

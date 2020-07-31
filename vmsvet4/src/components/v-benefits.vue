<template>
  <section class="v-benefits">
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>1</span>
        <h3>НОВИНКИ</h3>
      </div>
      <p>
        Представители нашей компании ежегоднопосещают LED-крупные выставки
        Европыи Азии, благодаря чему наш ассортимент пополняется новинками,
        неимеющими аналогов в Республике Беларусь.
      </p>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>2</span>
        <h3>НАДЕЖНАЯ КОМАНДА</h3>
      </div>
      <p>
        Всегда грамотно и доступно проконсультируют по интересующим вопросам,
        организуют послепродажную поддержку и обслуживание, не останутся
        равнодушными к любым задачам и предложат наилучшее решение.
      </p>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>3</span>
        <h3>ИНФОРМАТИВНОСТЬ</h3>
      </div>
      <p>
        Информационно наполненный сайт www.msvet.by, бесплатная рассылка
        каталогов и буклетов, видеопрезентация, прайс-листы.
      </p>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>4</span>
        <h3>УДОБСТВО</h3>
      </div>
      <p>
        Приятные бонусы для наших клиентов. Доставка в любую точку страны
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
      }
    }
    p {
      text-align: left;
      font-style: italic;
    }
  }
}
</style>

<template>
  <section class="v-benefits">
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>1</span>
        <h3>12 ЛЕТ ИМПОРТИРУЕМ СВЕТОДИОДНУЮ ИЛЛЮМИНАЦИЮ В БЕЛАРУСЬ!</h3>
      </div>
      <ul>
        <li>7 филиалов и демо-комнат по всей стране</li>
        <li>28 заботливых менеджеров</li>
        <li>2000 довольных клиентов</li>
      </ul>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>2</span>
        <h3>1 ДЕНЬ И ЗАКАЗ У ВАС, ВЕДЬ ВСЯ ПРОДУКЦИЯ НА НАШЕМ СКЛАДЕ!</h3>
      </div>
      <ul>
        <li>нет рисков срыва поставки</li>
        <li>внешние обстоятельства не влияют на ваш заказ</li>
        <li>товар можно увидеть до покупки в нашем шоу-руме</li>
      </ul>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>3</span>
        <h3>4 ГОДА ГАРАНТИИ НА КОМПЛЕКТУЮЩИЕ И 12 МЕСЯЦЕВ – НА ИЗДЕЛИЕ!</h3>
      </div>
      <ul>
        <li>импортируем качественный ассортимент</li>
        <li>испытываем и сертифицируем весь товар</li>
        <li>проверяем каждую гирлянду перед упаковкой</li>
      </ul>
    </div>
    <div class="v-benefits_item">
      <div class="v-benefits_item_heading">
        <span>4</span>
        <h3>ДЛЯ ДЕТЕЙ И ВЗРОСЛЫХ, ДЛЯ ГОРОДА И ОРГАНИЗАЦИЙ!</h3>
      </div>
      <ul>
        <li>сами изготавливаем актуальные каркасные конструкции</li>
        <li>широкий ассортимент от плоских надписей и героев, до 3D фигур и фотозон</li>
      </ul>
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
        text-align: left;
      }
    }
    p, ul {
      text-align: left;
      // font-style: italic;
    }
  }
}
</style>

<template>
  <footer class="v-footer">
    <div class="v-footer_wrapper">
      <div class="v-footer_wrapper_adress">
        <h4>Наши Контакты</h4>
        <p>
          Телефон: <span><a href="tel: +80447692165">8 044 769-21-65</a></span>
        </p>
        <p>
          email: <span><a href="mailto:boss@msvet.by">boss@msvet.by</a></span>
        </p>
        <p>
          Адрес:
          <span
            >223060, Минская область, Минский р-н Новодворский с/с, д. Большой
            Тростенец, ул. Зеленая, 1а - 13а д, Большой Тростенец 223060</span
          >
        </p>
      </div>
      <div class="v-footer_wrapper_links">
        <h4>Ссылки</h4>
        <p>
          <span><a href="msvet.by">msvet.by</a></span>
        </p>
        <p>
          <span><a href="vk.com">Вконтакте</a></span>
        </p>
        <p>
          <span><a href="ok.ru">Однокласники</a></span>
        </p>
        <p>
          <span><a href="instagram.com">Instagram</a></span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
}
</script>

<style lang="scss">
.v-footer {
  background-color: $color-dark;
  &_wrapper {
    max-width: $screenwidth * 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    &_adress,
    &_links {
      max-width: $screenwidth / 2;
      padding: $padding * 2;
      box-sizing: border-box;
      h4 {
        text-transform: uppercase;
        color: $color-light;
        text-align: left;
      }
      p {
        text-align: left;
        color: $color-secondary;
        font-weight: 700;
        border-bottom: .5px dotted $color-secondary;
        span {
          font-weight: 400;
        }
        a {
          color: $color-secondary;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

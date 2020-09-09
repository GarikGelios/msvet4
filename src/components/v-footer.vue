<template>
  <footer class="v-footer">
    <h2>Собственное производство и первый импортёр</h2>
    <div class="v-footer_wrapper">
      <svg
            class="svg-inline--fa fa-lightbulb fa-w-11"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="lightbulb"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            data-fa-i2svg=""
          >
            <path
              d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
            ></path></svg>
      <div class="v-footer_wrapper_adress">
        <h4>Наши Контакты</h4>
        <p>
          Телефон: <span><a href="tel: +80447692165">8 044 769-21-65</a></span>
        </p>
        <p>
          email: <span><a href="mailto:ip44ip65@mail.ru">ip44ip65@mail.ru</a></span>
        </p>
        <p>
          Адрес:
          <span
            >220075, г. Минск, ул. Шабаны, 14а, офис 6</span
          >
        </p>
      </div>
      <div class="v-footer_wrapper_links">
        <!-- <h4>Ссылки</h4>
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
        </p> -->
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
  background-color: $color-primary;
  h2 {
    color: $color-light;
    text-align: left;
    border-bottom: 0.5px solid $color-secondary;
    padding: $padding*2;
    max-width: $screenwidth * 2;
    margin: auto;
  }
  &_wrapper {
    max-width: $screenwidth * 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: auto;
    svg {
      margin: 0 $margin*10;
      width: 140px;
      fill: $color-light;
      padding: $padding;
    }
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
        color: $color-light;
        font-weight: 700;
        border-bottom: .5px dotted $color-light;
        span {
          font-weight: 400;
        }
        a {
          color: $color-light;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

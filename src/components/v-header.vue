<template>
  <header class="v-header">
    <div class="v-header_wrapper">
      <h1>
        <router-link to="/">
          <div class="v-header_wrapper_logo-name">
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
                fill="currentColor"
                d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
              ></path></svg
            >{{ mainHeading }}
          </div>
          <span>{{ mainHeading2 }}</span>
        </router-link>
      </h1>
      <nav>
        <router-link to="/"
          >Главная <span>Здравству друг!</span>
          <svg>
            <use xlink:href="@/assets/sprite.svg#home" />
          </svg>
        </router-link>
        <router-link to="/catalog"
          >Каталог <span>Самое лучшее</span>
          <svg>
            <use xlink:href="@/assets/sprite.svg#led" /></svg
        ></router-link>
        <router-link to="/contacts"
          >Контакты <span>Напишите нам</span>
          <svg>
            <use xlink:href="@/assets/sprite.svg#mail" /></svg
        ></router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      mainHeading: 'ip65',
      mainHeading2: 'Новогодняя иллюминация'
    }
  }
}
</script>

<style lang="scss">
.v-header {
  background-color: $color-dark;
  display: flex;
  justify-content: center;
  &_wrapper {
    width: 100%;
    max-width: $screenwidth * 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h1 {
      margin: auto;
      a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: $color-secondary;
        text-transform: uppercase;
        font-size: $font / 4 * 9;
        span {
          color: $color-third;
          font-size: $font;
        }
      }
    }
    &_logo-name{
      svg {
        width: 50px;
      }
    }
    nav {
      display: flex;
      justify-content: space-around;
      flex-grow: 2;
      padding: 30px;

      a {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: $font;
        color: #2c3e50;
        padding: 0 $padding;
        text-decoration: none;
        text-transform: uppercase;
        color: $color-secondary;
        span {
          color: $color-third;
          font-size: $font / 4 * 3;
        }
        svg {
          height: 30px;
          fill: $color-secondary;
          max-width: 40px;
          margin: auto;
          padding-top: $padding * 2;
        }
        &.router-link-exact-active {
          color: $color-primary;
        }
        &:hover {
          color: $color-primary;
          span {
            color: $color-light;
          }
          svg {
            fill: $color-light;
          }
        }
      }
    }
  }
}
</style>

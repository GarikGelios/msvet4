<template>
  <header class="v-header">
    <div class="v-header_wrapper">
      <h1>
        <router-link to="/"
          >{{ mainHeading }} <span>{{ mainHeading2 }}</span>
        </router-link>
      </h1>
      <nav>
        <router-link to="/">Главная <span>Здравству друг!</span></router-link>
        <router-link to="/about">Каталог <span>Самое лучшее</span></router-link>
        <router-link to="/about"
          >Контакты <span>Напишите нам</span></router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      mainHeading: 'Много света',
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
        &:hover {
          color: $color-primary;
          span {
            color: $color-light;
          }
        }
        &.router-link-exact-active {
          color: $color-primary;
        }
      }
    }
  }
}
</style>

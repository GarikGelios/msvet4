<template>
  <div id="app">
    <v-header />
    <main>
      <router-view />
    </main>
    <v-footer />
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vFooter from '@/components/v-footer.vue'
import './assets/styles/styles.scss'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    vHeader,
    vFooter
  },
  data () {
    return {
      windowWidth: 1200, // ширина экрана
      windowType: '' // тип экрана
    }
  },
  computed: {
    ...mapGetters(['GET_WINDOW_TYPE'])
  },
  methods: {
    ...mapActions(['ACT_WINDOW_SIZE'])
  },
  mounted () {
    const vm = this // для общего контекста, чтобы использовать его внутри функций
    function switchWindowType (ww) {
      // сопоставляем размеры и тип
      if (ww >= 1200) {
        return 'Extra large'
      } else if (ww >= 992 && ww <= 1199) {
        return 'Large'
      } else if (ww >= 768 && ww <= 991) {
        return 'Medium'
      } else if (ww >= 576 && ww <= 767) {
        return 'Small'
      } else {
        return 'Extra small'
      }
    }
    function listenWindowSize () {
      // функция, которая будет измерять экран
      vm.windowWidth = window.innerWidth
      vm.windowType = switchWindowType(vm.windowWidth) // имея размер определяем тип через функцию, где сопаставлены размеры и тип
      vm.ACT_WINDOW_SIZE(vm.windowType) // обращаемся к экшену и передаём ему тип
    }
    listenWindowSize() // сразу вызываем написанную выше фунцию
    window.addEventListener('resize', function () {
      // запускаем всегда слушать изменения размера окна
      listenWindowSize()
    })
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
main {
  flex: auto;
}
#app,
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

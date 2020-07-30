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
    ...mapGetters([
      'GET_WINDOW_TYPE',
      'GET_SPREADSHEETS_PRODUCTS',
      'GET_SPREADSHEETS_BANNERS'
    ])
  },
  methods: {
    ...mapActions([
      'ACT_WINDOW_SIZE',
      'ACT_SPREADSHEETS_PRODUCTS_FROM_API',
      'ACT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE',
      'ACT_SPREADSHEETS_BANNERS_FROM_API',
      'ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE'
    ]),
    adaptProducts () {
      const gsx = this.GET_SPREADSHEETS_PRODUCTS.feed.entry
      const arr = gsx.map((obj, index) => {
        return {
          id: index,
          published: obj.gsx$published.$t,
          category: obj.gsx$category.$t,
          title: obj.gsx$title.$t,
          description: obj.gsx$description.$t,
          price: obj.gsx$price.$t,
          img: obj.gsx$imglink.$t.split('/view?')[0].split('d/')[1]
        }
      })
      this.ACT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE(arr)
    },
    adaptBanners () {
      const gsx = this.GET_SPREADSHEETS_BANNERS.feed.entry
      const arr = gsx.map((obj, index) => {
        return {
          id: index,
          published: obj.gsx$published.$t,
          title: obj.gsx$title.$t,
          description: obj.gsx$description.$t,
          img: obj.gsx$img.$t.split('/view?')[0].split('d/')[1],
          link: obj.gsx$link.$t
        }
      })
      this.ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE(arr)
    }
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
    this.ACT_SPREADSHEETS_PRODUCTS_FROM_API() // как только компонент загружен, сразу вызываем api запрос на получение json из Google Таблиц
      .then(response => {
        if (response.data) {
          console.log(
            '%c%s',
            'background-color: #000000; color: #497e04; font: 1rem/1 Tahoma; padding: 1px 5px',
            'Product from the DataBase loaded!'
          )
          this.adaptProducts() // и тут же превращаем в красивый массив
        }
      })
    this.ACT_SPREADSHEETS_BANNERS_FROM_API().then(response => {
      if (response.data) {
        console.log(
          '%c%s',
          'background-color: #000000; color: #497e04; font: 1rem/1 Tahoma; padding: 1px 5px',
          'Banners from the DataBase loaded!'
        )
        this.adaptBanners() // и тут же превращаем в красивый массив
      }
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

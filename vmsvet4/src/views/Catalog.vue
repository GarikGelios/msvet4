<template>
  <div class="catalog">
    <h2>Каталог продукции</h2>
    <div class="catalog_categories">
      <input type="radio" name="category" value="all" v-model="checkedCategories" id="category_all">
      <label for="category_all" :class="{ checked: checkedCategories === 'all' }" @click="selectCategory('all')">Вся продукция</label>
      <input
        v-for="(category, index) in productCategories"
        :key="category"
        type="radio"
        name="category"
        :value="category"
        v-model="checkedCategories"
        :id="'category_' + index"
      />
      <label
        v-for="(category, index) in productCategories"
        :key="index"
        :for="'category_' + index"
        :class="{ checked: checkedCategories === category }" @click="selectCategory(category)"
        >{{ category }}</label
      >
    </div>
    <div class="catalog_products" v-if="this.sortedProducts.length">
      <transition-group name="list" tag="div">
      <vCatalogItem
        v-for="product in sortedProducts"
        :key="product.id"
        :product_data="product"
      />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vCatalogItem from '@/components/v-catalog-item.vue'

export default {
  name: 'Catalog',
  components: {
    vCatalogItem
  },
  data () {
    return {
      checkedCategories: 'all',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters(['GET_SPREADSHEETS_PRODUCTS', 'GET_PRODUCTS']),
    productCategories () {
      return [
        ...new Set(this.GET_PRODUCTS.map(({ category }) => category)) // собираю названия категорий и оставляю каждое в единственном виде
      ]
    }
  },
  methods: {
    ...mapActions([
      'ACT_WINDOW_SIZE',
      'ACT_SPREADSHEETS_PRODUCTS_FROM_API',
      'ACT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE'
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
    selectCategory (selected) {
      this.sortedProducts = [...this.GET_PRODUCTS] // перед проверкой возобновляем массив
      if (selected !== 'all') {
        // проверяем, что если выбор вне списка категорий, то выводим все продукты
        // если в опции что-то есть, то перебери массим сортированных продуктов
        this.sortedProducts = this.sortedProducts.filter(function (product) {
          return product.category === selected
        })
      } else {
        return this.GET_PRODUCTS
      }
    }
  },
  mounted () {
    this.ACT_SPREADSHEETS_PRODUCTS_FROM_API() // как только компонент загружен, сразу вызываем api запрос на получение json из Google Таблиц
      .then(response => {
        if (response.data) {
          console.log(
            '%c%s',
            'background-color: #000000; color: #497e04; font: 1rem/1 Tahoma; padding: 1px 5px',
            'Product from the DataBase loaded!'
          )
          this.adaptProducts() // и тут же превращаем в красивый массив
          this.sortedProducts = [...this.GET_PRODUCTS]
        }
      })
  }
}
</script>

<style lang="scss">
.catalog {
  &_categories {
    input {
      display: none;
    }
    label {
      padding: $padding;
      cursor: pointer;
      &.checked {
        font-weight: 600;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &_products {
    max-width: $screenwidth * 2;
    margin: auto;
    div {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>

<template>
  <div class="v-catalog-item" v-if="product_data.published == 1">
    <h4>{{ product_data.title }}</h4>
    <img
      :src="'https://drive.google.com/uc?export=view&id=' + product_data.img"
      alt=""
      @click="showModalBuyNow"
    />
    <v-modal
      v-if="isModalVisible"
      @closeModalButton="closeModal"
      :modalCategory="product_data.category"
      :modalTitle="product_data.title"
      :productPrice="product_data.price"
    >
      <picture>
        <img
          :src="
            'https://drive.google.com/uc?export=view&id=' + product_data.img
          "
          alt="cake"
        />
      </picture>
      <div class="description">
        <ul>
          <li v-for="item in product_data.description.split('\n')" :key="item">
            {{ item }}
          </li>
        </ul>
        <h5 v-if="product_data.price">
          <span v-for="item in product_data.price.split('\n')" :key="item">{{ item }}</span>
        </h5>
      </div>
    </v-modal>
  </div>
</template>

<script>
import vModal from '@/components/v-modal.vue'

export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return []
      }
    }
  },
  components: {
    vModal
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModalBuyNow () {
      this.isModalVisible = !this.isModalVisible // при вызове метода меняется состояние скрытности модального окна
    },
    closeModal () {
      this.showModalBuyNow() // т.к. модальное окно одно и то же достаточно обратить к одному событию которое его закроет
      this.clickBuyNowButtom = false // возвращаем состояние клика по кнопке Buy Now к состоянию false
      this.clickAddToCartButton = false // возвращаем состояние клика по кнопке Buy Now к состоянию false
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
  display: flex;
  position: relative;
  flex-direction: column;
  margin: $margin;
  max-width: $screenwidth / 2;
  img {
    width: 280px;
    cursor: pointer;
  }
  h4 {
    position: absolute;
    width: 100%;
    color: $color-light;
    background-color: #00000099;
    bottom: 0;
  }
}
</style>

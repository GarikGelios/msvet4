<template>
  <section class="v-carousel">
    <div
      v-for="slide in banners"
      class="slide"
      :key="slide.id"
      :class="{
        show: slide.id == checkedBanner,
        hidden: slide.id != checkedBanner
      }"
    >
      <div class="banner">
        <img
          :src="'https://drive.google.com/uc?export=view&id=' + slide.img"
          alt=""
        />
        <!-- <div class="content">
            <h4>{{ slide.title }}</h4>
            <p>{{ slide.description }}</p>
          </div> -->
      </div>
    </div>
    <div class="v-carousel_buttons">
      <div
        v-for="slide in banners"
        :key="slide.id"
        class="v-carousel_buttons_button"
      >
        <input
          type="radio"
          :id="'banner' + slide.id"
          name="banners"
          :value="slide.id"
          checked
          v-model="checkedBanner"
        />
        <label :for="'banner' + slide.id"></label>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'vCarousel',
  data () {
    return {
      checkedBanner: 0
    }
  },
  computed: {
    ...mapGetters([
      'GET_SPREADSHEETS_PRODUCTS',
      'GET_SPREADSHEETS_BANNERS',
      'GET_BANNERS'
    ]),
    banners () {
      return this.GET_BANNERS
    }
  },
  methods: {
    ...mapActions([
      'ACT_SPREADSHEETS_BANNERS_FROM_API',
      'ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE'
    ]),
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
.v-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #3f7900;
  min-height: $screenwidth / 4;
  .slide {
    display: block;
    transition: all 1s ease-out;
    &.hidden {
      position: absolute;
      opacity: 0;
    }
    &.show {
      opacity: 1;
    }
    .banner {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
      .content {
        position: absolute;
      }
    }
  }
  &_buttons {
    position: absolute;
    bottom: 0;
    display: flex;
    &_button {
      input {
        display: none;
        &:checked ~ label {
          background-color: $color-primary;
        }
      }
      label {
        display: flex;
        width: 20px;
        height: 20px;
        margin: $margin;
        border-radius: $radius * 2;
        background-color: $color-secondary;
        cursor: pointer;
        &:hover {
          background-color: $color-third;
        }
      }
    }
  }
}
</style>

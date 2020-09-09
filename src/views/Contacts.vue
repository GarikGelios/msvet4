<template>
  <div class="Contacts">
    <h2>Напишите нам</h2>
    <form @submit.prevent="submit" class="Contacts_form">
      <div>
        <label
          for="form_organization"
          v-if="this.GET_WINDOW_TYPE !== 'Extra small'"
          >Ваша организация:</label
        >
        <input
          type="text"
          name="name"
          id="form_organization"
          v-model="organization"
        />
      </div>
      <div>
        <label for="form_name" v-if="this.GET_WINDOW_TYPE !== 'Extra small'"
          >Ваше имя:</label
        >
        <input
          type="text"
          name="name"
          id="form_name"
          v-model="name"
        />
      </div>
      <div>
        <label for="form_city" v-if="this.GET_WINDOW_TYPE !== 'Extra small'"
          >Ваш Телефон:</label
        >
        <input
          type="tel"
          name="phone"
          id="form_phone"
          v-model="phone"
          required
        />
      </div>
      <div>
        <label for="form_email" v-if="this.GET_WINDOW_TYPE !== 'Extra small'"
          >Ваша почта:</label
        >
        <input
          type="email"
          name="phone"
          id="form_email"
          v-model="email"
          required
        />
      </div>
      <div>
        <label for="form_message" v-if="this.GET_WINDOW_TYPE !== 'Extra small'"
          >Ваше сообщение:</label
        >
        <textarea
          rows="50"
          name="message"
          v-model="message"
          id="form_message"
        ></textarea>
      </div>
      <div class="Contacts_form_buttons">
        <button type="reset" class="btn">Очистить</button>
        <button type="submit" class="btn">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Contacts',
  data () {
    return {
      organization: '',
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  },
  computed: {
    ...mapGetters(['GET_WINDOW_TYPE']),
    dataForm () {
      const arrItems = {}
      arrItems.organization = this.organization
      arrItems.name = this.name
      arrItems.phone = this.phone
      arrItems.email = this.email
      arrItems.message = this.message
      return arrItems
    }
  },
  methods: {
    submit () {
      // this.$router.push('/')
      // console.log(this.dataForm)
      const vm = this
      axios
        .post('/', this.dataForm)
        .then(function (response) {
          if (response.status === 200) {
            vm.$router.push('/')
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss">
.Contacts {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: $screenwidth * 2;
  margin: $margin * 4 auto;
  h2 {
    text-align: left;
    border-bottom: 0.5px solid $color-secondary;
    padding: $padding;
  }
  &_form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // flex-basis: $screenwidth / 2;
    padding: $padding;
    max-width: $screenwidth;
    div {
      display: flex;
      align-items: baseline;
      width: 100%;
      label {
        flex-basis: $screenwidth / 3;
        text-align: left;
        font-style: italic;
      }
      input,
      textarea {
        height: 30px;
        margin: $margin / 2 0;
      }
      input {
        flex-grow: 1;
        max-width: $screenwidth / 2;
      }
      textarea {
        flex-grow: 2;
        min-height: $screenwidth / 6;
      }
    }
    &_buttons {
      display: flex;
      justify-content: flex-end;
      .btn {
        background-color: $color-primary;
        color: $color-light;
        border: 1px solid $color-disable;
        border-radius: $radius / 2;
        padding: $padding;
        margin: $margin 0 0 $margin / 2;
        font-weight: 700;
      }
    }
  }
}
</style>

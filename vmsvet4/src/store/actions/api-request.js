import axios from 'axios'

export default {
  ACT_SPREADSHEETS_FROM_API ({ commit }) {
    const url =
      'https://spreadsheets.google.com/feeds/list/1zNxSqG438NAMPh9dzFnFYbvxPbgiUwr501Mn-Wfirh0/1/public/full?alt=json'
    return axios(url, {
      method: 'GET' // делаю запрос в Google Таблицы
    })
      .then(feed => {
        // отправляю полученное в мутации
        commit('MUT_SPREADSHEETS_TO_STATE', feed.data) // прокидываем в мутацию полученную data из feed
        return feed
      })
      .catch(error => {
        // если вдруг ошибка
        console.log(error)
        return error
      })
  }
}

export default {
  ACT_WINDOW_SIZE ({ commit }, size) {
    commit('MUT_CHANGE_WINDOW_SIZE', size)
  },
  ACT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE ({ commit }, arr) {
    commit('MUT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE', arr)
  },
  ACT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE ({ commit }, arr) {
    commit('MUT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE', arr)
  },
  ACT_SORTED_PRODUCTS ({ commit }, arr) {
    commit('MUT_SORTED_PRODUCTS', arr)
  }
}

export default {
  MUT_CHANGE_WINDOW_SIZE (state, size) {
    state.windowSize = size
  },
  MUT_SPREADSHEETS_PRODUCTS_TO_STATE: (state, feed) => {
    state.spreadsheetsProducts = feed // записываю полученные данные в массив products: []
  },
  MUT_PROCESSED_SPREADSHEETS_PRODUCTS_TO_STORE: (state, arr) => {
    state.products = arr
  },
  MUT_SPREADSHEETS_BANNERS_TO_STATE: (state, feed) => {
    state.spreadsheetsBanners = feed // записываю полученные данные в массив products: []
  },
  MUT_PROCESSED_SPREADSHEETS_BANNERS_TO_STORE: (state, arr) => {
    state.banners = arr
  }
}

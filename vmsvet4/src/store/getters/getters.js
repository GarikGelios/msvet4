export default {
  GET_WINDOW_TYPE (state) {
    return state.windowSize
  },
  GET_SPREADSHEETS_PRODUCTS (state) {
    return state.spreadsheetsProducts // реактивно получает данные из массива spreadsheets: [], который в state
  },
  GET_SPREADSHEETS_BANNERS (state) {
    return state.spreadsheetsBanners // реактивно получает данные из массива spreadsheets: [], который в state
  },
  GET_PRODUCTS (state) {
    return state.products
  },
  GET_BANNERS (state) {
    return state.banners
  }
}

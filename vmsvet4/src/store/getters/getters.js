export default {
  GET_WINDOW_TYPE (state) {
    return state.windowSize
  },
  GET_SPREADSHEETS (state) {
    return state.spreadsheets // реактивно получает данные из массива spreadsheets: [], который в state
  }
}

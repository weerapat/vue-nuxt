export const state = () => ({
  locales: ['th', 'en', 'ja'],
  locale: 'th'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
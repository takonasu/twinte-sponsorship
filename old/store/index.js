export const state = () => ({
  isAuthorized: false
  // nickname: ''
})

export const mutations = {
  login (state) {
    state.isAuthorized = true
  },
  logout (state) {
    state.isAuthorized = false
  }
}

export const getters = {
  authorized (state) {
    return state.isAuthorized
  }
}

export const actions = {
  async login ({ commit }) {
    try {
      await this.$axios.$get('api/v3/users/me')
      commit('login')
    } catch (err) {
      console.log(err)
    }
  },
  logout ({ commit }) {
    this.$axios.$get('auth/v3/logout')
    commit('logout')
    this.$router.push('/') // /に飛ばす
  }
}

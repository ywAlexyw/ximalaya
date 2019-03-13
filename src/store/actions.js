import { login, register } from '@/js/request'

export default {
  login ({ commit }, payload) {
    login(payload).then(({ data }) => {
      commit('setUserInfo', data.data)
    })
  },
  register ({ commit }, payload) {
    register(payload).then(({ data }) => {
      commit('setUserInfo', data.data)
    })
  }
}

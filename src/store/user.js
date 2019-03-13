import Cookies from 'js-cookie'

export default {
  state: {
    userInfo: {},
    login: ''
  },
  mutations: {
    setUserInfo (state, payload) {
      if (this.state.isShowRegister === false && this.state.isShowLogin === false) {
        state.login = true
      }
      if (!payload) {
        Cookies.remove('userInfo')
        state.userInfo = payload
      } else {
        Cookies.set('userInfo', payload)
        state.userInfo = payload
      }
    },
    signout (state) {
      state.login = false
    },
    login (state) {
      state.login = true
    }
  }
}

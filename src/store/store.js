import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import user from './user'
import player from './player'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShowLogin: false,
    array: [],
    search: '',
    isShowRegister: false,
    num: '',
    setMidNum: 15,
    wd: '',
    callPlay: false
  },
  mutations: {
    showLogin (state) {
      state.isShowRegister = false
      state.isShowLogin = true
    },
    searchWD (state, payload) {
      state.search = true
      this.wd = payload
    },
    showRegister (state) {
      state.isShowRegister = !state.isShowRegister
    },
    closeShowLogin (state) {
      state.isShowRegister = false
      state.isShowLogin = false
    },
    setNum (state, payload) {
      state.num = payload
    },
    setMidNum (state, payload) {
      let midNum = 15
      state.setMidNum = midNum + (30 * (payload - 1))
    },
    setPlay (state) {
      state.callPlay = !state.callPlay
    }
  },
  actions,
  modules: {
    user,
    player
  }
})

export default store

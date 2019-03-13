import { musicList } from '@/js/defaults'

export default {
  state: {
    playing: false,
    audio: null,
    currentTime: '',
    allTime: '',
    changeTime: '',
    clickNextMusic: ''
  },
  mutations: {
    play (state, payload) {
      if (payload === 'default') {
        state.audio = musicList[0]
      } else if (typeof payload !== 'undefined') {
        state.audio = payload
      }
      if (!state.audio) return
      state.playing = true
    },
    pause (state) {
      state.playing = false
    },
    getCurrentTime (state, payload) {
      state.currentTime = payload
    },
    getAllTime (state, payload) {
      state.allTime = payload
    },
    getChangeTime (state, payload) {
      state.changeTime = payload
    }
  }
}

<template>
  <div class="player push" @mouseenter="push" @mouseleave="pull">
    <div class="hand" ></div>
    <div class="box-shadow-wrapper">
      <div class="player-lock" @click="lock">
        <i class="shangyiqu" v-show="show">
          <svg id="icon-quanjubofangqi-suoding" viewBox="0 0 1024 1024" width="10px" height="10px"><path d="M768 512V320C768 140.8 627.2 0 448 0S128 140.8 128 320V512c-76.8 0-128 51.2-128 128v256c0 76.8 51.2 128 128 128h640c76.8 0 128-51.2 128-128V640c0-76.8-51.2-128-128-128zM640 512H256V320C256 217.6 345.6 128 448 128S640 217.6 640 320V512z" fill="#E8E8E8"></path></svg>
        </i>
        <i class="xm-player-lock" v-show="!show">
          <svg id="icon-quanjubofangqi-kaisuo" viewBox="0 0 1024 1024" width="10px" height="10px"><path d="M768 512H256V320C256 217.6 345.6 128 448 128c64 0 115.2 25.6 153.6 76.8 25.6 25.6 64 38.4 89.6 12.8 25.6-25.6 38.4-64 12.8-89.6-64-76.8-153.6-128-256-128C268.8 0 128 140.8 128 320V512c-76.8 0-128 51.2-128 128v256c0 76.8 51.2 128 128 128h640c76.8 0 128-51.2 128-128V640c0-76.8-51.2-128-128-128z" fill="#E8E8E8"></path></svg>
        </i>
      </div>
    </div>
    <div class="player-wrapper">
      <a class="player-icon"></a>
      <div class="player-btn">
        <a class="prev" @click="clickPrev"
           style="width: 10px; height: 19px;">
           <svg id="icon-quanjubofangqi-shangyiqu" viewBox="0 0 1024 1024" width="10px" height="10px"><path d="M814.368353 22.597704L305.388132 368.704254V104.034539c0-61.077626-40.718418-101.796044-101.796044-101.796044S101.796044 42.956913 101.796044 104.034539v814.368353c0 61.077626 40.718418 101.796044 101.796044 101.796044s101.796044-40.718418 101.796044-101.796044V653.733177l508.980221 346.10655c81.436835 61.077626 203.592088 0 203.592088-111.975649V134.573352c0-101.796044-122.155253-173.053275-203.592088-111.975648z" fill="#FFFFFF"></path></svg>
        </a>
        <a class="play" id="play" @click="clickPlay" v-show="!playing"
           style="width: 30px; height: 30px;">
           <svg id="icon-quanjubofangqi-bofang" viewBox="0 0 1024 1024" width="30px" height="30px"><path d="M512 1024C228.693333 1024 0 795.306667 0 512S228.693333 0 512 0s512 228.693333 512 512-228.693333 512-512 512z m0-989.866667C249.173333 34.133333 34.133333 249.173333 34.133333 512s215.04 477.866667 477.866667 477.866667 477.866667-215.04 477.866667-477.866667S774.826667 34.133333 512 34.133333z" fill="#FFFFFF"></path><path d="M341.333333 686.08V337.92c0-51.2 58.026667-81.92 102.4-51.2l279.893334 174.08c37.546667 23.893333 37.546667 78.506667 0 105.813333L443.733333 740.693333c-44.373333 27.306667-102.4-3.413333-102.4-54.613333" fill="#fff"></path></svg>
        </a>
        <a class="pause" id="pause" @click="clickPause" v-show="playing"
           style="width: 30px; height: 30px;">
          <i class="xuicon xuicon-quanjubofangqi-zanting"></i>
        </a>
        <a class="next" @click="clickNext"
           style="width: 10px; height: 19px;">
           <svg id="icon-quanjubofangqi-xiayiqu" viewBox="0 0 1024 1024" width="10px" height="10px"><path d="M818.057182 3.809392c-61.211436 0-102.019061 40.807624-102.01906 102.019061v265.249558L205.942818 24.213204c-81.615249-61.211436-204.038122 0-204.038122 112.220967v744.739144c0 112.220967 122.422873 173.432403 204.038122 112.220967l510.095304-346.864807V921.980939c0 61.211436 40.807624 102.019061 102.01906 102.019061s102.019061-40.807624 102.019061-102.019061V105.828453c0-61.211436-40.807624-102.019061-102.019061-102.019061z" fill="#FFFFFF"></path></svg>
        </a>
      </div>
      <div class="player-body">
        <div class="player-body-title">
          <router-link class="player-body-text" to="section" v-if="!audio.title"  title="今日一听">今日一听</router-link>
          <router-link class="player-body-text" to="section" :title ="audio.title" v-else >{{audio.title}}-{{audio.name}}</router-link>
        </div>
        <div>
          <div class="player-progress" id="progress" @click="changeTime($event)">
            <i class="player-progress_cur"></i>
              <svg id="dian-icon" viewBox="0 0 1024 1024" width="10px" height="10px"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FFFFFF"></path></svg>
          </div>
          <div class="player-playtitme">
            <div class="player-time">{{currentTime}}
              <span v-if="allTime">/</span>
              <span>{{allTime}}</span>
            </div>
            <div class="allTime"></div>
          </div>
        </div>
      </div>
      <div class="more-btn">
        <div class="player-opration">
          <a class="shoucang" @click="showLogin">
            <svg id="icon-quanjubofangqi-dianzan"
                 viewBox="0 0 1024 1024"
                 width="18px"
                 height="18px">
              <path d="M716.8 230.4c102.4 0 179.2 76.8 179.2 174.08 0 46.08-20.48 92.16-51.2 122.88l-312.32 302.08c-10.24 10.24-25.6 10.24-35.84 0l-317.44-312.32c-30.72-30.72-51.2-71.68-51.2-112.64 0-92.16 81.92-174.08 179.2-174.08 56.32 0 128 61.44 168.96 102.4 20.48 20.48 51.2 20.48 71.68 0 40.96-40.96 112.64-102.4 168.96-102.4M716.8 153.6c-128 0-204.8 97.28-204.8 97.28S435.2 153.6 307.2 153.6C168.96 153.6 51.2 266.24 51.2 404.48c0 61.44 25.6 122.88 76.8 168.96l368.64 363.52c5.12 5.12 10.24 10.24 20.48 10.24s10.24-5.12 15.36-10.24l363.52-353.28c51.2-46.08 76.8-112.64 76.8-179.2C972.8 266.24 860.16 153.6 716.8 153.6z"
                    fill="#E8E8E8"></path>
            </svg>
          </a>
          <a class="xiazai" @click="showLogin">
            <svg id="icon-quanjubofangqi-xiazai"
                 viewBox="0 0 1024 1024"
                 width="18px"
                 height="18px">
              <path d="M896 614.4c-20.48 0-40.96 15.36-40.96 40.96v204.8c0 5.12-5.12 10.24-10.24 10.24h-665.6c-5.12 0-10.24-5.12-10.24-10.24v-204.8c0-20.48-15.36-40.96-40.96-40.96s-40.96 15.36-40.96 40.96v204.8c0 51.2 40.96 92.16 92.16 92.16h665.6c51.2 0 92.16-40.96 92.16-92.16v-204.8c-5.12-25.6-20.48-40.96-40.96-40.96z"
                    fill="#E8E8E8"></path>
              <path d="M455.68 680.96c30.72 30.72 81.92 30.72 112.64 0l230.4-230.4c15.36-15.36 15.36-35.84 0-46.08s-35.84-15.36-46.08 0l-199.68 199.68v-460.8c0-25.6-20.48-40.96-40.96-40.96s-40.96 15.36-40.96 40.96v460.8l-199.68-204.8c-15.36-15.36-35.84-15.36-46.08 0-15.36 15.36-15.36 35.84 0 46.08l230.4 235.52z"
                    fill="#E8E8E8"></path>
            </svg>
          </a>
          <a class="fenxiang" @click="showLogin">
            <svg id="icon-quanjubofangqi-fenxiang"
                 viewBox="0 0 1024 1024"
                 width="18px"
                 height="18px">
              <path d="M844.8 153.6h-256c-20.48 0-40.96 15.36-40.96 40.96s15.36 40.96 40.96 40.96h189.44l-343.04 343.04c-15.36 15.36-15.36 40.96 0 56.32s40.96 15.36 56.32 0l343.04-343.04v189.44c0 20.48 15.36 40.96 40.96 40.96s40.96-15.36 40.96-40.96v-256c-5.12-40.96-35.84-71.68-71.68-71.68z"
                    fill="#E8E8E8"></path>
              <path d="M870.4 609.28c-20.48 0-40.96 15.36-40.96 40.96v209.92c0 5.12-5.12 10.24-10.24 10.24H204.8c-5.12 0-10.24-5.12-10.24-10.24v-614.4c0-5.12 5.12-10.24 10.24-10.24h209.92c20.48 0 40.96-15.36 40.96-40.96S435.2 153.6 414.72 153.6H204.8c-51.2 0-92.16 40.96-92.16 92.16v614.4c0 51.2 40.96 92.16 92.16 92.16h614.4c51.2 0 92.16-40.96 92.16-92.16v-209.92c0-25.6-20.48-40.96-40.96-40.96z"
                    fill="#E8E8E8"></path>
            </svg>
          </a>
        </div>
        <div class="player-controls">
          <a class="yinliang">
            <svg id="icon-quanjubofangqi-yinliang"
                 viewBox="0 0 1024 1024"
                 width="18px"
                 height="18px">
              <path d="M215.04 317.44H102.4C51.2 317.44 10.24 358.4 10.24 409.6v204.8c0 51.2 40.96 92.16 92.16 92.16h117.76l266.24 209.92c51.2 40.96 122.88 5.12 122.88-61.44V168.96c0-61.44-71.68-97.28-122.88-61.44L215.04 317.44z m25.6 307.2H102.4c-5.12 0-10.24-5.12-10.24-10.24V409.6c0-5.12 5.12-10.24 10.24-10.24h143.36l245.76-189.44c15.36-15.36 40.96 0 40.96 20.48v568.32c0 20.48-25.6 30.72-40.96 20.48l-250.88-194.56zM732.16 634.88c-20.48 10.24-40.96 5.12-51.2-15.36-10.24-20.48-5.12-40.96 15.36-51.2 20.48-10.24 30.72-30.72 30.72-56.32s-10.24-46.08-30.72-56.32c-20.48-10.24-25.6-35.84-15.36-51.2s35.84-25.6 51.2-15.36c46.08 25.6 71.68 71.68 71.68 122.88 5.12 51.2-25.6 97.28-71.68 122.88z"
                    fill="#CCCCCC"></path>
              <path d="M721.92 798.72c-20.48 5.12-40.96-10.24-46.08-30.72-5.12-20.48 10.24-40.96 30.72-46.08 102.4-20.48 174.08-107.52 174.08-215.04 0-102.4-71.68-194.56-174.08-215.04-20.48-5.12-35.84-25.6-30.72-46.08 5.12-20.48 25.6-35.84 46.08-30.72 138.24 25.6 235.52 148.48 235.52 286.72 5.12 153.6-97.28 271.36-235.52 296.96z"
                    fill="#CCCCCC"></path>
            </svg>
          </a>
          <a class="bofangmoshi">
            <svg id="icon-quanjubofangqi-xunhuan"
                 viewBox="0 0 1024 1024"
                 width="18px"
                 height="18px">
              <path d="M716.8 793.6H256c-5.12 0-10.24-5.12-10.24-10.24V419.84l81.92 81.92c15.36 15.36 40.96 15.36 56.32 0 15.36-15.36 15.36-40.96 0-56.32L209.92 276.48 35.84 445.44c-15.36 15.36-15.36 40.96 0 56.32 15.36 15.36 40.96 15.36 56.32 0l76.8-76.8v353.28C163.84 829.44 204.8 870.4 256 870.4h460.8c20.48 0 40.96-15.36 40.96-40.96 0-20.48-20.48-35.84-40.96-35.84zM998.4 522.24c-15.36-15.36-40.96-15.36-56.32 0L870.4 599.04V245.76c0-51.2-40.96-92.16-92.16-92.16h-460.8c-20.48 0-35.84 15.36-35.84 40.96s15.36 40.96 40.96 40.96h460.8c5.12 0 10.24 5.12 10.24 10.24v363.52l-81.92-81.92c-15.36-15.36-40.96-15.36-56.32 0s-15.36 40.96 0 56.32l174.08 174.08 174.08-174.08c10.24-20.48 10.24-46.08-5.12-61.44z"
                    fill="#CCCCCC"></path>
            </svg>
          </a>
          <a class="bofangliebiao">
            <svg id="icon-quanjubofangqi-bofangliebiao"
                 viewBox="0 0 1024 1024"
                 width="18px"
                 height="18px">
              <path d="M486.4 588.8L204.8 419.84c-40.96-30.72-102.4 0-102.4 51.2v337.92c0 51.2 61.44 76.8 102.4 51.2l276.48-168.96c40.96-25.6 40.96-76.8 5.12-102.4z m-307.2 194.56V496.64l240.64 143.36-240.64 143.36zM143.36 230.4h742.4c20.48 0 40.96-15.36 40.96-40.96s-20.48-35.84-46.08-35.84H143.36c-25.6 0-40.96 15.36-40.96 40.96s15.36 35.84 40.96 35.84zM880.64 358.4H450.56c-25.6 0-40.96 15.36-40.96 40.96s15.36 40.96 40.96 40.96h435.2c20.48 0 40.96-15.36 40.96-40.96s-20.48-40.96-46.08-40.96zM880.64 563.2h-225.28c-20.48 0-40.96 15.36-40.96 40.96s20.48 40.96 40.96 40.96h225.28c20.48 0 40.96-15.36 40.96-40.96s-20.48-40.96-40.96-40.96zM880.64 768h-327.68c-20.48 0-40.96 15.36-40.96 40.96s20.48 40.96 40.96 40.96h327.68c20.48 0 40.96-15.36 40.96-40.96s-20.48-40.96-40.96-40.96z"
                    fill="#CCCCCC"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { musicList } from '@/js/defaults'

export default {
  data () {
    return {
      show: true
    }
  },
  computed: {
    login () {
      return this.$store.state.user.login
    },
    playing () {
      return this.$store.state.player.playing
    },
    audio () {
      return this.$store.state.player.audio || {}
    },
    currentTime () {
      return this.$store.state.player.currentTime
    },
    allTime () {
      return this.$store.state.player.allTime
    }
  },
  methods: {
    showLogin () {
      if (!this.login) {
        this.$store.commit('showLogin')
      }
    },
    clickPlay () {
      if (!this.audio.id) {
        this.$store.commit('play', 'default')
      } else {
        this.$store.commit('play')
      }
    },
    clickPause () {
      this.$store.commit('pause')
    },
    clickNext () {
      let audioIndex
      musicList.find((item, index) => {
        if (item.id === this.audio.id) {
          audioIndex = index
        }
      })
      const target = musicList[audioIndex === (musicList.length - 1) ? 0 : audioIndex + 1]
      this.$store.commit('play', target)
    },
    clickPrev () {
      let audioIndex
      musicList.find((item, index) => {
        if (item.id === this.audio.id) {
          audioIndex = index
        }
      })
      const target = musicList[audioIndex === 0 ? (musicList.length - 1) : (audioIndex - 1)]
      this.$store.commit('play', target)
    },
    pull () {
      var player = document.getElementsByClassName('player')[0]
      setTimeout(function () {
        player.style.bottom = '-50px'
      }, 2000)
    },
    push (el) {
      var player = document.getElementsByClassName('player')[0]
      player.style.bottom = '0px'
    },
    lock () {
      var player = document.getElementsByClassName('player')[0]
      if (this.show === true) {
        player.classList.remove('push')
      } else {
        player.classList.add('push')
      }
      this.show = !this.show
    },
    changeTime (el) {
      if (this.allTime !== '') {
        var playerProgress = document.getElementsByClassName('player-progress_cur')[0]
        var dianIcon = document.getElementById('dian-icon')
        let x = el.clientX - 331
        let changWidth = x / 490
        let currentTime = this.allTime.split(':')
        let place = (parseInt(currentTime[0] * 60) + parseInt(currentTime[1])) * changWidth
        this.$store.commit('getChangeTime', place)
        playerProgress.style.width = x + 'px'
        dianIcon.style.left = x - 8 + 'px'
      }
    }
  },
  watch: {
    '$store.state.player.currentTime' (val) {
      var playerProgress = document.getElementsByClassName('player-progress_cur')[0]
      var dianIcon = document.getElementById('dian-icon')
      let current = this.currentTime.split(':')
      let allTime = this.allTime.split(':')
      let changWidth = (parseInt(current[0] * 60) + parseInt(current[1])) / (parseInt(allTime[0] * 60) + parseInt(allTime[1]))
      playerProgress.style.width = changWidth * 100 + '%'
      dianIcon.style.left = changWidth * 490 - 5 + 'px'
      if (this.$store.state.player.currentTime === this.$store.state.player.allTime && this.allTime !== '') {
        this.clickNext()
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.player {
  bottom: -50px;
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  z-index: 901;
  transition: all .2s;
  .hand {
    position: absolute;
    height: 20px;
    top: -20px;
    right: 0;
    left: 0;
  }
  .player-wrapper {
    width: 1080px;
    height: 100%;
    margin: 0 auto;
  }
}

.push {
  bottom: 0px !important;
}

.player-lock {
  position: absolute;
  top: -14px;
  right: 40px;
  width: 64px;
  height: 14px;
  text-align: center;
  cursor: pointer;
}

.player-wrapper {
  .player-icon {
    float: left;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    background-size: 100%;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  }
  .player-btn {
    float: left;
    text-align: center;
    margin-top: 10px;
    .pause {
      font-size: 30px;
      line-height: 30px;
      color: #fff;
    }
    a {
      display: inline-block;
      vertical-align: middle;
      margin-left: 20px;
    }
  }
  .player-body {
    float: left;
    position: relative;
    width: 660px;
    margin-left: 20px;
  }
}

.player-body-title {
  display: block;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
}

.player-body .player-progress {
  position: relative;
  width: 490px;
  height: 2px;
  background: transparent
    linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95));
    cursor: pointer;
}

.player-playtitme{
    position: absolute;
    right: 90px;
    bottom: -5px;
    font-size: 12px;
    color: #e8e8e8;
    span {
      color: #a3a3ac;
    }
}

.more-btn .player-opration {
  float: left;
  margin-left: 55px;
  margin-top: 17px;
  a {
    width: 18px;
    height: 18px;
    margin-right: 18px;
  }
}

.more-btn .player-controls {
  float: left;
  position: relative;
  margin-top: 17px;
  a {
    margin-left: 14px;
  }
}

.player-body-text {
  color: #fff;
}

.player-opration:after {
  content: "";
  width: 1px;
  height: 14px;
  background-color: #72727b;
  display: block;
  float: right;
  margin-top: 2px;
}

.player-progress_cur {
  position: relative;
  left: 0;
  // top: -2px;
  display: block;
  height: 100%;
  width: 0%;
  background-color: #f86442;
  // z-index: 1;
}

#dian-icon {
    position: relative;
    left: -5px;
    top: -9px;
    font-size: 0;
    // margin-left: 330px;
    cursor: pointer;
}

// #dianIcon {
//   margin: 330px;
// }

#icon-quanjubofangqi-dianzan:active path {
  fill: #ff6d6d;
}

.prev :hover {
  fill: #ff6d6d;
}

</style>

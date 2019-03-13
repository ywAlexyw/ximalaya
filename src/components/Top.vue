<template>
    <header class="top-empty">
      <div class="top">
          <div class="top-content heard">
            <router-link class="logo" to="/">
                  <img src="../assets/logo_fc1bef3.png">
            </router-link>
            <div class="heard-left">
                  <a class="nav-n1 nav-on" href="/">
                      <p ref="nav_active" @mouseenter="activeMove(0)" @mouseleave="activeMove(navActiveIndex)">发现</p>
                      <div class="header-sub-category-wrapper" v-if="login && onIndex">
                        <div class="header-category-item">
                          <div class="sub-category" v-for="(item,index) in category" :key="index">
                            <h4 class="sub-category-title" to="category" :class="item.id">{{item.title}}</h4>
                            <div class="category-content-index TP">
                              <span class="name" v-for="(sub, index) in item.content" :key="index" v-if="index < 6">
                                <a>{{sub.name}}</a>
                              </span>
                            </div>
                          </div>
                          <div class="sub-category">
                            <h4 class="sub-category-title TS" to="category">特色</h4>
                            <div class="category-content-index TP">
                              <span class="name">
                                <a>广播剧</a>
                              </span>
                              <span class="name">
                                <a>电台</a>
                              </span>
                              <span class="name">
                                <a>汽车</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </a>
                  <a class="nav-n2" @click="showLogin($event)" @mouseenter="activeMove(1)" @mouseleave="activeMove(navActiveIndex)">
                      <p>我的</p>
                  </a>
                  <a class="nav-n3" href="/" @mouseenter="activeMove(2)" @mouseleave="activeMove(navActiveIndex)">
                      <p>APP下载</p>
                  </a>
                  <div class="header-bottom-action" id="active" ref="active"></div>
              </div>
              <div class="heard-search">
                  <form class="search" autocomplete="off">
                      <input class="search-input" type="text" placeholder="专辑/声音/用户" v-model="wd" @keyup.enter="search" >
                      <span class="search-button" @click="search">
                        <i class="xuicon xuicon-web_ic_search"></i>
                      </span>
                  </form>
              </div>
              <div class="heard-right">
                  <div class="nav">
                    <a class="nav-icon">
                          <i class="xuicon x-icon xuicon-web_ic_upload_h1"></i>
                          <p class="icon-title">上传</p>
                    </a>
                    <a class="nav-icon">
                          <i class="xuicon x-icon xuicon-web_ic_backstage_h1"></i>
                          <p class="icon-title">主播后台</p>
                    </a>
                    <a class="nav-icon">
                          <i class="xuicon x-icon xuicon-web_ic_xpy"></i>
                          <p class="icon-title">喜配音</p>
                    </a>
                    <a class="nav-icon">
                          <i class="xuicon x-icon xuicon-web_ic_xiaoya_h1"></i>
                          <p class="icon-title">小雅音箱</p>
                    </a>
                  </div>
                  <div class="nav-my">
                      <a class="my-icon-userLogout"  @click="showLogin" v-if="!login">
                          <img class="userLogout" src="@/assets/default_9c0f537.png">
                      </a>
                      <router-link class="my-icon-userLogin" to="personal" v-if="login">
                        <img class="userLogin" src="@/assets/user100.jpg" @mouseover="showSignout = true" @mouseout="showSignout = false">
                      </router-link>
                      <a class="signout" @click="signout" v-if="showSignout"  @mouseover="showSignout = true" @mouseout="showSignout = false">
                        退出
                        <div class="arrow" ></div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </header>
</template>

<script>
import { getAlbums, getTopNav, getCategory } from '@/js/request'
import Cookies from 'js-cookie'
import '@/css/navCategory.scss'

export default {
  data () {
    return {
      wd: '',
      category: [],
      content: [],
      recommendList: [],
      topNav: [],
      showSignout: '',
      navActiveIndex: 0,
      navElList: [],
      acitveOn: null,
      onIndex: ''
    }
  },
  computed: {
    login () {
      return this.$store.state.user.login
    }
  },
  created () {
    this.getData()
    this.wd = ''
  },
  methods: {
    search () {
      // debugger
      var searchBtn = document.getElementsByClassName('search-button')[0]
      var _this = this
      if (_this.wd.trim() === '') {
        searchBtn.classList.add('disabled')
      } else {
        searchBtn.classList.remove('disabled')
        _this.$router.push({
          path: '/search',
          query: {
            wd: _this.wd
          }
        })
        _this.$store.commit('searchWD', _this.wd)
      }
      this.wd = ''
    },
    showLogin () {
      if (this.login === true) {
        this.$router.push({
          path: '/personal'
        })
        this.setNavActive(this.navElList[1])
      } else {
        this.$store.commit('showLogin')
      }
    },
    getData () {
      getCategory().then(res => {
        this.category = res.data.category
        this.content = res.data.content
      })
      getAlbums().then(res => {
        this.recommendList = res.data.recommendList
      })
      getTopNav().then(res => {
        this.topNav = res.data.topNav
      })
    },
    signout () {
      this.$router.push({
        path: '/'
      })
      this.$store.commit('signout')
      this.showSignout = false
      Cookies.remove('userInfo')
    },
    activeMove (index) {
      let active = this.$refs.active
      let left = this.navElList[index].offsetLeft + this.navElList[index].offsetWidth / 2 - active.offsetWidth / 2
      active.style.left = left + 'px'
    },
    setNavActive (el) {
      if (el.offsetLeft === 36) {
        this.navActiveIndex = 0
      } else if (el.offsetLeft === 100) {
        this.navActiveIndex = 1
      }
      this.activeMove(this.navActiveIndex)
      var on = document.getElementsByClassName('nav-on')[0]
      on.classList.remove('nav-on')
      el.classList.add('nav-on')
    }
  },
  watch: {
    '$store.state.user.login' () {
      if (this.login === true) {
        this.navElList[0].classList.add('header-category-wrapper')
      }
    },
    $route (to, from) {
      if (to.path === '/personal') {
        this.setNavActive(this.navElList[1])
      }
      if (to.path === '/') {
        this.setNavActive(this.navElList[0])
        this.$refs.nav_active.classList.remove('nav_active')
        this.onIndex = false
      } else {
        this.$refs.nav_active.classList.add('nav_active')
        this.onIndex = true
      }
    }
  },
  mounted () {
    var find = document.getElementsByClassName('nav-n1')[0]
    var my = document.getElementsByClassName('nav-n2')[0]
    var download = document.getElementsByClassName('nav-n3')[0]
    this.navElList.push(find, my, download)
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.top {
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  z-index: 10;
}

.top-content {
  width: 1080px;
  height: 60px;
  margin: 0 auto;
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    float: left;
    width: 120px;
    height: 60px;
    img {
      align-items: center;
      width: 120px;
    }
  }
}

.heard-left {
  position: relative;
  float: left;
  height: 60px;
  width: 230px;
  line-height: 60px;
  .nav-n1 {
    display: inline-block;
    color: #72727b;
    width: 60px;
    height: 60px;
    margin-left: 36px;
    text-align: center;
  }
  .nav-n2, .nav-n4 {
    display: inline-block;
    color: #72727b;
    width: 60px;
    margin-left: 4px;
    text-align: center;
  }
  .nav-n3 {
    display: inline-block;
    color: #72727b;
    padding-left: 10px;
    width: 60px;
    text-align: center;
  }
}

.heard-left .nav-on {
  color: #40404c;
  font-family: PingFangSC-Medium;
  font-size: 16px;
}

.heard-search {
  display: inline-block;
  width: 340px;
  height: 60px;
  margin-left: 30px;
}

.heard-right {
  float: right;
  display: flex;
  height: 60px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}

.nav {
  margin-top: 1px;
  .nav-icon {
    position: relative;
    width: 60px;
    display: inline-block;
    line-height: 1;
    vertical-align: top;
    text-align: center;
    .x-icon {
      font-size: 20px;
      position: relative;
      color: #ccc;
    }
  }
}

.xuicon {
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

.icon-title {
  width: 100%;
  height: 25%;
  font-size: 12px;
  margin-top: 6px;
  color: #72727b;
}

.nav-my {
  width: 60px;
  height: 37px;
  margin-left: 20px;
  .my-icon-userLogout, .my-icon-userLogin{
      position: relative;
     .userLogout,  .userLogin {
      display: table-cell; //主要是这个属性
      margin: 0 auto;
      border-radius: 20px;
      width: 37px;
    }
  }
}

.top-content:before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  background-color: #fff;
  height: 60px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.heard-search {
  display: inline-block;
  width: 340px;
  height: 100%;
  margin-left: 30px;
  vertical-align: top;
}

.search {
  font-family: -apple-system, BlinkMacSystemFont, PingFangSC-Regular,
    "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 40px;
}

.search-input {
  font-family: -apple-system, BlinkMacSystemFont, PingFangSC-Regular,
    "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 10px 70px 10px 20px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  opacity: 1;
  background-color: #fff;
  border: 1px solid #f86442;
  border-radius: 54px;
  outline: 0;
}

.search-button {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  background-color: #f86442;
  background-image: linear-gradient(90deg, #ff9973 1%, #ff7251 99%);
  width: 60px;
  height: 100%;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border-radius: 0 54px 54px 0;
  cursor: pointer;
}

.top-empty:after {
  content: "";
  display: block;
  position: relative;
  padding-bottom: 60px;
}

.my-icon-userLogin:after {
  content: '';
    top: -37px;
    right: -48px;
    position: absolute;
    width: 8px;
    height: 8px;
    background: #f86442;
    border: 1px solid #fff;
    border-radius: 5px;
}

.signout {
  position: relative;
  display: block;
  top: 18px;
  right: 95px;
  width: 105px;
  padding: 10px 20px;
  line-height: 22px;
  text-align: center;
  border: 1px solid #e8e8e8;
  color: #72727b;
  background-color: rgba(255,255,255,.95);
  z-index: 0;
}

.signout:hover {
    color: #f86442;
}

.header-bottom-action {
  position: relative;
  bottom: 0;
  height: 3px;
  width: 20px;
  background-color: #f86442;
  top: -3px;
  left: 56px;
  transition: 0.3s;
}

.signout:after {
    content: "";
    position: absolute;
    width: 147px;
    height: 18px;
    top: -20px;
    right: -1px;
    bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 2px solid #000;
    -o-border-image: linear-gradient(#fc9d77 0, #f86442 100%) 5 5;
    border-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fc9d77), to(#f86442)) 5 5;
    border-image: linear-gradient(#fc9d77 0, #f86442 100%) 5 5;
}

.arrow {
  position: absolute;
  display: block;
  border-color: #fc9872;
  border-style: solid;
  transform: translateX(-50%) rotate(45deg);
  border-bottom-color: transparent;
  border-right-color: transparent;
  right: 16px;
  top: -5px;
}

.header-sub-category-wrapper {
  position: fixed;
  top: -152px;
  width: 1080px;
  left: 50%;
  margin-left: -540px;
  line-height: 1.4;
  transition: all .3s ease-in-out;
  z-index: -2;
  .header-category-item {
    width: 1080px;
    height: 152px;
    box-sizing: border-box;
    padding: 20px 0;
    background-color: #fbfbfc;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    .sub-category {
      width: 160px;
      padding-left: 20px;
      vertical-align: top;
      display: inline-block;
      height: 124px;
      text-align: left;
    }
  }
}
.TS:before {
  background-color: #fa927a;
}

.nav_active:after {
  content: '^';
  position: relative;
  left: 5px;
  text-indent: -99999px;
  overflow: hidden;
  width: 7px;
  height: 7px;
  border: 1px solid #ccc;
  transform: rotate(135deg);
  display: inline-block;
  border-left: 0;
  border-bottom: 0;
}

.nav-n1:hover .nav_active:after {
  transform: rotate(-45deg);
}

.nav-n1:hover:hover .header-sub-category-wrapper {
  top: 60px;
}

.TP {
  padding: 5px 13px;
  .name:nth-child(2n-1):before {
  width: 0px;
  }
}
</style>

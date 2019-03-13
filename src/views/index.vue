<template>
  <div class="main-page">
    <Swiper/>
    <main class="main">
      <div class="main-content" v-if="category.length !== 0">
        <div class="category-wrap">
            <div class="category">
              <div class="change sub-category">
                <router-link class="entry-t1" to="category">
                  <i class="icon"></i>
                  <span>全部分类</span>
                </router-link>
                <router-link class="entry-t2" to="category">
                  <span>排行榜</span>
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <span>看小说</span>
                </router-link>
              </div>
              <div class="sub-category"
                  v-for="(item,index) in category"
                  :key="index">
                <router-link class="category-title"
                            to="category"
                            :class="item.id">{{item.title}}</router-link>
                <div class="category-content-index OP">
                  <span class="name"
                        v-for="(sub, index) in item.content"
                        :key="index"
                        v-if="index < 6">
                    <router-link v-if="item.content.length > 6 && index < 5" to="category">{{sub.name}}</router-link>
                    <router-link v-if="item.content.length < 7" to="category">{{sub.name}}</router-link>
                    <a v-if="item.content.length > 6 && index == 5"
                      @mouseover="showMore(item.id)"
                      @mouseout="showMore(item.id)" to="category">更多></a>
                  </span>
                </div>
              </div>
              <transition :name="item.id"
                          v-for="(item,index) in category"
                          :key="index"
                          v-if="isShow && index < 2 && item.id == ID">
                <div class="xui-popover"
                    :class="item.name"
                    @mouseover="isShow = true"
                    @mouseout="isShow = false">
                  <div class="xui-popover-content">
                    <div class="xui-popover-arrow"></div>
                    <div class="xui-popover-inner">
                      <div class="xui-popover-inner-content">
                        <div class="cateory-more">
                          <router-link class="cateory-more-title"
                                      to="category">进入{{item.title}} ></router-link>
                          <div class="category-more-content">
                            <span class="name"
                                  v-for="(sub, index) in item.content"
                                  :key="index"
                                  v-if="index > 4">
                              <router-link to="category">{{sub.name}}</router-link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
        </div>
        <div class="home-content">
          <div class="layout-left">
            <div class="guess-like">
              <div class="recommend">
                <div class="albums-head">
                  <h2 class="head-title">猜你喜欢</h2>
                  <div class="head-right"
                      @click="change">
                    <span class="right-button">
                      <i class="right-icon xuicon xuicon-huanyihuan"></i>
                      换一批
                    </span>
                  </div>
                </div>
                <div class="recommend-content">
                  <ul>
                    <li class="albums"
                        v-for="item in recommendList"
                        :key="item.id"
                        v-if="item.id < 6">
                      <div class="albums-wrapper">
                        <div class="wrapper-card">
                          <router-link class="picture" to="section">
                            <img :src="item.image">
                            <div class="albums-cover">
                              <i class="icon-ic_play" @click.stop.prevent="play($event)"></i>
                            </div>
                            <p class="albums-plays">
                              <i class="icon-earphone xuicon xuicon-erji EV"></i>
                              {{item.plays}}w
                            </p>
                          </router-link>
                        </div>
                        <router-link class="bookname" to="section">
                          <span>{{item.name}}</span>
                        </router-link>
                        <router-link class="uper" to="personal">
                          <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="content-albums">
              <div class="albums-class">
                <div class="albums-list">
                  <div class="albums-head">
                    <h2 class="head-title">有声书</h2>
                    <div class="head-title_sub">
                      <router-link class="sub" to="category">有声的紫襟</router-link>
                      <router-link class="sub" to="category">多人小说剧</router-link>
                      <router-link class="sub" to="category">鬼吹灯</router-link>
                      <router-link class="sub" to="category">牛大宝</router-link>
                      <router-link class="sub" to="category">黄金瞳</router-link>
                      <router-link class="sub" to="category">盗墓笔记</router-link>
                      <router-link class="sub" to="category">重生</router-link>
                    </div>
                    <a class="head-right">
                      <span class="right-button">更多</span>
                    </a>
                  </div>
                  <div class="recommend-content">
                    <ul>
                      <li class="albums"
                          v-for="(item, index) in albumsClass_1"
                          :key="index">
                        <div class="albums-wrapper">
                          <div class="wrapper-card">
                            <router-link class="picture" to="section">
                              <img :src="item.image">
                              <div class="albums-cover">
                                <i class="icon-ic_play" @click.stop.prevent="play"></i>
                              </div>
                              <p class="albums-plays">
                                <i class="icon-earphone xuicon xuicon-erji EV"></i>
                                {{item.plays}}w
                              </p>
                            </router-link>
                          </div>
                          <router-link class="bookname" to="section">
                            <span>{{item.name}}</span>
                          </router-link>
                          <router-link class="uper" to="personal">
                            <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-albums">
              <div class="albums-class">
                <div class="albums-list">
                  <div class="albums-head">
                    <h2 class="head-title">儿童</h2>
                    <div class="head-title_sub">
                      <router-link class="sub" to="category">植物大战僵尸</router-link>
                      <router-link class="sub" to="category">西游记</router-link>
                      <router-link class="sub" to="category">米小圈</router-link>
                      <router-link class="sub" to="category">三国演义</router-link>
                      <router-link class="sub" to="category">宝宝巴士</router-link>
                      <router-link class="sub" to="category">奥特曼</router-link>
                      <router-link class="sub" to="category">公主故事</router-link>
                    </div>
                    <a class="head-right">
                      <span class="right-button">更多</span>
                    </a>
                  </div>
                  <div class="recommend-content">
                    <ul>
                      <li class="albums"
                          v-for="(item, index) in albumsClass_2"
                          :key="index">
                        <div class="albums-wrapper">
                          <div class="wrapper-card">
                            <router-link class="picture" to="section">
                              <img :src="item.image">
                              <div class="albums-cover">
                                <i class="icon-ic_play" @click.stop.prevent="play"></i>
                              </div>
                              <p class="albums-plays">
                                <i class="icon-earphone xuicon xuicon-erji EV"></i>
                                {{item.plays}}w
                              </p>
                            </router-link>
                          </div>
                          <router-link class="bookname" to="section">
                            <span>{{item.name}}</span>
                          </router-link>
                          <router-link class="uper" to="personal">
                            <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-albums">
              <div class="albums-class">
                <div class="albums-list">
                  <div class="albums-head">
                    <h2 class="head-title">相声评书</h2>
                    <div class="head-title_sub">
                      <router-link class="sub" to="category">单田芳</router-link>
                      <router-link class="sub" to="category">郭德纲</router-link>
                      <router-link class="sub" to="category">王玥波</router-link>
                      <router-link class="sub" to="category">德云社</router-link>
                      <router-link class="sub" to="category">岳云鹏</router-link>
                      <router-link class="sub" to="category">郭德纲单口相声</router-link>
                      <router-link class="sub" to="category">水浒传</router-link>
                    </div>
                    <a class="head-right">
                      <span class="right-button">更多</span>
                    </a>
                  </div>
                  <div class="recommend-content">
                    <ul>
                      <li class="albums"
                          v-for="(item, index) in albumsClass_3"
                          :key="index">
                        <div class="albums-wrapper">
                          <div class="wrapper-card">
                            <router-link class="picture" to="section">
                              <img :src="item.image">
                              <div class="albums-cover">
                                <i class="icon-ic_play" @click.stop.prevent="play"></i>
                              </div>
                              <p class="albums-plays">
                                <i class="icon-earphone xuicon xuicon-erji EV"></i>
                                {{item.plays}}w
                              </p>
                            </router-link>
                          </div>
                          <router-link class="bookname" to="section">
                            <span>{{item.name}}</span>
                          </router-link>
                          <router-link class="uper" to="personal">
                            <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-albums">
              <div class="albums-class">
                <div class="albums-list">
                  <div class="albums-head">
                    <h2 class="head-title">人文</h2>
                    <div class="head-title_sub">
                      <router-link class="sub" to="category">红楼梦</router-link>
                      <router-link class="sub" to="category">马未都</router-link>
                      <router-link class="sub" to="category">道德经</router-link>
                      <router-link class="sub" to="category">易经</router-link>
                      <router-link class="sub" to="category">鬼谷子</router-link>
                      <router-link class="sub" to="category">论语</router-link>
                      <router-link class="sub" to="category">佛经</router-link>
                    </div>
                    <a class="head-right">
                      <span class="right-button">更多</span>
                    </a>
                  </div>
                  <div class="recommend-content">
                    <ul>
                      <li class="albums"
                          v-for="(item, index) in albumsClass_4"
                          :key="index">
                        <div class="albums-wrapper">
                          <div class="wrapper-card">
                            <router-link class="picture" to="section">
                              <img :src="item.image">
                              <div class="albums-cover">
                                <i class="icon-ic_play" @click.stop.prevent="play"></i>
                              </div>
                              <p class="albums-plays">
                                <i class="icon-earphone xuicon xuicon-erji EV"></i>
                                {{item.plays}}w
                              </p>
                            </router-link>
                          </div>
                          <router-link class="bookname" to="section">
                            <span>{{item.name}}</span>
                          </router-link>
                          <router-link class="uper" to="personal">
                            <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-albums">
              <div class="albums-class">
                <div class="albums-list">
                  <div class="albums-head">
                    <h2 class="head-title">音乐</h2>
                    <div class="head-title_sub">
                      <router-link class="sub" to="category">抖音歌曲</router-link>
                      <router-link class="sub" to="category">网络流行歌曲</router-link>
                      <router-link class="sub" to="category">钢琴八级考级曲</router-link>
                      <router-link class="sub" to="category">西班牙舞曲</router-link>
                      <router-link class="sub" to="category">古装剧</router-link>
                      <router-link class="sub" to="category">抖音</router-link>
                      <router-link class="sub" to="category">黄家驹歌曲</router-link>
                    </div>
                    <a class="head-right">
                      <span class="right-button">更多</span>
                    </a>
                  </div>
                  <div class="recommend-content">
                    <ul>
                      <li class="albums"
                          v-for="(item, index) in albumsClass_5"
                          :key="index">
                        <div class="albums-wrapper">
                          <div class="wrapper-card">
                            <router-link class="picture" to="section">
                              <img :src="item.image">
                              <div class="albums-cover">
                                <i class="icon-ic_play" @click.stop.prevent="play"></i>
                              </div>
                              <p class="albums-plays">
                                <i class="icon-earphone xuicon xuicon-erji EV"></i>
                                {{item.plays}}w
                              </p>
                            </router-link>
                          </div>
                          <router-link class="bookname" to="section">
                            <span>{{item.name}}</span>
                          </router-link>
                          <router-link class="uper" to="personal">
                            <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-albums">
              <div class="albums-class">
                <div class="albums-list">
                  <div class="albums-head">
                    <h2 class="head-title">娱乐</h2>
                    <a class="head-right">
                      <span class="right-button">更多</span>
                    </a>
                  </div>
                  <div class="recommend-content">
                    <ul>
                      <li class="albums"
                          v-for="(item, index) in albumsClass_6"
                          :key="index">
                        <div class="albums-wrapper">
                          <div class="wrapper-card">
                            <router-link class="picture" to="section">
                              <img :src="item.image">
                              <div class="albums-cover">
                                <i class="icon-ic_play" @click.stop.prevent="play"></i>
                              </div>
                              <p class="albums-plays">
                                <i class="icon-earphone xuicon xuicon-erji EV"></i>
                                {{item.plays}}w
                              </p>
                            </router-link>
                          </div>
                          <router-link class="bookname" to="section">
                            <span>{{item.name}}</span>
                          </router-link>
                          <router-link class="uper" to="personal">
                            <span>by:&nbsp;&nbsp;{{item.uper}}</span>
                          </router-link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layout-right">
            <div class="layout-content">
              <div class="user-card zTry"
                  v-if="!login">
                <div class="card-content">
                  <img src="../assets/bg_684491a.png">
                  <div class="card-head">
                    <img src="../assets/default_9c0f537.png">
                    <div class="uc-head-title">
                      <p>登陆一下，让我了解你</p>
                    </div>
                  </div>
                  <div class="card-login">
                    <div class="cl-wrap">
                      <a class="login-btn"
                        @click="showLogin">登录</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="everyday zTry">
                <div class="everyday-content">
                  <p class="content-title">每日必听</p>
                  <div class="content-date">
                    <p class="date-month">{{month}}</p>
                    <p class="date-day">{{day}}</p>
                  </div>
                </div>
              </div>
              <div class="recommend-list zTry">
                <div class="reco-cont">
                  <div class="reco-head">
                    <div class="reco-head-title">
                      <h3 class>听单推荐</h3>
                      <a class="reco-head-more">更多 ></a>
                    </div>
                  </div>
                  <div class="reco-cover">
                    <a class="cover-music">
                      <div class="cover-music-pic">
                        <img src="../assets/pic.png">
                      </div>
                      <p class="cover-music-mes">音乐星球Vol.12 这些歌手，开口就让人陶醉</p>
                    </a>
                  </div>
                  <div class="reco-main">
                    <ul>
                      <li class="reco-main-albums"
                          v-for="(item, index) in listenRecommend"
                          :key="index">
                        <router-link class="albums-mes" to="section">
                          <div class="alb-mes-pic">
                            <img :src="item.image">
                            <div class="albums-cover">
                              <i class="icon-ic_play" @click.stop.prevent="play"></i>
                            </div>
                          </div>
                          <div class="alb-description">
                            <h6>{{item.description}}</h6>
                            <p>{{item.num}}专辑</p>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-wrap zTry"
                  v-for="(item, index) in everdayRecommend"
                  :key="index"
                  v-if="index !== 3">
                <div class="card-content">
                  <div class="card-list-head">
                    <h3>
                      <i class="tu1"
                        width="16px"
                        height="16px"></i>
                      {{item.title}}
                    </h3>
                  </div>
                  <div class="card-cont-list">
                    <div class="card-cont-list-item"
                        v-for="(sub, index) in everdayRecommend"
                        :key="index"
                        :class="{ topclean: index === 0 }">
                      <div class="item-icon">
                        <svg id="icon-ic_play_gray"
                            viewBox="0 0 1024 1024"
                            width="14px"
                            height="14px">
                          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                fill="#E8E8E8"></path>
                          <path d="M460.8 307.2l243.712 153.6c28.672 18.432 36.864 55.296 18.432 83.968-4.096 8.192-12.288 14.336-18.432 18.432L460.8 716.8c-28.672 18.432-67.584 10.24-83.968-18.432-6.144-10.24-10.24-20.48-10.24-32.768v-307.2c0-34.816 26.624-61.44 61.44-61.44 12.288 0 22.528 4.096 32.768 10.24z"
                                fill="#CCCCCC"></path>
                        </svg>
                      </div>
                      <a class="item-desc">{{sub.description}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="download-app zTry">
                <div class="card-app">
                  <div class="card-list-head">
                    <h3>下载APP</h3>
                  </div>
                  <div class="qr-card">
                    <div class="card-img">
                      <img src="../assets/QRCode_c35aacf.png">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Footer from '@/components/Footer'
import FloatList from '@/components/FloatList'
import { getCategory, getAlbums, getImage } from '@/js/request'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import Swiper from '@/components/Swiper'

export default {
  components: {
    Footer,
    FloatList,
    Login,
    Swiper
  },
  data () {
    return {
      category: [],
      content: [1, 2, 2],
      recommendList: [],
      albumsClass_1: [],
      albumsClass_2: [],
      albumsClass_3: [],
      albumsClass_4: [],
      albumsClass_5: [],
      albumsClass_6: [],
      classList: [],
      listenRecommend: [],
      everdayRecommend: [],
      month: '',
      day: '',
      isShow: false,
      ID: '',
      ip: [],
    }
  },
  created () {
    this.getData()
    var _this = this
    var date = new Date()
    _this.day = date.getDate()
    if (_this.day < 10) {
      _this.day = '0' + _this.day
    }
    switch (date.getMonth() + 1) {
      case 1:
        _this.month = 'Jan'
        break
      case 2:
        _this.month = 'Feb'
        break
      case 3:
        _this.month = 'Mar'
        break
      case 4:
        _this.month = 'Apr'
        break
      case 5:
        _this.month = 'May'
        break
      case 6:
        _this.month = 'Jun'
        break
      case 7:
        _this.month = 'Jul'
        break
      case 8:
        _this.month = 'Aug'
        break
      case 9:
        _this.month = 'Sep'
        break
      case 10:
        _this.month = 'Oct'
        break
      case 11:
        _this.month = 'Nov'
        break
      case 12:
        _this.month = 'Dec'
        break
    }
  },
  computed: {
    login () {
      return this.$store.state.user.login
    }
  },
  methods: {
    showMore (id) {
      this.ID = id
      this.isShow = !this.isShow
    },
    showLogin () {
      this.$store.commit('showLogin')
    },
    change () {
      getAlbums().then(res => {
        this.recommendList = res.data.recommendList
      })
    },
    getData () {
      getCategory().then(res => {
        this.category = res.data.category
        this.content = res.data.content
      })
      getAlbums().then(res => {
        this.recommendList = res.data.recommendList
        this.albumsClass_1 = res.data.albumsClass_1
        this.albumsClass_2 = res.data.albumsClass_2
        this.albumsClass_3 = res.data.albumsClass_3
        this.albumsClass_4 = res.data.albumsClass_4
        this.albumsClass_5 = res.data.albumsClass_5
        this.albumsClass_6 = res.data.albumsClass_6
        this.classList = res.data.classList
        this.listenRecommend = res.data.listenRecommend
        this.everdayRecommend = res.data.everdayRecommend
      })
    },
    play(el) {
      this.$store.commit('play', 'default')
      this.playing = true
      var playing = document.getElementsByClassName("playing")[0]
      if(typeof playing !== 'undefined' && !el.target.classList.contains('playing')) {
        playing.classList.remove("playing")
        el.target.classList.add("playing")
        // console.log('切歌')
      } else if(el.target.classList.contains('playing'))  {
        // console.log('暂停')
        this.$store.commit('pause')
        el.target.classList.remove("playing")
      }
      else {
        // console.log('点击播放')
        el.target.classList.add("playing")
      }
    },
    pause () {
      var playing = document.getElementsByClassName("playing")[0]
      if(typeof playing !== 'undefined') {
        playing.classList.remove("playing")
      }
    },
  },
  watch: {
    '$store.state.player.playing' (val) {
      if(!this.$store.state.player.playing)
      this.pause()
    },
    '$store.state.callPlay' () {
      if(!this.$store.state.callPlay)
      this.play()
    }
  },
  mounted () {
    console.log(this.ip.length === 0)
    console.log(this.ip === 'null')
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
// scoped 慎用，给每个类添加不同的ID
.main {
  min-height: 500px;
}

.category-wrap {
  width: 1080px;
  display: block;
  margin: auto 0;
  .category {
    width: 1080px;
    height: 120px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px 0px;
    background-color: #fff;
  }
}

.name:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 10px;
  left: 0;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  background-color: #e8e8e8;
}

.OP .name:nth-child(3n-2):before {
  width: 0px;
}

.category-content-index {
  position: relative;
  margin-top: 6px;
}

.category-content-index .name a:hover {
  color: #f86442;
}

.category-content-index .name a,
.category-more-content .name a {
  display: inline-block;
  min-width: 28px;
  min-height: 20px;
  line-height: 1.4;
  color: #72727b;
  font-size: 13px;
  text-align: left;
}
.category-content-index .name,
.category-more-content .name {
  display: inline-block;
  position: relative;
  line-height: 0;
  padding: 5px 10px;
}

.sub-category {
  width: 180px;
  padding-left: 10px;
  vertical-align: top;
  display: inline-block;
  height: 80px;
}

.category-title,
.cateory-more-title {
  display: inline-block;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #40404c;
  letter-spacing: 0;
  margin-left: 10px;
  position: relative;
}

.change {
  width: 130px;
  padding-left: 0;
  text-align: center;
  .entry-t1,
  .entry-t2 {
    font-family: PingFangSC-Medium;
    line-height: 1.4;
    color: #40404c;
    display: block;
    margin-top: 10px;
    .icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      background-repeat: no-repeat;
      background-size: 100%;
      vertical-align: middle;
      margin-right: 10px;
    }
    span {
      vertical-align: middle;
    }
  }
  .entry-t2{
      margin-top: 20px
    }
}
.entry-t2 span:hover {
  color: #f86442;
}

.home-content {
  width: 1080px;
  margin: 20px auto 0;
  overflow: hidden;
  .layout-left {
    width: 820px;
    float: left;
    .guess-like {
      margin-bottom: 20px;
      .recommend {
        position: relative;
        z-index: 0;
        width: 820px;
        padding: 20px;
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}

.albums-head {
  margin-bottom: 20px;
  overflow: hidden;
}

.head-title {
  position: relative;
  display: inline-block;
  padding-left: 16px;
  color: #40404c;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
}

.head-right {
  float: right;
  padding-top: 5px;
  .right-button {
    cursor: pointer;
    font-size: 14px;
    .right-icon {
      margin-right: 10px;
      vertical-align: -3px;
      font-size: 20px;
    }
  }
}

.content-albums {
  margin-bottom: 20px;
}

.albums-class {
  width: 820px;
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 0;
  background-color: #fff;
}

.title_1::before {
  background-color: #a392ec;
}

.title_2::before {
  background-color: #f4a6cb;
}

.title_3::before {
  background-color: #f8d16c;
}

.title_4::before {
  background-color: #7cc2ef;
}

.title_5::before {
  background-color: #4dd298;
}

.albums:nth-child(5n + 1) {
  margin-left: 0;
}

.head-title:before {
  content: "";
  position: absolute;
  display: inline-block;
  width: 5px;
  height: 15px;
  left: 0;
  top: 6px;
  border-radius: 6px;
  background-color: #f86442;
}

.layout-right {
  float: left;
  width: 240px;
  margin-left: 20px;
}

.user-card {
  position: relative;
  height: 170px;
  img {
    position: absolute;
    left: 0;
    right: 0;
    height: 70px;
    width: 100%;
  }
}

.card-content {
  padding: 0 10px;
  height: 217px;
  background: #fff;
  position: relative;
  .card-head {
    position: relative;
    padding-top: 50px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
    height: 60px;
    img {
      position: relative;
      float: left;
      width: 60px;
      height: 60px;
      background-size: 100%;
      border-radius: 50%;
      border: 3px solid #f3f4f5;
      overflow: hidden;
    }
    .uc-head-title {
      float: left;
      padding-left: 13px;
      line-height: 50px;
      height: 60px;
      padding-top: 10px;
      p {
        color: #72727b;
      }
    }
  }
}

.card-login {
  margin-top: 3px;
  .cl-wrap {
    text-align: center;
    margin: 10px auto;
    .login-btn {
      display: inline-block;
      color: #fff;
      box-shadow: 0 4px 8px 0 rgba(252, 88, 50, 0.5);
      border-radius: 30px;
      font-size: 14px;
      padding: 3px 34px;
      background-image: linear-gradient(90deg, #ff9973 1%, #ff7251 99%);
    }
  }
}

.everyday-content {
  position: relative;
  cursor: pointer;
  width: 240px;
  height: 120px;
  .content-title {
    padding: 10px;
    font-size: 16px;
    color: #fff;
  }
}
.content-date {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 46px;
  height: 50px;
  color: #fff;
  text-align: center;
}

.date-month {
  font-size: 12px;
  line-height: 1.8;
}

.date-day {
  font-size: 20px;
}

.reco-cont {
  position: relative;
  .reco-head {
    margin: 0 10px;
    border-bottom: 1px solid #e8e8e8;
    .reco-head-title {
      font-size: 16px;
      font-weight: 400;
      padding: 10px 0 10px 0;
      h3 {
        display: inline;
      }
      .reco-head-more {
        float: right;
        line-height: 26px;
      }
    }
  }
}

.albums-mes {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.albums-mes:hover {
  color: #f86422;
}
.reco-cover {
  margin: 0 10px;
  position: relative;
  a .cover-music-pic {
    height: 100px;
    width: 220px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    color: #40404c;
    font-weight: 400;
    margin: 5px 0 10px;
  }
}

.reco-main-albums {
  padding: 10px 0;
  border-top: 1px dashed #e8e8e8;
  .alb-mes-pic {
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;
    width: 60px;
    height: 60px;
    .albums-cover {
      position: relative;
      left: 0px;
      top: -63px;
    }
    img {
      height: 60px;
      width: 60px;
    }
  }
}

.alb-description {
  display: inline-block;
  max-width: 150px;
  vertical-align: middle;
  h6 {
    font-size: 14px;
    font-weight: 400;
  }
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.4;
    margin-top: 3px;
    color: #a3a3ac;
  }
}

.card-list-head {
  margin: 0 10px;
  h3 {
    font-size: 16px;
    font-weight: 400;
    padding: 20px 0 20px 0;
  }
}

.card-cont-list,
.qr-card {
  overflow: hidden;
  margin: 0 10px;
  .card-cont-list-item {
    margin: 20px 0;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    .item-icon {
      display: inline-block;
      vertical-align: middle;
      svg {
        margin-right: 5px;
      }
    }
  }
  .topclean {
    margin-top: 0;
  }
}

.card-img {
  width: 190px;
  height: 180px;
  margin: auto;
  position: relative;
  background-size: 100%;
  background-position: 4px 25px;
  img {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
  }
}

#icon-bodan {
  vertical-align: text-top;
  margin-top: 1px;
  margin-right: 5px;
}

.xui-popover {
  position: absolute;
  max-width: 238px;
  top: 335px;
  left: 320px;
  padding-bottom: 20px;
  z-index: 1;
  .xui-popover-content {
    border: 2px solid #fc9872;
    border-image: linear-gradient(to right, #fc9d77, #f86442) 2;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background: #fff;
  }
}

.xui-popover:nth-child(2) {

}

.T1 {
  left: 320px;
  top: 340px;
}

.T2 {
  left: 510px;
  top: 400px;
}

.xui-popover-inner-content {
  padding: 10px;
  .cateory-more {
    margin-left: -5px;
    margin-right: -5px;
    .cateory-more-title {
      font-size: 14px;
      line-height: 1.4;
      color: #f86442;
      display: inline;
      margin-left: 10px;
      max-width: 100%;
    }
    .category-more-content {
      margin-top: 5px;
    }
  }
}

.xui-popover-arrow {
  position: absolute;
  left: 50%;
  bottom: 17px;
  border-top-color: transparent;
  border-left-color: transparent;
  transform: translateX(-50%) rotate(45deg);
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  border-color: #fc9872;
  border-style: solid;
  z-index: -1;
}

.title_1-enter-active,
.title_2-enter-active {
  animation: bounce-right 0.2s;
}
.title_1-leave-active,
.title_2-leave-active {
  animation: bounce-right 0.2s reverse;
}

.albums-cover {
  font-size: 54px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: #fff;
  background-color: rgba(0,0,0,0);
  transition: all .3s ease-in-out;
  z-index: 11;
  .icon-ic_play {
    transition: all .3s ease-in-out;
    position: absolute;
    width: 54px;
    height: 54px;
    top: 50%;
    left: 50%;
    margin: -27px 0 0 -27px;
    transform: scale(.2);
    opacity: 0;
    z-index: -1;
  }
}

.head-title_sub {
  display: inline-block;
  position: relative;
  top: 2px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666;
  max-width: 620px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  .sub:first-child {
    padding-left: 20px;
  }
  .sub:after {
    content: '|';
    height: 10px;
    width: 1px;
    padding: 0 10px;
    color: #e8e8e8;
  }
  .sub:last-child:after {
    content: ''
  }
}

.wrapper-card:hover .albums-cover{
  background-color: rgba(0,0,0,.2);
  .icon-ic_play {
    opacity: 1;
    transform: scale(1);
    z-index: 999;
  }
}

.reco-main-albums:hover .albums-cover{
  background-color: rgba(0,0,0,.2);
  .icon-ic_play {
    opacity: 1;
    z-index: 999;
    transform: scale(0.5);
    }
}

.picture img {
  border: 0;
  vertical-align: bottom;
  width: 100%;
}

.wrapper-card:hover + .bookname{
  color: #f86442;
}

@keyframes bounce-right {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>

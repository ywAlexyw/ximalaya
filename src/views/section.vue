<template>
  <main class="main-page">
    <div class="section">
      <div class="ablum-detail">
        <Bread/>
        <div class="clearFix">
          <div class="detail-layout-main">
            <div class="detail-wrapper">
              <div class="album-info clearfix">
                <div class="album-info-cover"></div>
                <img class="album-info-img"
                     src="@/assets/wKgKmFvhYFzwud-AAAA_niYMX4k657.jpg">
                <div class="info">
                  <div class="title-icon">
                    <svg id="icon-lianzai"
                         viewBox="0 0 2048 1024"
                         width="36"
                         height="18">
                      <path d="M120.470588 0h1807.058824c66.258824 0 120.470588 54.211765 120.470588 120.470588v783.058824c0 66.258824-54.211765 120.470588-120.470588 120.470588H120.470588c-66.258824 0-120.470588-54.211765-120.470588-120.470588V120.470588C0 54.211765 54.211765 0 120.470588 0z"
                            fill="#5BA6FF"></path>
                      <path d="M686.682353 843.294118c-48.188235 0-84.329412-6.023529-114.447059-12.047059s-54.211765-24.094118-78.305882-54.211765c-12.047059-12.047059-18.070588-18.070588-30.117647-18.070588-18.070588 0-48.188235 36.141176-84.329412 102.4l-36.141177-36.141177c36.141176-60.235294 72.282353-96.376471 102.4-108.423529V493.929412H343.341176v-48.188236h150.588236v271.058824l18.070588 18.070588c18.070588 18.070588 36.141176 36.141176 54.211765 48.188236 24.094118 12.047059 54.211765 18.070588 96.37647 18.070588h319.247059l-6.023529 42.164706H686.682353zM518.023529 319.247059l-36.141176 36.141176C451.764706 319.247059 409.6 277.082353 355.388235 240.941176l36.141177-36.141176C439.717647 240.941176 481.882353 277.082353 518.023529 319.247059z m144.564706-54.211765c12.047059-24.094118 18.070588-54.211765 30.117647-78.305882l48.188236 12.047059c-6.023529 24.094118-18.070588 48.188235-24.094118 66.258823h252.988235v48.188235h-271.058823c-24.094118 48.188235-48.188235 90.352941-72.282353 126.494118h114.447059V361.411765h48.188235v84.329411h156.611765v48.188236h-156.611765v84.329412h186.729412v48.188235h-186.729412v132.517647h-48.188235v-132.517647H542.117647v-48.188235h198.776471V493.929412H572.235294l-12.047059-48.188236c30.117647-36.141176 54.211765-78.305882 78.305883-126.494117H548.141176v-54.211765H662.588235zM1246.870588 252.988235v-60.235294h48.188236v60.235294h132.517647V301.176471h-132.517647v66.258823h174.682352c0-54.211765-6.023529-114.447059-6.023529-174.682353h48.188235c0 66.258824 0 126.494118 6.02353 174.682353h180.705882v48.188235h-180.705882c6.023529 66.258824 12.047059 114.447059 18.070588 156.611765 6.023529 18.070588 6.023529 42.164706 12.047059 60.235294 24.094118-54.211765 48.188235-114.447059 60.235294-180.705882l48.188235 18.070588c-24.094118 90.352941-54.211765 168.658824-90.352941 228.894118 6.023529 18.070588 12.047059 30.117647 18.070588 42.164706 18.070588 36.141176 36.141176 54.211765 48.188236 54.211764 12.047059 0 24.094118-36.141176 30.117647-114.447058l42.164706 24.094117c-18.070588 96.376471-36.141176 144.564706-66.258824 144.564706-24.094118 0-54.211765-24.094118-78.305882-66.258823-6.023529-12.047059-18.070588-24.094118-18.070589-36.141177-36.141176 48.188235-78.305882 84.329412-126.494117 114.447059l-30.117647-42.164706c54.211765-30.117647 96.376471-72.282353 132.517647-126.494118-12.047059-30.117647-18.070588-66.258824-30.117647-102.4-12.047059-48.188235-18.070588-102.4-24.094118-168.658823h-403.576471v-54.211765h180.705883V301.176471h-138.541177v-48.188236h144.564706z m180.705883 499.952941c-36.141176 6.023529-72.282353 12.047059-114.447059 12.047059v84.329412H1264.941176v-78.305882c-54.211765 6.023529-108.423529 12.047059-162.635294 12.047059l-6.023529-48.188236c60.235294-6.023529 120.470588-6.023529 168.658823-12.047059v-60.235294h-138.541176l-12.047059-42.164706c18.070588-24.094118 36.141176-54.211765 54.211765-90.352941h-78.305882V481.882353h102.4l18.070588-54.211765 48.188235 12.047059c-6.023529 18.070588-12.047059 30.117647-18.070588 48.188235h186.729412v48.188236h-210.82353c-18.070588 36.141176-36.141176 60.235294-54.211765 90.352941H1264.941176V560.188235h54.211765v54.211765h108.42353v48.188235h-108.42353v60.235294c42.164706-6.023529 78.305882-6.023529 114.447059-12.047058v42.164705z m246.964705-445.741176l-36.141176 30.117647c-18.070588-30.117647-48.188235-66.258824-84.329412-108.423529l42.164706-24.094118c30.117647 36.141176 60.235294 72.282353 78.305882 102.4z"
                            fill="#FFFFFF"></path>
                    </svg>
                  </div>
                  <h1 class="title">《阴间神探》紫襟故事</h1>
                  <div class="category">2019-01-14 更新</div>
                  <div class="tags">
                    <div class="tags-item">
                      <span>悬疑</span>
                    </div>
                    <div class="tags-item">
                      <span>读书</span>
                    </div>
                    <div class="tags-item">
                      <span>惊悚</span>
                    </div>
                  </div>
                  <div class="controls">
                    <div class="play" @click="play(0)" v-show="!playing">
                        <i class="controls-play-icon"></i>
                        <span>播放全部</span>
                    </div>
                    <div class="pause" @click="pause" v-show="playing">
                        <i class="controls-pause-icon"></i>
                        <span>暂停全部</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="album-intro">
                <article class="intro"
                         id="intro">简介:<p v-for="(item, index) in albumIntro"
                     :key="index">{{item.text}}</p>
                </article>
                <div class="more-inro-wrapper"
                     id="MIW_1"
                     v-show="allShow"
                     @click="show">
                  <div class="blur"></div>更多全部
                  <span class="arrow arrow-bottom K6KV"></span>
                </div>
                <div class="more-inro-wrapper"
                     id="MIW_2"
                     v-show="!allShow && intro_length > 10"
                     @click="hidden">
                  收起
                  <span class="arrow arrow-top _i3lp"></span>
                </div>
              </div>
            </div>
            <div class="sound-list-wrapper">
              <div class="head">
                <h2 class="album-sound">专辑里的声音(<span>{{getLength}}</span>)</h2>
                <button class="xui-button xui-btn">
                  <i class="xuicon xuicon-web_album_ic_phone"></i>
                  同步到手机听
                </button>
              </div>
              <div class="sound-list">
                <ul>
                  <li class="sound-list-item"
                      v-for="(item, index) in sectionList"
                      :key="index" @click="play(index)">{{getList}}
                    <div class="sound-list-num icon-wrapper">{{item.id}}</div>
                    <div class="playingIcon icon-wrapper"  style="width: 14px; height: 14px">
                    </div>
                    <div class="text">{{item.name}}</div>
                    <div class="operate">{{item.num}}w</div>
                    <span class="time">{{item.time}}</span>
                  </li>
                </ul>
                <Pagination/>
              </div>
            </div>
          </div>
          <div class="detail-layout-side">
            <div slot="right">
              <card class="mgb-20"
                    icon="zhubo1"
                    title="专辑主播"
                    iconColor="#FBC57C">
                <div class="anchor-info">
                  <div class="anchor-info-head">
                    <a class="anchor-info-avatar"
                       href="/zhubo/127946297/">
                      <img class="img QlfO"
                           src="//imagev2.xmcdn.com/group47/M06/39/88/wKgKk1udFMKT9OPUAADevH9UdME970.jpg!strip=1&amp;quality=7&amp;magick=jpg&amp;op_type=5&amp;upload_type=cover&amp;name=web_large&amp;device_type=ios">
                    </a>
                    <a class="anchor-info-nick"
                       title="Eva英语开口说"
                       href="/zhubo/127946297/">
                      Eva英语开口说
                    </a>
                  </div>
                  <p class="anchor-stats">
                    <a class="anchor-stats-item">
                      <i class="xuicon xuicon-web_album_ic_voice QlfO"></i>2.2w
                    </a>
                    <a class="anchor-stats-item">
                      <i class="xuicon xuicon-web_album_ic_album QlfO"></i>69
                    </a>
                    <a class="anchor-stats-item">
                      <i class="xuicon xuicon-web_album_ic_fans QlfO"></i>69w
                    </a>
                  </p>
                  <p class="anchor-intro">简介：外语</p>
                </div>
                <div class="xui-card">
                  <div class="xui-card-head border">
                    <h3 class="xui-card-head-title">
                      <a class=".Rtye">
                        <svg id="icon-zhuanjixiangguan"
                             viewBox="0 0 1024 1024"
                             width="16"
                             height="16">
                          <path d="M672 512m-288 0a288 288 0 1 0 576 0 288 288 0 1 0-576 0Z"
                                fill="#C3E3FE"></path>
                          <path d="M832 428.8V183.04a55.04 55.04 0 0 0-55.04-55.04H119.04a55.04 55.04 0 0 0-55.04 55.04v657.92a55.04 55.04 0 0 0 55.04 55.04h657.92a55.04 55.04 0 0 0 55.04-55.04V595.2a96 96 0 0 1 0-166.4z"
                                fill="#70BEFE"></path>
                          <path d="M379.52 329.6L582.4 464.64a56.32 56.32 0 0 1 15.36 79.36 58.24 58.24 0 0 1-15.36 15.36l-202.88 135.04a59.52 59.52 0 0 1-81.28-15.36 56.32 56.32 0 0 1-10.24-32V376.96A57.6 57.6 0 0 1 346.88 320a59.52 59.52 0 0 1 32.64 9.6z"
                                fill="#FFFFFF"></path>
                        </svg>
                        TA的专辑
                      </a>
                      <div class="xui-card-extra">
                        <a>更多</a>
                      </div>
                    </h3>
                  </div>
                  <div class="xui-card-body">
                    <ul class="general-list">
                      <li class="general-list-item"
                          v-for="(item, index) in albumsClass"
                          :key="index"
                          v-if="index < 4">
                        <a class="item-link">
                          <div class="box">
                            <img :src="item.image">
                          </div>
                          <div class="gl-item-content">
                            <h6 class="gl-item-content-title">{{item.name}}</h6>
                            <p class="sub-title">
                              <i class="xuicon xuicon-erji1 h2"></i>{{item.plays}}
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </card>
              <related-search slot="right"
                              class="mgb20"></related-search>
              <img class="ad1 mgb20"
                   src="https://s1.xmcdn.com/lib/xmweb/images/default-ad_a4a9be6.jpg">
              <related-rec></related-rec>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getSection, getAlbums, getImage } from '@/js/request'
import Pagination from '@/components/Pagination'
import Bread from '@/components/Bread'
import RelatedSearch from '@/components/RelatedSearch'
import RelatedRec from '@/components/RelatedRec'
import Card from '@/components/Card'
import { musicList } from '@/js/defaults'

export default {
  components: {
    Pagination,
    Bread,
    RelatedSearch,
    RelatedRec,
    Card
  },
  data () {
    return {
      section: [],
      albumIntro: [],
      sectionList: [],
      albumsClass: [],
      midNum: '',
      intro_length: '',
      allShow: '',
      getLength: '',
      imageSrc: '',
      showPlay: '',
      intro: '',
      playingIcon: ''
    }
  },
  created () {
    this.getData()
  },
  computed: {
    playing () {
      return this.$store.state.player.playing
    },
    getList () {
      this.midNum = this.$store.state.setMidNum
      let list = []
      for (var i = 0; i < this.section.length; i++) {
        if (
          this.midNum - 15 < this.section[i].id &&
          this.section[i].id < this.midNum + 16
        ) {
          list.push(this.section[i])
        }
      }
      this.sectionList = list
    }
  },
  methods: {
    getData () {
      getSection().then(res => {
        this.midNum = this.$store.state.setMidNum
        this.getLength = res.data.sectionList.length
        this.$store.commit('setNum', res.data.sectionList.length)
        this.section = res.data.sectionList
        this.albumIntro = res.data.albumIntro
        this.intro_length = this.albumIntro.length
        if (this.intro_length > 10) {
          this.allShow = true
        } else {
          this.allShow = false
        }
        for (var i = 0; i < this.section.length; i++) {
          if (
            this.midNum - 15 < this.section[i].id &&
            this.section[i].id < this.midNum + 16
          ) {
            this.sectionList.push(this.section[i])
          }
        }
      })
      getAlbums().then(res => {
        this.albumsClass = res.data.albumsClass
      })
    },
    getImageSrc () {
      getImage().then(res => {
        this.imageSrc = res.data.imageList.src
      })
    },
    play (index) {
      this.$store.commit('play', musicList[0])
      if (typeof index === 'object') {
        index = 0
      }
      let active = document.getElementsByClassName('active')[1]
      let SLN = document.getElementsByClassName('sound-list-num')[index]
      if (typeof active !== 'undefined') {
        let active = document.getElementsByClassName('active')[0]
        let show = document.getElementsByClassName('show')[0]
        show.classList.remove('show')
        active.classList.remove('active')
      }
      SLN.classList.add('show')
      this.playingIcon[index].classList.add('active')
    },
    pause () {
      this.$store.commit('pause')
    },
    show () {
      this.intro.style.maxHeight = this.intro.scrollHeight + 'px'
      this.intro.style.height = this.intro.scrollHeight + 'px'
      this.allShow = !this.allShow
    },
    hidden () {
      this.intro.style.maxHeight = ''
      this.intro.style.height = ''
      this.allShow = !this.allShow
    }
  },
  mounted () {
    getImage().then(res => {
      this.imageSrc = res.data.imageList.src
    }),
    this.intro = document.getElementById('intro')
    this.playingIcon = document.getElementsByClassName('playingIcon')
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.detail-layout-main {
  width: 820px;
  float: left;
  .detail-wrapper {
    position: relative;
    padding: 40px 20px 20px;
    background: #fff;
    .album-info {
      position: relative;
      padding-bottom: 40px;
    }
    .album-intro {
      padding-top: 20px;
      word-wrap: break-word;
      border-top: 1px solid #e8e8e8;
    }
  }
}

.album-info-cover {
  position: relative;
  z-index: 1;
  width: 243px;
  height: 201px;
  float: left;
}

.album-info-img {
  position: absolute;
  left: 15px;
  width: 186px;
  height: 200px;
}

.album-info .info {
  float: right;
  width: 520px;
  .title-icon {
    float: left;
    margin-right: 5px;
    margin-top: 6px;
  }
  .title {
    font-family: PingFangSC-Medium, sans-serif;
    font-size: 20px;
    line-height: 32px;
    color: #333;
  }
  .category {
    margin: 5px 0 10px;
  }
  .tags {
    min-height: 34px;
    .tags-item {
      display: inline-block;
      padding: 2px 10px;
      color: #666;
      background: #f3f4f5;
      border-radius: 4px;
      margin-right: 10px;
    }
  }
  .controls {
    margin-top: 13px;
    span {
      font-size: 20px;
      vertical-align: middle;
    }
  }
}

.controls-play-icon, .controls-pause-icon {
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(252, 88, 50, 0.5);
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.album-intro .intro {
  font-size: 16px;
  line-height: 30px;
  white-space: pre-wrap;
  max-height: 360px;
  overflow: hidden;
  transition: all 0.3s ease;
  p {
    font-weight: normal;
    text-align: justify;
  }
}

.clearfix {
  zoom: 1;
}

.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}

.more-inro-wrapper {
  position: relative;
  padding-top: 20px;
  text-align: center;
  color: #a3a3ac;
  font-size: 12px;
  letter-spacing: 1.2px;
  cursor: pointer;
  .blur {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: -100px;
    height: 100px;
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0) 0,
      #fff 100%
    );
  }
  .K6KV {
    text-align: center;
    color: #a3a3ac;
    font-size: 12px;
    letter-spacing: 1.2px;
  }
  .arrow {
    position: relative;
    right: 0;
    top: 0;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    width: 7px;
    height: 7px;
    border: 2px solid #999;
    transform: rotate(45deg);
  }
  .arrow-bottom {
    margin-top: -5px;
    margin-left: 5px;
    border-top: 0;
    border-left: 0;
  }
  .arrow-top {
    margin-top: 1px;
    margin-left: 5px;
    border-right: 0;
    border-bottom: 0;
  }
}

.clearFix:before,
.clearFix:after {
  content: " ";
  display: table;
}

.clearFix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
}

.sound-list-wrapper {
  background: #fff;
  margin: 20px 0 0 0;
  padding: 0 20px;
  .head {
    padding: 10px 0;
    border-bottom: 1px solid #e8e8e8;
    .album-sound {
      margin: 4px 10px 0 0;
      float: left;
      font-size: 20px;
      font-weight: 400;
    }
    .xui-button > .xuicon {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      vertical-align: text-bottom;
    }
    .sort {
      float: right;
      margin-top: 7px;
      a:hover {
        color: #f86422;
      }
    }
  }
}

.icon-wrapper {
    min-width: 26px;
    text-align: center;
    line-height: 0;
    padding: 0 5px;
    vertical-align: middle;
    cursor: pointer;
    display: inline-block;
}

.sound-list-item {
  position: relative;
  padding: 10px 0;
  height: 20.734px;
  border-bottom: 1px solid #e8e8e8;
  // .sound-list-num {
  //   display: inline-block;
  // }
  .text {
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;
    width: 367px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .operate {
    display: inline-block;
    margin-left: 176px;
    color: #a3a3ac;
    vertical-align: middle;
  }
  .time {
    float: right;
    color: #a3a3ac;
    line-height: 20px;
  }
}

.sound-list-item:hover {
  cursor: pointer;
  color: #f86422;
  .sound-list-num {
    display: none;
  }
  .playingIcon {
    display:inline-block;
  }
}

.playingIcon {
  background-image: url(../assets/svg/playingIcon.svg);
  background-size: 100% 100%;
  display: none;
}

.sound-list-item:last-child {
  border-bottom: 0;
}

.detail-layout-side {
  width: 240px;
  margin-left: 20px;
  float: left;
  .mgb-20 {
    margin-bottom: 20px;
    .xui-card .border {
      border-bottom: 1px solid #e8e8e8;
    }
  }
}

.xui-card-head {
  //   margin: 0 10px;
  font-size: 16px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  letter-spacing: 0;
}

.xui-card-head-title {
  font-size: 16px;
  font-weight: 400;
  padding: 10px 0 10px 0;
  .xui-card-extra {
    float: right;
    font-size: 14px;
    color: #666;
    line-height: 22px;
  }
}

.xui-card-body {
  overflow: hidden;
}

.anchor-info-head {
  margin-top: 10px;
  .anchor-info-avatar {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      background-color: #ccc;
      border-radius: 50%;
    }
  }
  .anchor-info-nick {
    margin-left: 10px;
    display: inline-block;
    .xui-vicon {
      width: 27px;
      height: 16px;
      display: inline-block;
      vertical-align: sub;
    }
  }
}

.anchor-info .anchor-stats {
  margin: 10px 0;
  white-space: nowrap;
  .anchor-stats-item {
    color: #40404c;
    .QlfO {
      color: #a3a3ac;
      margin-right: 5px;
    }
  }
  .anchor-stats-item:nth-child(n + 2) {
    margin-left: 20px;
  }
}

.anchor-info .anchor-intro {
  color: #a3a3ac;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 10px;
}

.xui-card .border {
  border-bottom: 1px solid #e8e8e8;
}

.general-list-item {
  border-top-color: transparent;
  padding: 10px 0;
  height: 60px;
  border-bottom: 1px dashed #e8e8e8;
  .item-link {
    display: inline-block;
    width: 100%;
    height: 100%;
    .box {
      vertical-align: middle;
      height: 100%;
      max-width: 60px;
      // max-height: 60px;
      display: inline-block;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .gl-item-content {
      display: inline-block;
      max-width: 150px;
      vertical-align: middle;
      .gl-item-content-title {
        // display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 40px;
        line-height: 1.4;
        color: #40404c;
        font-size: 14px;
        font-weight: 400;
      }
      .sub-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 12px;
        line-height: 1.4;
        margin-top: 3px;
        color: #a3a3ac;
      }
    }
  }
}

.recommend-list {
  padding: 0 10px;
  background: #fff;
  .recommend-list-head {
    line-height: 45px;
    height: 45px;
    font-weight: 400;
    font-size: 16px;
    border-bottom: 1px solid #e8e8e8;
    .recommend-list-head-title {
      float: left;
    }
    .change {
      vertical-align: middle;
      float: right;
    }
  }
}
.ad1 {
  display: block;
  width: 100%;
}

.Rtye {
  vertical-align: text-top;
  margin-top: 1px;
  margin-right: 5px;
}

.show {
  display: none;
}

 .play, .pause {
     display: inline-block;
     cursor: pointer;
 }

//  .playing{
//    display: none;
//  }

 .active {
   display: inline-block;
 }
</style>

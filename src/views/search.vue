<template>
  <main class="search-content">
    <div class="search-result_search"
         v-if="isShow">
      <p class="tip">
        喵，没有找到
        <span>{{WD}}</span>
        相关结果~
      </p>
      <p class="recommend-content">推荐一些相关的专辑，希望你喜欢哦！</p>
    </div>
    <div class="recommend-content SC"
         v-if="!isShow">
      <div class="SC-title">
        '<span style="color: #f86422;">{{WD}}</span>' 相关的专辑
      </div>
      <ul>
        <li class="albums"
            v-for="(item, index) in array"
            :key="index">
          <div class="albums-wrapper">
            <div class="wrapper-card">
              <a class="picture">
                <img src="../assets/wKgKl1vhb7Lz8e_OAAAbTdzU2Pw747.jpg">
                <p class="albums-plays">
                  <i class="icon-earphone xuicon xuicon-erji EV"></i>
                  {{item.plays}}w
                </p>
              </a>
            </div>
            <a class="bookname"
               style="color: #f86422; font-weight: 1;">
              <span>{{item.name}}</span>
            </a>
            <a class="uper">
              <span>by:&nbsp;&nbsp;{{item.uper}}</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { getAlbums } from '@/js/request'
export default {
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    this.getData()
  },
  computed: {
    isShow () {
      return this.$store.state.search
    },
    array () {
      return this.$store.state.array
    },
    WD () {
      return this.$route.query.wd
    }
  },
  methods: {
    getData () {
      getAlbums().then(res => {
        this.recommendList = res.data.recommendList
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.search-content {
  padding-top: 10px;
  display: block;
  width: 1080px;
  margin: 20px auto 0;
  min-height: 260px;
  background-color: #fff;
  //   text-align: center;
  .search-result_search {
    padding: 100px 0px;
    text-align: center;
    .recommend-content {
      font-size: 14px;
      line-height: 1.43;
      color: rgb(163, 163, 172);
    }
  }
}
.tip {
  font-size: 16px;
  line-height: 1.38;
  color: rgb(114, 114, 123);
  span {
    color: red;
  }
}

.albums {
  display: inline-block;
  margin-left: 20px;
  .albums-wrapper {
    position: relative;
    width: 140px;
    height: 190px;
    .wrapper-card {
      position: relative;
      width: 140px;
      height: 140px;
      .picture {
        position: relative;
        width: 100%;
        height: 100%;
        display: inline-block;
        box-shadow: 0 1px 3px #a0a0a0;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;
      }
    }
  }
}

.SC {
  padding: 0 10px;
  float: left;
}

.SC-title {
  font-family: PingFangSC-Medium;
  display: inline-block;
  line-height: 60px;
  margin-left: 30px;
  font-size: 16px;
  color: #40404c;
}
</style>

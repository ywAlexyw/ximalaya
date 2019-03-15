<template>
  <main class="main-page">
    <div class="search-result_search">
      <p class="tip">
        喵，没有找到
        <span>{{WD}}</span>
        相关结果~
      </p>
      <p class="recommend-content">推荐一些相关的专辑，希望你喜欢哦！</p>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    WD () {
      return this.$route.query.wd
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.main {
  padding-top: 10px;
  display: block;
  width: 1080px;
  margin: 20px auto 0;
  min-height: 260px;
  background-color: #fff;
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

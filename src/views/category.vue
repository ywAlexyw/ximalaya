<template>
    <main class="main-page">
        <div class="section">
            <div class="breadcrumb">
                <a href="/">首页</a>
                >全部分类
            </div>
            <div class="category-header">
                <h1 class="title">热门分类</h1>
            </div>
            <div class="category-hotword">
              <template v-for="(item, index) in recommendType">
                <div class="category-hotword-wrapper" :key="index" v-if="index < 2">
                    <div class="hotword">
                        <a href="/">
                            <h2 class="H2">
                                <img :src="item.image">{{item.name}}
                            </h2>
                        </a>
                    </div>
                    <div class="list">
                        <a class="sub-name" v-for="(sub,index) in item.list" :key="index">{{sub.name}}</a>
                    </div>
                </div>
              </template>
            </div>
            <div class="plates">
              <template v-for="(item, index) in recommendType">
                <div class="category-plate" :key="index" v-if="index > 1">
                    <h2 class="title H2" :class="item.id" >{{item.name}}</h2>
                    <div class="body">
                        <div class="subject" v-for="(sub, index) in item.list" :key="index" >
                            <div class="subject-title">
                                <a href="/">
                                    <h2  class="H2">
                                        <img :src="sub.image">{{sub.name}}
                                    </h2>
                                </a>
                            </div>
                            <div class="subject-list">
                                <a class="subject-list-item" v-for="(item, index) in className" :key="index">{{item.name}}</a>
                            </div>
                        </div>
                    </div>
                </div>
              </template>
            </div>
        </div>
    </main>
</template>
<script>
import { getClass } from '@/js/request'

export default {
  data () {
    return {
      recommendType: [],
      className: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getClass().then(res => {
        this.recommendType = res.data.recommendType
        this.className = res.data.className
      })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.main-page {
  .breadcrumb {
    font-size: 12px;
    color: #72727b;
    margin: 20px 0;
  }
  .category-header {
    padding: 15px 20px 0;
    margin-top: 20px;
    background: #fff;
    h1 {
      font-size: 20px;
      font-weight: 400;
      line-height: 1.4;
      color: #40404c;
      letter-spacing: 0;
      position: relative;
      padding-left: 16px;
      display: inline-block;
      padding-bottom: 14px;
      border-bottom: 1px solid #e8e8e8;
      display: block;
    }
  }
}

.category-hotword {
  width: 1040px;
  height: 197px;
  margin-bottom: 20px;
  background: #fff;
  padding: 0 20px;
  .category-hotword-wrapper {
    position: relative;
    height: 98px;
    border-bottom: 1px solid #e8e8e8;
    .hotword {
      width: 170px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      font-size: 20px;
      text-align: left;
      color: #333;
    }
    .list {
      margin-left: 170px;
      padding: 20px 15px;
      .sub-name {
        position: relative;
        display: inline-block;
        line-height: 29px;
        padding: 0 15px;
        color: #666;
        font-size: 14px;
      }
    }
  }
}

.H2 {
  font-weight: 400;
  font-size: 20px;
}

.hotword h2 {
  position: absolute;
  display: table;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: 20px;
  transform: translateY(-50%);
  img {
    width: 36px;
    height: 36px;
    vertical-align: middle;
    margin-top: -5px;
    margin-right: 10px;
  }
}
.category-content h2 {
  font-weight: 400;
  font-size: 20px;
}

.category-plate {
  position: relative;
  background: #fff;
  margin-bottom: 20px;
  .title {
    position: relative;
    display: inline-block;
    width: 1024px;
    line-height: 1.4;
    margin-left: 20px;
    margin-top: 14px;
    padding-left: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid #e8e8e8;
  }
  .body {
    flex-wrap: wrap;
    padding: 15px 14px;
    .subject {
      display: inline-block;
      padding: 30px 30px 20px 30px;
      width: 290px;
      //   min-height: 367px;
    }
  }
}

.subject-title {
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
  text-align: center;
}

.subject-list {
  text-align: center;
  .subject-list-item {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    line-height: 35px;
    color: #666;
  }
}
.subject img {
  display: block;
  margin: 0 auto 5px;
  width: 36px;
  height: 36px;
}

.category-plate .title:before {
  content: "";
  position: absolute;
  display: inline-block;
  width: 5px;
  height: 15px;
  left: 0;
  top: 6px;
  border-radius: 6px;
}

.title_3:before {
  background-color: #f8d16c;
}

.title_4:before {
  background-color: #7cc2ef;
}

.title_5:before {
  background-color: #4dd298;
}

.hotword:before{
    content: "";
    height: 70%;
    background-color: #e8e8e8;
    position: absolute;
    right: 0;
    top: 15%;
    width: 1px;
}

.category-header .title:before {
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

.Sd:nth-child(1),
.Sd:nth-child(2) {
  box-shadow: 1px 0 0 0 #e8e8e8;
}

.Sd:nth-child(4),
.Sd:nth-child(5) {
  box-shadow: 1px 0 0 0 #e8e8e8, 0 -1px 0 0 #e8e8e8;
}
.Sd:nth-child(3) {
  box-shadow: inset 0 -1px 0 0 #e8e8e8;
}
a:hover{
    color: #f86442;
}
</style>

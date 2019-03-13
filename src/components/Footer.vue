<template>
    <div class="footer">
        <div class="content">
            <div class="footer-nav">
                <div class="nav-wrapper">
                    <div class="nav-item" v-for="(item, index) in navTitle" :key="index" :class="{ last: index === 3 }">
                        <p class="title">{{item.title}}</p>
                        <!-- <img :src="item.url" alt=""> -->
                        <a v-for="(sub, index) in item.name" :key="index">{{sub.id}}</a>
                    </div>
                </div>
                <div class="cooper-wrapper">
                    <p class="title">合作与服务</p>
                    <div class="nav">
                        <a class="nav-item" v-for="(item, index) in cooper" href="/" :key="index" :class="{ last: index === 3 }">
                            <i class="icon" :class="item.id"></i>
                            <div class="inl-b">
                                <span>{{item.name}}</span>
                                <p>{{item.cont}}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-mid">
                <div class="forter-content">
                    <div class="fb-1">
                        <span>
                        喜马拉雅FM是专业的音频分享平台，汇集了有声小说，有声读物，有声书，儿童睡前故事，相声小品，鬼故事等数亿条音频，超过4.7亿用户选择的网络电台。听书，听小说等有声读物，就在喜马拉雅FM。随时随地，听我想听。
                        </span>
                    </div>
                    <div class="fb-1">
                        <p class="title_0">快捷入口</p>
                        <a  class="item" v-for="(item, index) in quickEnter" href="/" :key="index">{{item.name}}</a>
                    </div>
                    <div class="fb-1">
                        <p class="title_0">友情链接</p>
                        <a  class="item" v-for="(item, index) in friendLinks" href="/" :key="index">{{item.name}}</a>
                    </div>
                </div>
            </div>
            <div class="footer-bot">
                <div class="forter-content">
                    <div class="link-wrapper">
                        <a class="item-id" v-for="(item, index) in spaceName" :key="index">{{item.name}}</a>
                    </div>
                    <p class="copyright-cont">Copyright © 2012-2018 www.ximalaya.com lnc.ALL Rights Reserved</p>
                    <p class="copyright-cont">上海证大喜马拉雅网络科技有限公司 版权所有  公司地址：上海市闵行区紫星路588号2幢2062室  客服热线：400-838-5616</p>
                    <p class="copyright-cont">
                    信息网络传播视听节目许可证1908287号  |  互联网直播服务备案号：沪ILS备201708210007  |  沪网文【2016】6034-453号沪ICP备13027243号-3
                    <i class="link-wrapper-i_1"></i>
                    沪公网安备 31011502005603号
                    </p>
                    <p class="copyright-cont">
                    违法不良信息举报电话：400-838-5616  |  《举报受理和处置管理办法》
                    </p>
                    <div class="copyright-cont">
                        <a class="item" v-for="(item, index) in address" :key="index" >
                            <i class="icon" :class="item.id"></i>
                            {{item.name}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 类目第一个字母大写
// class Student {

// }
// 变量驼峰
// 常量全大写
// view - 包含关系  大-小
// _ 分析状态 disable
import { getFooter } from '@/js/request'
export default {
  data () {
    return {
      navTitle: [],
      cooper: [],
      quickEnter: [],
      friendLinks: [],
      spaceName: [],
      address: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    // getData() {
    // this.navTitle = [
    //     {
    //         id: 1,
    //         title: '水电费水电费',
    //         url: 'https://s1.xmcdn.com/lib/xmweb/images/img_open_f8de94c.png'
    //     },
    //     {
    //         id: 2,
    //         title: '阿萨德群无热',
    //         url: 'https://s1.xmcdn.com/lib/xmweb/images/img_A+_5ac7a3f.png'
    //     }
    // ]
    // setTimeout(() => {
    //     this.$set(this.navTitle, 1, { id: 3, title: '群殴如期无人', url: 'https://s1.xmcdn.com/lib/xmweb/images/img_inside_abb68ae.png'})
    // }, 2000)
    getData () {
      getFooter().then(res => {
        this.navTitle = res.data.navTitle
        this.cooper = res.data.cooper
        this.quickEnter = res.data.quickEnter
        this.friendLinks = res.data.friendLinks
        this.spaceName = res.data.spaceName
        this.address = res.data.address
      })
    }
  }
}
//     function forEach (callback) {
//         for (var i = 0; i < list.length; i++) {
//             callback(list[i])
//         }
//     }

//     list.forEach((item,124214u124uiy) => {

//     })

//     navTitle = [ 1,2,3,4,5]
//     navTitle = [
//         {
//             id: 1,
//         },
//         {
//             id: 2
//         }
//     ]
//     navTitle.forEach((item, index) => {
//         console.lg(item.id)
//     })
// })
// getFooter(function (data) {
//     _self.NavTitle = data.NavTitle
// })

// }
// }
// }
// function getFooter2(callback) {
//     axios.get('https://www.easy-mock.com/mock/5be3dba0c1e781069a93431c/getFooter').then(function (data) {
//         callback(data.data)
//     })
// }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.footer {
  width: 1080px;
  margin: 100px auto 0;
  .footer-nav {
    margin-bottom: 20px;
    .nav-wrapper {
      min-height: 100px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e8e8e8;
      a {
        color: #72727b;
        margin-right: 10px;
        line-height: 25px;
        &:hover {
          color: #f86442;
        }
      }
    }
    .cooper-wrapper {
      height: 100px;
      border-bottom: 1px solid #e8e8e8;
      .icon {
        display: inline-block;
        vertical-align: middle;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background-size: 100%;
        background-repeat: no-repeat;
      }
      .inl-b {
        vertical-align: middle;
        display: inline-block;
        span {
          color: #72727b;
        }
        p {
          color: #a3a3ac;
        }
      }
    }
  }
}
.footer-mid {
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 20px;
}
.fb-1 {
  margin-bottom: 20px;
  font-size: 12px;
  color: #a3a3ac;
  text-align: left;
  p {
    font-weight: bolder;
    line-height: 17px;
  }
  .item {
    margin-right: 10px;
    color: #a3a3ac;
  }
  >a {
      &:hover {
        color: #f86442;
      }
  }
}
.footer-bot {
  padding-bottom: 70px;
  .forter-content {
    text-align: center;
    // margin-bottom: 10px;
    .link-wrapper {
       text-align: center;
       margin-bottom: 10px;
        .item-id {
            color: #72727b;
            font-size: 14px;
            &:hover {
                color: #f86442;
            }
        }
      }
      .icon {
        margin: 0 10px;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        background-size: 100%;
        background-repeat: no-repeat;
      }

    .copyright-cont {
        font-size: 12px;
        line-height: 25px;
        color: #a3a3ac;
        letter-spacing: 0;
        text-align: center;
        >a {
            color: inherit;
        }
    }
  }
}
.nav-item {
  width: 225px;
  float: left;
  margin-right: 55px;
}

.last {
  margin-right: 0px;
}

.title {
  margin-bottom: 10px;
}

.link-wrapper-i_1{
    display: inline-block;
    vertical-align: middle;
    width: 15px;
    height: 15px;
    background-size: 100%;
}
</style>

<template>
    <div class="float-bar">
      <div class="bar-item QR"
        @mouseenter="showItem(1)"
        @mouseleave="showItem(0)">
        <div class="item-QRcode barlayout" :class="{ showclass : QRShow }">
          <i class="QR-icon float-bar-t-35 xuicon xuicon-QRcode huWm"></i>
        </div>
        <transition name="bounce">
          <div class="item-content showit" v-if="QRShow" >
            <div class="QR-box">
              <div class="QR-download">
                <div class="QR-download-title">下载手机APP</div>
                <div class="QR-image">
                  <img src="https://s1.xmcdn.com/lib/xmweb/images/QRCode_c35aacf.png">
                </div>
                <div class="QR-content">
                  <p>扫一扫 下载喜马拉雅手机APP</p>
                </div>
              </div>
              <div class="else-download">
                <div class="download-way">选择下载方式</div>
                <div class="download-way-icon">
                  <a>
                    <i class="xuicon xuicon-iOS gray-c float-bar-t-30 huWm"></i>
                    <p>iPhone</p>
                  </a>
                  <a>
                    <i class="xuicon xuicon-android gray-c float-bar-t-30 huWm"></i>
                    <p>Android</p>
                  </a>
                  <a>
                    <i class="xuicon xuicon-wp gray-c float-bar-t-30 huWm"></i>
                    <p>Windows</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="bar-item weiXin"
        @mouseenter="showItem(2)"
        @mouseleave="showItem(0)">
        <div class="item-QRcode barlayout" :class="{ showclass : weiXinShow }">
          <i class="weiXin-icon float-bar-t-35 xuicon xuicon-WeChat huWm"></i>
        </div>
        <transition name="bounce">
          <div class="item-content showit" v-if="weiXinShow" >
            <div class="weixin-box">
              <div class="weixin-box-title">关注微信公众号</div>
              <div class="weixin-image">
                <img src="https://s1.xmcdn.com/lib/xmweb/images/qrcode_iloveximalaya_1_e278f36.jpg">
              </div>
              <div class="weixin-content">
                <p>扫一扫关注我</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="bar-item help"
        @mouseenter="showItem(3)"
        @mouseleave="showItem(0)">
        <div class="item-QRcode barlayout" :class="{ showclass : helpShow }">
          <i class="help-icon float-bar-t-35 xuicon xuicon-feedback huWm"></i>
        </div>
        <transition name="bounce">
          <div class="item-content showit" v-if="helpShow">
            <div class="help-box">
              <div class="help-box-title">意见反馈</div>
              <div class="help-image">
                <img src="https://s1.xmcdn.com/lib/xmweb/images/qrcode_iloveximalaya_1_e278f36.jpg">
              </div>
              <div class="help-content">
                <div class="text-t1">1.您可通过官方App在</div>
                <p>
                  ‘帮助与反馈’中留言
                  <span>（推荐）</span>
                </p>
                <div class="text-t2">2.拨打客服热线:</div>
                <p>400-838-5616</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div
        class="bar-item toTop"
        @click="toTop"
        v-if="isShow"
        @mouseenter="showItem(4)"
        @mouseleave="showItem(0)"
      >
        <div class="item-QRcode barlayout" :class="{ showclass : toTopShow }">
          <i class="toTop-icon float-bar-t-35 xuicon xuicon-top huWm"></i>
        </div>
        <transition name="bounce">
          <div class="item-content showit" v-if="toTopShow" style="padding: 10px 50px; width: 64px; bottom: 3px;" >
            <div class="totop-text" style="font-size: 16px;">回到顶部</div>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      toTopShow: '',
      helpShow: '',
      weiXinShow: '',
      QRShow: '',
      isShow: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < 300) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },
    toTop () {
      window.scrollTo(0, 0)
      this.toTopShow = false
    },
    showItem (index) {
      switch (index) {
        case 1:
          this.QRShow = true
          break
        case 2:
          this.weiXinShow = true
          break
        case 3:
          this.helpShow = true
          break
        case 4:
          this.toTopShow = true
          break
        default:
          this.toTopShow = false
          this.helpShow = false
          this.QRShow = false
          this.weiXinShow = false
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.float-bar {
  position: fixed;
  width: 48px;
  bottom: 84px;
  right: 40px;
  background: #fff 95%;
  border: 1px solid #f3f4f5;
  padding-top: 5px;
  border-radius: 4px;
  z-index: 2;
}

.bar-item {
  padding: 0 5px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover i {
    color: #f86642;
  }
  .barlayout {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    color: #ccc;
  }
}

.huWm {
  font-size: 35px;
  line-height: 40px;
}

.item-content {
  display: none;
  position: absolute;
  bottom: -10px;
  right: 65px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transform-origin: right center;
  z-index: 100;
  .QR-box {
    width: 260px;
    text-align: center;
    padding-top: 20px;
    .QR-download {
      padding: 0 30px;
    }
    .else-download {
      margin-top: 15px;
      padding-top: 20px;
      padding-bottom: 15px;
      background: #f3f4f5;
    }
  }
}

.QR-download-title {
  font-size: 18px;
  padding-bottom: 15px;
  line-height: 22px;
}

.item-content .QR-image,
.item-content .weixin-image,
.item-content .help-image {
  padding-bottom: 10px;
  min-width: 140px;
  text-align: center;
}
.item-content img {
  width: 140px;
  height: 140px;
  // vertical-align: bottom;
}
.QR-download .QR-content,
.totop-text {
  color: #a3a3ac;
}

.else-download {
  margin-top: 15px;
  padding: 15px 0 20px;
  background: #f3f4f5;
  .download-way {
    padding-bottom: 15px;
    color: #72727b;
  }
  .download-way-icon {
    overflow: hidden;
    a {
      display: block;
      float: left;
      text-align: center;
      width: 33.3%;
      color: #a3a3ac;
      i {
        font-size: 30px;
        color: #ccc;
      }
      p {
        padding: 5px;
      }
      &:hover,
      &:hover i {
        color: #f86642;
      }
    }
  }
}

.item-content .weixin-box,
.item-content .help-box {
  padding: 20px;
  .weixin-box-title,
  .help-box-title {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 15px;
    text-align: center;
  }
}

.weixin-content,
.help-content {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #a3a3ac;
}

.help-box {
  width: 168px;
}

.help-content {
  font-size: 12px;
  span {
    color: #f86442;
  }
  .text-t2 {
    padding-top: 10px;
  }
}

.item-content:after {
  content: "";
  position: absolute;
  width: 20px;
  top: 0;
  right: -20px;
  bottom: 0;
  border-left: 2px solid #000;
  border-right: 0;
  border-top: 0;
  border-bottom: 0;
  border-image: linear-gradient(#fc9d77 0, #f86442 100%) 5 5;
}

.bar-item:hover .item-content {
  opacity: 1;
}

.showclass:after {
  content: "";
  display: inline-block;
  position: absolute;
  border-left: 8px solid #f98442;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  top: 12px;
  left: -18px;
}
.showit {
  display: block;
}

.bounce-enter-active {
  transition: all .3s;
}
.bounce-leave-active {
  transition: all .3s;
}
.bounce-enter, .bounce-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>

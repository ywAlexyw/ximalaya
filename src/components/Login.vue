<template>
    <div class="login" v-if="isShowLogin">
        <div class="login-content">
            <div class="login-tab-btn" @click="loginTab">
                <i class="login-tab-btn-icon" style="width: 55px; height: 55px;">
                    <svg id="icon-denglu-qiehuan-mimadenglu" v-show="QRcode" viewBox="0 0 1117 1024" width="100%" height="100%"><path d="M93.090909 800.581818h930.909091c20.48 0 37.236364-16.756364 37.236364-37.236363V93.090909c0-20.48-16.756364-37.236364-37.236364-37.236364H93.090909c-20.48 0-37.236364 16.756364-37.236364 37.236364v670.254546c0 20.48 16.756364 37.236364 37.236364 37.236363z m441.250909 167.563637v-107.985455-3.723636H40.96C18.618182 856.436364 0 837.818182 0 815.476364V40.96C0 18.618182 18.618182 0 40.96 0h1033.309091C1098.472727 0 1117.090909 18.618182 1117.090909 40.96v776.378182c0 22.341818-18.618182 40.96-40.96 40.96H584.610909V968.145455h377.949091c13.032727 0 26.065455 13.032727 26.065455 27.927272s-11.170909 27.927273-26.065455 27.927273H156.392727c-14.894545 0-26.065455-13.032727-26.065454-27.927273S141.498182 968.145455 156.392727 968.145455h377.949091z" fill="#CCCCCC"></path><path d="M165.701818 726.109091c-18.618182 0-35.374545-14.894545-35.374545-31.650909V161.978182C130.327273 145.221818 145.221818 130.327273 165.701818 130.327273h787.549091c18.618182 0 35.374545 14.894545 35.374546 31.650909v532.48c0 16.756364-14.894545 31.650909-35.374546 31.650909H165.701818z" fill="#CCCCCC"></path></svg>
                    <svg id="icon-denglu-qiehuan-erweima" v-show="!QRcode" viewBox="0 0 1025 1024" width="100%" height="100%"><path d="M498.967273 409.6h27.927272c7.447273 0 13.032727-7.447273 13.032728-14.894545V14.894545c0-7.447273-5.585455-14.894545-13.032728-14.894545h-27.927272c-9.309091 0-14.894545 7.447273-14.894546 14.894545v379.81091c0 7.447273 5.585455 14.894545 14.894546 14.894545zM498.967273 1024h27.927272c7.447273 0 13.032727-7.447273 13.032728-14.894545V629.294545c0-7.447273-5.585455-14.894545-13.032728-14.894545h-27.927272c-7.447273 0-14.894545 7.447273-14.894546 14.894545v379.81091c0 7.447273 5.585455 14.894545 14.894546 14.894545zM966.283636 0H672.116364C640.465455 0 614.4 26.065455 614.4 57.716364v292.305454c0 31.650909 26.065455 57.716364 57.716364 57.716364h292.305454c31.650909 0 57.716364-26.065455 57.716364-57.716364V57.716364c1.861818-31.650909-24.203636-57.716364-55.854546-57.716364z m1.861819 323.956364c0 16.756364-13.032727 29.789091-29.789091 29.789091H700.043636c-16.756364 0-29.789091-13.032727-29.789091-29.789091V85.643636c0-16.756364 13.032727-29.789091 29.789091-29.789091h238.312728c16.756364 0 29.789091 13.032727 29.789091 29.789091v238.312728zM1009.105455 484.072727H14.894545c-9.309091 0-14.894545 5.585455-14.894545 14.894546v27.927272c0 7.447273 5.585455 13.032727 14.894545 13.032728h996.072728c7.447273 0 14.894545-5.585455 14.894545-13.032728v-27.927272c-1.861818-9.309091-7.447273-14.894545-16.756363-14.894546zM351.883636 0H57.716364C26.065455 0 0 26.065455 0 57.716364v292.305454C0 383.534545 26.065455 409.6 57.716364 409.6h292.305454c31.650909 0 57.716364-26.065455 57.716364-57.716364V57.716364c1.861818-31.650909-24.203636-57.716364-55.854546-57.716364z m1.861819 323.956364c0 16.756364-13.032727 29.789091-29.789091 29.789091H85.643636c-16.756364 0-29.789091-13.032727-29.789091-29.789091V85.643636C55.854545 68.887273 68.887273 55.854545 85.643636 55.854545h238.312728c16.756364 0 29.789091 13.032727 29.789091 29.789091v238.312728zM675.84 614.4h-27.927273c-7.447273 0-14.894545 7.447273-14.894545 14.894545v305.338182c0 9.309091 5.585455 14.894545 14.894545 14.894546h27.927273c7.447273 0 13.032727-7.447273 13.032727-14.894546V629.294545c0-7.447273-5.585455-14.894545-13.032727-14.894545zM822.923636 614.4h-27.927272c-7.447273 0-14.894545 5.585455-14.894546 13.032727v269.963637c0 7.447273 5.585455 13.032727 14.894546 13.032727h27.927272c7.447273 0 14.894545-5.585455 14.894546-13.032727V627.432727c0-7.447273-5.585455-13.032727-14.894546-13.032727zM973.730909 614.4h-27.927273c-7.447273 0-14.894545 7.447273-14.894545 14.894545v342.574546c0 7.447273 5.585455 14.894545 14.894545 14.894545h27.927273c7.447273 0 13.032727-7.447273 13.032727-14.894545V629.294545c0-7.447273-5.585455-14.894545-13.032727-14.894545zM351.883636 614.4H57.716364C26.065455 614.4 0 640.465455 0 672.116364v292.305454C0 997.934545 26.065455 1024 57.716364 1024h292.305454c31.650909 0 57.716364-26.065455 57.716364-57.716364V672.116364c1.861818-31.650909-24.203636-57.716364-55.854546-57.716364z m1.861819 323.956364c0 16.756364-13.032727 29.789091-29.789091 29.789091H85.643636c-16.756364 0-29.789091-13.032727-29.789091-29.789091V700.043636c0-16.756364 13.032727-29.789091 29.789091-29.789091h238.312728c16.756364 0 29.789091 13.032727 29.789091 29.789091v238.312728z" fill="#CCCCCC"></path></svg>
                </i>
            </div>
            <div class="login-closeBtn" @click="closeShowLogin">
                <i class="login-closeBtn-icon" style="width: 30px; height:30px;">
                    <svg id="icon-denglu-guanbi" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m0 955.733333C266.24 955.733333 68.266667 757.76 68.266667 512S266.24 68.266667 512 68.266667s443.733333 197.973333 443.733333 443.733333-197.973333 443.733333-443.733333 443.733333z" fill="#E8E8E8"></path><path d="M774.826667 249.173333c-13.653333-13.653333-34.133333-13.653333-47.786667 0L512 464.213333 296.96 249.173333c-13.653333-13.653333-34.133333-13.653333-47.786667 0-13.653333 13.653333-13.653333 34.133333 0 47.786667l215.04 215.04-215.04 215.04c-13.653333 13.653333-13.653333 34.133333 0 47.786667s34.133333 13.653333 47.786667 0l215.04-215.04 215.04 215.04c13.653333 13.653333 34.133333 13.653333 47.786667 0 13.653333-13.653333 13.653333-34.133333 0-47.786667L559.786667 512l215.04-215.04c13.653333-13.653333 13.653333-34.133333 0-47.786667z" fill="#E8E8E8"></path></svg>
                </i>
            </div>
            <div class="login-pop" v-show="QRcode">
                <div class="login-pop-tabs">
                    <div class="login-pop-tabs-nav">
                      <p>二维码登录</p>
                    </div>
                    <div class="QR-login-icon"></div>
                </div>
           </div>
            <div class="login-pop" v-show="!QRcode">
                <div class="login-pop-tabs">
                    <div class="login-pop-tabs-nav">
                        <p v-if="!isShowRegister">账号登录</p>
                        <p v-if="isShowRegister">欢迎注册</p>
                    </div>
                    <div class="login-pop-tabs-content">
                        <form class="content-form" @submit.prevent.stop="">
                            <div class="form-item">
                                <input class="account" type="text" placeholder="手机号或邮箱" v-model="account">
                            </div>
                            <div class="form-item">
                                <input class="password" type="password" placeholder="密码" v-model="password">
                            </div>
                            <div class="form-item">
                                <button class="login-btn" @click="login" v-if="!isShowRegister">登录</button>
                                <button class="register-btn" @click="register" v-if="isShowRegister">立即注册</button>
                            </div>
                            <div class="form-item" v-if="!isShowRegister">
                                <div class="check-box">
                                  <span>
                                    <svg id="icon-fuxuankuang-weixuan" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M844.8 1024h-665.6C81.92 1024 0 942.08 0 844.8v-665.6C0 81.92 81.92 0 179.2 0h665.6C942.08 0 1024 81.92 1024 179.2v665.6c0 97.28-81.92 179.2-179.2 179.2zM179.2 51.2C107.52 51.2 51.2 107.52 51.2 179.2v665.6C51.2 916.48 107.52 972.8 179.2 972.8h665.6c71.68 0 128-56.32 128-128v-665.6C972.8 107.52 916.48 51.2 844.8 51.2h-665.6z" fill="#E8E8E8"></path></svg>
                                  </span>
                                  下次自动登录
                                </div>
                                <div class="forget">
                                    <a>忘记密码</a>
                                    |
                                    <a @click="showRegister">注册</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="third-part_title" v-if="!isShowRegister">
                        <p>第三方账号登录</p>
                    </div>
                    <div class="third-part_list" v-if="!isShowRegister">
                        <a class="third-part_link">
                            <svg class="icon-QQ" style="width: 40px; height: 40px;">
                                <svg id="icon_QQ" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m263.68 724.48c-15.36 2.56-56.32-64-56.32-64 0 38.4-20.48 89.6-64 125.44 15.36 5.12 35.84 12.8 48.64 23.04 12.8 7.68 10.24 17.92 7.68 20.48-10.24 15.36-156.16 10.24-199.68 5.12-43.52 5.12-192 10.24-199.68-5.12-2.56-2.56-2.56-12.8 7.68-20.48 12.8-10.24 33.28-17.92 48.64-23.04-43.52-35.84-64-87.04-64-125.44 0 0-40.96 66.56-56.32 64-7.68 0-15.36-35.84 12.8-122.88 5.12-17.92 12.8-38.4 20.48-58.88l28.16-71.68v-23.04c0-120.32 58.88-243.2 202.24-243.2 143.36 0 202.24 122.88 202.24 243.2v23.04l28.16 71.68c7.68 20.48 15.36 40.96 20.48 58.88 28.16 87.04 17.92 122.88 12.8 122.88z" fill="#CCCCCC"></path></svg>
                            </svg>
                        </a>
                        <a class="third-part_link">
                            <svg class="icon_weibo" style="width: 40px; height: 40px;">
                              <svg id="icon-share_sina" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M460.8 593.92c-5.12-2.56-15.36 0-17.92 7.68-2.56 5.12-2.56 12.8 5.12 15.36 7.68 2.56 15.36 0 17.92-7.68 2.56-7.68 0-15.36-5.12-15.36z" fill="#CCCCCC"></path><path d="M435.2 481.28c-107.52 10.24-186.88 76.8-179.2 148.48 7.68 71.68 99.84 120.32 204.8 107.52 107.52-10.24 186.88-76.8 179.2-148.48-7.68-69.12-97.28-117.76-204.8-107.52z m92.16 166.4c-20.48 48.64-84.48 76.8-138.24 58.88-51.2-17.92-71.68-66.56-51.2-112.64 23.04-46.08 79.36-71.68 130.56-56.32 53.76 10.24 81.92 61.44 58.88 110.08z" fill="#CCCCCC"></path><path d="M419.84 609.28c-15.36-7.68-38.4 0-48.64 15.36-10.24 15.36-5.12 35.84 10.24 43.52 15.36 7.68 38.4 0 48.64-15.36 12.8-17.92 7.68-35.84-10.24-43.52z" fill="#CCCCCC"></path><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m-51.2 775.68c-133.12 0-268.8-66.56-268.8-174.08 0-56.32 35.84-120.32 94.72-181.76 81.92-81.92 176.64-120.32 209.92-84.48 15.36 15.36 17.92 43.52 7.68 76.8-5.12 15.36 15.36 7.68 15.36 7.68 66.56-28.16 122.88-28.16 143.36 0 10.24 15.36 10.24 38.4 0 64-5.12 12.8 2.56 12.8 10.24 17.92 35.84 12.8 76.8 38.4 76.8 89.6 0 81.92-115.2 184.32-289.28 184.32z m240.64-343.04c5.12-12.8 2.56-28.16-7.68-40.96-10.24-10.24-25.6-15.36-38.4-12.8-10.24 2.56-23.04-5.12-25.6-15.36-2.56-12.8 5.12-23.04 15.36-25.6 28.16-5.12 58.88 2.56 79.36 25.6 20.48 23.04 25.6 53.76 17.92 81.92-2.56 10.24-15.36 17.92-25.6 12.8-12.8-2.56-17.92-12.8-15.36-25.6z m122.88 40.96c-5.12 12.8-17.92 20.48-30.72 15.36-12.8-5.12-20.48-17.92-15.36-30.72 12.8-40.96 5.12-87.04-25.6-120.32-30.72-33.28-74.24-46.08-115.2-38.4-12.8 2.56-25.6-5.12-28.16-17.92-2.56-12.8 5.12-25.6 17.92-30.72 56.32-12.8 120.32 5.12 161.28 53.76 43.52 48.64 53.76 112.64 35.84 168.96z" fill="#CCCCCC"></path></svg>
                            </svg>

                        </a>
                        <a class="third-part_link">
                            <svg class="icon_weixin" style="width: 40px; height: 40px;">
                                <svg id="icon-denglu-weixin" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M499.2 363.52m-33.28 0a33.28 33.28 0 1 0 66.56 0 33.28 33.28 0 1 0-66.56 0Z" fill="#CCCCCC"></path><path d="M332.8 363.52m-33.28 0a33.28 33.28 0 1 0 66.56 0 33.28 33.28 0 1 0-66.56 0Z" fill="#CCCCCC"></path><path d="M578.56 532.48m-28.16 0a28.16 28.16 0 1 0 56.32 0 28.16 28.16 0 1 0-56.32 0Z" fill="#CCCCCC"></path><path d="M716.8 532.48m-28.16 0a28.16 28.16 0 1 0 56.32 0 28.16 28.16 0 1 0-56.32 0Z" fill="#CCCCCC"></path><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m-94.72 640c-30.72 0-58.88-5.12-84.48-12.8-5.12-2.56-10.24 0-15.36 2.56l-53.76 30.72c-12.8 7.68-17.92 2.56-15.36-10.24l12.8-43.52c2.56-5.12 0-12.8-5.12-15.36-53.76-38.4-87.04-94.72-87.04-158.72 0-115.2 112.64-207.36 250.88-207.36 125.44 0 227.84 76.8 245.76 176.64h-12.8c-125.44 0-227.84 84.48-227.84 189.44 0 17.92 2.56 35.84 7.68 51.2-5.12-2.56-10.24-2.56-15.36-2.56z m366.08 81.92c-2.56 2.56-5.12 7.68-5.12 10.24l10.24 38.4c2.56 10.24-2.56 15.36-12.8 10.24l-46.08-25.6c-2.56-2.56-7.68-2.56-12.8-2.56-23.04 7.68-46.08 10.24-71.68 10.24-115.2 0-207.36-76.8-207.36-174.08s92.16-174.08 207.36-174.08 207.36 76.8 207.36 174.08c5.12 53.76-25.6 99.84-69.12 133.12z" fill="#CCCCCC"></path></svg>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="login-pop_footer"></div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      account: '',
      password: '',
      QRcode: false
    }
  },
  created () {
    let userInfo = Cookies.getJSON('userInfo')
    if (userInfo !== undefined) {
      this.$store.commit('login')
    }
  },
  computed: {
    isShowLogin () {
      return this.$store.state.isShowLogin
    },
    isShowRegister () {
      return this.$store.state.isShowRegister
    }
  },
  methods: {
    closeShowLogin () {
      this.$store.commit('closeShowLogin')
    },
    register () {
      if (this.account !== '' && this.password !== '') {
        this.$store.dispatch('register', {
          account: this.account,
          password: this.password
        })
      } else {
        return alert('账号与密码不能为空')
      }
      this.$store.commit('showLogin')
      this.account = ''
      this.password = ''
      alert('注册成功')
    },
    login () {
      if (this.account.trim() === '' || this.password.trim() === '') { return alert('请输入账号密码') }
      this.$store.dispatch('login', {
        account: this.account,
        password: this.password
      })
      this.account = ''
      this.password = ''
      this.$store.commit('closeShowLogin')
      return alert('登录成功')
    },
    showRegister () {
      this.$store.commit('showRegister')
    },
    loginTab () {
      this.QRcode = !this.QRcode
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.login {
  position: fixed;
  overflow: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  .login-content, .QR-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 440px;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
}

.login-tab-btn {
  position: absolute;
  display: block;
  padding-top: 10px;
  text-align: center;
  top: 0;
  right: 0;
  width: 75px;
  height: 75px;
  cursor: pointer;
  z-index: 12;
}

.login-tab-btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.login-closeBtn {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  margin: auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.login-pop {
  padding: 25px 20px 0 20px;
}

.login-pop_footer {
  margin-top: 20px;
  height: 64px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left bottom;
}

.third-part_title {
  position: relative;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #a3a3ac;
  p {
    padding: 0 10px;
    letter-spacing: 0;
    display: inline-block;
    background: #fff;
  }
}

.third-part_list {
  text-align: center;
  .third-part_link {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 20px;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}

.login-pop-tabs-nav {
  // line-height: 18px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e8e8e8;
  p {
    color: #f86442;
    margin-right: 20px;
    padding: 0 10px;
    line-height: 1.39;
    font-size: 18px;
    cursor: pointer;
  }
}
.login-pop-tabs-nav:after {
    content: '';
    position: absolute;
    top: 74px;
    bottom: 0;
    left: 20px;
    width: 92px;
    height: 3px;
    background: #f86442;
    border-radius: 100px;
}

.login-pop-tabs-content .content-form {
  padding-top: 20px;
  font-size: 18px;
  .form-item {
    position: relative;
    margin-bottom: 20px;
    height: 44px;
    input {
      width: 100%;
      height: 44px;
      font-size: 18px;
      line-height: 1.39;
      border: 1px solid #e1e1e1;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px 20px;
    }
    .login-btn, .register-btn {
      display: block;
      width: 100%;
      height: 44px;
      padding: 10px 0;
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 1.39;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .form-item:nth-child(4) {
    // margin-bottom: 0;
    height: 24px;
  }
}

.third-part_title:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
  z-index: -1;
}

.form-item .check-box {
  float: left;
  color: #72727b;
  cursor: pointer;
  span {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border-radius: 3px;
  }
}

.form-item .forget {
  float: right;
  color: #72727b;
  a:nth-child(1) {
    color: #a3a3ac;
  }
  a:nth-child(2) {
    color: #f86442;
  }
}
.login-btn {
      background-image: linear-gradient(90deg, #ff9973 1%, #f86442 95%);
}
.register-btn {
    background-image: linear-gradient(90deg, #317deb 1%, #317deb 95%);
}

.QR-login-icon {
  width: 200px;
  height: 200px;
  margin: 40px auto 10px auto;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(../assets/fc41282fed13452b8ca2730105b55386.png);
}
</style>

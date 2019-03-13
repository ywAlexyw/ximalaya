<template>
  <div id="app">
    <Top/>
    <router-view/>
    <FloatList/>
    <Footer/>
    <Player/>
    <Login/>
    <Audio/>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Player from '@/components/Player'
import Footer from '@/components/Footer'
import FloatList from '@/components/FloatList'
import Login from '@/components/Login'
import Audio from '@/components/Audio'

export default {
  components: {
    Top,
    Player,
    FloatList,
    Footer,
    Login,
    Audio
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

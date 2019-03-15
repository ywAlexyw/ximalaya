<template>
  <card title="相关推荐"
        class="relatedRec">
    <i slot="icon"
       class="i-relatedRec"></i>
    <ul class="relatedRec-list">
      <li v-for="(item, index) in list"
          :key="index">
        <router-link class="relatedRec-item"
                     :to="{ name: 'section', params: { wd: item } }">
          <img class="relatedRec-item-cover"
               :src="item.image"
               alt="">
          <div class="albums-cover">
            <i class="icon-ic_play" @click.stop.prevent="play($event)"></i>
          </div>
          <div class="relatedRec-item-content">
            <p class="title">{{item.description}}</p>
            <p class="subTitle">{{item.name}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </card>
</template>
<script>
import Card from './Card'
import { getSection } from '@/js/request'
import { musicList } from '@/js/defaults'

export default {
  components: {
    Card
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  computed: {
    playing () {
      return this.$store.state.player.playing
    }
  },
  methods: {
    getData () {
      getSection().then(res => {
        this.list = res.data.albumsClass
      })
    },
    play (el) {
      let playing = document.getElementsByClassName('playing')[0]
      if (typeof playing !== 'undefined') {
        el.target.classList.replace('icon-ic_play', 'playing')
        playing.classList.replace('playing', 'icon-ic_play')
      } else {
        el.target.classList.replace('icon-ic_play', 'playing')
      }
      if (el.target.className === 'playing') {
        this.$store.commit('play', musicList[0])
      } else {
        this.$store.commit('pause')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.relatedRec {
  .i-relatedRec {
    margin-top: -4px;
  }
  &-list li:nth-child(n+2) {
    border-top: 1px dashed #e8e8e8;
  }
  &-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    height: 81px;
    box-sizing: border-box;
    &-cover {
      min-width: 60px;
      height: 60px;
      margin-right: 10px;
      vertical-align: middle;
    }
    &-content {
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 40px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;
      }
      .subTitle {
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

.albums-cover {
  font-size: 54px;
  position: absolute;
  width: 60px;
  height: 60px;
  left: 0;
  top: 12px;
  color: #fff;
  background-color: rgba(0,0,0,0);
  transition: all .3s ease-in-out;
  z-index: 11;
  .icon-ic_play, .playing{
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
.relatedRec-item {
  position: relative;
}

.relatedRec-item:hover .albums-cover{
  background-color: rgba(0,0,0,.2);
  .icon-ic_play, .playing{
    opacity: 1;
    transform: scale(0.5);
    z-index: 999;
  }
}
</style>

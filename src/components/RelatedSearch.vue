<template>
  <card title="相关搜索"
        class="relatedSearch">
    <i slot="icon"
       class="i-hot"></i>
    <ul class="relatedSearch-list">
      <li v-for="(item, index) in list"
          :key="index">
        <router-link :to="{ name: 'search', params: { wd: item } }">{{item}}</router-link>
      </li>
    </ul>
  </card>
</template>
<script>
import Card from './Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      list: ['新概念英语第一册', '走遍美国', '英语配音', '英语口语', '幼儿英语']
    }
  }
}
</script>
<style lang="scss" scoped>
.relatedSearch {
  .i-hot {
    margin-top: -4px;
  }
  &-list {
    padding-top: 20px;
    li {
      display: inline-block;
      margin-bottom: 20px;
      margin-right: 10px;
    }
    a {
      display: inline-block;
      padding: 0 10px;
      line-height: 24px;
      font-size: 14px;
      background: #f3f4f5;
      &:hover {
        color: #f86442;
      }
    }
  }
}
</style>

<template>
  <div class="pagination">
    <nav class="pagination-nav">
      <ul class="pagination-page">
        <li class="page-item" v-if="pageNum !== 1">
          <a class="btn-prev page-link"
              :class="{disabled: pageNum === 1}"
              @click="turn(pageNum - 1)">
          </a>
        </li>
        <template v-if="pageCount > 1">
          <li class="page-item"
              v-for="(item, index) in pageList"
              :key="index"
              :class="{'active': pageNum == item, 'sign': item == '...'}"
              @click="turn(item)"
              >
            <a class="page-link"
              href="#">
              <span>{{item}}</span>
            </a>
          </li>
          <li class="page-item" v-if="pageNum != pageCount">
            <a class="btn-next page-link"
                :class="{disabled: pageNum == pageCount}"
                @click="turn(pageNum + 1)">
            </a>
          </li>
        </template>
      </ul>
      <div class="quick-jump">
        <form>
          <input class="control-input" v-model="num"
                 type="number"
                 placeholder="请输入页码">
          <button class="qj-btn" @click="turn(num)" :class="{btn_disabled: disabled}">跳转</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageNum: '',
      paginationLength: 9,
      pageCount: '',
      pageList: [],
      num: ''
    }
  },
  computed: {
    disabled () {
      if (this.num === '' || this.pageNum === parseInt(this.num) || this.num < 1 || this.num > this.pageCount) {
        this.$nextTick(() => {
          var btn = document.getElementsByClassName('qj-btn')[0]
          btn.disabled = true
        })
        return true
      } else {
        this.$nextTick(() => {
          var btn = document.getElementsByClassName('qj-btn')[0]
          btn.classList.add('btn_hover')
          btn.disabled = false
        })
        return false
      }
    }
  },
  methods: {
    turn (index) {
      window.scrollTo(0, 800)
      if (index === '...') {
        this.pageNum = this.pageNum + 5
        this.$store.commit('setMidNum', this.pageNum)
      }
      if (this.pageNum !== index && index > 0 && index < this.pageCount + 1) {
        this.pageNum = index
        this.$emit('turn', this.pageNum)
        typeof this.scrollTop !== 'undefined' && window.scrollTo(0, this.scrollTop)
        this.$store.commit('setMidNum', index)
      }
      this.num = ''
    },
    init () {
      /* eslint-disable */
      let pageCount = this.pageCount
      this.pageNum = 1
      if (pageCount <= this.paginationLength) {
        this.pageList = pageCount
      } else {
        let pageList_1 = [1, 2, 3, 4, 5, 6, '...', pageCount],
          pageList_2 = [1, '...', '', '', '', '', '', '...', pageCount],
          pageList_3 = [
            1,
            '...',
            pageCount - 6,
            pageCount - 5,
            pageCount - 4,
            pageCount - 3,
            pageCount - 2,
            pageCount - 1,
            pageCount
          ]
        this.pageList = pageList_1
        this.unwatch = this.$watch('pageNum', val => {
          if (val <= 5) {
            this.pageList = pageList_1
          } else if (val >= pageCount - 4) {
            this.pageList = pageList_3
          } else {
            pageList_2.splice(2, 5, val - 2, val - 1, val, val + 1, val + 2)
            this.pageList = pageList_2
          }
        })
      }
      /* eslint-enable */
    }
  },
  watch: {
    '$store.state.num' (val) {
      if (val !== '') {
        var k = 0
        let num = this.$store.state.num
        for (let i = 0; i < num; i++) {
          if (i % 30 === 0) {
            k++
            this.pageCount = k
          }
        }
        this.pageCount > 0 && this.init()
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.btn-prev:after,
.btn-next:after {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid #ccc;
    border-radius: 1px;
    display: inline-block;
    border-right: 0;
    border-bottom: 0;
    margin-right: 5px;
}
.btn-next:after {
    transform: rotate(135deg);
}
.btn-prev:after {
    transform: rotate(-45deg);
}

.pagination {
  text-align: center;
  padding: 50px 0 60px 0;
}

.pagination-nav,
.pagination-page {
  display: inline-block;
}

.page-item {
  display: inline-block;
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  border-left: 0;
  width: 40px;
  height: 40px;
  line-height: 40px;
  &:hover {
    background-color: #f86442;
    .page-link {
      color: #fff;
    }
    .btn-next:after, .btn-prev:after{
      border: 2px solid #fff;
      border-right: 0;
      border-bottom: 0;
    }
  }
}
.page-item:first-child {
  border-left: 1px solid #e8e8e8;
  border-radius: 3px 0 0 3px;
}
.page-item:last-child {
      border-radius: 0 3px 3px 0;
}

.quick-jump {
  display: inline-block;
  margin-left: 20px;
  vertical-align: middle;
}

.page-link {
    display: block;
    width: 100%;
    color: #a3a3ac;
    height: 100%;
}

.pagination-page .active {
  background-color: #f86442;
  .page-link {
    color: #fff;
  }
}

.control-input {
  width: 90px;
  height: 40px;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
  color: #40404c;
  border: 1px solid #e8e8e8;
  border: 0;
  background-color: #fff;
  border-radius: 3px 0 0 3px;
  vertical-align: top;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 14px;
}

.qj-btn {
  display: inline-block;
  vertical-align: top;
  width: 66px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  color: #fff;
  border-color: transparent;
  border-radius: 0 3px 3px 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn_hover:hover {
  background-color: #f86442;
}

.btn_disabled {
  cursor: not-allowed;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

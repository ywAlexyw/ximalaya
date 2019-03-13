<template>
  <Layout class="albumPage">
    <div slot="right">
      <card class="mgb20"
            icon="zhubo1"
            title="专辑主播"
            iconColor="#FBC57C">
        <div class="anchor-info">
          <div class="anchor-info-head">
            <a class="anchor-info-avatar"
               href="/zhubo/127946297/">
              <img class="img QlfO"
                   src="//imagev2.xmcdn.com/group47/M06/39/88/wKgKk1udFMKT9OPUAADevH9UdME970.jpg!strip=1&amp;quality=7&amp;magick=jpg&amp;op_type=5&amp;upload_type=cover&amp;name=web_large&amp;device_type=ios">
            </a>
            <a class="anchor-info-nick"
               title="Eva英语开口说"
               href="/zhubo/127946297/">Eva英语开口说</a>
          </div>
          <p class="anchor-info-stats">
            <a class="anchor-info-stats-item"><i class="xuicon xuicon-web_album_ic_voice"></i>71</a>
            <a class="anchor-info-stats-item"><i class="xuicon xuicon-web_album_ic_album"></i>1</a>
            <a class="anchor-info-stats-item"><i class="xuicon xuicon-web_album_ic_fans"></i>16w</a>
          </p>
          <p class="anchor-info-intro">简介：外语</p>
        </div>
      </card>
      <related-search slot="right"
                      class="mgb20"></related-search>
      <img class="ad1 mgb20">
      <related-rec></related-rec>
    </div>
  </Layout>
</template>
<script>
import RelatedSearch from '@/components/RelatedSearch'
import RelatedRec from '@/components/RelatedRec'
import Card from '@/components/Card'
import Layout from '@/layouts/Layout'
export default {
  components: {
    RelatedSearch,
    Layout,
    Card,
    RelatedRec
  }
}
</script>
<style lang="scss">
.albumPage {
  .anchor-info {
    padding-bottom: 10px;
    font-size: 14px;
    &-head {
      margin-top: 10px;
    }
    &-avatar {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
        background-color: #ccc;
        border-radius: 50%;
      }
    }
    &-nick {
      margin-left: 10px;
      display: inline-block;
    }
    &-stats {
      color: #40404c;
      margin: 10px 0;
      white-space: nowrap;
      &-item:nth-child(n + 2) {
        margin-left: 20px;
      }
      i {
        color: #a3a3ac;
        margin-right: 5px;
      }
    }
    &-intro {
      color: #a3a3ac;
      font-size: 12px;
      line-height: 1.4;
    }
  }
  .ad1 {
    display: block;
    width: 100%;
  }
}
</style>



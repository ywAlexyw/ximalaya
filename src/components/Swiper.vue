<template>
  <div id="certify">
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group56/M04/FE/E7/wKgLdlxqSdihbEOvAAIax_sHvX4797.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group53/M01/98/92/wKgLcVwImsHBD5vQAAe-xf_dCis681.png!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group55/M08/A6/D3/wKgLf1x92QuTDw53AAE2iH4P8Q4254.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group55/M02/93/0C/wKgLf1x8-9KAKQmGAAIRd9ki3Vc682.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group51/M0B/21/00/wKgKmlvJRhLAvvgWAAFfI4eBIWo057.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group57/M01/59/B1/wKgLd1xT-nugkJhIAAIRfNNLeb0411.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        <li class="swiper-slide"><router-link to="/"><img src="http://imagev2.xmcdn.com/group55/M09/3A/64/wKgLf1x403nDwY4dAAIQBbDmLf4948.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=cover&name=large_pop&device_type=ios" /></router-link></li>
        </ul>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('#certify .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        progress: function (progress) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            var slideProgress = this.slides[i].progress
            var translate = slideProgress * 160
            if (translate > 0) {
              translate += 275
              if (translate > 590) {
                translate = translate + 600
              }
            } else if (translate < 0) {
              translate += -425
              if (translate < -590) {
                translate = translate - 300
              }
            }
            translate = translate + 'px'
            var scale = 1 - Math.abs(slideProgress) / 5
            var zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
            if (scale !== 1) { scale = 0.8 }
            slide.transform('translateX(' + translate + ') scale(' + scale + ')')
            slide.css('zIndex', zIndex)
            slide.css('opacity', 1)
            if (translate !== '0px' && translate !== '435px' && translate !== '-585px') {
              slide.css('opacity', 0)
            }
            if (Math.abs(slideProgress) > 2) {
              slide.css('opacity', 0)
            }
            if (translate === '535px' || translate === '-985px') {
              slide.css('opacity', 0.8)
            }
          }
        },
        setTransition: function (transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition)
          }
        }
      }
    })
    /* eslint-disalbe no-new */
  }
}

</script>

<style  lang="scss" rel="stylesheet/scss">
#certify {
  position: relative;
  width: 1080px;
  margin: 0 auto;
}

#certify .swiper-container {
  padding-bottom: 20px;
}

#certify .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

#certify .swiper-slide p {
  line-height: 98px;
  padding-top: 0;
  text-align: center;
  color: #636363;
  font-size: 1.1em;
  margin: 0;
}

#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

#certify .swiper-button-prev {
  background: url(https://s1.xmcdn.com/lib/xmweb/images/web_btn_l_h_c5023fd.png);
  top: 50%;
  left: 2px;
}

.swiper-button-prev, .swiper-button-next{
    cursor: pointer;
    position: absolute;
    transform: translateY(-50%);
    width: 30px;
    height: 50px;
    z-index: 2;
    opacity: 0.5;
}

// #certify:hover .swiper-button-prev,#certify:hover .swiper-button-next {
//   opacity: 0.8;
// }

.swiper-button-prev:hover, .swiper-button-next:hover {
  opacity: 1;
}

#certify .swiper-button-next {
  background: url(https://s1.xmcdn.com/lib/xmweb/images/web_btn_r_h_2a03db8.png);
  top: 50%;
  right: 2px;
}

.swiper-slide-duplicate-prev,
.swiper-slide-duplicate-next {
  width: 652.5px;
  height: 261px;
}

.swiper-slide {
  list-style: none;
  display: inline-block;
  width: 750px;
  height: 300px;
  align-items: center;
  // opacity: 0!important;
  transition: all;
}

.swiper-slide-active {
  width: 750px;
  height: 300px;
  // z-index: 3;
  opacity: 0.5;
}

.swiper-slide-next, .swiper-slide-prev {
  transform-origin: 100% 50%;
  z-index: -1;
  opacity: 0.8;
}

// // .swiper-slide-active {
// //   opacity: 1!important;
// // }

// .swiper-slide-next {
//   transform: translate(-587px,0) scale(0.87)!important;
// }

// .swiper-slide-prev {
//   transform: translate(490px,0) scale(0.87)!important;
// }
</style>

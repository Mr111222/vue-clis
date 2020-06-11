<template>
  <div>
    <div>
      <button  @click="test(index)" :class="currentIndex === index ? 'active' : ' ' " v-for="item, index in 5" :key="index">测试{{index+1}}</button> 
    </div>
    <div>
      <swiper ref="mySwiper" :options="swiperOption" class="swiper-container">
        <swiper-slide>
          <ul>
            <li>11144111</li>
            <li>12121212</li>
            <li>12121212</li>
            <li>12121212</li>
            <li>12121212</li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul>
            <li>222222</li>
            <li>222222</li>
            <li>222222</li>
            <li>222222</li>
            <li>222222</li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul>
            <li>33333</li>
            <li>33333</li>
            <li>33333</li>
            <li>33333</li>
            <li>33333</li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul>
            <li>444444</li>
            <li>444444</li>
            <li>444444</li>
            <li>444444</li>
            <li>444444</li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul>
            <li>55555</li>
            <li>55555</li>
            <li>55555</li>
            <li>55555</li>
            <li>55555</li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        currentIndex: 0,
        swiperOption:{
          onTransitionEnd: () => {
            this.currentIndex = this.$refs.mySwiper.swiper.activeIndex
          }
        }
      }
    },
    methods: {
      test (index) {
        this.currentIndex = index
        this.swiper.swiper.slideTo(index, 1000, false)
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper
      }
    },
    mounted() {
     
    }
  }
</script>


<style>
  .active {
    color: red;
    background: pink;
  }
</style>
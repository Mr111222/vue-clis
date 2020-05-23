<template>
  <div class="commodity">
    <div>
      <ve-line :data="chartData"  height="400px"></ve-line>
      <ve-histogram :data="chartData_1" :data-zoom="dataZoom"  height="400px"></ve-histogram>
    </div>
    <div>
      <ve-pie :data="chartData" height="400px"></ve-pie>
      <ve-radar :data="chartData" height="400px"></ve-radar>
      <ve-line :data="chartData_1" :data-zoom="dataZoom"> </ve-line>
    </div>

    <div>
      <p>echarts</p>
      <div id="main" :style="{width:'300px', height: '300px'}"></div>
    </div>
  </div>
 </template> 
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide
  },
  data () {
    this.dataZoom = [
      {
        type: 'slider',
        start: 0,
        end: 20
      }
    ]
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      chartData_1: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1月', '访问用户': 13293, '下单用户': 1093, '下单率':1021 },
          { '日期': '2月', '访问用户': 35230, '下单用户': 3230, '下单率': 26 },
          { '日期': '3月', '访问用户': 29123, '下单用户': 2623, '下单率': 22236 },
          { '日期': '4月', '访问用户': 17223, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '5月', '访问用户': 37392, '下单用户': 3492, '下单率': 42233 },
          { '日期': '6月', '访问用户': 45193, '下单用户': 4293, '下单率': 323.4 },
          { '日期': '7月', '访问用户': 13293, '下单用户': 1093, '下单率':1021 },
          { '日期': '8月', '访问用户': 35230, '下单用户': 3230, '下单率': 26 },
          { '日期': '9月', '访问用户': 29123, '下单用户': 2623, '下单率': 22236 },
          { '日期': '10月', '访问用户': 17223, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '11月', '访问用户': 37392, '下单用户': 3492, '下单率': 42233 },
          { '日期': '12月', '访问用户': 45193, '下单用户': 4293, '下单率': 60000 },
         
        ]
      },
      chartData_2: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true,
        on:{          
          // 使用es6的箭头函数，使this指向vue对象          
          slideChangeTransitionStart: ()=>{            
          // 通过$refs获取对应的swiper对象            
            let swiper = this.$refs.mySwiper.swiper;            
            let i = swiper.activeIndex;            
            let flag = this.imgList[i];            
            // location.href = flag.url;   
            console.log(i, 909909)       
          }        
        }    
      },
      commodity: [
        "https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg",
        "https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg",
        "https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg",
        "https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg",
      ]
    }
  },
  created () {

  },
  mounted () {
    this.getDrop()
  },
  methods: {
    getDrop () {
      var myChart = this.$echarts.init(document.getElementById('main'));
      myChart.setOption({
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫1111', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    },
    getList () {
      var p = []
      var s = {
        name: '',
        child: []
      }


      for(var i=0; i<12; i++) {
        s.name = `name${i}`
        s.child.push(i)
        break
      }
      p.push(s)
      console.log(p)
    }
  }
}
</script>

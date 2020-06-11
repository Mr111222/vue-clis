import Vue from '../entrance';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible.js'
import  '@/plugin/directive'

import axios from 'axios'
Vue.prototype.$http = axios


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// v-charts
import VCharts from 'v-charts'
Vue.use(VCharts)

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


// import { Swiper, SwiperSlide, directive } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// picker
import picker from 'vt-picker'
console.log(picker)
 
// Vue.component('Picker', Picker)


// 加载全局组件
import './components';

require('./mock/mock');

window.vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

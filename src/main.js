import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  //图片请求失败时候
  error:require('../static/images/touxiang.jpg'),
  //图片正在请求时
  loading:require('../static/images/loading.gif'),
  attempt: 1
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

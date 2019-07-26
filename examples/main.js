import Vue from 'vue'
import Tjcds from 'algorithm-design-ui'
import App from './App'
Vue.config.productionTip = false
Vue.use(Tjcds)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

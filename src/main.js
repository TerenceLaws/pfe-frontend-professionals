import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Session from 'vue-session'



Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Session)

new Vue({
  router,
  render: h => h(App),


}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Session from 'vue-session'
import store from './components/blockCovidStore'



Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Session)
router.beforeEach((to, from, next) => {
  if (to.name==='DisplayLocations' && !store.state.isConnected){
    next({ name: 'Login' });
  } else if((to.name==='Register'||to.name==='Login') && store.state.isConnected) {
    next({name: 'Home'})
  }
   else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter);

let router=new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'native-toast/dist/native-toast.css'

import JsonCSV from 'vue-json-csv'
 
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  // console.log(to.name)
  if ( to.name=='Login' &&  localStorage.getItem("loggedUser")!=null) {
    next({path:'/users'})
    } 
   if ( requiresAuth &&  !localStorage.getItem("loggedUser")) {
      next('/')
  } 
  else {
     
      next()

  }
})

Vue.component('downloadCsv', JsonCSV)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./routes/routes";
window.axios = require('axios').default


Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode : 'history',
  routes,
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

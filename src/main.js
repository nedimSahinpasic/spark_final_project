import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Players from './views/Players.vue'
import playerDetails from './components/playerDetails.vue'

import _4132_ from './components/formations/4-1-3-2.vue'
import _442_ from './components/formations/4-4-2.vue'
import _433_ from './components/formations/4-3-3.vue'
import _4213_ from './components/formations/4-2-1-3.vue'
import _4222_ from './components/formations/4-2-2-2.vue'
import _532_ from './components/formations/5-3-2.vue'
import _3322_ from './components/formations/3-3-2-2.vue'



import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.component('4-4-2', _442_)
Vue.component('4-1-3-2', _4132_)
Vue.component('4-3-3', _433_)
Vue.component('4-2-1-3', _4213_)
Vue.component('4-2-2-2', _4222_)
Vue.component('5-3-2', _532_)
Vue.component('3-3-2-2', _3322_)


Vue.component('mainPageHeader', Header)
Vue.component('pageBody', Body)
Vue.component('Players', Players)
Vue.component('playerDetails', playerDetails)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

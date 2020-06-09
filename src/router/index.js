import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/players',
    name: 'Players',
    component: Players,
  },

  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  }

]

const router = new VueRouter({
  routes
})

export default router

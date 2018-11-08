import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WeatherWoeid from '@/components/WeatherWoeid'
import SearchPage from '@/components/SearchPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/weather/:woeid',
      name: 'WeatherDetails',
      component: WeatherWoeid
    },
    {
      path:'/search/:search',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
})

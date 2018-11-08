import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WeatherWoeid from '@/components/WeatherWoeid'

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
    }
  ]
})

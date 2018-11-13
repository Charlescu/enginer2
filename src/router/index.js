import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import NengHao from '@/nenghao/NengHao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NengHao',
      name: 'NengHao',
      component: NengHao
    }
  ]
})

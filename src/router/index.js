import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import Cart from '@/components/Cart/Cart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'searcg',
      component: Search
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
        path:'/news/detail',
        name:'news.detail',
        component:NewsDetail
    },
    {
        path:'/photo/list/:categoryId',
        name:'photo.list',
        component:PhotoList
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/views/index')
const category = () => import('@/views/category')
const personal = () => import('@/views/personal')
const section = () => import('@/views/section')
const search = () => import('@/views/search')
const album = () => import('@/views/album')

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      name: 'index'
    },
    {
      path: '/category',
      component: category,
      name: 'category'
    },
    {
      path: '/personal',
      component: personal,
      name: 'personal'
    },
    {
      path: '/search',
      component: search,
      name: 'search'
    },
    {
      path: '/section',
      component: section,
      name: 'section'
    },
    {
      path: '/album/:albumid',
      component: album,
      name: 'album'
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AllPosts from './components/AllPosts.vue'
import AddPost from './components/AddPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/all',
      name: 'all',
      component: AllPosts
    },
    {
      path: '/create',
      name: 'addPost',
      component: AddPost
    }
  ]
})
/*

{
      path: '/contact',
      name: 'contact',
      component: ContactRequest
    },
    {
      path: '/view/:id',
      name: 'viewpost',
      component: ViewPost
    },
    {
      path: '/edit/:id',
      name: 'editpost',
      component: EditPost
    },
*/

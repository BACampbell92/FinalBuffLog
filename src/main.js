import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';
import App from './App.vue';
import AddPost from './components/AddPost.vue';
import AllPosts from './components/AllPosts.vue';
import Header from './components/Header.vue';
import Post from './components/Post.vue';
//import router from './router'
//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

//new Vue({
  //router,
  //render: h => h(App)
//}).$mount('#app')

const routes = [
  {
    name: 'AddPost',
    path: '/addPost',
    component: AddPost
  },
  {
    name: 'AllPosts',
    path: '/allPosts',
    component: AllPost
  },
  {
    name: 'Header',
    path: '/header',
    component: Header
  },
  {
    name: 'Post',
    path: '/post',
    component: Post
  },
];

const router = new VueRouter({mode: 'history', routes: routes});
router.beforeResolve((to, from, next) => {
  if (to.name){
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

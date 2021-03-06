import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Frame2 from '../views/Frame2.vue';
import Search from '../views/Search.vue';
import Choose from '../views/Choose.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Choose,
  },
  {
    path: '/search',
    name: 'Search',
    component: Home,
  },
  {
    path: '/search_results',
    name: 'SearchResults',
    component: Search,
  },
  {
    path: '/frame2',
    name: 'Frame2',
    component: Frame2,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

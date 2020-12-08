import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signinForm from "@/components/signinForm";
import signupForm from "@/components/signup"
import DisplayQrCodes from "@/components/DisplayQrCodes";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: signinForm
  },
  {
    path: '/register',
    name: 'Register',
    component: signupForm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/displayQrCodes',
    name: 'DisplayQrCodes',
    component: DisplayQrCodes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signinForm from "@/components/signinForm";
import signupForm from "@/components/signup"
import DisplayLocations from "@/components/DisplayLocations";
import DisplayDoctorQrCode from "@/components/DisplayDoctorQrCode";

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
    path: '/displayLocations',
    name: 'DisplayLocations',
   component: DisplayLocations
  },
  {
    path: '/displayDoctorQrCode',
    name: 'DisplayDoctorQrCode',
   component: DisplayDoctorQrCode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import FaqView from '../views/FaqView.vue'
//import { useAuthStore } from '../stores/store.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: FaqView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth :true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach(async (to,_,next)=> {
  console.log(`to: ${to.name} -- Auth Required? ${to.meta.requiresAuth}`)
  const authStore = useAuthStore();

  // Si la ruta a donde quiero ir necesita autenticación
  // ... y no tengo el token, llévame a la pagina de login
  if (to.meta.requiresAuth && !authStore.userToken) {
    next({name: 'login'})
  } else {
    if (to.meta.requiresAdmin && !authStore.isAdmin) {
    next({name: 'login'})
    console.log("No eres admin")

    } else {
      next()

    }
  }
})*/

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
  ]
})


// router.beforeEach((to, _, next) => {
//   // Replace with actual authentication logic

//   if (to.name !== 'Login' && !isAuthenticated) {
//     // Redirect to Login if not authenticated and trying to access a protected route
//     next({ name: 'Login' });
//   } else if (to.name === 'Login' && isAuthenticated) {
//     // Redirect to Home if already authenticated and trying to access the Login page
//     next({ name: 'home' });
//   } else {
//     // Proceed as normal
//     next();
//   }
// });


export default router

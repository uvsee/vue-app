import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home'

Vue.use(Router);

export default new Router({
  // linkExactActiveClass: 'exactActive', // rename 完全匹配
  // linkActiveClass: 'active', //rename 包含路径
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // beforeEnter (to, from, next) {
      //   next(); // 路由独享守卫，直接写在路径配置里
      // }
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('./views/Learn')
    },
    {
      path: '/student',
      name: 'Student',
      meta: {
        login: true
      },
      component: () => import('./views/Student')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community'),
      redirect: '/community/academic',
      meta: {
        login: true
      },
      children: [
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./views/Academic')
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('./views/Download')
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/question/:id',
      name: 'question',
      component: () => import('./views/Question')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('./views/Error')
    },
    {
      path: '*', // 除了上面所配置的，其他的路径
      redirect: (to) => {
        if (to.path === '/') {
          return '/home';
        } else {
          return '/error';
        }
      }
    }
  ]
})




























// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })

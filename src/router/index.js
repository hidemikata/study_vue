import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import UserMain from '@/views/UserMain.vue'
import HomeMain from '@/views/HomeMain.vue'
import UserDetail from '@/views/UserDetail.vue'
import ApolloMain from '@/views/ApolloMain.vue'
import cognito from '@/cognito'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Confirm from '@/components/Confirm'
import MyPage from '@/views/MyPage'
import Vutify from '@/views/Vutify'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  cognito.isAuthenticated()
    .then(session => {
      next()
    })
    .catch(session => {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })
}

const logout = (to, from, next) => {
  cognito.logout()
  next('/login')
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        default: HomeMain,
        footer: Footer,
      }
    },
    {
      path: '/apollo',
      components: {
        header: Header,
        default: ApolloMain,
        footer: Footer,
      }
    },
    {
      path: '/user/:id',
      components: {
        header: Header,
        default: UserMain,
        footer: Footer,
      },
      children: [
        {
          path: 'detail',
          component: UserDetail,
          props: true
      }]
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        header: Header,
        default: Login,
        footer: Footer,
      }
    },
    {
      path: '/mypage',
      name: 'MyPage',
      components: {
        header: Header,
        default: MyPage,
        footer: Footer,
      },
      beforeEnter: requireAuth
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: Header,
        default: Signup,
        footer: Footer,
      }
    },
    {
      path: '/confirm',
      name: 'Confirm',
      components: {
        header: Header,
        default: Confirm,
        footer: Footer,
      }
    },
    { 
      path: '/logout',
      beforeEnter: logout
    },
    {
      path: '/vutify',
      name: 'Vutify',
      components: {
//        header: Header,
        default: Vutify,
        footer: Footer,
      },
    },
  ]
})

export default router

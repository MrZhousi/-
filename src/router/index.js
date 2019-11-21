import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/anli/login'
import register from '../components/anli/register'
import account from '../components/account'
import home from '../components/anli/home'
import cart from '../components/anli/cart'
import my from '../components/anli/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/account",
      component: account,
      children: [
        {
          path:"login",
          component:login
        }
      ]
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/cart",
      component: cart
    },
    {
      path: "/my",
      component: my,
      children: [
        {
          path: "login",
          component:login
        },
        {
          path: "register",
          component: register
        }
      ]
    }
    // {
    //   path: "/login",
    //   component: login
    // },
    // {
    //   path: "/register",
    //   component: register
    // }
  ]
})

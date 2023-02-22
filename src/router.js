import Vue from 'vue'
import Router from 'vue-router'
import MyHome from './views/MyHome.vue'
import MyUsers from './views/MyUsers.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersProfile from './views/UsersProfile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MyHome },
    { path: '/users/:id',
      component: MyUsers,
      props: true,
      children: [
      { path: "posts", component: UsersPosts},
      { path: "profile", component: UsersProfile}
      ]
    }
  ]
})
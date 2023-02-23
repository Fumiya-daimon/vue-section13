import Vue from 'vue'
import Router from 'vue-router'
import MyHome from './views/MyHome.vue'
import MyUsers from './views/MyUsers.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersProfile from './views/UsersProfile.vue'
import HeaderHome from './views/HeaderHome.vue'
import HeaderUsers from './views/HeaderUsers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: {
      default: MyHome,
      header: HeaderHome
      },
      beforeEnter(to, from, next) {
        next(false);
      }
    },
    { path: '/users/:id',
      component: {
        default: MyUsers,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
      { path: "posts", component: UsersPosts},
      { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    },
    { path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      this.app.$root.$on('triggerScroll', () => {
        let position = ({ x: 0, y: 100 })
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash
          };
      }
      resolve(position);
      });
    });
    // return { x: 0, y: 0 };
  }
});
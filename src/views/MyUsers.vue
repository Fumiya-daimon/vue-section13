<template>
  <div>
    <h3>users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (id + 1) + '/profile' ">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default ({
  // created: {
  //   console.log('created')
  // }
  props: ["id"]
  // watch: {
  //   $route(to, from) {
  //     console.log(to);
  //     console.log(from);
  //   }
  // }
});
</script>

<template>
  <div>
    <nav>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" active-class="link--active" exact>Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  div {
    width: 700px;
    margin: auto;
    padding-top: 50px;
  }

  .link--active {
    font-size: 60px;
  }
</style>
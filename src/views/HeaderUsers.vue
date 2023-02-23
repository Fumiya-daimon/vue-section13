<template>
  <nav>
    <h2>ユーザーです</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" active-class="link--active" exact>Users</router-link>
    </nav>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 60px;
  }
</style>

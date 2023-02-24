<template>
  <nav>
    <h2>Homeです</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" active-class="link--active" exact>Users</router-link>
      <button @click="increment">+1</button>
      <button @click="decrement">+1</button>
    </nav>
</template>

<script>
export default {
  methods: {
    increment() {
      return this.$store.state.count++
    },
    decrement() {
      return this.$store.state.count--
    }
  },
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 60px;
  }
</style>
<template>
  <nav>
    <h2>Homeです</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" active-class="link--active" exact>Users</router-link>
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">+1</button>
    </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('count', ['increment', 'decrement']),
    // increment() {
    //   return this.$store.dispatch('increment');
    // },
    // decrement() {
    //   return this.$store.dispatch('decrement');
    // },
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
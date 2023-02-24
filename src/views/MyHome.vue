<template>
  <div>
    <h3>home</h3>
    <button @click="toUsers">ユーザーのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
    },
  },
  methods: {
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: {id: 1 }
      });
    }
  },
};
</script>
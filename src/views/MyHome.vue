<template>
  <div>
    <h3>home</h3>
    <button @click="toUsers">ユーザーのページに行く</button>
    <p>{{ myComponentDoubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['doubleCount', 'tripleCount'])
  },
  // computed: mapGetters({
  //   myComponentDoubleCount: 'doubleCount',
  // }),
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
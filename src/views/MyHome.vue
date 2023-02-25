<template>
  <div>
    <h3>home</h3>
    <button @click="toUsers">ユーザーのページに行く</button>
    <p>{{ myComponentDoubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message" :value="message" @input="updateMessage">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('count', ['doubleCount', 'tripleCount']),
    // message() {
    //   return this.$store.state.message
    // }
    message: {
      get() {
        return this.$store.state.message
      },
      set(value) {
        this.$store.dispatch('updateMessage', value);
      }
    }
  },
  // computed: mapGetters({
  //   myComponentDoubleCount: 'doubleCount',
  // }),
  methods: {
    // updateMessage(e) {
    //   this.$store.dispatch('updateMessage', e.target.value)
    // },
    toUsers() {
      this.$router.push({
        name: "users-id-profile",
        params: {id: 1 }
      });
    }
  },
};
</script>
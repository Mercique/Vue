<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">About</router-link> /
        <router-link to="/fastcost">Fast Cost</router-link> /
        <span @click="goToPageFound">notfound</span>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchData"]),
    goToPageFound() { 
      if(this.$route.name === 'notfound') return
      this.$router.push({
        name: "notfound",
      });
    },
  },
  async created() {
    await this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 40px;
}
</style>
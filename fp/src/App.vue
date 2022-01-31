<template>
  <v-app>
    <v-app-bar
      app
      flat
    >

    <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
    
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["fetchData", "fetchCategory"]),
  },
  async created() {
    await this.fetchData();
    await this.fetchCategory();
  },
};
</script>
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
      <transition name="fade">
        <modal-window-add-payment-form
          :settings="settings"
          :componentName="componentName"
          v-if="componentName"
        />
      </transition>
      <transition name="fade">
        <context-menu />
      </transition>
    </div>
  </div>
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
export default {
  components: {
    ModalWindowAddPaymentForm: () =>
      import(
        /* webpackChunkName: "Modal" */ "./components/ModalWindowAddPaymentForm.vue"
      ),
    ContextMenu,
  },
  name: "App",
  data() {
    return {
      settings: {},
      componentName: "",
    };
  },
  methods: {
    goToPageFound() {
      if (this.$route.name === "notfound") return;
      this.$router.push({
        name: "notfound",
      });
    },
    onShow({ name, settings }) {
      this.componentName = name;
      this.settings = settings;
    },
    onHide() {
      this.settings = {};
      this.componentName = "";
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show");
    this.$modal.EventBus.$off("hide");
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
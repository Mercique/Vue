<template>
  <div> about <div>about <button @click="openModal">Open</button></div></div>
</template>

<script>
export default {
  name: "About",
  methods: {
    openModal() {
      this.$modal.show("AuthForm", {
        content: "auth",
        header: "Auth Form",
      });
    },
  },
};
</script>

<style>

</style>
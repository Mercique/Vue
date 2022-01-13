<template>
  <div>
      <router-link :to="{
          name: 'addPayment',
          params: {
            category: 'Internet',
          },
          query: {
            value: 1000,
          },
        }"
      >
        Add Category "Internet"
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
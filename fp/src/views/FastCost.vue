<template>
  <div>
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Food',
        },
        query: {
          value: 200,
        },
      }"
    >
      Add Category "Food" </router-link
    ><br />
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Transport',
        },
        query: {
          value: 50,
        },
      }"
    >
      Add Category "Transport" </router-link
    ><br />
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Entertainment',
        },
        query: {
          value: 2000,
        },
      }"
    >
      Add Category "Entertainment"
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

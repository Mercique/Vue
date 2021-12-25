<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <h1 class="title">My personal costs</h1>
      </header>
      <main>
        <add-payment-form />
        <payments-display :items="currentElements" />
        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="changePage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "./components/Pagination.vue";

export default {
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  name: "App",
  data() {
    return {
      show: true,
      page: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    ...mapMutations({ fetch: "setPaymentsListData" }),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
  },
  created() {
    this.fetchData();
    // this.$store.dispatch('fetchData');
    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
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
<template>
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
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Dashboard",
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  data() {
    return {
      show: true,
      page: 1,
      n: 5,
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

<style>
</style>
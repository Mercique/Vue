<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
import { Pie } from "vue-chartjs";

export default {
  name: "PieChart",
  extends: Pie,
  props: {
    payments: {
      type: Array,
      default: () => [],
    },
    category: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.$root.$refs.PieChart = this;
  },
  methods: {
    setup() {
      this.renderChart({
        labels: this.category,
        datasets: [
          {
            label: "Расходы по категориям",
            data: this.category.map((el) => {
              return this.payments.reduce((total, cur) => {
                if (el === cur.category) {
                  total += cur.value;
                }
                return total;
              }, 0);
            }),
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    },
  },
  mounted() {
    this.setup();
  },
};
</script>

<style></style>

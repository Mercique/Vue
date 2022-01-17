<canvas ref="canvas" width="400" height="400"></canvas>

<script>
import { Pie } from "vue-chartjs";
export default {
  name: "Pie",
  extends: Pie,
  data() {
    return {
      records: [],
    };
  },
  methods: {
    setup(category) {
      const box = [];
      for (let i = 0; i < category.length; i++) {
        box.push({
          category: category[i],
          total: 0,
        });
        for (let j = 0; j < this.records.length; j++) {
          if (box[i].category === this.records[j].category) {
            box[i].total += this.records[j].value;
          }
        }
      }
      //   console.log(this.records);
      //   console.log(
      //     category.map((el) => {
      //       return this.records.reduce((total, item) => {
      //         if (el === item.category) {
      //           total += item.value;
      //         } else {
      //           total += 0;
      //         }
      //       }, 0);
      //     })
      //   );

      this.renderChart({
        labels: category,
        datasets: [
          {
            label: "Расходы по категориям",
            data: box.map(el => el.total),
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
  async mounted() {
    await this.$store.dispatch("fetchCategory");
    this.records = this.$store.state.paymentsList;
    const category = this.$store.state.categoryList;

    this.setup(category);
  },
};
</script>

<style>
</style>
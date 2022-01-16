<template>
  <div class="wrapper">
    <div class="box head">
      <div class="head__box">#</div>
      <div class="head__box">Date</div>
      <div class="head__box">Category</div>
      <div class="head__box value">Value</div>
      <div class="head__box">Edit/Delete</div>
    </div>
    <div class="box item" v-for="(item, idx) in items" :key="idx">
      <div class="item__box">{{ item.id }}</div>
      <div class="item__box">{{ item.date }}</div>
      <div class="item__box">{{ item.category }}</div>
      <div class="item__box value">{{ item.value }}</div>
      <div @click="onClickContextItem($event, item)">...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editItem(item) {
      console.log(item);

      this.$modal.show("AddPaymentForm", {
        content: "addPaymentForm",
        header: "Add new cost",
      });
    },
    deleteItem(item) {
      const items = this.$store.state.paymentsList;
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === item.id) {
          return this.$store.state.paymentsList.splice(i, 1);
        }
      }
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deleteItem(item);
          },
        },
      ];
      console.log(items);
      this.$context.show({ event, items });
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 610px;
}
.box {
  display: flex;
  font-weight: 700;
  border-bottom: 1px solid #f2f2f2;
  div {
    width: 150px;
    padding: 10px;
    &:first-child {
      width: 60px;
    }
    &:last-child {
      width: 100px;
    }
  }
  .value {
    width: 50px;
  }
}
.item {
  font-weight: 400;
}
</style>
<template>
  <div class="wrapper">
      <div class="box head">
          <div class="head__box">#</div>
          <div class="head__box">Date</div>
          <div class="head__box">Category</div>
          <div class="head__box">Value</div>
      </div>
      <div class="box item" v-for="item, idx in items" :key="idx">
          <div class="item__box">{{ idx }}</div>
          <div class="item__box">{{ item.date }}</div>
          <div class="item__box">{{ item.category }}</div>
          <div class="item__box">{{ item.value }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    }
}
</script>

<style lang="scss">
.wrapper {
    width: 585px;
}
.box {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    border-bottom: 1px solid #f2f2f2;
    div {
        width: 150px;
        padding: 10px;
        &:first-child {
            width: 60px;
        }
        &:last-child {
            width: 50px;
        }
    }
}
.item {
    font-weight: 400;
}
</style>
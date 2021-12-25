<template>
  <div class="wrapper">
    <button class="btn open-btn" @click="visible = !visible">ADD NEW COST +</button>
    <div class="inputs__box" v-show="visible">
      <input placeholder="Paument date" v-model="date" />
      <input placeholder="Paument description" v-model="category" />
      <input placeholder="Paument amount" type="number" v-model.number="value" />
      <div class="inputs__box-btn">
        <button class="btn add-btn" @click="onClick">ADD <span>+</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
      visible: false,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$emit('addNewPayment', data)
    },
  },
};
</script>

<style lang="scss">
.wrapper {
    padding-left: calc( 50% - 600px );
    padding-right: calc( 50% - 600px );
}
.btn {
    position: relative;
    padding: 10px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: #fff;
    background: #26a79a;
    transition: background .3s ease;
    &:hover {
        background: #29e5d2;
    }
    &:active {
        top: 1px;
        background: #116a61;
    }
}
.inputs__box {
    width: 275px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    input {
        padding: 10px;
        outline:none;
        border: 1px solid #f1f1f1;
        border-bottom: 2px solid #d0d0d0;
        &::placeholder {
            color: #d0d0d0;
        }
        &:focus {
            border-color: #116a61;
        }
    }
    .add-btn {
        padding: 5px 10px 5px 30px;
        display: flex;
        gap: 20px;
    }
}
</style>
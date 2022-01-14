<template>
  <div class="wrapper">
    <button class="btn open-btn" @click="visible = !visible">ADD NEW COST +</button>
    <div class="inputs__box" v-show="visible">
      <input placeholder="Paument date" v-model="date" />
      <div class="categoryList">
        <select v-model="category">
          <option v-for="(category, idx) in categoryList" :key="idx" :value="category">{{ category }}</option>
        </select>
      </div>
      <input placeholder="Paument amount" type="number" v-model.number="value" />
      <div class="inputs__box-btn">
        <button class="btn add-btn" @click="onClick">ADD <span>+</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "AddPaymentForm",
  data() {
    return {
      id: "",
      date: "",
      category: "",
      value: "",
      count: 1,
      visible: false,
      check: true,
    };
  },
  computed: {
    ...mapGetters({ categoryList: "getCategoryList" }),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapMutations(["addPaymentListData"]),
    ...mapActions(["fetchCategory"]),
    onClick() {
      if (this.check) {
        this.check = false;
        this.id = this.$store.state.getLastID + this.count;
      } else {
        this.id += this.count;
      }
      const data = {
        id: this.id,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.addPaymentListData(data);
      this.$emit("addNewPayment", data);
    },
  },
  async mounted() {
    if (!this.getCategoryList?.length) {
      await this.fetchCategory();
      this.category = this.categoryList[0];
    }
    if (this.$route.params?.category) {
      this.category = this.$route.params.category;
    }
    if (this.$route.query?.value) {
      this.value = this.$route.query.value;
    }
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
            box-shadow: 0 0 5px rgba(17, 106, 97, 1);
        }
    }
    select {
      width: 100%;
      padding: 10px;
      outline:none;
      cursor: pointer;
      border: 1px solid #f1f1f1;
      border-bottom: 2px solid #d0d0d0;
      color: #d0d0d0;
      &:focus {
        font-weight: 700;
        color: #030303;
        border-color: #116a61;
        box-shadow: 0 0 5px rgba(17, 106, 97, 1);
      }
      option {
        font-weight: 700;
        color: #030303;
      }
    }
    .add-btn {
        padding: 5px 10px 5px 30px;
        display: flex;
        gap: 20px;
    }
}
</style>
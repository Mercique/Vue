<template>
  <div>
    <div class="inputs">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="operations">
      <button
        v-for="operand in operands"
        :key="operand"
        @click="calculate(operand)"
        :disabled="(operand === '/' || operand === '//') && operand2 === 0"
      >
        {{ operand }}
      </button>
    </div>
    <div class="keyboard">
      <label>
        <input type="checkbox" v-model="checked">
        Отобразить экранную клавиатуру
      </label>
      <div class="keyboard__box" v-if="checked">
        <button 
          v-for="key in keys" 
          :key="key"
          @click="addNums(key)"
          :disabled="!picked"
        >
          {{ key }}
        </button>
        <button @click="delNums()" :disabled="!picked">&#8592;</button>
      </div>
      <div class="keyboard__switch-inputs">
        <label>
          <input type="radio" name="radio" value="operand1" v-model="picked">
          Операнд 1
        </label>
        <label>
          <input type="radio" name="radio" value="operand2" v-model="picked">
          Операнд 2
        </label>
      </div>
    </div>
    <div class="logs">
      <div class="logs__items" v-for="(item, id, idx) in logs" :key="`list_${id}`">
        {{ item }} ({{ idx }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      operands: ["+", "-", "/", "*", "**", "//"],
      operand1: 0,
      operand2: 0,
      error: "",
      result: 0,
      checked: false,
      picked: '',
      logs: {}
    };
  },
  methods: {
    calculate(operation) {
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.sub();
          break;
        case "/":
          this.divide();
          break;
        case "*":
          this.multiply();
          break;
        case "**":
          this.pow();
          break;
        case "//":
          this.integerDivision();
          break;
      }

      const key = Date.now();
      const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
      this.$set(this.logs, key, value);
    },
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    pow() {
      this.result = this.operand1 ** this.operand2;
    },
    integerDivision() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    addNums(key) {
      this[this.picked] = +((this[this.picked] += key).replace(/^0/, ''));
    },
    delNums() {
      this[this.picked] = +(String(this[this.picked]).slice(0, -1));
    }
  }
};
</script>

<style>
.operations {
  margin: 10px 0;
}
.keyboard__box {
  margin: 5px 0;
}
.check-radio {
  color: #f00;
}
.logs {
  margin-top: 30px;
}
</style>
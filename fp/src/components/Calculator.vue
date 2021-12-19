<template>
  <div>
    <div class="inputs">
      <input v-model.number="operand1" type="number"/>
      <input v-model.number="operand2" type="number"/>
      = {{ result }}
    </div>
    <div class="error">
      {{ error }}
    </div>
    <div class="keyboard">
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('^*')">^*</button>
      <button @click="calculate('//')">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      error: '',
      result: 0
    }
  },
  methods: {
    calculate(operation) {
      this.error = '';
      switch(operation) {
        case '+':
          this.sum();
          break;
        case '-':
          this.sub();
          break;
        case '/':
          this.divide();
          break;
        case '*':
          this.multiply();
          break;
        case '^*':
          this.pow();
          break;
        case '//':
          this.integerDivision();
          break;
      }
    },
    sum() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      const {operand1, operand2} = this;
      if (operand2 === 0) {
        this.error = 'На 0 делить нельзя';
        return;
      }
      
      this.result = operand1 / operand2;
      // if (isFinite(this.operand1 / this.operand2)) {
      //   this.result = this.operand1 / this.operand2;
      // } else {
      //   this.result = 'ERROR';
      // }

    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    pow() {
      //this.result = Math.pow(operand1, operand2);
      this.result = this.operand1 ** this.operand2;
    },
    integerDivision() {
      this.result = Math.floor(this.operand1 / this.operand2);
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <div class="inputs">
      <input v-model.number="operand1" type="number"/>
      <input v-model.number="operand2" type="number"/>
      = {{ result }}
    </div>
    <div class="keyboard">
      <button @click="sum(operand1, operand2)">+</button>
      <button @click="sub(operand1, operand2)">-</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="multiply(operand1, operand2)">*</button>
      <button @click="pow(operand1, operand2)">^*</button>
      <button @click="integerDivision(operand1, operand2)">//</button>
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
      result: 0
    }
  },
  methods: {
    sum(operand1, operand2) {
      this.result = operand1 + operand2
    },
    sub(operand1, operand2) {
      this.result = operand1 - operand2
    },
    divide(operand1, operand2) {
      if (isFinite(operand1 / operand2)) {
        this.result = operand1 / operand2
      } else {
        this.result = 'ERROR'
      }
    },
    multiply(operand1, operand2) {
      this.result = operand1 * operand2
    },
    pow(operand1, operand2) {
      //this.result = Math.pow(operand1, operand2)
      this.result = operand1 ** operand2
    },
    integerDivision(operand1, operand2) {
      this.result = Math.floor(operand1 / operand2)
    }
  }
}
</script>

<style>

</style>
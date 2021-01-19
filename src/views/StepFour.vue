<template>
  <div class="steps">
    <div class="form-section step-four">
      <h2 class="steps-text form-item">Step 4</h2>
      <h1 class="title form-item">What do you think your household income will be in 2021</h1>
      <p
        class="steps-para form-item"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="input-form step-four form-item">
        <span class="inp-icon">$</span>
        <input type="number" ref="incomeInp" v-model="inputValue" class="input-disable step-four-inp"/>
        <button class="btn-disable" ref="incomeBtn" @click="nextStep">
          Next
          <span>
            <img src="./../assets/font-icons/arrow-left.svg" alt />
          </span>
        </button>
      </div>
    </div>
    <div class="illustration-two">
      <img src="./../assets/images/step4Illustration.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },

  mounted() {
    this.inputValue = localStorage.getItem('income') || '';
  },

  methods: {
    nextStep() {
      localStorage.setItem('income', this.inputValue)
      this.$router.push('/step-five');
    }
  },

  watch: {
    inputValue: function(value) {
      if (this.inputValue.length >= 4) {
        this.$refs.incomeInp.classList.remove('input-disable')
        this.$refs.incomeBtn.classList.remove('btn-disable')
      } else {
        this.$refs.incomeInp.classList.add('input-disable')
        this.$refs.incomeBtn.classList.add('btn-disable')
      }
    }
  }
};
</script>

<style>
</style>

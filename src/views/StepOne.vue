<template>
  <div class="steps">
    <div class="form-section">
      <h2 class="steps-text form-item">Step 1</h2>
      <h1 class="title form-item">Welcome! Enter your ZIP code to start.</h1>
      <p
        class="steps-para form-item"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="input-form form-item">
          <input ref="zipCodeInp" class="input-disable" type="text" placeholder="ZIP code" v-model="inputValue"/>
          <button ref="zipCodeBtn" class="btn-disable">
          Next
          <span>
            <img src="./../assets/font-icons/arrow-left.svg" alt />
          </span>
        </button>
      </div>
    </div>
    <div class="illustration-one">
      <img src="./../assets/images/step1Illustration.png" alt />
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

  methods: {
    nextStep() {
    }
  },

  watch: {
    inputValue: function(value) {
      if (this.inputValue.length >= 4) {
        this.$refs.zipCodeInp.classList.remove('input-disable')
        this.$refs.zipCodeBtn.classList.remove('btn-disable')
      } else {
        this.$refs.zipCodeInp.classList.add('input-disable')
        this.$refs.zipCodeBtn.classList.add('btn-disable')
      }
    }
  }
};
</script>

<style>
</style>

<template>
  <div class="steps">
    <div class="form-section">
      <h2 class="steps-text form-item">Step 2</h2>
      <h1 class="title form-item">
        How man people are
        <br />in your household?
      </h1>
      <p
        class="steps-para form-item"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="input-form form-item">
        <input
          ref="zipCodeInp"
          class="input-disable"
          type="number"
          placeholder="Number of people"
          v-model="inputValue"
        />
        <button ref="zipCodeBtn" class="btn-disable" @click="nextStep">
          Next
          <span>
            <img src="./../assets/font-icons/arrow-left.svg" alt />
          </span>
        </button>
      </div>
    </div>
    <div class="illustration-two">
      <img src="./../assets/images/step2Illustration.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    nextStep() {
      this.$router.push("step-three");
    },
  },

  watch: {
    inputValue: function (value) {
      if (this.inputValue.length >= 1) {
        this.$refs.zipCodeInp.classList.remove("input-disable");
        this.$refs.zipCodeBtn.classList.remove("btn-disable");
      } else {
        this.$refs.zipCodeInp.classList.add("input-disable");
        this.$refs.zipCodeBtn.classList.add("btn-disable");
      }
    },
  },
};
</script>

<style>
</style>

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
          ref="numberOfPeopleInp"
          class="input-disable"
          type="number"
          placeholder="Number of people"
          v-model="inputValue"
        />
        <button ref="numberOfPeopleBtn" class="btn-disable" @click="nextStep">
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

  mounted() {
    this.inputValue = localStorage.getItem('numberOfPeople') || '';
  },

  methods: {
    nextStep() {
      localStorage.setItem('numberOfPeople', this.inputValue);
      this.$router.push("step-three");
    },
  },

  watch: {
    inputValue: function (value) {
      if (this.inputValue.length >= 1) {
        this.$refs.numberOfPeopleInp.classList.remove("input-disable");
        this.$refs.numberOfPeopleBtn.classList.remove("btn-disable");
      } else {
        this.$refs.numberOfPeopleInp.classList.add("input-disable");
        this.$refs.numberOfPeopleBtn.classList.add("btn-disable");
      }
    },
  },
};
</script>

<style>
</style>

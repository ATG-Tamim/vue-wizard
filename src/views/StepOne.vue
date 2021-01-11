<template>
  <div class="steps">
    <div class="form-section">
      <h2 class="steps-text">Step 1</h2>
      <h1 class="title">Welcome!Enter your ZIP code to start.</h1>
      <p
        class="steps-para"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="input-form">
        <input type="text" placeholder="ZIP code" @click="transition" v-model="inputVal" />
        <button type="submit" @click="addNum" :style="`width:${width}%`">
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
import { watch } from "vue";
export default {
  data() {
    return {};
  },

  methods: {
    addNum() {
      this.$emit("addNum");
    },
  },
};
</script>

<style>
</style>

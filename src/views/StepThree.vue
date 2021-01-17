<template>
  <div class="steps">
    <div class="form-section step-three">
      <h2 class="steps-text">Step 3</h2>
      <h1
        class="title"
      >Enter the age of each person in your household, and tell us if they need coverage.</h1>
      <p
        class="steps-para"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="input-form step-three">
        <div>
          <label>Age of Head of household</label>
          <input type="number" placeholder="age" class="age-input" v-model="inputValue" />
        </div>
        <transition name="fade" appear>
          <div v-if="inputValue.length > 0">
            <label>Needs Coverage?</label>
            <div>
              <div>
                <input id="yes" type="checkbox" name="No"/>
                <label for="yes">Yes</label>
              </div>
              <div>
                <input id="no" type="checkbox" name="No"/>
                <label for="no">No</label>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="illustration-three">
      <img src="./../assets/images/step3Illustration.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },

  methods: {

  },
};
</script>

<style>
</style>

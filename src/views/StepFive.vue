<template>
  <div class="steps">
    <div class="form-section step-five">
      <h2 class="steps-text">Step 5</h2>
      <h1 class="title">Chose the type of insurance</h1>
      <p
        class="steps-para"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="inputForm">
        <button class="btn-primary-outline mr-1" :class="btnSelectOne && 'btn-primary'" @click="btnOne">health</button>
        <button class="btn-primary-outline mr-1" :class="btnSelectTwo && 'btn-primary'" @click="btnTwo">dental</button>
        <button class="btn-primary-outline" :class="btnSelectThree && 'btn-primary'" @click="btnThree">vision</button>
      </div>
      <div>
        <button class="btn-primary-outline btn-primary mt-3" @click="nextStep">
          Search
          <span>
            <img src="./../assets/font-icons/arrow-left.svg" alt />
          </span>
        </button>
      </div>
    </div>
    <div class="illustration-four">
      <img src="./../assets/images/step5Illustration.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        btnSelectOne: false,
        btnSelectTwo: false,
        btnSelectThree: false,
    }
  },

  mounted() {
    this.btnSelectOne = JSON.parse(localStorage.getItem('health'))
    this.btnSelectTwo = JSON.parse(localStorage.getItem('dental'))
    this.btnSelectThree = JSON.parse(localStorage.getItem('vision'))
  },

  methods: {
    btnOne() {
      if(!this.btnSelectOne) {
        this.btnSelectOne = true
        this.btnSelectTwo = false
        this.btnSelectThree = false
      }
    },

    btnTwo() {
      if(!this.btnSelectTwo) {
        this.btnSelectTwo = true
        this.btnSelectOne = false
        this.btnSelectThree = false
      }
    },

    btnThree() {
      if(!this.btnSelectThree) {
        this.btnSelectThree = true
        this.btnSelectOne = false
        this.btnSelectTwo = false
      }
    },

    nextStep() {
      localStorage.setItem('health', this.btnSelectOne)
      localStorage.setItem('dental', this.btnSelectTwo)
      localStorage.setItem('vision', this.btnSelectThree)
      this.$router.push('/Finished');
    }
  }
};
</script>

<style>
</style>

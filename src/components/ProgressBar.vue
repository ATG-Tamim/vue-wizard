<template>
  <div class="progress-bar">
    <div class="outline-circle" :style="`transform: translate(0, ${variable}px)`"></div>
      <div class="step-one" @click="stepOne">
        <div class="circle">
          <div class="inline-circle active-circle">1</div>
        </div>
        <div class="un-fill-line">
          <div id="step-one" class="fill-line" ref="step-one"></div>
        </div>
      </div>
    <div class="step-two" @click="stepTwo">
      <div class="circle">
        <div class="inline-circle" ref="circle-two">2</div>
      </div>
      <div class="un-fill-line">
        <div class="fill-line-disable" ref="step-two"></div>
      </div>
    </div>
    <div class="step-three" @click="stepThree">
      <div class="circle">
        <div class="inline-circle">3</div>
      </div>
      <div class="un-fill-line">
        <div class="fill-line-disable"></div>
      </div>
    </div>
    <div class="step-four" @click="stepFour">
      <div class="circle">
        <div class="inline-circle">4</div>
      </div>
      <div class="un-fill-line">
        <div class="fill-line-disable"></div>
      </div>
    </div>
    <div class="step-five" @click="stepFive">
      <div class="circle">
        <div class="inline-circle">5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    stepOne() {
      this.$router.push('/')
    },
    stepTwo() {
      this.$router.push('/step-two')
    },
    stepThree() {
      this.$router.push('/step-three')
    },
    stepFour() {
      this.$router.push('/step-four')
    },
    stepFive() {
      this.$router.push('/step-five')
    }
  },

  watch: {
    fillActive: function (val) {
      if (this.fillActive) {
        this.$refs.step - one.classList.add("fill-line-active");
        setTimeout(() => {
          this.$refs.step - two.classList.add("fill-line");
          this.$refs.step - two.classList.remove("fill-line-disable");
          this.$refs.circle - two.classList.add("active-circle");
        }, 500);
      }
    },
  },

  props: ["variable", "fillActive"],
};
</script>

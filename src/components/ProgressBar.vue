<template>
  <div class="progress-bar">
    <div class="outline-circle" ref="outlineCircle"></div>
    <div class="progress-line">
      <div class="active" ref="activeLine"></div>
    </div>
      <div class="step step-one active-circle" @click="stepOne">
        <div class="inline-circle" ref="activeStepOne">
          1
        </div>
      </div>
    <div class="step step-two" @click="stepTwo">
      <div class="inline-circle" ref="activeStepTwo">
        2
      </div>
    </div>
    <div class="step step-three" @click="stepThree">
      <div class="inline-circle" ref="activeStepThree">
        3
      </div>
    </div>
    <div class="step step-four" @click="stepFour">
      <div class="inline-circle" ref="activeStepFour">
        4
      </div>
    </div>
    <div class="step step-five" @click="stepFive">
        <div class="inline-circle" ref="activeStepFive">5</div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      progressLine: 1,
      stepTwoClick: false,
      stepThreeClick: false,
      stepFourClick: false,
      stepFiveClick: false,
    }
  },

  methods: {
    stepOne() {
      this.$router.push('/')
    },
    stepTwo() {
      if(this.stepTwoClick) {
        this.$router.push('/step-two')
      }
    },
    stepThree() {
      if(this.stepThreeClick) {
        this.$router.push('/step-three')
      }
    },
    stepFour() {
      if(this.stepFourClick) {
        this.$router.push('/step-four')
      }
    },
    stepFive() {
      if(this.stepFiveClick) {
        this.$router.push('/step-five')
      }
    }
  },

  watch : {
    $route(route) {
      if (route.name == 'StepOne') {
        this.$refs.outlineCircle.style.transform = 'translate(0, -6px)'
        if (this.progressLine == 1) {
          this.$refs.activeLine.style.height = '15%'
        }
        this.progressLine = this.progressLine + 1
        this.$refs.activeStepOne.classList.add('active')
      }
      if (route.name == 'StepTwo') {
        this.$refs.outlineCircle.style.transform = 'translate(0, 106px)'
        if (this.progressLine == 2) {
          this.$refs.activeLine.style.height = '39%'
        }
        this.progressLine = this.progressLine + 1
        this.$refs.activeStepTwo.classList.add('active')
        this.stepTwoClick = true
      }
      if (route.name == 'StepThree') {
        this.$refs.outlineCircle.style.transform = 'translate(0, 218px)'
        if (this.progressLine == 3) {
          this.$refs.activeLine.style.height = '63%'
        }
        this.progressLine = this.progressLine + 1
        this.$refs.activeStepThree.classList.add('active')
        this.stepThreeClick = true

      }
      if (route.name == 'StepFour') {
        this.$refs.outlineCircle.style.transform = 'translate(0, 330px)'
        if (this.progressLine == 4) {
          this.$refs.activeLine.style.height = '86%'
        }
        this.progressLine = this.progressLine + 1
        this.$refs.activeStepFour.classList.add('active')
        this.stepFourClick = true
      }
      if (route.name == 'StepFive') {
        this.$refs.outlineCircle.style.transform = 'translate(0, 442px)'
        if (this.progressLine == 5) {
          this.$refs.activeLine.style.height = '100%'
        }
        this.progressLine = this.progressLine + 1
        this.$refs.activeLine.style.height = '100%'
        this.$refs.activeStepFive.classList.add('active')
        this.stepFiveClick = true
      }
    }
  },
};
</script>

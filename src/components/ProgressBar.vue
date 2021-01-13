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
    }
  },

  methods: {
    stepOne() {
      this.$router.push('/')
      console.log(this.$refs.outlineCircle.style)
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

  props: [
    'circlePosition'
  ]
};
</script>

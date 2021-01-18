<template>
  <div class="progress-bar">
    <div class="outline-circle" ref="outlineCircle"></div>
    <div class="progress-line">
      <div class="active" ref="activeLine"></div>
    </div>
      <div class="step step-one active-circle" @click="stepOne">
        <div class="inline-circle" :class="visitedSteps.includes(1) && 'active'">
          1
        </div>
      </div>
    <div class="step step-two" @click="stepTwo">
      <div class="inline-circle" :class="visitedSteps.includes(2) && 'active'">
        2
      </div>
    </div>
    <div class="step step-three" @click="stepThree">
      <div class="inline-circle" :class="visitedSteps.includes(3) && 'active'">
        3
      </div>
    </div>
    <div class="step step-four" @click="stepFour">
      <div class="inline-circle" :class="visitedSteps.includes(4) && 'active'">
        4
      </div>
    </div>
    <div class="step step-five" @click="stepFive">
        <div class="inline-circle" :class="visitedSteps.includes(5) && 'active'">5</div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      visitedSteps: []
    }
  },

  created() {
    this.visitedSteps = JSON.parse(localStorage.getItem('visitedSteps')) || [];
  },

  methods: {
    stepOne() {
      this.$router.push('/')
    },
    stepTwo() {
      if (! this.visitedSteps.includes(2)) return;
      this.$router.push('/step-two')
    },
    stepThree() {
      if (! this.visitedSteps.includes(3)) return;
      this.$router.push('/step-three')
    },
    stepFour() {
      // if (! this.visitedSteps.includes(4)) return;
      this.$router.push('/step-four')
    },
    stepFive() {
      // if (! this.visitedSteps.includes(5)) return/\\;
      this.$router.push('/step-five')
    },

    progressResult(number) {
      if (number == '1') {
          return number * (3 * (2 + 3))
        } else if (number == '2') {
          return number * (8 + 7) + 9
        } else if (number == '3') {
          return number * 30 - 27
        } else if (number == '4') {
          return number * 20 + 5
        } else if (number == '5') {
          return number * 20
        }
      }
  },

  watch : {
    $route(route) {
      if (route.name == 'StepOne') {
        this.visitedSteps = [...new Set([...this.visitedSteps, 1])];
        // this.$refs.activeLine.style.height = '15%'
        this.$refs.outlineCircle.style.transform = 'translate(0, -6px)'
      }
      if (route.name == 'StepTwo') {
        this.visitedSteps = [...new Set([...this.visitedSteps, 1, 2])];
        // this.$refs.activeLine.style.height = '39%'
        this.$refs.outlineCircle.style.transform = 'translate(0, 106px)';
      }
      if (route.name == 'StepThree') {
        this.visitedSteps = [...new Set([...this.visitedSteps, 1, 2, 3])];
        // this.$refs.activeLine.style.height = '63%'
        this.$refs.outlineCircle.style.transform = 'translate(0, 218px)'
      }
      if (route.name == 'StepFour') {
        this.visitedSteps = [...new Set([...this.visitedSteps, 1, 2, 3, 4])];
        // this.$refs.activeLine.style.height = '85%'
        this.$refs.outlineCircle.style.transform = 'translate(0, 330px)'
      }
      if (route.name == 'StepFive') {
        this.visitedSteps = [...new Set([...this.visitedSteps, 1, 2, 3, 4, 5])];
        // this.$refs.activeLine.style.height = '100%'
        this.$refs.outlineCircle.style.transform = 'translate(0, 442px)'
      }

      localStorage.setItem('visitedSteps', JSON.stringify(this.visitedSteps));
      this.$refs.activeLine.style.height = (this.progressResult(this.visitedSteps.length)) + '%'
    }
  },
};
</script>

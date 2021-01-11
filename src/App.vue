<template>
  <headerSection/>
  <progressBar/>
  <div class="white-space"></div>
  <router-view/>
</template>

<script>
import HeaderSection from './components/Header'
import ProgressBar from './components/ProgressBar'
import StepOne from './views/StepOne'
import StepTwo from './views/StepTwo'
import StepThree from './views/StepThree'
import StepFour from './views/StepFour'
import StepFive from './views/StepFive'

export default {
  components: {
    HeaderSection,
    ProgressBar,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive
  },

  data(){
    return {
    }
  },

  methods: {
    handle() {
      this.fillActive = true
      this.variable = ''
      this.variable = this.variable + (38 + 116);
    }
  }
}
</script>

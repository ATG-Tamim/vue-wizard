<template>
  <headerSection/>
  <progressBar/>
  <div class="white-space"></div>
  <step-three/>
</template>

<script>
import HeaderSection from './components/Header'
import ProgressBar from './components/ProgressBar'
import StepOne from './views/StepOne'
import StepTwo from './views/StepTwo'
import StepThree from './views/StepThree'

export default {
  components: {
    HeaderSection,
    ProgressBar,
    StepOne,
    StepTwo,
    StepThree
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

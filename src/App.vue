<template>
  <headerSection/>
  <progressBar/>
  <div class="white-space"></div>
  <step-one/>
</template>

<script>
import HeaderSection from './components/Header'
import ProgressBar from './components/ProgressBar'
import StepOne from './views/StepOne'

export default {
  components: {
    HeaderSection,
    ProgressBar,
    StepOne
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

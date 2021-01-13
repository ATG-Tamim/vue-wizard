<template>
  <headerSection/>
  <div class="flex position-relative">
    <progressBar :circlePosition="circlePosition"/>
    <div>
      <div class="white-space"></div>
      <router-view/>
    </div>
  </div>

</template>

<script>
import HeaderSection from './components/Header'
import ProgressBar from './components/ProgressBar'
import StepOne from './views/StepOne'
import StepTwo from './views/StepTwo'
import StepThree from './views/StepThree'
import StepFour from './views/StepFour'
import StepFive from './views/StepFive'
import PageNotFound from './views/PageNotFound'

export default {
  components: {
    HeaderSection,
    ProgressBar,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    PageNotFound
  },

  data(){
    return {
      circlePosition: '38'
    }
  },

  methods: {
  }
}
</script>

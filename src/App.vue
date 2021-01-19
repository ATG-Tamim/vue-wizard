<template>
  <headerSection/>
  <div class="flex position-relative">
    <progressBar :circlePosition="circlePosition"/>
    <div>
      <div class="white-space"></div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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
import Finished from './views/Finished'

export default {
  components: {
    HeaderSection,
    ProgressBar,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    PageNotFound,
    Finished
  },

  data(){
    return {
    }
  },

  methods: {
  }
}
</script>

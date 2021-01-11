<template>
  <headerSection/>
  <progressBar/>
</template>

<script>
import HeaderSection from './components/Header'
import progressBar from './components/ProgressBar'

export default {
  components: {
    HeaderSection,
    progressBar
  },

  data() {
    return {
      variable: '38',
      fillActive: '',
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

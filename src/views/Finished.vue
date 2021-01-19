<template>
  <div class="finished">
    <h1>Finished</h1>
    <button class="btn-primary-outline" @click="home">Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return{}
  },
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>

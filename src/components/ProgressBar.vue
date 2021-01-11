<template>
  <div class="progress-bar">
    <div class="outline-circle" :style="`transform: translate(0, ${variable}px)`"></div>
    <div class="step-one">
      <div class="circle">
        <div class="inline-circle active-circle">1</div>
      </div>
      <div class="un-fill-line">
        <div id="step-one" class="fill-line" ref="step-one"></div>
      </div>
    </div>
    <div class="step-two">
      <div class="circle">
        <div class="inline-circle" ref="circle-two">2</div>
      </div>
      <div class="un-fill-line">
        <div class="fill-line-disable" ref="step-two"></div>
      </div>
    </div>
    <div class="step-three">
      <div class="circle">
        <div class="inline-circle">3</div>
      </div>
      <div class="un-fill-line">
        <div class="fill-line-disable"></div>
      </div>
    </div>
    <div class="step-four">
      <div class="circle">
        <div class="inline-circle"></div>
      </div>
      <div class="un-fill-line">
        <div class="fill-line-disable"></div>
      </div>
    </div>
    <div class="step-five">
      <div class="circle">
        <div class="inline-circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    fillActive: function (val) {
      if (this.fillActive) {
        this.$refs.step - one.classList.add("fill-line-active");
        setTimeout(() => {
          this.$refs.step - two.classList.add("fill-line");
          this.$refs.step - two.classList.remove("fill-line-disable");
          this.$refs.circle - two.classList.add("active-circle");
        }, 500);
      }
    },
  },

  props: ["variable", "fillActive"],
};
</script>

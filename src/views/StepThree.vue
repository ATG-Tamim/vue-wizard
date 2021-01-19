<template>
  <div class="steps">
    <div class="form-section step-three">
      <h2 class="steps-text form-item" :class="[(inputCheckedYes || inputCheckedNo) && 'step-three-transition', (seInputCheckedYes || seInputCheckedNo) && 'step-three-se-transition']">Step 3</h2>
      <h1
        class="title form-item" :class="[(inputCheckedYes || inputCheckedNo) && 'step-three-transition', (seInputCheckedYes || seInputCheckedNo) && 'step-three-se-transition']"
      >Enter the age of each person in your household, and tell us if they need coverage.</h1>
      <p
        class="steps-para form-item" :class="[(inputCheckedYes || inputCheckedNo) && 'step-three-transition', (seInputCheckedYes || seInputCheckedNo) && 'step-three-se-transition']"
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div class="input-form step-three form-item" :class="[(inputCheckedYes || inputCheckedNo) && 'step-three-transition', (seInputCheckedYes || seInputCheckedNo) && 'step-three-se-transition']">
        <div>
          <label>Age of Head of household</label>
          <input type="number" placeholder="age" class="age-input" v-model="inputValue" />
        </div>
        <transition name="fade" appear>
          <div v-if="inputValue.length > 0">
            <label>Needs Coverage?</label>
            <div>
              <div>
                <input id="yes" type="checkbox" @change="inputCheckedNo = !inputCheckedYes" v-model="inputCheckedYes"/>
                <label for="yes">Yes</label>
              </div>
              <div>
                <input id="no" type="checkbox" @change="inputCheckedYes = !inputCheckedNo" v-model="inputCheckedNo"/>
                <label for="no">No</label>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div v-if="inputCheckedYes || inputCheckedNo" class="input-form step-three mt-3 form-item" :class="[(inputCheckedYes || inputCheckedNo) && 'step-three-transition', (seInputCheckedYes || seInputCheckedNo) && 'step-three-se-transition']">
        <transition name="fade" appear>
          <div class="second-input">
            <label>Age of Person 2</label>
            <input type="number" placeholder="age" class="age-input" v-model="inputValueTwo" />
          </div>
        </transition>
        <transition name="fade" appear>
          <div v-if="inputValueTwo.length > 0">
            <label>Needs Coverage?</label>
            <div>
              <div>
                <input id="se-yes" type="checkbox" @change="seInputCheckedNo = !seInputCheckedYes" v-model="seInputCheckedYes" />
                <label for="se-yes">Yes</label>
              </div>
              <div>
                <input id="se-no" type="checkbox" @change="seInputCheckedYes = !seInputCheckedNo" v-model="seInputCheckedNo"/>
                <label for="se-no">No</label>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div v-if="seInputCheckedYes || seInputCheckedNo" class="input-form-second step-three mt-3" :class="[(inputCheckedYes || inputCheckedNo) && 'step-three-transition', (seInputCheckedYes || seInputCheckedNo) && 'step-three-se-transition']">
        <transition name="fade" appear>
          <div class="first-input-check mt-3 form-item">
            <label>Is anyone in your household pregnant?</label>
            <div>
              <div>
                <input id="th-yes" type="checkbox" @change="thInputCheckedNo = !thInputCheckedYes" v-model="thInputCheckedYes"/>
                <label for="th-yes">Yes</label>
              </div>
              <div>
                <input id="th-no" type="checkbox" @change="thInputCheckedYes = !thInputCheckedNo" v-model="thInputCheckedNo"/>
                <label for="th-no">No</label>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade" appear>
          <div v-if="thInputCheckedYes || thInputCheckedNo" class="second-input-check mt-3 form-item">
            <label>Is anyone in your household blind or disabled?</label>
            <div>
              <div>
                <input id="fo-yes" type="checkbox" @change="changeDisabled" v-model="foInputCheckedYes"/>
                <label for="fo-yes">Yes</label>
              </div>
              <div>
                <input id="fo-no" type="checkbox" @change="changeEnable" v-model="foInputCheckedNo"/>
                <label for="fo-no">No</label>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="illustration-three">
      <img src="./../assets/images/step3Illustration.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValueTwo: '',
      inputCheckedYes: false,
      inputCheckedNo: false,
      seInputCheckedYes: false,
      seInputCheckedNo: false,
      thInputCheckedYes: false,
      thInputCheckedNo: false,
      foInputCheckedYes: false,
      foInputCheckedNo: false,
    }
  },

  mounted() {
    this.inputValue = localStorage.getItem('headOfHouseAge')
    if (!localStorage.getItem('headOfHouseAge')) this.inputValue = ''
    this.inputCheckedYes = localStorage.getItem('needCoverageYes' || '')
    this.inputValueTwo = localStorage.getItem('secondAge' || '')
    if (!localStorage.getItem('secondAge')) this.inputValueTwo = ''
    this.inputCheckedNo = localStorage.getItem('needCoverageNo' || '')
    this.seInputCheckedYes = localStorage.getItem('seNeedCoverageYes' || '')
    this.seInputCheckedNo = localStorage.getItem('seNeedCoverageNo' || '')
    this.thInputCheckedYes = localStorage.getItem('thNeedCoverageYes' || '')
    this.thInputCheckedNo = localStorage.getItem('thNeedCoverageNo' || '')
    this.foInputCheckedYes = localStorage.getItem('foNeedCoverageYes' || '')
    this.foInputCheckedNo = localStorage.getItem('foNeedCoverageNo' || '')
  },

  methods: {
    nextStep() {
      localStorage.setItem('headOfHouseAge', this.inputValue)
      localStorage.setItem('secondAge', this.inputValueTwo)
      localStorage.setItem('needCoverageYes', this.inputCheckedYes)
      localStorage.setItem('needCoverageNo', this.inputCheckedNo )
      localStorage.setItem('seNeedCoverageYes', this.seInputCheckedYes)
      localStorage.setItem('seNeedCoverageNo', this.seInputCheckedNo)
      localStorage.setItem('thNeedCoverageYes', this.thInputCheckedYes)
      localStorage.setItem('thNeedCoverageNo', this.thInputCheckedNo)
      localStorage.setItem('foNeedCoverageYes', this.foInputCheckedYes)
      localStorage.setItem('foNeedCoverageNo', this.foInputCheckedNo)
    },

    changeDisabled() {
      if (this.foInputCheckedYes) this.foInputCheckedNo = false
      this.goNext()
    },

    changeEnable() {
      if (this.foInputCheckedNo) this.foInputCheckedYes = false
      this.goNext()
    },

    goNext() {
      this.nextStep()
      this.$router.push('/step-four')
    }
  },
};
</script>

<style>
</style>

import { createRouter, createWebHistory } from 'vue-router'
import stepOne from './../views/StepOne.vue'
import stepTwo from './../views/StepTwo.vue'
import stepThree from './../views/StepThree.vue'
import stepFour from './../views/StepFour.vue'
import stepFive from './../views/StepFive.vue'

const routes = [
  {
    path: '/',
    name: 'StepOne',
    component: stepOne
  },
  {
    path: '/step-two',
    name: 'StepTwo',
    component: stepTwo
  },
  {
    path: '/step-three',
    name: 'StepThree',
    component: stepThree
  },
  {
    path: '/step-four',
    name: 'StepFour',
    component: stepFour
  },
  {
    path: '/step-five',
    name: 'StepFive',
    component: stepFive
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

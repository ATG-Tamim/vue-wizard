import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/style.scss'
import './assets/Bootstrap4/css/bootstrap.css'
import './assets/Bootstrap4/js/bootstrap'

createApp(App).use(router).mount('#app')

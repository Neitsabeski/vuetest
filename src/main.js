import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import './assets/scss/app.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import i18n from './i18n'
import CryptoJS from 'crypto-js'

createApp(App).use(CryptoJS).use(i18n).use(store).use(VueAxios, axios).use(router).use(i18n).mount('#app')
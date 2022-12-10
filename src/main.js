import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"

import "./assets/scss/app.scss"

import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './store'

createApp(App).use(store).use(VueAxios, axios).use(router).mount('#app')



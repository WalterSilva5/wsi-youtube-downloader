import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles.scss'
import 'animate.css'
import store from "./store/store.js"
const app = createApp(App)
app.use(store)
app.mount('#app')
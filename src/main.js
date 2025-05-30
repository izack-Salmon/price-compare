import './assets/main.css'
import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

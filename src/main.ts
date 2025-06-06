import './assets/main.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')

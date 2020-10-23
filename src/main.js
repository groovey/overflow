import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n.js'
import './assets/css/tailwind.css'

const app = createApp(App)
const i18nStrings = {
  greetings: {
    hi: 'Hallo!'
  }
}

app.use(i18nPlugin, i18nStrings)
app.use(router)
app.mount('#app')

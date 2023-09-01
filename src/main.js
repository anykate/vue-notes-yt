import App from '@/App.vue'
import '@/assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

createApp(App).use(createPinia()).mount('#app')

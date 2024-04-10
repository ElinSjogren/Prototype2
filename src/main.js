import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import DefaultLayout from './Layout/DefaultLayout.vue';
//import App from './App.vue'
import router from './router'

const app = createApp(DefaultLayout);

app.use(createPinia())
app.use(router)

app.mount('#app')

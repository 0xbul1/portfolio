import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/App.scss';

createApp(App).use(router).mount('#app');

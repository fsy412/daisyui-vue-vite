import { createApp } from 'vue';
import App from './App.vue';
import './app.css';

import store from './vuex'

createApp(App).use(store).mount('#app');

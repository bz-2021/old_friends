/*
 * @Author: bz2021
 * @Date: 2023-12-15 15:59:04
 * @Description:  
 */
import {createApp} from 'vue'
import App from './App.vue'
import './style.css';
import router from './router';

const app = createApp(App)
app.use(router)
app.mount('#app')

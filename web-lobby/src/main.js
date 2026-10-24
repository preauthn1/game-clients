import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
import Loader from './components/Loader.vue';
import i18n from "./i18nPlugin";
import "@/assets/css/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.css';
import 'video.js/dist/video-js.css' 

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);

//全域變數 (*: isNotIDR 這個邏輯有好幾個地方。請注意一併調整)
const isNotIDR = location.href.includes('kz344') || location.href.includes('localhost:8080') || location.href.includes('dqjt5498');
if(isNotIDR) {    
    console.log('mode_A');  //dqjt5498、localhost:8080
    app.config.globalProperties.$isImportRemoteModules = true;
    //這些網址有經過cloudflare CDN 節省流量費
    app.config.globalProperties.$sound_click = new Audio('https://example.invalid/static-file/click.mp3');
    app.config.globalProperties.$sound_click_4 = new Audio('https://example.invalid/static-file/click4.mp3');
}
else {    
    console.log('mode_B');
    const click1 = require('@/assets/media/click.mp3');
    const click4 = require('@/assets/media/click4.mp3');
    app.config.globalProperties.$isImportRemoteModules = false;
    app.config.globalProperties.$sound_click = new Audio(click1);
    app.config.globalProperties.$sound_click_4 = new Audio(click4);
}


app.component('Loader', Loader);
app.mount('#app');
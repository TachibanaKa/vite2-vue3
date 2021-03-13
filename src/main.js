import { createApp } from 'vue'
import App from './App.vue'
import store from "../store";
import router from "../router";
import element3 from "element3";
import "element3/lib/theme-chalk/index.css";


const app = createApp(App)
//定义全局变量
//app.config.globalProperties.$post = post

app.use(element3)
app.use(router)
app.use(store)
app.mount('#app')
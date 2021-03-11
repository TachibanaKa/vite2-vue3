import { createApp } from 'vue'
import App from './App.vue'
import store from "../store";
import router from "../router";
import element3 from "element3";
import "element3/lib/theme-chalk/index.css";
import {post,fetch,patch,put} from '../http/request'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

const app = createApp(App)
app.use(element3)
app.use(router)
app.use(store)
app.mount('#app')
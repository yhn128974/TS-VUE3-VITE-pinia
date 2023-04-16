import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
// import './service/axios_demo'
import { lyRequest1 } from './service'
// 全局引用
// import installElementPlus from './plugins/element'


const app = createApp(App)

registerApp(app)

// installElementPlus(app)

app.use(store).use(router).mount('#app')

// console.log(process.env.VUE_APP_BASE_URL);
// console.log(process.env.VUE_APP_BASE_NAME);

lyRequest1.request({
    url: '/get',
    method: "GET",
})



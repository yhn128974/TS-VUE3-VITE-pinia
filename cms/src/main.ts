import { createApp } from "vue";
import App from "./App.vue";
// 
import { createPinia } from 'pinia'

// 导入UI注册接口
import { registerApp } from "./global";

// 导入格式化css
import "normalize.css";
import "./assets/css/base.scss";

// 导入路由
import router from "./Router";

// 导入pinia
const pinia = createPinia()

// 创建app实例并且应用路由
const app = createApp(App).use(router).use(pinia);
registerApp(app);
app.mount("#app");

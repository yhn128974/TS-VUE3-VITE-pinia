import { createApp } from "vue";
import App from "./App.vue";

// 导入UI注册接口
import { registerApp } from "./global";

// 导入格式化css
import "normalize.css";
import "./assets/css/base.scss";

// 导入路由
import router from "./Router";

// 创建app实例并且应用路由
const app = createApp(App).use(router);
registerApp(app);
app.mount("#app");

import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { registerApp } from "./global";

import "normalize.css";
import "./assets/css/base.scss";

// import './service/axios_demo'
// import { lyRequest1 } from "./service";

// 全局引用
// import installElementPlus from './plugins/element'

const app = createApp(App);
registerApp(app);

// installElementPlus(app)
app.use(router).mount("#app");

// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }

// lyRequest1
//   .request<DataType>({
//     url: "/get",
//     method: "GET",
//     showLoading: true,

//     params: {
//       username: "lngyou",
//       passworld: "12323",
//     },
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log("单独请求的config");
//         return config;
//       },
//       responseInterceptor: (res) => {
//         console.log("单独获取的res");
//         return res;
//       },
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   });

// axios.get('https://xiaoapi.cn/API/zs_tf.php').then(res => {
//     console.log(res);

// })

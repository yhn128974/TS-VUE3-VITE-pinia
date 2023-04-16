import LYRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const lyRequest1 = new LYRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,

  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求成功");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败");
      return err;
    },
    responseInterceptor: (config) => {
      console.log("响应成功");
      return config;
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败");
      return err;
    },
  },
});

// const lyRequest2 = new LYRequest({
//     timeout: TIME_OUT,
//     baseURL: BASE_URL
// })

export {
  lyRequest1,
  // lyRequest2
};

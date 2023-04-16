import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { LYRequestInterceptor, LYRequestConfig } from "./type";
// axios

class LYRequest {
  instance: AxiosInstance;
  interceptors?: LYRequestInterceptor;

  constructor(config: LYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    //  来自config实例对象传入的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 所有实例对象都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有实例都有的拦截器，请求成功");

        return config;
      },
      (err) => {
        console.log("所有实例都有的拦截器，请求失败");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有实例都有的拦截器，响应成功");
        return res;
      },
      (err) => {
        console.log("所有实例都有的拦截器，请求失败");
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
  // get() {

  // }
}

export default LYRequest;

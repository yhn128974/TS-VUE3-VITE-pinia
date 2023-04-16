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

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
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

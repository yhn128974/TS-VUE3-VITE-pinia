import axios from "axios";
import type { AxiosInstance } from "axios";
import { LYRequestInterceptor, LYRequestConfig } from "./type";
// 导入loading
import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";
// axios

class LYRequest {
  instance: AxiosInstance;
  interceptors?: LYRequestInterceptor;
  loading?: ILoadingInstance;
  showLoading: boolean;

  constructor(config: LYRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? true;
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "Loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
        }
        return config;
      },
      (err) => {
        console.log("所有实例都有的拦截器，请求失败");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        setTimeout(() => {
          this.loading?.close();
        }, 1000);

        const data = res.data;
        if (data.returnCode === "-1001") {
          console.log("请求失败,错误原因是...");
        } else {
          console.log("所有实例都有的拦截器，响应成功");
          return res.data;
        }
      },
      (err) => {
        // 移除loading
        setTimeout(() => {
          this.loading?.close();
        }, 1000);

        console.log("所有实例都有的拦截器，请求失败");
        // 判断不同的err code
        if (err.response.status == 404) {
          console.log("请求页面不存在");
        }
        return err;
      }
    );
  }

  request<T>(config: LYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      if (config.showLoading == false) {
        this.showLoading = config.showLoading;
      }

      this.instance.request<T>(config).then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res);
        }
      });
    });
  }
  // get() {

  // }
}

export default LYRequest;

import type { AxiosRequestConfig, AxiosResponse } from "axios";

interface LYRequestInterceptor {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (err: any) => any;
    responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch?: (err: any) => any;
  }
  
  interface LYRequestConfig extends AxiosRequestConfig {
    interceptors?: LYRequestInterceptor;
}
  
export {
    LYRequestInterceptor,
    LYRequestConfig
} 
import axios from "axios";

// import {
//     BASE_URL,
//     BASE_NAME
// } from './request/config'

axios.defaults.baseURL = "http://httpbin.org";

// axios.request({
//     method: 'GET',
//     url: '/get',
//     params: {
//         name: 'name',
//         age: 34
//     }
// }).then(res => {
//     console.log(res)
// })

// axios.request({
//     method: 'POST',
//     url: '/post',
//     data: {
//         name: 'name',
//         age: 34
//     }
// }).then(res => {
//     console.log(res)
// })

//axios .all =>多个请求
axios
  .all([
    axios.get("/get", { params: { name: "name", age: 34 } }),
    axios.post("/post", { name: "name", age: 34 }),
  ])
  .then((res) => {
    console.log(res);
  });

// 6.axios的拦截器
// fn1:请求发送成功的函数
// fn2:请求发送失败的函数
axios.interceptors.request.use(
  (config) => {
    console.log("请求拦截成功");
    // config.url = "/get"
    console.log(config);
    return config;
  },
  (err) => {
    console.log("请求发送错误", err);
  }
);

// fn1:数据返回成功的函数
// fn2:数据返回失败的函数
axios.interceptors.response.use(
  (res) => {
    console.log("获取拦截成功");
    return res;
  },
  (err) => {
    console.log("返回错误", err);
  }
);

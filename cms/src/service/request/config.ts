// 手动修改切换不同的环境不推荐
// const BASE_URL = "http://httpbin.org/dev"
// const BASE_NAME = "longyou"

// const BASE_URL = "http://httpbin.org/proid"
// const BASE_NAME = "ethanyu"

// 2.根据process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = "";
const TIME_OUT = 10000;

if (process.env.NODE_ENV == "development") {
  BASE_URL = "http://httpbin.org";
} else if (process.env.NODE_ENV == "production") {
  BASE_URL = "http://httpbin.org/proid";
} else {
  BASE_URL = "http://httpbin.org/test";
}

export { BASE_URL, TIME_OUT };


// 手动修改切换不同的环境不推荐
// const BASE_URL = "http://httpbin.org/dev"
// const BASE_NAME = "longyou"


// const BASE_URL = "http://httpbin.org/proid"
// const BASE_NAME = "ethanyu"


// 2.根据process.env.NODE_ENV
// 开发环境：development
// 生产环境：production
// 测试环境：test

// let BASE_URL: string = ""
// let BASE_NAME: string = ""

// if (process.env.NODE_ENV == "development") {
//     BASE_URL = "http://httpbin.org/dev"
//     BASE_NAME = "longyou"
// } else if (process.env.NODE_ENV == "production") {
//     BASE_URL = "http://httpbin.org/proid"
//     BASE_NAME = "ethanyu"
// } else {
//     BASE_URL = "http://httpbin.org/test"
//     BASE_NAME = "ethanyu"
// }


// export {
//     BASE_URL,
//     BASE_NAME
// }
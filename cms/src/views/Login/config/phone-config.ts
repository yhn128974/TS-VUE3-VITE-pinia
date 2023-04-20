export const rules = {
  num: [
    {
      required: true,
      message: "手机号码为必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]{11}$/,
      message: "手机号必须是11个字母或者数字",
      trigger: "blur",
    },
    {},
  ],
  code: [
    {
      required: true,
      message: "验证码为必填内容",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]{4}$/,
      message: "验证码必须是4位数字",
      trigger: "blur",
    },
  ],
};


export  const rules = {
    name: [
      {
        required: true,
        message: "用户名为必传内容",
        trigger: "blur",
      },
      {
        pattern: /^[a-z0-9]{5,10}$/,
        message: "用户名必须是5-10个字母或者数字",
        trigger: "blur",
      },
      {},
    ],
    password: [
      {
        required: true,
        message: "密码为必传内容",
        trigger: "blur",
      },
      {
        pattern: /^[a-z0-9]{3,}$/,
        message: "密码必须是3个字母以上或者数字",
        trigger: "blur",
      },
    ],
  };
<template>
  <el-form :rules="rules" :model="phone">
    <el-form-item label="手机号" prop="num">
      <el-input v-model="phone.num" />
    </el-form-item>

    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="getcodebtn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/phone-config";
export default defineComponent({
  setup() {
    const phone = reactive({
      num: "",
      code: "",
    });
    return {
      phone,
      rules,
    };
  },
});
</script>

<style scoped lang="scss">
.get-code {
  display: flex;
  .getcodebtn {
    margin-left: 5px;
  }
}
</style>

<!-- 
<template>
  <el-form :rules="rules" :model="account">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="account.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
  </el-form>

</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/account-config";
export default defineComponent({
setup() {
  const account = reactive({
    name: "",
    password: "",
  });
  return { account, rules };
},
});
</script>

<style scoped></style>
 -->

<template>
  <el-form :rules="rules" :model="account" ref="fromref">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" type="password" autocomplete="off" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import { ElForm } from "element-plus";
import { Instance } from "@popperjs/core";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });

    const fromref = ref<InstanceType<typeof ElForm>>();

    const loginAction = () => {
      // 通过validate进行验证获取返回值
      fromref.value?.validate((valid) => {
        if (valid) {
          console.log("执行登陆...");
        }
      });
    };
    return { account, rules, loginAction, fromref };
  },
});
</script>

<style scoped></style>

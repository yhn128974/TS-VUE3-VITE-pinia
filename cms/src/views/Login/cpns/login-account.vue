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
import LocalCache from "@/utils/cache";

// 导入已定义的pinia实例
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    // 使用useCounterStore
    const CounterStore = useCounterStore();
    // Refs代理保留响应式
    const { state, getnameage } = storeToRefs(CounterStore);
    const { changeName } = CounterStore;
    // 函数修改store数据
    console.log(state.value.name, getnameage.value);
    changeName("ethanyu");
    console.log(state.value.name, getnameage.value);
    // $patch修改store数据
    CounterStore.$patch({
      state: {
        name: "nihoa",
        age: 34,
      },
    });
    console.log(state.value.name, getnameage.value);

    const account = reactive({
      name: LocalCache.getCache("name") ?? "",
      password: LocalCache.getCache("password") ?? "",
    });

    const fromref = ref<InstanceType<typeof ElForm>>();

    const loginAction = (iskeepPassword: boolean) => {
      // 通过validate进行验证获取返回值
      fromref.value?.validate((valid) => {
        if (valid) {
          // 进行登录

          // 是否记住密码
          if (iskeepPassword) {
            // 本地缓存
            LocalCache.setCache("name", account.name);
            LocalCache.setCache("password", account.password);
          } else {
            LocalCache.deleteCache("name");
            localStorage.deleteCache("password");
          }
        }
      });
    };

    return { account, rules, loginAction, fromref };
  },
});
</script>

<style scoped></style>

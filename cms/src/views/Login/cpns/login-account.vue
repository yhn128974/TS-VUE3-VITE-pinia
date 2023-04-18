<template>
  <div>
    <el-form-item label="账号">
      <el-input v-model="account.name" />
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="account.password" type="password" autocomplete="off" />
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });

    return { account };
  },
});
</script>

<style scoped></style>

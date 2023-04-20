<template>
  <div class="login-panel">
    <div class="login-title">
      <h2>Backstage management system</h2>
    </div>

    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane class="tab-title">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <User style="width: 1em; height: 1em; margin-right: 8px" />
            </el-icon>
            <span>登陆 </span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <Iphone style="width: 1em; height: 1em; margin-right: 8px" />
            </el-icon>
            <span>手机注册</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>

    <div class="login-end">
      <div class="account-control">
        <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <div class="account-control">
        <el-button type="primary" style="width: 100%" @click="handleLoginClick"
          >立即登陆</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

// 在页面内引入
// import { User, Iphone } from '@element-plus/icons-vue'

import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,
  },

  setup() {
    const account = reactive({
      name: "",
      passworld: "",
    });

    const iskeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();

    const handleLoginClick = function () {
      accountRef.value?.loginAction();
    };

    return {
      account,
      iskeepPassword,
      handleLoginClick,
      accountRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo-tabs {
  background-color: rgba(255, 255, 255, 0.7);
}
.login-panel {
  width: 350px;
}
.login-title > h2 {
  color: #fff;
  text-align: center;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
}
</style>

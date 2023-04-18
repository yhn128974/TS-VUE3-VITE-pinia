<template>
  <div class="login-panel">
    <el-form label-position="left" label-width="100px" style="max-width: 460px">
      <el-tabs type="border-card" class="demo-tabs" stretch>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <User style="width: 1em; height: 1em; margin-right: 8px" />
              </el-icon>
              <span>登陆 </span>
            </span>
          </template>
          <LoginAccount />
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

        <div>
          <el-form-item label-position:left>
            <el-radio>记住密码</el-radio>
            <span>忘记密码</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%">立即登陆</el-button>
          </el-form-item>
        </div>
      </el-tabs>
    </el-form>
  </div>
</template>

<script lang="ts">
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

// import { User, Iphone } from '@element-plus/icons-vue'
import { defineComponent, reactive } from "vue";

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
    return {
      account,
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-tabs-bottom {
  display: flex;
  border: 1px solid #000;
}
.login-panel {
  width: 350px;
}
.login-form {
  h2 {
    color: #fff;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>

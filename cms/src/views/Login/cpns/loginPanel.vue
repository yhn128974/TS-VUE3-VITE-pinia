<template>
    <div class="login-panel">


        <el-tabs type="border-card" class="demo-tabs" stretch>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <User style="width: 1em; height: 1em; margin-right: 8px" />
                        </el-icon>
                        <span>Login </span>
                    </span>
                </template>
                <h2> Login</h2>

            </el-tab-pane>

            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <Iphone style="width: 1em; height: 1em; margin-right: 8px" />
                        </el-icon>
                        <span>Route</span>
                    </span>
                </template>
                <h2>Route</h2>
            </el-tab-pane>


        </el-tabs>



        <!-- <form action="#" class="login-form">
            <h2>General background management system</h2>
            <input type="text" name="username" placeholder="用户名" />
            <input type="password" name="password" placeholder="密码" />
            <button type="submit">登录</button>
        </form> -->
    </div>
</template>

<script setup lang="ts">

import { User, Iphone } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.login-panel {
    width: 350px;

}

.login-form {
    h2 {
        color: #fff;
    }
}

.demo-tabs>.el-tabs__content {
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
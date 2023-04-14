<template>
  <img src="./assets/logo.png">
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-input type="text"></el-input>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div class="box"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss">
body {
  background-color: #ddd;

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
}
</style>

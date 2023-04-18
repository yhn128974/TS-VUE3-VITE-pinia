<template>
  <div class="app">
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from './views/Login/index.vue'
export default defineComponent({
  components: {
    Login
  },
  setup() {
    return {

    }
  }



}
)
</script>

<style lang="scss">
.app {
  height: 100%;

}
</style>

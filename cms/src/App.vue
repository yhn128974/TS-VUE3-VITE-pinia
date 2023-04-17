<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent(
  {
    name: 'App',
    props: {
      name: {
        type: String
      }
    },
    setup(props, ctx) {
      const message = ref("app")
      return {
        message
      }
    },

  }
)
</script>

<style lang="scss">
.app {
  height: 100%;

}
</style>

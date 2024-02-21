<script setup lang="ts">
  import { LayoutContent } from 'ant-design-vue';
</script>
<template>
  <a-layout-content>
    <div class="content-container">
      <RouterView />
    </div>
  </a-layout-content>
</template>

<style scoped lang="less">
  .ant-layout-content {
    padding: 20px;
    .content-container {
      width: 100%;
      height: 100%;
      background-color: #ffffff;
    }
  }
</style>

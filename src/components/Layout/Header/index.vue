<script setup lang="ts">
  import { useRouter } from 'block-libs/dist/router';

  const router = useRouter();
  function logout() {
    console.log('退出登录');
    sessionStorage.removeItem('token');
    router.push('/login');
  }
</script>
<template>
  <a-layout-header fixed>
    <a-button type="error" @click="logout">退出登录</a-button>
  </a-layout-header>
</template>

<style scoped lang="less">
  .ant-layout-header {
    background-color: #ffffff;
  }
</style>

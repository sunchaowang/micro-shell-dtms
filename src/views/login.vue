<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter } from 'block-libs/dist/router';

  const router = useRouter();
  function login() {
    console.log('login');
    sessionStorage.setItem('token', Date.now().toString());
    router.push('/');
  }

  onMounted(() => {
    console.log('login mounted');
  });
</script>

<template>
  <h1> Login </h1>
  <a-button type="primary" @click="login">
    <a-icon type="user" />
    Login
  </a-button>
</template>

<style scoped lang="less"></style>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter } from 'block-libs/dist/router';

  const router = useRouter();
  function login(code?: string) {
    console.log('login');
    sessionStorage.setItem('token', code ?? 'guest');
    router.push('/');
  }

  onMounted(() => {
    console.log('login mounted');
  });
</script>

<template>
  <h1> Login </h1>
  <a-space :size="20">
    <a-button type="primary" @click="login('guest')">
      <a-icon type="user" />
      Login
    </a-button>
    <a-button type="primary" @click="login('car')">
      <a-icon type="user" />
      Login Car
    </a-button>
    <a-button type="primary" @click="login('coal')">
      <a-icon type="user" />
      Login Coal
    </a-button>
    <a-button type="primary" @click="login(['car', 'coal'].join(','))">
      <a-icon type="user" />
      Login Admin
    </a-button>
  </a-space>
</template>

<style scoped lang="less"></style>

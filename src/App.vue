<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'block-libs/router';

  const count = ref(0);
  const router = useRouter();
</script>
<template>
  <div>
    <h1>Home</h1>
    <p>Count is: {{ count }}</p>
    <a-button type="primary" @click="count++">count++</a-button>

    <a-card>
      <a-button @click="router.push('/home')">Home</a-button>
      <a-button @click="router.push('/about')">About</a-button>
    </a-card>

    <a-card>
      <RouterView />
    </a-card>
  </div>
</template>

<style scoped lang="less"></style>

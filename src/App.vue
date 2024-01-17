<script setup lang="ts">
  import { ref } from 'vue';
  const count = ref(0);
</script>
<template>
  <div>
    <h1>Home</h1>
    <p>Count is: {{ count }}</p>
    <a-button type="primary" @click="count++">count++</a-button>
  </div>
</template>

<style scoped lang="less"></style>

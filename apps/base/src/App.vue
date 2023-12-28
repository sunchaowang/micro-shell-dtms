<script setup>
  import { onMounted } from 'vue';
  import { test } from '@packages/utils';
  import { Name } from '@packages/components';
  import ContractManagements from '@packages/views/contract-managements/index.vue';
  import { useAppStore as usePackageAppStore } from '@packages/store/modules/app'; // workspace/packages/store/modules/app.ts
  import { useAppStore as useLocalAppStore } from './stores/modules/app'; // app/src/store/modules/app.ts

  const packageAppStore = usePackageAppStore();
  const localAppStore = useLocalAppStore();

  onMounted(() => {
    test();
  });
</script>

<template>
  <Name />
  <ContractManagements />
  <div>
    packageAppStore: {{ packageAppStore.count }}
    <button @click="packageAppStore.increment">+</button>
  </div>
  <div>
    localAppStore: {{ localAppStore.doubleCount }}
    <button @click="localAppStore.increment">+</button>
  </div>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>

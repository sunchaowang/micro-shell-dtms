<template>
  <micro-app
    v-if="currentMicroApp.name"
    :name="currentMicroApp.name"
    :url="currentMicroApp.url"
    :baseroute="`${currentMicroApp.baseRoute}`"
    iframe
    class="micro-app"
    disable-memory-router
    router-mode="native"
    @mounted="currentMicroApp.mounted"
    @unmounted="currentMicroApp.unmounted"
  />
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'block-libs/dist/router';
  import { computed, onMounted, watch } from 'vue';
  import microApp from '@micro-zoe/micro-app';
  import { getAppConfig } from './configs/app';
  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
    console.log('micro-app mounted');
    // getAppConfig();
  });

  const app = getAppConfig(router);

  // currentMicroApp 的配置
  const currentMicroApp = computed(() => {
    const name = route.params?.path?.[0] as string;
    return app.find((item) => item.name === `module-${name}`) ?? {};
  });

  // 监听路由 下发路径
  watch(
    () => router.currentRoute,
    () => {
      console.log('router path', route.path, currentMicroApp.value);
      microApp.setData(currentMicroApp.value.name, {
        path: route.path,
      });
    },
    {
      deep: true,
    },
  );

  watch(
    () => route,
    () => {
      console.log('currentMicroApp', route.path);
    },
    {
      immediate: true,
      deep: true,
    },
  );
</script>

<style scoped lang="less">
  .micro-app {
    width: 100%;
    height: 100%;
  }
</style>

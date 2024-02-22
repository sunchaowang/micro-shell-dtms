<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Menu from './Menu/index.vue';
  import { useMenuSetting } from 'block-libs/dist/hooks/setting/useMenuSetting';

  const sideRef = ref();

  const { getMenuWidth } = useMenuSetting();

  onMounted(() => {
    console.log('getMenuWidth', getMenuWidth);
  });
</script>
<template>
  <a-layout-sider ref="sideRef" collapsible :width="'200px'">
    <Menu />
  </a-layout-sider>
</template>

<style scoped lang="less">
  .ant-layout-sider {
    background-color: #ffffff;
  }
</style>

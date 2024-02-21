<script setup lang="ts">
  import LayoutSider from './Sider/index.vue';
  import LayoutHeader from './Header/index.vue';
  import LayoutContent from './Content/index.vue';
  import LayoutFooter from './Footer/index.vue';
</script>
<template>
  <a-layout :class="['default-layout']">
    <LayoutSider>Sider</LayoutSider>
    <a-layout>
      <LayoutHeader>Header</LayoutHeader>
      <a-layout>
        <LayoutContent />
        <LayoutFooter />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
  .default-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: #f9f9f9;

    > .ant-layout {
      min-height: 100%;
      width: 100%;
    }

    &-main {
      width: 100%;
      background-color: #333;
    }
  }
</style>

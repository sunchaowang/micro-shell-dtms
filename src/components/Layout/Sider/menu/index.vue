<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useRouter } from 'block-libs/dist/router';
  import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons-vue';
  import MenuItem from './menuItem.vue';

  const router = useRouter();

  const selectedKeys = ref<string[]>(['1']);

  watch(
    () => router.currentRoute,
    () => {
      console.log('router.currentRoute', router.currentRoute.value);
      selectedKeys.value = [router.currentRoute.value.path];
    },
    {
      deep: true,
      immediate: true,
    },
  );

  const menus = ref([
    {
      path: '/home',
      title: 'Home',
      icon: MailOutlined,
    },
    {
      path: '/about',
      title: 'About',
      icon: CalendarOutlined,
    },
    {
      path: '/module/car',
      title: '汽车',
      icon: AppstoreOutlined,
      children: [
        {
          path: '/module/car/home',
          title: 'car home',
        },
        {
          path: '/module/car/about',
          title: 'car about',
        },
      ],
    },
    {
      path: '/module/coal',
      title: '煤炭',
      icon: SettingOutlined,
      children: [
        {
          path: '/module/coal/home',
          title: 'coal home',
        },
        {
          path: '/module/coal/about',
          title: 'coal about',
        },
      ],
    },
  ]);

  function handleMenuClick({ item, key, keyPath }) {
    router.push(key);
    selectedKeys.value = [key];
  }
</script>

<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    style="width: 200px"
    :mode="'inline'"
    @click="handleMenuClick"
  >
    <MenuItem v-for="menu in menus" :key="menu.path" :menu-item="menu" />
  </a-menu>
</template>

<style lang="less" scoped></style>

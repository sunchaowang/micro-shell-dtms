<script lang="ts" setup>
  import { ref, watch, onMounted, toRef, toRaw, onBeforeUnmount, computed } from 'vue';
  import { useRouter } from 'block-libs/dist/router';
  import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons-vue';
  import MenuItem from './MenuItem.vue';
  import { getSubApps } from '@/utils/micro/configs/app';

  const router = useRouter();

  const selectedKeys = ref<string[]>(['']);
  const openKeys = ref<string[]>(['']);

  const subApps = ref(getSubApps());

  const defaultMenus = [
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
  ];

  const menus = computed(() => {
    console.log('subApps', subApps.value);
    return defaultMenus.concat(
      subApps.value.map((app) => {
        return {
          path: app.baseRoute,
          title: app.subName,
          icon: AppstoreOutlined,
        };
      }),
    );
  });

  watch(
    () => router.currentRoute.value.fullPath,
    () => {
      console.log('router.currentRoute', router);
      const { reOpenKeys, reSelectedKeys } = getCurrentMenuKey(router.currentRoute.value.path);
      selectedKeys.value = reSelectedKeys;
      openKeys.value = reOpenKeys;
    },
    {
      deep: true,
      immediate: true,
    },
  );

  function getCurrentMenuKey(path): { reOpenKeys: string[]; reSelectedKeys: string[] } {
    const selectedKeys: string[] = [path],
      openKeys: string[] = [];

    if (!menus.value.find((menu) => menu.path === path)) {
      // 查找openKeys
      menus.value.forEach((menu) => {
        if (menu.children?.find((child) => child.path === path)) {
          openKeys.push(menu.path);
        }
      });
    }

    return {
      reOpenKeys: openKeys,
      reSelectedKeys: selectedKeys,
    };
  }

  function handleMenuClick({ item, key, keyPath }) {
    router.push(key);
  }

  onBeforeUnmount(() => {});
</script>

<template>
  <a-menu
    :selectedKeys="selectedKeys"
    :openKeys="openKeys"
    style="width: 200px"
    :mode="'inline'"
    :inlineCollapsed="false"
    @click="handleMenuClick"
  >
    <MenuItem v-for="menu in menus" :key="menu.path" :menu-item="menu" />
  </a-menu>
</template>

<style lang="less" scoped></style>

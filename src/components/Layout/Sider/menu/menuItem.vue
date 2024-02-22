<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MenuItem',
  });
</script>
<script lang="ts" setup>
  interface MenuItem {
    path: string;
    title: string;
    icon: any;
    children?: MenuItem[];
  }
  interface Props {
    menuItem: MenuItem;
  }
  const props = defineProps<Props>();
</script>
<template>
  <template v-if="props.menuItem.children">
    <a-sub-menu :key="props.menuItem.path">
      <template #icon>
        <Component :is="props.menuItem.icon" v-if="props.menuItem.icon" />
      </template>
      <template #title>
        {{ props.menuItem.title }}
      </template>
      <MenuItem v-for="item in props.menuItem.children" :key="item.path" :menu-item="item" />
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item :key="props.menuItem.path">
      <template v-if="props.menuItem.icon" #icon>
        <Component :is="props.menuItem.icon" />
      </template>
      {{ props.menuItem.title }}
    </a-menu-item>
  </template>
</template>

<style lang="less" scoped></style>

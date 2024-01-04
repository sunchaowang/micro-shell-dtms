import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app_app',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 12,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

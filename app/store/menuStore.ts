// stores/useMenuStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const menus = ref([
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About', link: '/about' },
    { id: 3, name: 'Contact', link: '/contact' },
  ]);

  const addMenu = (menu) => {
    menus.value.push(menu);
  };

  const removeMenu = (id) => {
    menus.value = menus.value.filter(menu => menu.id !== id);
  };

  return {
    menus,
    addMenu,
    removeMenu,
  };
});
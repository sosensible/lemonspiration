// stores/useMenuStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface MenuItem {
  id: number;
  name: string;
  link: string;
  meta: {
    active: boolean;
  };
  children?: MenuItem[]; // Optional nested array of MenuItem
}

export const useMenuStore = defineStore('menu', () => {
  const menus = ref<MenuItem[]>([
    { id: 1, name: 'Home', link: '/', meta: { active: true } },
    { id: 2, name: 'About', link: '/about', meta: { active: false } },
    { id: 3, name: 'Contact', link: '/contact', meta: { active: false } },
  ]);

  const activeMenus = computed(() => menus.value.filter(menu => menu.meta.active));

  const addMenu = (menu: MenuItem) => {
    menus.value.push(menu);
  };

  const removeMenu = (id: number) => {
    menus.value = menus.value.filter(menu => menu.id !== id);
  };

  return {
    activeMenus,
    menus,
    addMenu,
    removeMenu,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot));
}
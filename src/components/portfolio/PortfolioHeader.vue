<template>
  <header class="site-header">
    <RouterLink :to="{ path: '/', hash: '#home' }" class="brand-mark" @click="closeMenu">ZM</RouterLink>

    <button
      type="button"
      class="menu-toggle"
      :class="{ 'is-open': isMenuOpen }"
      :aria-expanded="isMenuOpen ? 'true' : 'false'"
      aria-controls="site-navigation"
      aria-label="Toggle navigation"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav id="site-navigation" class="site-nav" :class="{ 'is-open': isMenuOpen }">
      <RouterLink
        v-for="item in navItems"
        :key="item.hash"
        :to="{ path: '/', hash: item.hash }"
        :class="{ 'is-active': isActiveHash(item.hash) }"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <RouterLink :to="{ path: '/', hash: '#contact' }" class="header-cta" @click="closeMenu">
      Contact
    </RouterLink>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

const route = useRoute();
const isMenuOpen = ref(false);

const isActiveHash = (hash) => route.hash === hash;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(
  () => route.fullPath,
  () => {
    closeMenu();
  },
);
</script>

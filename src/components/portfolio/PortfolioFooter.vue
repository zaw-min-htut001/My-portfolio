<template>
  <footer class="site-footer">
    <span class="footer-brand">ZM</span>
    <span>© {{ currentYear }} Zaw Min Htut · Built with Vue &amp; Vite</span>
    <span>Laravel · Backend Developer</span>
  </footer>
</template>

<script setup>
defineProps({
  currentYear: {
    type: Number,
    required: true,
  },
});
</script>

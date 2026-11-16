<template>
  <footer class="site-footer">
    <span class="footer-brand">ZM</span>
    <span>© {{ currentYear }} Zaw Min Htut</span>
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

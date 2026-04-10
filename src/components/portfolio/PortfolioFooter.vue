<template>
  <footer class="site-footer">
    <p>© {{ currentYear }} Zaw Min Htut</p>
    <span>Modern startup style portfolio in Vue.</span>
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

<template>
  <section class="trust-strip">
    <span v-for="item in items" :key="item">{{ item }}</span>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

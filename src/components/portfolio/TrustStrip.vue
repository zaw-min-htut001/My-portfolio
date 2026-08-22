<template>
  <div class="skills-ribbon">
    <div class="ribbon-track">
      <!-- Duplicate for seamless loop -->
      <span v-for="item in items" :key="`a-${item}`" class="ribbon-item">{{ item }}</span>
      <span v-for="item in items" :key="`b-${item}`" class="ribbon-item">{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

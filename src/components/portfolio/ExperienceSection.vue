<template>
  <section id="experience" class="content-section">
    <div class="section-intro" data-aos="fade-up" data-aos-duration="650">
      <p class="section-label">Experience</p>
      <h2 class="section-title">Real product exposure with Laravel, APIs, and business workflows.</h2>
      <p class="section-copy">
        My experience comes from working inside actual company environments,
        understanding how products operate, and contributing to backend
        features that support real users and real teams.
      </p>
    </div>

    <div class="experience-grid">
      <article
        v-for="item in items"
        :key="`${item.company}-${item.role}`"
        class="experience-card"
        data-aos="fade-up"
        data-aos-duration="650"
      >
        <div class="experience-top">
          <div>
            <p class="card-label">{{ item.company }}</p>
            <h3>{{ item.role }}</h3>
          </div>
          <span class="meta-pill">{{ item.meta }}</span>
        </div>

        <ul class="detail-list">
          <li v-for="point in item.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>
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

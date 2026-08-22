<template>
  <section id="experience" class="experience-section">
    <div class="section-header" data-aos="fade-up" data-aos-duration="700">
      <p class="section-eyebrow">Experience</p>
      <h2 class="section-heading">Real product exposure<br />with Laravel &amp; APIs.</h2>
      <p class="section-subtext">
        My experience comes from working inside actual company environments,
        understanding how products operate, and contributing to backend
        features that support real users and real teams.
      </p>
    </div>

    <div class="experience-grid">
      <article
        v-for="item in items"
        :key="`${item.company}-${item.role}`"
        class="exp-card"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div class="exp-card-top">
          <div>
            <p class="exp-company">{{ item.company }}</p>
            <h3 class="exp-role">{{ item.role }}</h3>
          </div>
          <span class="exp-pill">{{ item.meta }}</span>
        </div>

        <ul class="exp-points">
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

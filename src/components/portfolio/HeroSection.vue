<template>
  <section id="home" class="hero-section">
    <div class="hero-copy" data-aos="fade-up" data-aos-duration="650">
      <p class="eyebrow">Backend Developer • Laravel Developer • Full Stack Developer</p>
      <h1 class="hero-title">
        Building Laravel products, APIs, and backend workflows that teams
        can ship with confidence.
      </h1>
      <p class="hero-description">
        I focus on backend systems, authentication, API development, and
        maintainable application logic. I also work with Vue and React when
        a feature needs full-stack delivery, so product work feels complete
        from backend behavior to the final interface.
      </p>

      <div class="hero-actions">
        <RouterLink :to="{ path: '/', hash: '#experience' }" class="primary-btn">
          View Experience
        </RouterLink>
        <RouterLink :to="{ path: '/', hash: '#contact' }" class="secondary-btn">
          Get In Touch
        </RouterLink>
      </div>

      <div class="hero-metrics">
        <article v-for="item in quickStats" :key="item.label" class="hero-metric">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </div>
    </div>

    <aside class="hero-sidebar" data-aos="fade-left" data-aos-duration="650">
      <div class="profile-card">
        <div class="profile-badge">Available for interviews</div>
        <img :src="profile.photo" alt="Portrait of Zaw Min Htut" class="profile-photo" />
        <div class="profile-body">
          <p class="profile-role">{{ profile.role }}</p>
          <p class="profile-focus">{{ profile.focus }}</p>
        </div>
      </div>

      <div class="signal-card">
        <p>Current Strengths</p>
        <div class="signal-tags">
          <span v-for="item in signalTags" :key="item">{{ item }}</span>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  profile: {
    type: Object,
    required: true,
  },
  quickStats: {
    type: Array,
    required: true,
  },
  signalTags: {
    type: Array,
    required: true,
  },
});
</script>

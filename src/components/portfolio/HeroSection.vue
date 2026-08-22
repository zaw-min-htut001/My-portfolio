<template>
  <section id="home" class="hero-section">
    <!-- Copy side -->
    <div class="hero-copy" data-aos="fade-up" data-aos-duration="700">
      <div class="hero-eyebrow">
        <span class="hero-eyebrow-dot"></span>
        Available for interviews
      </div>

      <h1 class="hero-title">
        Building <span class="hl">Laravel</span><br />
        products &amp; APIs<br />
        teams trust.
      </h1>

      <p class="hero-description">
        I focus on backend systems, authentication, API development, and
        maintainable application logic. I also work with Vue and React when
        a feature needs full-stack delivery, so product work feels complete
        from backend behavior to the final interface.
      </p>

      <div class="hero-actions">
        <RouterLink :to="{ path: '/', hash: '#experience' }" class="btn-primary">
          View Experience
        </RouterLink>
        <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn-secondary">
          Get In Touch
        </RouterLink>
      </div>

      <div class="hero-stats">
        <div v-for="item in quickStats" :key="item.label" class="hero-stat">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <aside class="hero-sidebar" data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
      <div class="profile-card">
        <div class="profile-badge">Available for interviews</div>
        <div class="profile-info">
          <p class="profile-role">{{ profile.role }}</p>
          <p class="profile-focus">{{ profile.focus }}</p>
        </div>
      </div>

      <div class="signal-card">
        <p class="signal-title">Current Strengths</p>
        <div class="signal-tags">
          <span v-for="item in signalTags" :key="item" class="signal-tag">{{ item }}</span>
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

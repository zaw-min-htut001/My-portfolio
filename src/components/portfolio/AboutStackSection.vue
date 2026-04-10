<template>
  <section id="about" class="content-section split-section">
    <div class="section-copy-block" data-aos="fade-up" data-aos-duration="650">
      <p class="section-label">About</p>
      <h2 class="section-title">Backend-first thinking with enough frontend range to ship complete features.</h2>
      <p class="section-copy">
        I naturally focus on backend logic, authentication, APIs, and
        business rules that need to stay reliable over time. Alongside that,
        I can support frontend implementation with Vue or React so product
        work stays connected from backend behavior to user-facing delivery.
      </p>

      <div class="strength-grid">
        <article v-for="strength in strengths" :key="strength.title" class="strength-card">
          <h3>{{ strength.title }}</h3>
          <p>{{ strength.description }}</p>
        </article>
      </div>
    </div>

    <div class="stack-panel" data-aos="fade-up" data-aos-delay="80" data-aos-duration="650">
      <p class="section-label">Core Stack</p>
      <div class="stack-grid">
        <article v-for="skill in skills" :key="skill.name" class="stack-card">
          <div class="stack-icon-box" :class="{ 'is-badge': !skill.icon, 'is-wide': skill.wide }">
            <img
              v-if="skill.icon"
              :src="skill.icon"
              :alt="`${skill.name} icon`"
              class="stack-icon"
              :class="{ 'is-wide': skill.wide }"
            />
            <span v-else>{{ skill.mark }}</span>
          </div>
          <div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.note }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  strengths: {
    type: Array,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="content-section split-section">
    <div class="section-copy-block" data-aos="fade-up" data-aos-duration="650">
      <p class="section-label">Education</p>
      <h2 class="section-title">Training that supports how I build software.</h2>

      <div class="timeline-list">
        <article v-for="item in education" :key="`${item.year}-${item.title}`" class="timeline-card">
          <span>{{ item.year }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.place }}</p>
          </div>
        </article>
      </div>
    </div>

    <div id="contact" class="contact-panel" data-aos="fade-up" data-aos-delay="80" data-aos-duration="650">
      <p class="section-label">Contact</p>
      <h2 class="section-title">Open to backend and full-stack opportunities.</h2>
      <p class="section-copy">
        If your team needs a developer who can contribute to Laravel APIs,
        backend systems, and practical product workflows, I’d be happy to talk.
      </p>

      <div class="contact-list">
        <article class="contact-card">
          <span>Email</span>
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </article>
        <article class="contact-card">
          <span>Phone</span>
          <a :href="`tel:${profile.phoneLink}`">{{ profile.phone }}</a>
        </article>
        <article class="contact-card">
          <span>Resume</span>
          <a :href="profile.resumeLink" target="_blank" rel="noreferrer">Open CV</a>
        </article>
      </div>

      <div class="social-row">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noreferrer"
          class="social-link"
        >
          <img :src="social.icon" :alt="social.label" />
          <span>{{ social.label }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  education: {
    type: Array,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
  socials: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="edu-contact-section">
    <div class="edu-contact-grid">
        <!-- Education -->
        <div class="edu-panel" id="education" data-aos="fade-up" data-aos-duration="700">
          <p class="section-eyebrow">Education</p>
          <h2 class="section-heading" style="font-size: clamp(1.6rem, 3vw, 2.2rem);">Training that supports<br />how I build software.</h2>

          <div class="edu-timeline">
            <article
              v-for="item in education"
              :key="`${item.year}-${item.title}`"
              class="edu-item"
            >
              <div class="edu-dot">
                <div class="edu-dot-inner"></div>
              </div>
              <div class="edu-body">
                <p class="edu-year">{{ item.year }}</p>
                <h3 class="edu-title">{{ item.title }}</h3>
                <p class="edu-place">{{ item.place }}</p>
              </div>
            </article>
          </div>
        </div>

        <!-- Contact -->
        <div class="contact-panel" id="contact" data-aos="fade-up" data-aos-duration="700" data-aos-delay="120">
          <p class="section-eyebrow">Contact</p>
          <h2 class="section-heading" style="font-size: clamp(1.6rem, 3vw, 2.2rem);">Open to backend &amp;<br />full-stack opportunities.</h2>
          <p class="section-subtext" style="margin-bottom: 28px;">
            If your team needs a developer who can contribute to Laravel APIs,
            backend systems, and practical product workflows, I'd be happy to talk.
          </p>

          <div class="contact-items">
            <a :href="`mailto:${profile.email}`" class="contact-item">
              <span class="contact-item-label">Email</span>
              <span class="contact-item-value">{{ profile.email }}</span>
            </a>
            <a :href="`tel:${profile.phoneLink}`" class="contact-item">
              <span class="contact-item-label">Phone</span>
              <span class="contact-item-value">{{ profile.phone }}</span>
            </a>
          </div>

          <a :href="profile.resumeLink" target="_blank" rel="noreferrer" class="resume-btn">
            ↗ Open Resume / CV
          </a>

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
